const fs = require('fs');
const { PNG } = require('pngjs');

fs.createReadStream('public/support_agent_backup.png')
  .pipe(new PNG())
  .on('parsed', function() {
    const width = this.width;
    const height = this.height;
    
    const isBackgroundColor = (x, y, r, g, b) => {
      if (x > 750) {
        return (r <= 6 && g <= 55 && b >= 20 && b <= 110 && (b - r) > 15 && (b - g) > 6);
      }
      return (r <= 6 && g <= 32 && b >= 20 && b <= 75 && (b - r) > 15 && (b - g) > 6);
    };

    console.log('Checking pixels in the rightmost column (X = 1068):');
    let missedCount = 0;
    for (let y = 0; y < height; y++) {
      const idx = (y * width + (width - 1)) << 2;
      const r = this.data[idx];
      const g = this.data[idx + 1];
      const b = this.data[idx + 2];
      
      if (!isBackgroundColor(width - 1, y, r, g, b)) {
        missedCount++;
        if (missedCount <= 10) {
          console.log(`Missed pixel at Y=${y}: RGB(${r}, ${g}, ${b})`);
        }
      }
    }
    console.log(`Total missed background pixels in rightmost column: ${missedCount} / ${height}`);
  });
