const fs = require('fs');
const { PNG } = require('pngjs');

fs.createReadStream('public/support_agent_backup.png')
  .pipe(new PNG())
  .on('parsed', function() {
    const width = this.width;
    const height = this.height;
    
    // Visited array to keep track of background pixels
    const isBg = new Uint8Array(width * height);
    const queue = [];
    
    // Initialize queue with border pixels (top, left, right borders)
    // We skip the bottom border since the agent image sits at the bottom
    for (let x = 0; x < width; x++) {
      queue.push(x, 0);
      isBg[x] = 1;
    }
    for (let y = 1; y < height - 1; y++) {
      queue.push(0, y);
      queue.push(width - 1, y);
      isBg[y * width] = 1;
      isBg[y * width + (width - 1)] = 1;
    }
    
    // Color check function for background
    const isBackgroundColor = (x, y, r, g, b) => {
      // For the right side (where the background is brighter due to gradient/glow)
      if (x > 750) {
        return (r <= 6 && g <= 55 && b >= 20 && b <= 110 && (b - r) > 15 && (b - g) > 6);
      }
      // For the left/middle side (to strictly protect the laptop lid)
      return (r <= 6 && g <= 32 && b >= 20 && b <= 75 && (b - r) > 15 && (b - g) > 6);
    };
    
    // Flood fill traversal
    let head = 0;
    while (head < queue.length) {
      const cx = queue[head++];
      const cy = queue[head++];
      
      const idx = (cy * width + cx) << 2;
      const r = this.data[idx];
      const g = this.data[idx + 1];
      const b = this.data[idx + 2];
      
      if (!isBackgroundColor(cx, cy, r, g, b)) {
        isBg[cy * width + cx] = 0; // Not background
        continue;
      }
      
      // Check 4 neighbors
      const neighbors = [
        [cx - 1, cy],
        [cx + 1, cy],
        [cx, cy - 1],
        [cx, cy + 1]
      ];
      
      for (const [nx, ny] of neighbors) {
        if (nx >= 0 && nx < width && ny >= 0 && ny < height) {
          const npos = ny * width + nx;
          if (isBg[npos] === 0) {
            isBg[npos] = 1;
            queue.push(nx, ny);
          }
        }
      }
    }
    
    // Now, set alpha to 0 for background pixels
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        const pos = y * width + x;
        if (isBg[pos] === 1) {
          const idx = pos << 2;
          this.data[idx + 3] = 0; // Make transparent
        }
      }
    }
    
    // Apply a simple 3x3 alpha channel smoothing (feathering) to avoid jagged edges
    const alphaCopy = new Uint8Array(width * height);
    for (let i = 0; i < width * height; i++) {
      alphaCopy[i] = this.data[(i << 2) + 3];
    }
    
    for (let y = 1; y < height - 1; y++) {
      for (let x = 1; x < width - 1; x++) {
        const pos = y * width + x;
        const idx = pos << 2;
        
        // If it's a boundary pixel (semi-transparent or neighboring a transparent pixel)
        if (this.data[idx + 3] > 0) {
          // Average the alpha channel in a 3x3 neighborhood
          let sum = 0;
          for (let dy = -1; dy <= 1; dy++) {
            for (let dx = -1; dx <= 1; dx++) {
              sum += alphaCopy[(y + dy) * width + (x + dx)];
            }
          }
          const avgAlpha = Math.round(sum / 9);
          this.data[idx + 3] = avgAlpha;
        }
      }
    }
    
    // Write back as public/support_agent.png
    this.pack()
      .pipe(fs.createWriteStream('public/support_agent.png'))
      .on('finish', () => {
        console.log('Successfully wrote transparent PNG to public/support_agent.png');
      });
  });
