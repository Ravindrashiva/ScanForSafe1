import { useState, useRef, useEffect, useCallback } from 'react'

/* =========================================
   FIXES APPLIED:
   1. Added 'anthropic-version' and 'anthropic-dangerous-direct-browser-access' headers → fixes "Something went wrong"
   2. Messages body uses flex:1, minHeight:0, overflowY:'auto' → fixes scroll issue
   3. scrollToBottom uses scrollHeight directly and fires on every message/loading change
   4. Typewriter tied to scrollHeight so it auto-scrolls as text streams in
   5. Typing indicator properly shown/hidden
========================================= */

/* =========================================
   SVG ICONS
========================================= */
function BotSVG() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <rect x="2" y="7" width="20" height="14" rx="3" stroke="white" strokeWidth="1.8"/>
      <circle cx="8.5" cy="14" r="1.5" fill="white"/>
      <circle cx="15.5" cy="14" r="1.5" fill="white"/>
      <path d="M8 18h8" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M12 7V4" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
      <circle cx="12" cy="3" r="1.2" fill="white"/>
    </svg>
  )
}
function SendSVG() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path d="M22 2L11 13" stroke="white" strokeWidth="2.2" strokeLinecap="round"/>
      <path d="M22 2L15 22l-4-9-9-4 20-7z" fill="white" stroke="white" strokeWidth="1.5"/>
    </svg>
  )
}
function LoaderSVG() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" style={{ animation: 'spin 1s linear infinite' }}>
      <circle cx="12" cy="12" r="10" stroke="rgba(255,255,255,0.3)" strokeWidth="2.5"/>
      <path d="M12 2a10 10 0 0110 10" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
    </svg>
  )
}
function XSvg({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M18 6L6 18M6 6l12 12" stroke="white" strokeWidth="2.2" strokeLinecap="round"/>
    </svg>
  )
}
function ClipSVG() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path d="M21.44 11.05l-9.19 9.19a6 6 0 01-8.49-8.49l9.19-9.19a4 4 0 015.66 5.66l-9.2 9.19a2 2 0 01-2.83-2.83l8.49-8.48" stroke="#64748b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}
function SparklesSVG() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <path d="M12 2l2.4 7.2H22l-6.2 4.5 2.4 7.3L12 16.5 5.8 21l2.4-7.3L2 9.2h7.6L12 2z" fill="#60a5fa" stroke="#60a5fa" strokeWidth="0.5"/>
    </svg>
  )
}
function WhatsAppSVG({ size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" fill="white"/>
      <path d="M12.004 2C6.477 2 2 6.477 2 12.004c0 1.771.464 3.432 1.268 4.877L2 22l5.232-1.243A9.953 9.953 0 0012.004 22C17.531 22 22 17.523 22 12.004 22 6.477 17.531 2 12.004 2zm0 18.18a8.165 8.165 0 01-4.163-1.14l-.298-.177-3.105.738.766-3.024-.195-.31a8.12 8.12 0 01-1.248-4.263c0-4.504 3.666-8.17 8.17-8.17 4.504 0 8.17 3.666 8.17 8.17 0 4.504-3.666 8.176-8.097 8.176z" fill="white"/>
    </svg>
  )
}

/* =========================================
   TOPIC ICONS
========================================= */
function GearIcon() {
  return <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="3" stroke="#60a5fa" strokeWidth="1.8"/><path d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" stroke="#60a5fa" strokeWidth="1.6" strokeLinecap="round"/></svg>
}
function CarIcon() {
  return <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M5 11l1.5-4.5h11L19 11" stroke="#60a5fa" strokeWidth="1.6" strokeLinecap="round"/><rect x="2" y="11" width="20" height="7" rx="2" stroke="#60a5fa" strokeWidth="1.6"/><circle cx="7" cy="18" r="2" stroke="#60a5fa" strokeWidth="1.6"/><circle cx="17" cy="18" r="2" stroke="#60a5fa" strokeWidth="1.6"/></svg>
}
function TargetIcon() {
  return <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="#60a5fa" strokeWidth="1.6"/><circle cx="12" cy="12" r="6" stroke="#60a5fa" strokeWidth="1.6"/><circle cx="12" cy="12" r="2" fill="#60a5fa"/></svg>
}
function ShieldIcon() {
  return <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="#60a5fa" strokeWidth="1.6" strokeLinejoin="round"/></svg>
}
function QRIcon() {
  return <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="7" height="7" rx="1" stroke="#60a5fa" strokeWidth="1.6"/><rect x="5" y="5" width="3" height="3" fill="#60a5fa"/><rect x="14" y="3" width="7" height="7" rx="1" stroke="#60a5fa" strokeWidth="1.6"/><rect x="16" y="5" width="3" height="3" fill="#60a5fa"/><rect x="3" y="14" width="7" height="7" rx="1" stroke="#60a5fa" strokeWidth="1.6"/><rect x="5" y="16" width="3" height="3" fill="#60a5fa"/><path d="M14 14h2v2h-2zM18 14h2v2h-2zM14 18h2v2h-2zM18 18h2v2h-2z" fill="#60a5fa"/></svg>
}
function NFCIcon() {
  return <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M5 12a7 7 0 017-7" stroke="#60a5fa" strokeWidth="1.6" strokeLinecap="round"/><path d="M5 12a7 7 0 007 7" stroke="#60a5fa" strokeWidth="1.6" strokeLinecap="round"/><path d="M8 12a4 4 0 014-4" stroke="#60a5fa" strokeWidth="1.6" strokeLinecap="round"/><path d="M8 12a4 4 0 004 4" stroke="#60a5fa" strokeWidth="1.6" strokeLinecap="round"/><circle cx="12" cy="12" r="1.5" fill="#60a5fa"/></svg>
}

const QUICK_TOPICS = [
  { label: 'How ScanForSafe works', Icon: GearIcon },
  { label: 'Vehicle Protection', Icon: CarIcon },
  { label: 'Lost Item Recovery', Icon: TargetIcon },
  { label: 'Emergency Support', Icon: ShieldIcon },
  { label: 'QR Smart Tags', Icon: QRIcon },
  { label: 'NFC Technology', Icon: NFCIcon },
]

/* =========================================
   TIME HELPER
========================================= */
function getTime() {
  const d = new Date()
  let h = d.getHours()
  const m = String(d.getMinutes()).padStart(2, '0')
  const ampm = h >= 12 ? 'PM' : 'AM'
  h = h % 12 || 12
  return `${h}:${m} ${ampm}`
}

/* =========================================
   TYPEWRITER — with scroll callback
========================================= */
function useTypewriter(text, speed = 12, onProgress) {
  const [displayed, setDisplayed] = useState('')
  useEffect(() => {
    let i = 0
    setDisplayed('')
    const interval = setInterval(() => {
      i++
      setDisplayed(text.slice(0, i))
      if (onProgress) onProgress()
      if (i >= text.length) clearInterval(interval)
    }, speed)
    return () => clearInterval(interval)
  }, [text]) // eslint-disable-line
  return displayed
}

function TypingMessage({ text, onProgress }) {
  const typed = useTypewriter(text, 12, onProgress)
  return <>{typed}</>
}

/* =========================================
   FULL DOCUMENT KNOWLEDGE — SYSTEM PROMPT
========================================= */
const SYSTEM_PROMPT = `You are the official ScanForSafe AI Assistant. You answer questions using the detailed knowledge base below. Be friendly, warm, and concise. Use simple formatting with line breaks. Never say you don't know — use the knowledge base to answer accurately.

=== SCANFORSAFE KNOWLEDGE BASE ===

WHAT IS SCANFORSAFE:
Scan for Safe Business is a QR-code-based safety and identity platform developed by Genius Minds Making Code Pvt Ltd. It enables vehicle owners and families to be contactable during emergencies, report missing vehicles, and manage their digital identity securely. The platform uses smart QR + NFC tags — no app required to scan.

CORE BUSINESS OBJECTIVES:
- Connect vehicle owners with the public in emergency situations via scanned QR codes
- Enable missing vehicle reporting with verified, fraud-resistant workflows
- Support three sales channels: marketing executives, direct online portal, and third-party platforms
- Ensure QR code lifecycle integrity from admin generation through customer activation
- Support senior citizens emergency workflow, school kids workflow, pet and luggage workflows
- Deliver a scalable multi-role platform supporting Admin, Retailer/Franchise, Online Users, Marketing Team, and Customers

PRICE & PAYMENT:
- QR code costs Rs 199 + delivery charges
- Delivery charges vary by region in India:
  • South India (AP, Telangana, Karnataka, TN, Kerala): Rs 40 — delivery 5-7 days
  • West India (Maharashtra, Goa, Gujarat): Rs 50 — delivery 5-7 days
  • North India (Delhi, UP, Punjab, Rajasthan, etc.): Rs 60 — delivery 7-10 days
  • East India (West Bengal, Bihar, Odisha, etc.): Rs 65 — delivery 7-10 days
  • Central India (MP, Chhattisgarh): Rs 55 — delivery 7-10 days
  • North-East India (Assam, Meghalaya, etc.): Rs 80 — delivery 10-14 days
- Payment methods: UPI, Credit/Debit Card, Net Banking, Wallets (via Razorpay)
- QR activation validity: 2 years from activation date

HOW IT WORKS (STEP BY STEP):
1. Purchase a ScanForSafe QR code tag (online at Rs 199 + delivery, or from a retailer)
2. Receive the physical QR sticker (white background, green QR code, radium/tamper-evident label)
3. Activate it on the portal: enter QR Code + Batch No + Series No + Vendor Code + Seller Code
4. Register your vehicle/item details: make, model, colour, year, owner name
5. Add up to 3 emergency contacts (name + mobile + relationship)
6. Also add: blood group, gender, vehicle insurance details, health insurance details
7. QR is now active for 2 years — stick it on your vehicle/item
8. If someone finds your lost item or sees an emergency: they scan the QR with any phone camera (no app needed)
9. Owner receives instant alert; secure communication begins; recovery assistance activated

QR SCAN WORKFLOW (EMERGENCY):
- Step 1: Public scans QR code on vehicle/item — no app required, just phone camera
- Step 2: System logs scan event (captures location, mobile type, time)
- Step 3: Scanner enters their mobile number; OTP sent via SMS for verification
- Step 4: Two options shown: "Call Owner" or "Report Emergency Alert"
- Step 5a: Call Owner → direct call to registered owner mobile
- Step 5b: Report Emergency Alert → disclaimer shown → emergency contacts alerted with location
- Step 6: SOS alert triggered — automated call to emergency contact numbers

WHAT CAN BE PROTECTED:
- Vehicles (bikes, cars, scooters) — radium sticker on vehicle
- Luggage — durable bag tag (tamper-resistant, weatherproof)
- Children — woven fabric tag stitched on school uniform (left arm)
- Pets — collar tag with QR, includes vet contact
- Elderly family members — medical wristband with QR (stores medical profile + emergency contact)
- Mentally challenged / special needs individuals — neck lanyard ID card
- Any valuable item

REAL WORLD USE CASES:

1. LUGGAGE RECOVERY (Airport): Traveller attaches QR bag tag → loses luggage → kind person scans QR → masked contact appears → call placed → luggage returned in minutes.
2. LOST PET (Park): Pet goes missing → stranger finds pet, scans collar QR → owner's masked contact appears → owner called → pet reunited.
3. SCHOOL CHILD SAFETY (Bus): QR woven tag on uniform → child goes missing from bus → found by public → QR scanned → automated call to parent AND school admin simultaneously → school staff picks up child safely.
4. SENIOR CITIZEN MEDICAL EMERGENCY (Park): Senior wears QR wristband → collapses in park → passerby scans wristband → son (emergency contact) gets automated call → medical info displayed for first responders → senior taken to hospital on time.
5. MENTALLY CHALLENGED INDIVIDUAL: Wears QR lanyard → gets lost → found on road → public scans QR → family called → safely reunited.
6. VEHICLE ROAD ACCIDENT: QR sticker on vehicle → accident occurs → bystander scans QR → emergency contacts get alert with location + timestamp → ambulance alerted → health and insurance info available for hospital staff.
7. MISSING VEHICLE: Vehicle stolen → owner logs in and activates Missing Vehicle Alert → customer care publishes alert on platform + social channels → 1,00,000+ community subscribers → subscriber spots vehicle → police alerted → vehicle recovered.

MISSING VEHICLE REPORTING:
- Login to portal → 'Report Missing Vehicle'
- Upload photos; select from your registered vehicles only
- Enter missing location; upload FIR copy or mark 'Pending FIR' (48-hour expiry for pending)
- Optional: set reward amount; choose owner info visibility (masked/visible)
- Customer care validates and publishes report
- Status: Pending FIR (amber) / Verified (green)
- Community of 1,00,000+ subscribers helps spread alert via WhatsApp, Facebook, social platforms
- Recovery: Owner confirms → case closed and archived

QR STICKER DESIGN:
- White background with green QR code
- Radium / tamper-evident label
- Format includes: QR Code + Batch No + Series No + Vendor Code + Order ID

ROLES ON THE PLATFORM:
1. ADMIN — Full platform control; generates QR batches; manages all users; tracks sales, commissions, missing vehicles
2. RETAILER/FRANCHISE — Authorised reseller; franchise earns 2% commission, shops earn 1%; manages inventory
3. ONLINE USER — Self-service purchase via portal; Rs 199 + delivery; activates QR themselves
4. MARKETING TEAM — Field sales executives with seller codes; onboard customers directly
5. CUSTOMER — Vehicle owner who activates QR and manages their digital identity

COMMISSION STRUCTURE:
- Seller → Customer (direct): No commission split — full margin retained
- Seller → Shop → Customer: 1% to shop
- Seller → Commission Agent → Customer: 1% to agent
- Seller → Franchise → Customer: 2% to franchise
- Admin can change commission rates at any time

NOTIFICATIONS & ALERTS:
- PWA Browser Push (recommended — free, no app needed, works even when browser closed)
- Email alerts (SendGrid — nearly free, unlimited)
- SMS OTP (for verification and password reset only)
- WhatsApp Business API (optional premium tier at Rs 299/yr — 98% open rate)
- Recommended combination: PWA Push + Email (unlimited, Rs 0 cost, no app needed)

TECHNOLOGY:
- QR + NFC smart tags
- No app required to scan — just a phone camera
- Web portal for all roles (mobile-responsive)
- Payment: Razorpay (UPI, cards, net banking, wallets)
- SMS Gateway: MSG91 / TextLocal / Kaleyra
- WhatsApp: Twilio / Gupshup / Interakt
- Hosted on AWS with SSL

PROJECT TIMELINE:
- Phase 1 (Weeks 1-4): Foundation & Admin portal
- Phase 2 (Weeks 5-8): Retailer, Franchise & Marketing Team
- Phase 3 (Weeks 9-13): Customer portal & Online Purchase
- Phase 4 (Weeks 14-17): Missing Vehicle & Security
- Phase 5 (Weeks 18-20): UAT, Go-Live & Handover
- Total: 20 weeks (5 months)
- Native mobile apps (iOS/Android) are Phase 2 — not in current scope

WHAT IS OUT OF SCOPE (PHASE 1):
- Native mobile apps (iOS/Android) — Phase 2
- Amazon/Meesho/Blinkit marketplace integrations — Phase 2
- Multi-language support — Phase 2
- Hardware (printers, scanners)
- ERP/Accounting software integration

SECURITY:
- Role-based access control (RBAC) for all 5 roles
- OWASP Top 10 security audit + penetration testing
- PCI-DSS compliant payment gateway (no card data stored)
- Anti-fraud: duplicate detection, rate limiting, CAPTCHA
- Contact masking: relay calls, OTP-gated contact reveal
- All QR lifecycle events are logged with timestamps and actor codes

TAGLINES:
- "Secure • Scan • Protect"
- "One Scan, A Safe Tomorrow. Because Every Child Matters."
- "A Simple Scan Saved a Life."
- "ScanForSafe — Because Every Second Counts, Every Life Matters."
- "Together, We Secure What Matters. #SecureScanProtect"
- "Small Step Today, Safety Every Day."

COMPANY INFO:
- Developed by: Genius Minds Making Code Pvt Ltd
- Contact: support@geniusmindstech.com
- Address: Door No. 3-161-21-A-3, SBI Colony, Madanapalle – 517325
- WhatsApp Channel: https://whatsapp.com/channel/0029VbCNFw0JP2105GmsoT0H

=== END OF KNOWLEDGE BASE ===

Instructions:
- Always answer based on the knowledge base above
- For greetings (hi, hello, hey), respond warmly and introduce what ScanForSafe can help with
- Format responses clearly with line breaks — no markdown headers, use simple emoji bullets
- Keep responses concise but complete
- If asked something not covered, say "For more details, please contact us at support@geniusmindstech.com"
`

/* =========================================
   FIX 1: CLAUDE API CALL — added required headers
========================================= */
async function callClaudeAPI(conversationHistory) {
  const response = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      // FIX: These two headers are required for direct browser calls
      'anthropic-version': '2023-06-01',
      'anthropic-dangerous-direct-browser-access': 'true',
    },
    body: JSON.stringify({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 1000,
      system: SYSTEM_PROMPT,
      messages: conversationHistory,
    }),
  })
  if (!response.ok) {
    const errBody = await response.json().catch(() => ({}))
    throw new Error(errBody?.error?.message || `HTTP ${response.status}`)
  }
  const data = await response.json()
  return data.content.map(i => i.type === 'text' ? i.text : '').filter(Boolean).join('\n')
}

/* =========================================
   SMALL BOT AVATAR (reused inside messages)
========================================= */
function SmallBotAvatar() {
  return (
    <div style={{
      width: '36px', height: '36px', borderRadius: '50%',
      background: 'linear-gradient(135deg, #2563eb, #1e40af)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      flexShrink: 0,
    }}>
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="7" width="20" height="14" rx="3" stroke="white" strokeWidth="1.8"/>
        <circle cx="8.5" cy="14" r="1.5" fill="white"/>
        <circle cx="15.5" cy="14" r="1.5" fill="white"/>
        <path d="M8 18h8" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M12 7V4" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
        <circle cx="12" cy="3" r="1.2" fill="white"/>
      </svg>
    </div>
  )
}

/* =========================================
   CHAT WINDOW
========================================= */
function AIChatWindow({ onClose }) {
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: '👋 Hi! Welcome to ScanForSafe.\n\nI can help you with:\n• How ScanForSafe works\n• Vehicle & family protection\n• Lost item recovery\n• QR tag pricing & delivery\n• Emergency support\n• Missing vehicle alerts\n\nWhat would you like to know?',
      time: getTime(),
      isNew: false, // greeting doesn't typewrite
    },
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const messagesBodyRef = useRef(null)
  const conversationHistory = useRef([])

  // FIX 2: Reliable scroll-to-bottom helper
  const scrollToBottom = useCallback(() => {
    if (messagesBodyRef.current) {
      messagesBodyRef.current.scrollTop = messagesBodyRef.current.scrollHeight
    }
  }, [])

  // Scroll on every message or loading change
  useEffect(() => {
    scrollToBottom()
  }, [messages, loading, scrollToBottom])

  async function sendMessage(customText = null) {
    const text = customText || input.trim()
    if (!text || loading) return
    if (!customText) setInput('')

    const userTime = getTime()
    setMessages(prev => [...prev, { role: 'user', content: text, time: userTime }])
    conversationHistory.current.push({ role: 'user', content: text })
    setLoading(true)

    try {
      const aiReply = await callClaudeAPI(conversationHistory.current)
      conversationHistory.current.push({ role: 'assistant', content: aiReply })
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: aiReply,
        time: getTime(),
        isNew: true, // triggers typewriter
      }])
    } catch (err) {
      console.error('Claude API error:', err)
      conversationHistory.current.pop()
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: '⚠️ Something went wrong. Please try again in a moment.',
        time: getTime(),
        isNew: false,
      }])
    } finally {
      setLoading(false)
    }
  }

  return (
    <div style={{
      position: 'fixed',
      bottom: '100px',
      right: '24px',
      width: '420px',
      // FIX 3: Fixed height instead of max-height so flex children can size properly
      height: '620px',
      zIndex: 10000,
      display: 'flex',
      flexDirection: 'column',
      borderRadius: '20px',
      background: '#0d1b2e',
      border: '1px solid rgba(255,255,255,0.07)',
      boxShadow: '0 32px 80px rgba(0,0,0,0.6)',
      overflow: 'hidden',
      fontFamily: "'Segoe UI', -apple-system, BlinkMacSystemFont, sans-serif",
    }}>
      <style>{`
        .sfs-msgs::-webkit-scrollbar { width: 4px; }
        .sfs-msgs::-webkit-scrollbar-track { background: transparent; }
        .sfs-msgs::-webkit-scrollbar-thumb { background: rgba(99,179,255,0.2); border-radius: 4px; }
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes bounce { 0%,80%,100% { transform: translateY(0); } 40% { transform: translateY(-5px); } }
        @media (max-width: 480px) {
          .sfs-chat-window-override {
            width: calc(100% - 32px) !important;
            right: 16px !important;
            left: 16px !important;
            bottom: 96px !important;
            height: calc(100vh - 130px) !important;
          }
        }
      `}</style>

      {/* HEADER — flexShrink:0 so it never collapses */}
      <div style={{
        padding: '16px 20px',
        background: 'linear-gradient(135deg, #0a1628 0%, #0d2047 50%, #0f2d6b 100%)',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
        flexShrink: 0,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          <div style={{
            width: '52px', height: '52px', borderRadius: '50%',
            background: 'linear-gradient(135deg, #2563eb, #1e40af)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            border: '2px solid rgba(99,179,255,0.3)', flexShrink: 0,
          }}>
            <BotSVG />
          </div>
          <div>
            <div style={{ color: '#fff', fontWeight: 700, fontSize: '17px', letterSpacing: '-0.3px' }}>
              ScanForSafe AI Assistant
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginTop: '3px' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#22c55e', display: 'inline-block', boxShadow: '0 0 6px #22c55e' }}/>
              <span style={{ fontSize: '12px', color: '#60a5fa', fontWeight: 500 }}>Online • AI Powered</span>
            </div>
          </div>
        </div>
        <button onClick={onClose} style={{
          width: '34px', height: '34px', borderRadius: '50%',
          border: '1px solid rgba(255,255,255,0.15)', background: 'rgba(255,255,255,0.08)',
          cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
          transition: 'background 0.2s',
        }}>
          <XSvg size={15} />
        </button>
      </div>

      {/* FIX 4: MESSAGES BODY — flex:1, minHeight:0 so it takes remaining space and scrolls */}
      <div
        className="sfs-msgs"
        ref={messagesBodyRef}
        style={{
          flex: '1 1 0',
          minHeight: 0,           // ← CRITICAL: without this, flex child won't shrink & scroll
          overflowY: 'auto',
          padding: '20px 16px 12px',
          display: 'flex', flexDirection: 'column', gap: '6px',
          background: '#0d1b2e',
          scrollbarWidth: 'thin',
          scrollbarColor: 'rgba(99,179,255,0.2) transparent',
        }}
      >
        {messages.map((msg, index) => (
          <div key={index} style={{
            display: 'flex',
            justifyContent: msg.role === 'user' ? 'flex-end' : 'flex-start',
            alignItems: 'flex-end', gap: '10px',
          }}>
            {msg.role === 'assistant' && (
              <div style={{ alignSelf: 'flex-end', marginBottom: '18px' }}>
                <SmallBotAvatar />
              </div>
            )}
            <div style={{ maxWidth: '75%', display: 'flex', flexDirection: 'column', alignItems: msg.role === 'user' ? 'flex-end' : 'flex-start' }}>
              <div style={{
                padding: '13px 16px',
                borderRadius: msg.role === 'user' ? '18px 18px 4px 18px' : '18px 18px 18px 4px',
                background: msg.role === 'user' ? 'linear-gradient(135deg, #2563eb, #1d4ed8)' : 'rgba(255,255,255,0.07)',
                border: msg.role === 'assistant' ? '1px solid rgba(255,255,255,0.08)' : 'none',
                color: '#e2e8f0', whiteSpace: 'pre-line', lineHeight: 1.75,
                fontSize: '13.5px', wordBreak: 'break-word',
              }}>
                {/* FIX 5: Only typewrite the latest assistant message */}
                {msg.role === 'assistant' && msg.isNew && index === messages.length - 1
                  ? <TypingMessage text={msg.content} onProgress={scrollToBottom} />
                  : msg.content
                }
              </div>
              <div style={{
                fontSize: '11px', color: 'rgba(148,163,184,0.6)', marginTop: '5px',
                display: 'flex', alignItems: 'center', gap: '4px',
              }}>
                {msg.time}
                {msg.role === 'user' && (
                  <svg width="14" height="10" viewBox="0 0 18 12" fill="none">
                    <path d="M1 6l4 4L17 1" stroke="#60a5fa" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M7 6l4 4" stroke="#60a5fa" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </div>
            </div>
          </div>
        ))}

        {/* TYPING INDICATOR */}
        {loading && (
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: '10px', marginTop: '4px' }}>
            <SmallBotAvatar />
            <div style={{
              padding: '14px 18px', borderRadius: '18px 18px 18px 4px',
              background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.08)',
              display: 'flex', gap: '5px', alignItems: 'center',
            }}>
              {[0, 1, 2].map(i => (
                <span key={i} style={{
                  width: '7px', height: '7px', borderRadius: '50%', background: '#60a5fa',
                  animation: `bounce 1.2s infinite ${i * 0.2}s`, display: 'inline-block',
                }}/>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* QUICK TOPICS — flexShrink:0 */}
      <div style={{
        padding: '10px 16px',
        borderTop: '1px solid rgba(255,255,255,0.06)',
        background: '#0d1b2e', flexShrink: 0,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '10px' }}>
          <SparklesSVG />
          <span style={{ fontSize: '12.5px', fontWeight: 600, color: '#94a3b8' }}>Quick Topics</span>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          {QUICK_TOPICS.map(({ label, Icon }, i) => (
            <button key={i} onClick={() => sendMessage(label)} style={{
              display: 'flex', alignItems: 'center', gap: '6px',
              padding: '7px 13px', borderRadius: '999px',
              border: '1px solid rgba(99,179,255,0.2)', background: 'rgba(255,255,255,0.04)',
              color: '#cbd5e1', cursor: 'pointer', fontSize: '12px', fontWeight: 500,
              transition: 'all 0.2s', fontFamily: 'inherit',
            }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(37,99,235,0.2)'; e.currentTarget.style.borderColor = 'rgba(99,179,255,0.4)' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.04)'; e.currentTarget.style.borderColor = 'rgba(99,179,255,0.2)' }}
            >
              <Icon />{label}
            </button>
          ))}
        </div>
      </div>

      {/* INPUT BAR — flexShrink:0 */}
      <div style={{
        padding: '12px 14px 14px', background: '#0d1b2e',
        borderTop: '1px solid rgba(255,255,255,0.06)',
        display: 'flex', alignItems: 'center', gap: '10px', flexShrink: 0,
      }}>
        <button style={{
          width: '38px', height: '38px', borderRadius: '50%', border: 'none',
          background: 'transparent', cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
        }}>
          <ClipSVG />
        </button>
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && !loading && sendMessage()}
          placeholder="Ask anything about ScanForSafe..."
          disabled={loading}
          style={{
            flex: 1, background: 'transparent', border: 'none', outline: 'none',
            color: '#e2e8f0', fontSize: '13.5px', fontFamily: 'inherit', padding: '0',
          }}
        />
        <button
          onClick={() => sendMessage()}
          disabled={!input.trim() || loading}
          style={{
            width: '42px', height: '42px', borderRadius: '50%', border: 'none',
            cursor: input.trim() && !loading ? 'pointer' : 'default',
            background: input.trim() && !loading ? 'linear-gradient(135deg, #2563eb, #1d4ed8)' : 'rgba(37,99,235,0.4)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
            transition: 'all 0.2s',
            boxShadow: input.trim() && !loading ? '0 4px 14px rgba(37,99,235,0.4)' : 'none',
          }}
        >
          {loading ? <LoaderSVG /> : <SendSVG />}
        </button>
      </div>
    </div>
  )
}

/* =========================================
   WHATSAPP FLOATING BUTTON
========================================= */
const WA_CHANNEL_URL = 'https://whatsapp.com/channel/0029VbCNFw0JP2105GmsoT0H'

function WhatsAppFloatingButton() {
  const [tooltip, setTooltip] = useState(false)
  return (
    <div style={{ position: 'relative' }}>
      {tooltip && (
        <div style={{
          position: 'absolute', bottom: '72px', right: '0',
          background: '#1a2e1a', border: '1px solid rgba(37,211,102,0.3)',
          borderRadius: '10px', padding: '8px 12px', whiteSpace: 'nowrap',
          fontSize: '12px', color: '#4ade80', fontWeight: 600,
          boxShadow: '0 8px 24px rgba(0,0,0,0.4)', pointerEvents: 'none', zIndex: 200,
        }}>
          Follow ScanForSafe on WhatsApp
          <div style={{
            position: 'absolute', bottom: '-6px', right: '20px',
            width: '10px', height: '10px', background: '#1a2e1a',
            border: '1px solid rgba(37,211,102,0.3)', borderTop: 'none', borderLeft: 'none',
            transform: 'rotate(45deg)',
          }}/>
        </div>
      )}
      <a
        href={WA_CHANNEL_URL} target="_blank" rel="noopener noreferrer"
        onMouseEnter={() => setTooltip(true)} onMouseLeave={() => setTooltip(false)}
        style={{
          width: '56px', height: '56px', borderRadius: '50%',
          background: 'linear-gradient(135deg, #25d366, #128c7e)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 6px 24px rgba(37,211,102,0.45)',
          cursor: 'pointer', textDecoration: 'none',
          animation: 'wa-pulse 2.5s ease-in-out infinite',
        }}
      >
        <WhatsAppSVG size={26} />
      </a>
    </div>
  )
}

/* =========================================
   MAIN EXPORT
========================================= */
export default function ScanForSafeChatWidget() {
  const [chatOpen, setChatOpen] = useState(false)
  return (
    <>
      <style>{`
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes bounce { 0%,80%,100% { transform: translateY(0); } 40% { transform: translateY(-5px); } }
        @keyframes wa-pulse {
          0%,100% { transform: scale(1); box-shadow: 0 6px 24px rgba(37,211,102,0.45); }
          50% { transform: scale(1.06); box-shadow: 0 8px 32px rgba(37,211,102,0.6); }
        }
      `}</style>

      {chatOpen && <AIChatWindow onClose={() => setChatOpen(false)} />}

      <div style={{
        position: 'fixed', bottom: '24px', right: '24px', zIndex: 9999,
        display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '12px',
      }}>
        <WhatsAppFloatingButton />

        <button
          onClick={() => setChatOpen(!chatOpen)}
          style={{
            height: '62px', borderRadius: '999px', border: 'none', cursor: 'pointer',
            padding: '0 22px 0 8px', display: 'flex', alignItems: 'center', gap: '12px',
            background: 'linear-gradient(135deg, #1d4ed8, #2563eb)', color: '#fff',
            boxShadow: '0 8px 32px rgba(37,99,235,0.5)',
            fontFamily: "'Segoe UI', -apple-system, sans-serif",
            transition: 'transform 0.2s, box-shadow 0.2s',
          }}
          onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 12px 40px rgba(37,99,235,0.6)' }}
          onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 8px 32px rgba(37,99,235,0.5)' }}
        >
          <div style={{
            width: '46px', height: '46px', borderRadius: '50%',
            background: 'rgba(255,255,255,0.15)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative',
          }}>
            {chatOpen ? <XSvg size={18} /> : <BotSVG />}
            {!chatOpen && (
              <span style={{
                position: 'absolute', top: '0px', right: '0px',
                width: '12px', height: '12px', borderRadius: '50%',
                background: '#22c55e', border: '2px solid #1d4ed8',
              }}/>
            )}
          </div>
          <div style={{ textAlign: 'left' }}>
            <div style={{ fontWeight: 700, fontSize: '14px', letterSpacing: '-0.2px' }}>AI Assistant</div>
            <div style={{ fontSize: '11px', opacity: 0.8, marginTop: '1px' }}>Ask anything</div>
          </div>
        </button>
      </div>
    </>
  )
}