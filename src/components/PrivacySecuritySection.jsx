import React, { useEffect, useRef, useState } from 'react'

function useInView(threshold = 0.05) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])
  return [ref, visible]
}

function Fade({ children, delay = 0, visible }) {
  return (
    <div style={{
      opacity: visible ? 1 : 0,
      transform: visible ? 'translateY(0)' : 'translateY(20px)',
      transition: `opacity 0.6s ease ${delay}ms, transform 0.6s cubic-bezier(0.22,1,0.36,1) ${delay}ms`,
    }}>
      {children}
    </div>
  )
}

const ShieldCheck = ({ color = '#16a34a', size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path d="M12 2L3 6.5v6c0 5 3.5 9.5 9 11 5.5-1.5 9-6 9-11v-6L12 2z" stroke={color} strokeWidth="1.6" strokeLinejoin="round" fill={`${color}18`}/>
    <path d="M8.5 12l2.5 2.5 5-5" stroke={color} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const LockIcon = ({ color = '#f97316', size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <rect x="5" y="11" width="14" height="11" rx="3" stroke={color} strokeWidth="1.6"/>
    <path d="M8 11V8a4 4 0 0 1 8 0v3" stroke={color} strokeWidth="1.6" strokeLinecap="round"/>
    <circle cx="12" cy="16.5" r="1.5" fill={color}/>
    <line x1="12" y1="18" x2="12" y2="20" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
)

const UserIcon = ({ color = '#2563eb', size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="8" r="3.5" stroke={color} strokeWidth="1.6"/>
    <path d="M5 20c0-3.866 3.134-7 7-7s7 3.134 7 7" stroke={color} strokeWidth="1.6" strokeLinecap="round"/>
  </svg>
)

const NoSellIcon = ({ color = '#16a34a', size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="9" stroke={color} strokeWidth="1.6"/>
    <line x1="7" y1="7" x2="17" y2="17" stroke={color} strokeWidth="1.7" strokeLinecap="round"/>
    <path d="M11 9h1.5a2 2 0 0 1 0 4H11M11 9v6" stroke={color} strokeWidth="1.4" strokeLinecap="round"/>
  </svg>
)

const CheckCircle = ({ color }) => (
  <svg width="17" height="17" viewBox="0 0 17 17" fill="none" style={{ flexShrink: 0 }}>
    <circle cx="8.5" cy="8.5" r="8" fill={`${color}15`} stroke={color} strokeWidth="1"/>
    <path d="M5.5 8.8l2.2 2.2 4-4.5" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

export default function PrivacySection() {
  const [ref, visible] = useInView()

  const cards = [
    {
      icon: <ShieldCheck color="#16a34a" size={24} />,
      title: 'Privacy Protected',
      desc: 'Your information is securely stored and shared only when needed.',
      color: '#16a34a',
      bg: '#f0fdf4',
      border: '#bbf7d0',
    },
    {
      icon: <LockIcon color="#f97316" size={24} />,
      title: 'Controlled Access',
      desc: 'Information is available only according to the permissions you choose.',
      color: '#f97316',
      bg: '#fff7ed',
      border: '#fed7aa',
    },
    {
      icon: <UserIcon color="#2563eb" size={24} />,
      title: 'User Managed',
      desc: 'You decide what information is visible and can update it anytime.',
      color: '#2563eb',
      bg: '#eff6ff',
      border: '#bfdbfe',
    },
    {
      icon: <NoSellIcon color="#16a34a" size={24} />,
      title: 'No Data Selling',
      desc: 'Your information is never sold or shared with third parties.',
      color: '#16a34a',
      bg: '#f0fdf4',
      border: '#bbf7d0',
    },
  ]

  const checks = [
    'Owner details remain protected',
    'You control what information is shared',
    'No data sold to third parties',
    'QR & NFC access without revealing personal details publicly',
  ]

  const categories = [
    { label: 'Vehicles', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><rect x="2" y="9" width="20" height="9" rx="3" stroke="#16a34a" strokeWidth="1.5"/><rect x="6" y="5" width="12" height="7" rx="2" stroke="#16a34a" strokeWidth="1.5"/><circle cx="6.5" cy="18" r="2" stroke="#16a34a" strokeWidth="1.5"/><circle cx="17.5" cy="18" r="2" stroke="#16a34a" strokeWidth="1.5"/></svg> },
    { label: 'Pets', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><ellipse cx="12" cy="14" rx="5" ry="4" stroke="#16a34a" strokeWidth="1.5"/><circle cx="5" cy="8" r="2" stroke="#16a34a" strokeWidth="1.5"/><circle cx="19" cy="8" r="2" stroke="#16a34a" strokeWidth="1.5"/><circle cx="8" cy="5" r="2" stroke="#16a34a" strokeWidth="1.5"/><circle cx="16" cy="5" r="2" stroke="#16a34a" strokeWidth="1.5"/></svg> },
    { label: 'Luggage', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><rect x="5" y="8" width="14" height="12" rx="2" stroke="#16a34a" strokeWidth="1.5"/><path d="M9 8V6a3 3 0 0 1 6 0v2" stroke="#16a34a" strokeWidth="1.5" strokeLinecap="round"/><line x1="12" y1="11" x2="12" y2="17" stroke="#16a34a" strokeWidth="1.5" strokeLinecap="round"/></svg> },
    { label: 'Seniors', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="7" r="3.5" stroke="#16a34a" strokeWidth="1.5"/><path d="M5 21c0-3.866 3.134-7 7-7s7 3.134 7 7" stroke="#16a34a" strokeWidth="1.5" strokeLinecap="round"/></svg> },
    { label: 'Children', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="7" r="3" stroke="#16a34a" strokeWidth="1.5"/><path d="M6 21v-2a6 6 0 0 1 12 0v2" stroke="#16a34a" strokeWidth="1.5" strokeLinecap="round"/></svg> },
  ]

  return (
    <section ref={ref} style={{ background: '#ffffff', padding: '72px 0 56px', fontFamily: "'DM Sans', 'Inter', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Sora:wght@700;800;900&display=swap');
        .ps-wrap { max-width: 1160px; margin: 0 auto; padding: 0 32px; }
        .ps-grid { display: grid; grid-template-columns: 42% 1fr; gap: 64px; align-items: start; }
        .ps-cards { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
        .ps-card {
          background: #fff;
          border-radius: 20px;
          padding: 24px 20px 20px;
          border: 1.5px solid #f1f5f9;
          position: relative;
          overflow: hidden;
          transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.2s;
          cursor: default;
          box-shadow: 0 2px 12px rgba(15,23,42,0.04);
        }
        .ps-card:hover { transform: translateY(-4px); box-shadow: 0 16px 40px rgba(15,23,42,0.08); border-color: #e2e8f0; }
        .ps-icon-wrap { width: 52px; height: 52px; border-radius: 14px; display: flex; align-items: center; justify-content: center; margin-bottom: 16px; }
        .ps-check { display: flex; align-items: flex-start; gap: 10px; margin-bottom: 12px; }
        .ps-trust {
          background: #f8fffe;
          border: 1.5px solid #d1fae5;
          border-radius: 20px;
          padding: 20px 28px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 28px;
          max-width: 1160px;
          margin: 28px auto 0;
        }
        .ps-cats { display: flex; align-items: center; gap: 6px; }
        .ps-cat { display: flex; flex-direction: column; align-items: center; gap: 5px; padding: 0 12px; }
        .ps-divider { width: 1px; height: 36px; background: #d1fae5; }
        .ps-cat-icon { width: 40px; height: 40px; border-radius: 50%; background: #dcfce7; display: flex; align-items: center; justify-content: center; }
        @media (max-width: 880px) {
          .ps-grid { grid-template-columns: 1fr; gap: 36px; }
          .ps-trust { flex-direction: column; align-items: flex-start; padding: 20px; margin: 24px 20px 0; }
          .ps-cats { flex-wrap: wrap; gap: 12px !important; }
          .ps-divider { display: none; }
        }
        @media (max-width: 500px) {
          .ps-cards { grid-template-columns: 1fr; }
          .ps-wrap { padding: 0 20px; }
        }
      `}</style>

      <div className="ps-wrap">
        <div className="ps-grid">
          {/* LEFT */}
          <div>
            <Fade visible={visible} delay={0}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 7, marginBottom: 22, padding: '5px 13px', borderRadius: 100, background: '#f0fdf4', border: '1.5px solid #bbf7d0' }}>
                <ShieldCheck color="#16a34a" size={13} />
                <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, fontWeight: 700, color: '#16a34a', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                  Privacy & Security
                </span>
              </div>
            </Fade>

            <Fade visible={visible} delay={80}>
              <h2 style={{ fontFamily: "'Sora', sans-serif", fontSize: 'clamp(30px,4vw,44px)', fontWeight: 900, lineHeight: 1.08, margin: '0 0 8px', letterSpacing: '-0.03em' }}>
                <span style={{ color: '#0f172a' }}>Your Information.</span><br />
                <span style={{ color: '#16a34a' }}>Your Control.</span>
              </h2>
            </Fade>

            <Fade visible={visible} delay={140}>
              <div style={{ width: 32, height: 3, background: '#16a34a', borderRadius: 2, margin: '16px 0 20px' }} />
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 15, lineHeight: 1.75, color: '#475569', marginBottom: 30, fontWeight: 500, maxWidth: 360 }}>
                ScanForSafe is designed with privacy first. You decide what information is visible and when it can be accessed.
              </p>
            </Fade>

            <Fade visible={visible} delay={200}>
              <div>
                {checks.map((item, i) => (
                  <div key={i} className="ps-check">
                    <CheckCircle color="#16a34a" />
                    <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: '#1e293b', lineHeight: 1.6, fontWeight: 500 }}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </Fade>
          </div>

          {/* RIGHT — 2×2 cards */}
          <div className="ps-cards">
            {cards.map((card, i) => (
              <Fade key={i} visible={visible} delay={160 + i * 80}>
                <div className="ps-card">
                  <div className="ps-icon-wrap" style={{ background: card.bg, border: `1px solid ${card.border}` }}>
                    {card.icon}
                  </div>
                  <h3 style={{ fontFamily: "'Sora', sans-serif", fontSize: 15.5, fontWeight: 800, color: '#0f172a', marginBottom: 8, lineHeight: 1.2 }}>
                    {card.title}
                  </h3>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, fontWeight: 500, color: '#64748b', lineHeight: 1.65, margin: '0 0 16px' }}>
                    {card.desc}
                  </p>
                  <div style={{ width: 28, height: 2.5, background: card.color, borderRadius: 2 }} />
                </div>
              </Fade>
            ))}
          </div>
        </div>

        {/* TRUST BANNER */}
        <Fade visible={visible} delay={600}>
          <div className="ps-trust">
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, flexShrink: 0 }}>
              <div style={{ width: 52, height: 52, borderRadius: '50%', background: '#dcfce7', border: '1.5px solid #bbf7d0', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
                  <path d="M13 2L3 6.5v7C3 19.5 7.5 24.5 13 26c5.5-1.5 10-6.5 10-12.5v-7L13 2z" fill="#16a34a" opacity="0.15" stroke="#16a34a" strokeWidth="1.5" strokeLinejoin="round"/>
                  <path d="M8.5 13l3.5 3.5 6-6" stroke="#16a34a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <div style={{ fontFamily: "'Sora', sans-serif", fontWeight: 800, fontSize: 15, color: '#14532d', lineHeight: 1.2 }}>
                  Privacy First. Safety Always.
                </div>
                <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: '#166534', fontWeight: 500, marginTop: 3, lineHeight: 1.5 }}>
                  Helping people connect when needed while keeping personal information protected.
                </div>
              </div>
            </div>

            <div className="ps-cats">
              {categories.map((cat, i) => (
                <React.Fragment key={cat.label}>
                  {i > 0 && <div className="ps-divider" />}
                  <div className="ps-cat">
                    <div className="ps-cat-icon">{cat.icon}</div>
                    <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11.5, fontWeight: 600, color: '#166534' }}>{cat.label}</span>
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>
        </Fade>
      </div>
    </section>
  )
}