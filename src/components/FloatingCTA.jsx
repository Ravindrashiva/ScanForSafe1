import { useState, useRef, useEffect } from 'react'

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

function XSvg({ size = 16, color = 'white' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M18 6L6 18M6 6l12 12" stroke={color} strokeWidth="2.2" strokeLinecap="round"/>
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

/* =========================================
   TOPIC ICONS
========================================= */

function GearIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="3" stroke="#60a5fa" strokeWidth="1.8"/>
      <path d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" stroke="#60a5fa" strokeWidth="1.6" strokeLinecap="round"/>
    </svg>
  )
}

function CarIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
      <path d="M5 11l1.5-4.5h11L19 11" stroke="#60a5fa" strokeWidth="1.6" strokeLinecap="round"/>
      <rect x="2" y="11" width="20" height="7" rx="2" stroke="#60a5fa" strokeWidth="1.6"/>
      <circle cx="7" cy="18" r="2" stroke="#60a5fa" strokeWidth="1.6"/>
      <circle cx="17" cy="18" r="2" stroke="#60a5fa" strokeWidth="1.6"/>
    </svg>
  )
}

function TargetIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" stroke="#60a5fa" strokeWidth="1.6"/>
      <circle cx="12" cy="12" r="6" stroke="#60a5fa" strokeWidth="1.6"/>
      <circle cx="12" cy="12" r="2" fill="#60a5fa"/>
    </svg>
  )
}

function ShieldIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="#60a5fa" strokeWidth="1.6" strokeLinejoin="round"/>
    </svg>
  )
}

function QRIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="3" width="7" height="7" rx="1" stroke="#60a5fa" strokeWidth="1.6"/>
      <rect x="5" y="5" width="3" height="3" fill="#60a5fa"/>
      <rect x="14" y="3" width="7" height="7" rx="1" stroke="#60a5fa" strokeWidth="1.6"/>
      <rect x="16" y="5" width="3" height="3" fill="#60a5fa"/>
      <rect x="3" y="14" width="7" height="7" rx="1" stroke="#60a5fa" strokeWidth="1.6"/>
      <rect x="5" y="16" width="3" height="3" fill="#60a5fa"/>
      <path d="M14 14h2v2h-2zM18 14h2v2h-2zM14 18h2v2h-2zM18 18h2v2h-2z" fill="#60a5fa"/>
    </svg>
  )
}

function NFCIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
      <path d="M5 12a7 7 0 017-7" stroke="#60a5fa" strokeWidth="1.6" strokeLinecap="round"/>
      <path d="M5 12a7 7 0 007 7" stroke="#60a5fa" strokeWidth="1.6" strokeLinecap="round"/>
      <path d="M8 12a4 4 0 014-4" stroke="#60a5fa" strokeWidth="1.6" strokeLinecap="round"/>
      <path d="M8 12a4 4 0 004 4" stroke="#60a5fa" strokeWidth="1.6" strokeLinecap="round"/>
      <circle cx="12" cy="12" r="1.5" fill="#60a5fa"/>
    </svg>
  )
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
   TYPEWRITER
========================================= */

function useTypewriter(text, speed = 12) {
  const [displayed, setDisplayed] = useState('')
  useEffect(() => {
    let i = 0
    setDisplayed('')
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i + 1))
      i++
      if (i >= text.length) clearInterval(interval)
    }, speed)
    return () => clearInterval(interval)
  }, [text, speed])
  return displayed
}

function TypingMessage({ text }) {
  const typed = useTypewriter(text)
  return <>{typed}</>
}

/* =========================================
   AI RESPONSE ENGINE
========================================= */

function getAIResponse(message) {
  const msg = message.toLowerCase()

  if (msg.includes('hello') || msg.includes('hi') || msg.includes('hey')) {
    return `👋 Welcome to ScanForSafe AI Assistant.\n\nWe help protect:\n• Vehicles\n• Luggage\n• Children\n• Pets\n• Elderly family members\n• Personal belongings\n\nOur smart QR + NFC protection system provides instant recovery support, emergency access, and secure communication.\n\nHow may I assist you today?`
  }

  if (msg.includes('how') || msg.includes('work') || msg.includes('scanforsafe')) {
    return `📦 ScanForSafe works using intelligent QR + NFC technology.\n\nHOW IT WORKS:\n\n1️⃣ Attach your ScanForSafe smart tag\n2️⃣ If the item is lost, someone scans the QR\n3️⃣ You instantly receive alerts\n4️⃣ Secure communication begins\n5️⃣ Recovery assistance is activated\n\nEverything works instantly without requiring a mobile app.`
  }

  if (msg.includes('vehicle') || msg.includes('bike') || msg.includes('car') || msg.includes('theft')) {
    return `🚗 ScanForSafe Vehicle Protection helps owners recover stolen or missing vehicles faster.\n\nKey Features:\n✅ Instant QR identification\n✅ Theft recovery support\n✅ Community alert activation\n✅ Emergency response coordination\n✅ Police assistance workflow\n\nMissing vehicle alerts can be published within minutes after activation.`
  }

  if (msg.includes('family') || msg.includes('child') || msg.includes('elder') || msg.includes('pet')) {
    return `👨‍👩‍👧‍👦 ScanForSafe helps families stay protected every day.\n\nFamilies use ScanForSafe on:\n• Child school bags\n• Elder safety wristbands\n• Pet tags\n• Luggage\n• Vehicles\n\nOne quick scan can provide:\n✅ Emergency contact access\n✅ Instant owner communication\n✅ Faster recovery support`
  }

  if (msg.includes('lost') || msg.includes('missing') || msg.includes('recovery') || msg.includes('track')) {
    return `📍 ScanForSafe Lost Item Recovery System provides rapid response assistance.\n\nWhen a smart QR tag is scanned:\n✅ The owner receives instant alerts\n✅ Finder communication is enabled\n✅ Recovery workflow begins immediately\n✅ Emergency support can be activated`
  }

  if (msg.includes('nfc')) {
    return `📱 ScanForSafe NFC technology enables instant tap-based access.\n\nBenefits:\n⚡ Faster than QR scanning\n⚡ No mobile app required\n⚡ Secure smart access\n⚡ Emergency information support`
  }

  if (msg.includes('qr') || msg.includes('tag')) {
    return `🏷️ ScanForSafe Smart QR Tags provide intelligent protection for valuables and emergency safety.\n\nOur QR tags are:\n✅ Waterproof\n✅ Durable\n✅ Lightweight\n✅ Secure\n✅ Easy to scan`
  }

  if (msg.includes('secure') || msg.includes('privacy') || msg.includes('safe')) {
    return `🔐 Security and privacy are core priorities at ScanForSafe.\n\nWe provide:\n✅ Controlled information sharing\n✅ Secure communication\n✅ Emergency-only access options\n✅ Protected user profiles`
  }

  if (msg.includes('app')) {
    return `📵 No app installation is required.\n\nUsers can:\n1️⃣ Open phone camera\n2️⃣ Scan QR code\n3️⃣ Access secure information instantly`
  }

  if (msg.includes('emergency')) {
    return `🚨 ScanForSafe Emergency Profiles help responders and families act quickly during emergencies.\n\nFeatures include:\n✅ Emergency contact access\n✅ Medical information support\n✅ Fast family communication\n✅ Smart emergency identification`
  }

  return `🤖 Thank you for contacting ScanForSafe.\n\nScanForSafe is a smart protection ecosystem designed for:\n• Vehicle safety\n• Family protection\n• Lost item recovery\n• Emergency support\n• QR + NFC smart identification\n\nPlease ask me about:\n✅ Vehicle protection\n✅ QR tags\n✅ NFC technology\n✅ Family safety\n✅ Emergency profiles\n✅ Recovery assistance`
}

/* =========================================
   CHAT WINDOW
========================================= */

function AIChatWindow({ onClose }) {
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: '👋 Welcome to ScanForSafe AI Assistant.\n\nHow may I help you today?',
      time: getTime(),
    },
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const bottomRef = useRef(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, loading])

  async function sendMessage(customText = null) {
    const text = customText || input.trim()
    if (!text || loading) return
    if (!customText) setInput('')

    const userTime = getTime()
    setMessages(prev => [...prev, { role: 'user', content: text, time: userTime }])
    setLoading(true)

    try {
      await new Promise(resolve => setTimeout(resolve, 1200))
      const aiReply = getAIResponse(text)
      const aiTime = getTime()
      setMessages(prev => [...prev, { role: 'assistant', content: aiReply, time: aiTime }])
    } catch {
      setMessages(prev => [...prev, { role: 'assistant', content: '⚠️ Something went wrong.', time: getTime() }])
    } finally {
      setLoading(false)
    }
  }

  return (
    <div style={{
      position: 'fixed',
      bottom: '96px',
      right: '24px',
      width: '420px',
      maxHeight: '700px',
      zIndex: 100,
      display: 'flex',
      flexDirection: 'column',
      borderRadius: '20px',
      background: '#0d1b2e',
      border: '1px solid rgba(255,255,255,0.07)',
      boxShadow: '0 32px 80px rgba(0,0,0,0.6)',
      overflow: 'hidden',
      fontFamily: "'Segoe UI', -apple-system, BlinkMacSystemFont, sans-serif",
    }}>

      {/* HEADER */}
      <div style={{
        padding: '16px 20px',
        background: 'linear-gradient(135deg, #0a1628 0%, #0d2047 50%, #0f2d6b 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
        flexShrink: 0,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          {/* Bot Avatar */}
          <div style={{
            width: '52px',
            height: '52px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #2563eb, #1e40af)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '2px solid rgba(99,179,255,0.3)',
            flexShrink: 0,
          }}>
            <BotSVG />
          </div>
          <div>
            <div style={{ color: '#fff', fontWeight: 700, fontSize: '17px', letterSpacing: '-0.3px' }}>
              ScanForSafe AI Assistant
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginTop: '3px' }}>
              <span style={{
                width: '8px', height: '8px', borderRadius: '50%',
                background: '#22c55e', display: 'inline-block',
                boxShadow: '0 0 6px #22c55e',
              }}/>
              <span style={{ fontSize: '12px', color: '#60a5fa', fontWeight: 500 }}>
                Online • AI Powered
              </span>
            </div>
          </div>
        </div>
        <button
          onClick={onClose}
          style={{
            width: '34px', height: '34px', borderRadius: '50%',
            border: '1px solid rgba(255,255,255,0.15)',
            background: 'rgba(255,255,255,0.08)',
            cursor: 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            transition: 'background 0.2s',
          }}
          onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.15)'}
          onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.08)'}
        >
          <XSvg size={15} />
        </button>
      </div>

      {/* CHAT BODY */}
      <div style={{
        flex: 1,
        overflowY: 'auto',
        padding: '20px 16px 12px',
        display: 'flex',
        flexDirection: 'column',
        gap: '4px',
        background: '#0d1b2e',
        scrollbarWidth: 'thin',
        scrollbarColor: 'rgba(99,179,255,0.2) transparent',
      }}>
        {messages.map((msg, index) => (
          <div key={index}>
            <div style={{
              display: 'flex',
              justifyContent: msg.role === 'user' ? 'flex-end' : 'flex-start',
              alignItems: 'flex-end',
              gap: '10px',
              marginBottom: '2px',
            }}>
              {/* Bot Avatar in chat */}
              {msg.role === 'assistant' && (
                <div style={{
                  width: '36px', height: '36px', borderRadius: '50%',
                  background: 'linear-gradient(135deg, #2563eb, #1e40af)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0, alignSelf: 'flex-end', marginBottom: '18px',
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
              )}

              <div style={{ maxWidth: '75%', display: 'flex', flexDirection: 'column', alignItems: msg.role === 'user' ? 'flex-end' : 'flex-start' }}>
                <div style={{
                  padding: '13px 16px',
                  borderRadius: msg.role === 'user' ? '18px 18px 4px 18px' : '18px 18px 18px 4px',
                  background: msg.role === 'user'
                    ? 'linear-gradient(135deg, #2563eb, #1d4ed8)'
                    : 'rgba(255,255,255,0.07)',
                  border: msg.role === 'assistant' ? '1px solid rgba(255,255,255,0.08)' : 'none',
                  color: '#e2e8f0',
                  whiteSpace: 'pre-line',
                  lineHeight: 1.75,
                  fontSize: '13.5px',
                  fontWeight: 400,
                }}>
                  {msg.role === 'assistant' && index === messages.length - 1 && !loading ? (
                    <TypingMessage text={msg.content} />
                  ) : (
                    msg.content
                  )}
                </div>
                {/* Timestamp */}
                <div style={{
                  fontSize: '11px',
                  color: 'rgba(148,163,184,0.6)',
                  marginTop: '5px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
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
          </div>
        ))}

        {/* LOADING DOTS */}
        {loading && (
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: '10px', marginTop: '4px' }}>
            <div style={{
              width: '36px', height: '36px', borderRadius: '50%',
              background: 'linear-gradient(135deg, #2563eb, #1e40af)',
              display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
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
            <div style={{
              padding: '14px 18px',
              borderRadius: '18px 18px 18px 4px',
              background: 'rgba(255,255,255,0.07)',
              border: '1px solid rgba(255,255,255,0.08)',
              display: 'flex', gap: '5px', alignItems: 'center',
            }}>
              {[0, 1, 2].map(i => (
                <span key={i} style={{
                  width: '7px', height: '7px', borderRadius: '50%',
                  background: '#60a5fa',
                  animation: `bounce 1.2s infinite ${i * 0.2}s`,
                  display: 'inline-block',
                }}/>
              ))}
            </div>
          </div>
        )}

        <div ref={bottomRef} />
      </div>

      {/* QUICK TOPICS */}
      <div style={{
        padding: '14px 16px 10px',
        borderTop: '1px solid rgba(255,255,255,0.06)',
        background: '#0d1b2e',
        flexShrink: 0,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '10px' }}>
          <SparklesSVG />
          <span style={{ fontSize: '12.5px', fontWeight: 600, color: '#94a3b8' }}>Quick Topics</span>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          {QUICK_TOPICS.map(({ label, Icon }, i) => (
            <button
              key={i}
              onClick={() => sendMessage(label)}
              style={{
                display: 'flex', alignItems: 'center', gap: '6px',
                padding: '7px 13px',
                borderRadius: '999px',
                border: '1px solid rgba(99,179,255,0.2)',
                background: 'rgba(255,255,255,0.04)',
                color: '#cbd5e1',
                cursor: 'pointer',
                fontSize: '12px',
                fontWeight: 500,
                transition: 'all 0.2s',
                fontFamily: 'inherit',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'rgba(37,99,235,0.2)'
                e.currentTarget.style.borderColor = 'rgba(99,179,255,0.4)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.04)'
                e.currentTarget.style.borderColor = 'rgba(99,179,255,0.2)'
              }}
            >
              <Icon />
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* INPUT BAR */}
      <div style={{
        padding: '12px 14px 14px',
        background: '#0d1b2e',
        borderTop: '1px solid rgba(255,255,255,0.06)',
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        flexShrink: 0,
      }}>
        <button style={{
          width: '38px', height: '38px',
          borderRadius: '50%',
          border: 'none',
          background: 'transparent',
          cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          flexShrink: 0,
        }}>
          <ClipSVG />
        </button>

        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && sendMessage()}
          placeholder="Ask anything about ScanForSafe..."
          style={{
            flex: 1,
            background: 'transparent',
            border: 'none',
            outline: 'none',
            color: '#e2e8f0',
            fontSize: '13.5px',
            fontFamily: 'inherit',
            padding: '0',
          }}
        />

        <button
          onClick={() => sendMessage()}
          disabled={!input.trim() || loading}
          style={{
            width: '42px', height: '42px',
            borderRadius: '50%',
            border: 'none',
            cursor: input.trim() && !loading ? 'pointer' : 'default',
            background: input.trim() && !loading
              ? 'linear-gradient(135deg, #2563eb, #1d4ed8)'
              : 'rgba(37,99,235,0.4)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            flexShrink: 0,
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
   FLOATING BUTTON
========================================= */

export default function ScanForSafeChatWidget() {
  const [chatOpen, setChatOpen] = useState(false)

  return (
    <>
      <style>{`
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes bounce {
          0%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-5px); }
        }
        @keyframes pulse-ring {
          0% { transform: scale(1); opacity: 0.6; }
          100% { transform: scale(1.5); opacity: 0; }
        }
      `}</style>

      {chatOpen && <AIChatWindow onClose={() => setChatOpen(false)} />}

      {/* FLOATING CTA BUTTON */}
      <button
        onClick={() => setChatOpen(!chatOpen)}
        style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          zIndex: 50,
          height: '62px',
          borderRadius: '999px',
          border: 'none',
          cursor: 'pointer',
          padding: '0 22px 0 8px',
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          background: 'linear-gradient(135deg, #1d4ed8, #2563eb)',
          color: '#fff',
          boxShadow: '0 8px 32px rgba(37,99,235,0.5)',
          fontFamily: "'Segoe UI', -apple-system, sans-serif",
          transition: 'transform 0.2s, box-shadow 0.2s',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.transform = 'translateY(-2px)'
          e.currentTarget.style.boxShadow = '0 12px 40px rgba(37,99,235,0.6)'
        }}
        onMouseLeave={e => {
          e.currentTarget.style.transform = 'translateY(0)'
          e.currentTarget.style.boxShadow = '0 8px 32px rgba(37,99,235,0.5)'
        }}
      >
        <div style={{
          width: '46px', height: '46px', borderRadius: '50%',
          background: 'rgba(255,255,255,0.15)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          position: 'relative',
        }}>
          {chatOpen ? <XSvg size={18} /> : <BotSVG />}
          {!chatOpen && (
            <span style={{
              position: 'absolute',
              top: '0px', right: '0px',
              width: '12px', height: '12px',
              borderRadius: '50%',
              background: '#22c55e',
              border: '2px solid #1d4ed8',
            }}/>
          )}
        </div>
        <div style={{ textAlign: 'left' }}>
          <div style={{ fontWeight: 700, fontSize: '14px', letterSpacing: '-0.2px' }}>AI Assistant</div>
          <div style={{ fontSize: '11px', opacity: 0.8, marginTop: '1px' }}>Ask anything</div>
        </div>
      </button>
    </>
  )
}