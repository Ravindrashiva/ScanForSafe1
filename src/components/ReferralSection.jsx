import { useNavigate } from "react-router-dom";

export default function ReferralSection() {
  const navigate = useNavigate();

  return (
    <section style={{
      width: '100%',
      background: '#f7fbf7',
      padding: '44px 0 48px',
      fontFamily: "'DM Sans', sans-serif",
      position: 'relative',
      overflowX: 'hidden',
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800;900&family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600;9..40,700&display=swap');

        .rs-badge {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          padding: 5px 14px 5px 10px;
          border-radius: 999px;
          border: 1.5px solid rgba(46,189,58,0.30);
          background: rgba(46,189,58,0.09);
          margin-bottom: 16px;
        }
        .rs-badge-icon {
          width: 20px; height: 20px;
          display: flex; align-items: center; justify-content: center;
          color: #2ebd3a;
        }
        .rs-badge span {
          font-family: 'Sora', sans-serif;
          font-size: 10.5px;
          font-weight: 700;
          color: #1a6e22;
          letter-spacing: 0.09em;
          text-transform: uppercase;
        }

        .rs-heading {
          font-family: 'Sora', sans-serif;
          font-size: clamp(2rem, 4.5vw, 3.1rem);
          font-weight: 900;
          color: #0d1f10;
          line-height: 1.05;
          letter-spacing: -0.03em;
          margin: 0 0 14px;
        }
        .rs-heading .rs-green {
          color: #1db82a;
        }
        .rs-desc {
          font-family: 'DM Sans', sans-serif;
          font-size: 15px;
          color: #4a6352;
          line-height: 1.65;
          max-width: 520px;
          margin: 0 auto 32px;
        }

        /* Cards Row */
        .rs-cards-row {
          display: flex;
          align-items: stretch;
          gap: 0;
          max-width: 1060px;
          margin: 0 auto 20px;
          padding: 0 20px;
          position: relative;
        }

        .rs-card {
          flex: 1;
          background: #fff;
          border: 1.5px solid #e4ece5;
          border-radius: 20px;
          padding: 28px 22px 22px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          position: relative;
          box-shadow: 0 2px 12px rgba(0,0,0,0.05);
          transition: box-shadow 0.25s ease, transform 0.25s ease;
        }
        .rs-card:hover {
          box-shadow: 0 8px 28px rgba(0,0,0,0.09);
          transform: translateY(-2px);
        }

        .rs-arrow-sep {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          flex-shrink: 0;
          align-self: center;
          margin: 0 -2px;
          z-index: 2;
        }
        .rs-arrow-circle {
          width: 34px; height: 34px;
          border-radius: 50%;
          background: #fff;
          border: 1.5px solid #e0e8e1;
          box-shadow: 0 2px 8px rgba(0,0,0,0.07);
          display: flex; align-items: center; justify-content: center;
          color: #b0c4b3;
        }

        .rs-step-badge {
          font-family: 'Sora', sans-serif;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 0.05em;
          padding: 2px 8px;
          border-radius: 999px;
          margin-bottom: 16px;
          display: inline-block;
        }

        .rs-icon-wrap {
          width: 72px; height: 72px;
          border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 16px;
          align-self: center;
        }

        .rs-card-title {
          font-family: 'Sora', sans-serif;
          font-size: 15.5px;
          font-weight: 800;
          color: #0d1f10;
          margin: 0 0 8px;
          letter-spacing: -0.02em;
          text-align: left;
          line-height: 1.2;
        }
        .rs-card-desc {
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          color: #5a7060;
          line-height: 1.65;
          margin: 0 0 16px;
          flex: 1;
        }

        /* Category icons row (card 2) */
        .rs-cat-row {
          display: flex;
          gap: 12px;
          align-items: flex-start;
          margin-bottom: 16px;
          flex-wrap: wrap;
        }
        .rs-cat-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
        }
        .rs-cat-icon-box {
          width: 40px; height: 40px;
          border-radius: 10px;
          background: #f2f8f2;
          border: 1px solid #ddeedd;
          display: flex; align-items: center; justify-content: center;
        }
        .rs-cat-label {
          font-family: 'DM Sans', sans-serif;
          font-size: 10px;
          color: #5a7060;
          text-align: center;
          line-height: 1.3;
          font-weight: 500;
        }

        /* Bottom pill */
        .rs-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 6px 14px;
          border-radius: 999px;
          border: 1.5px solid;
          font-family: 'DM Sans', sans-serif;
          font-size: 12px;
          font-weight: 600;
          margin-top: auto;
        }

        /* Trust bar */
        .rs-trust-bar {
          display: flex;
          align-items: center;
          background: #fff;
          border: 1.5px solid #e4ece5;
          border-radius: 16px;
          padding: 14px 24px;
          max-width: 1060px;
          margin: 0 auto 24px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.04);
        }
        .rs-trust-item {
          flex: 1;
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 0 8px;
        }
        .rs-trust-item + .rs-trust-item {
          border-left: 1.5px solid #e8eee9;
        }
        .rs-trust-icon {
          width: 34px; height: 34px;
          border-radius: 50%;
          background: rgba(46,189,58,0.10);
          display: flex; align-items: center; justify-content: center;
          color: #1db82a;
          flex-shrink: 0;
        }
        .rs-trust-text {
          font-family: 'Sora', sans-serif;
          font-size: 12px;
          font-weight: 700;
          color: #0d1f10;
          line-height: 1.25;
        }
        .rs-trust-sub {
          font-family: 'DM Sans', sans-serif;
          font-size: 11px;
          color: #7a9382;
          margin-top: 1px;
        }

        /* CTA */
        .rs-cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          padding: 14px 36px;
          border-radius: 999px;
          background: linear-gradient(135deg, #1a8a24 0%, #2ebd3a 45%, #0B2545 100%);
          color: #fff;
          font-family: 'Sora', sans-serif;
          font-size: 15px;
          font-weight: 700;
          border: none;
          cursor: pointer;
          box-shadow: 0 8px 24px rgba(46,189,58,0.35);
          transition: transform 0.25s ease, box-shadow 0.25s ease;
          letter-spacing: -0.01em;
        }
        .rs-cta-btn:hover {
          transform: translateY(-3px) scale(1.02);
          box-shadow: 0 14px 36px rgba(46,189,58,0.45);
        }

        .rs-bottom-text {
          display: flex;
          align-items: center;
          gap: 6px;
          justify-content: center;
          font-family: 'DM Sans', sans-serif;
          font-size: 12.5px;
          color: #5a7060;
          margin-top: 12px;
        }

        @media (max-width: 760px) {
          .rs-cards-row {
            flex-direction: column;
            gap: 12px;
            padding: 0 16px;
          }
          .rs-arrow-sep { display: none; }
          .rs-trust-bar {
            flex-wrap: wrap;
            gap: 10px;
            padding: 14px 16px;
            margin: 0 16px 20px;
          }
          .rs-trust-item {
            flex: 0 0 calc(50% - 5px);
            border-left: none !important;
          }
          .rs-cta-btn { width: calc(100% - 32px); justify-content: center; }
        }
      `}</style>

      <div style={{ textAlign: 'center', padding: '0 20px' }}>
        {/* Badge */}
        <div className="rs-badge">
          <span className="rs-badge-icon">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
              <circle cx="9" cy="7" r="4"/>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
            </svg>
          </span>
          <span>Referral Program</span>
        </div>

        {/* Heading */}
        <h2 className="rs-heading">
          Share Safety. <span className="rs-green">Earn Rewards.</span>
        </h2>

        {/* Description */}
        <p className="rs-desc">
          Invite your friends and family to ScanForSafe and help them stay protected.<br />
          When they activate a product, you earn rewards credited directly to your wallet.
        </p>
      </div>

      {/* Cards Row */}
      <div className="rs-cards-row">
        {/* Card 1 */}
        <div className="rs-card">
          <span className="rs-step-badge" style={{ background: 'rgba(0,120,255,0.10)', color: '#0078ff', border: '1px solid rgba(0,120,255,0.20)' }}>01</span>
          <div className="rs-icon-wrap" style={{ background: 'rgba(0,120,255,0.08)' }}>
            <svg width="36" height="36" viewBox="0 0 32 32" fill="none" stroke="#0078ff" strokeWidth="1.8" strokeLinecap="round">
              <path d="M13 20l-4 4a3.54 3.54 0 0 1-5-5l4-4"/>
              <path d="M19 12l4-4a3.54 3.54 0 0 0-5-5l-4 4"/>
              <path d="M14 18l4-4"/>
              <circle cx="20" cy="8" r="1.5" fill="#0078ff" stroke="none"/>
              <circle cx="12" cy="24" r="1.5" fill="#0078ff" stroke="none"/>
            </svg>
          </div>
          <h3 className="rs-card-title">Share Your Referral Link</h3>
          <p className="rs-card-desc">Get your unique referral link or code from your dashboard and share it with friends and family.</p>
          <div className="rs-pill" style={{ borderColor: 'rgba(0,120,255,0.25)', color: '#0078ff', background: 'rgba(0,120,255,0.06)' }}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
              <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
              <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
            </svg>
            Unique to You • Easy to Share
          </div>
        </div>

        {/* Arrow */}
        <div className="rs-arrow-sep">
          <div className="rs-arrow-circle">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
            </svg>
          </div>
        </div>

        {/* Card 2 */}
        <div className="rs-card">
          <span className="rs-step-badge" style={{ background: 'rgba(140,0,255,0.10)', color: '#8c00ff', border: '1px solid rgba(140,0,255,0.20)' }}>02</span>
          <div className="rs-icon-wrap" style={{ background: 'rgba(140,0,255,0.08)' }}>
            <svg width="36" height="36" viewBox="0 0 32 32" fill="none" stroke="#8c00ff" strokeWidth="1.8" strokeLinecap="round">
              <circle cx="11" cy="10" r="4"/>
              <path d="M3 26c0-4.4 3.6-8 8-8"/>
              <circle cx="22" cy="10" r="4" opacity="0.5"/>
              <path d="M20 26c0-4.4 1.3-7.4 4-8" opacity="0.5"/>
              <path d="M25 18v6M22 21h6"/>
            </svg>
          </div>
          <h3 className="rs-card-title">They Activate ScanForSafe</h3>
          <p className="rs-card-desc">When your friends purchase and activate any ScanForSafe product, the activation is linked to your referral.</p>

          {/* Category icons */}
          <div className="rs-cat-row">
            {[
              { label: 'Vehicle\nTags', svg: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2ebd3a" strokeWidth="1.8" strokeLinecap="round"><rect x="2" y="7" width="20" height="10" rx="3"/><circle cx="7" cy="17" r="2"/><circle cx="17" cy="17" r="2"/><path d="M2 10h20M7 7l2-3h6l2 3"/></svg> },
              { label: 'Senior\nBands', svg: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="1.8" strokeLinecap="round"><circle cx="12" cy="7" r="3"/><path d="M6 21v-2a6 6 0 0 1 12 0v2"/><path d="M3 15l2 2 4-4"/></svg> },
              { label: 'Child Safety\nTags', svg: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="1.8" strokeLinecap="round"><circle cx="12" cy="6" r="3"/><path d="M8 21v-3a4 4 0 0 1 8 0v3"/><path d="M3 9l2 2 3-3"/></svg> },
              { label: 'Pet\nTags', svg: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ec4899" strokeWidth="1.8" strokeLinecap="round"><circle cx="5" cy="7" r="2"/><circle cx="19" cy="7" r="2"/><circle cx="12" cy="4" r="2"/><path d="M8 12c0 3 4 7 4 7s4-4 4-7a4 4 0 0 0-8 0z"/></svg> },
              { label: 'Luggage\nTags', svg: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#8b5cf6" strokeWidth="1.8" strokeLinecap="round"><rect x="5" y="7" width="14" height="13" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/><line x1="12" y1="12" x2="12" y2="16"/><line x1="10" y1="14" x2="14" y2="14"/></svg> },
            ].map((cat, i) => (
              <div className="rs-cat-item" key={i}>
                <div className="rs-cat-icon-box">{cat.svg}</div>
                <span className="rs-cat-label">{cat.label.split('\n').map((l, j) => <span key={j} style={{ display: 'block' }}>{l}</span>)}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Arrow */}
        <div className="rs-arrow-sep">
          <div className="rs-arrow-circle">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
            </svg>
          </div>
        </div>

        {/* Card 3 */}
        <div className="rs-card">
          <span className="rs-step-badge" style={{ background: 'rgba(0,180,83,0.10)', color: '#00b453', border: '1px solid rgba(0,180,83,0.20)' }}>03</span>
          <div className="rs-icon-wrap" style={{ background: 'rgba(0,180,83,0.08)' }}>
            <svg width="36" height="36" viewBox="0 0 32 32" fill="none" stroke="#00b453" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <rect x="4" y="13" width="24" height="14" rx="2"/>
              <path d="M16 13V9a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v4"/>
              <path d="M16 13V9a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v4"/>
              <line x1="16" y1="13" x2="16" y2="27"/>
              <circle cx="16" cy="20" r="2.5" fill="rgba(0,180,83,0.15)"/>
            </svg>
          </div>
          <h3 className="rs-card-title">Earn Rewards</h3>
          <p className="rs-card-desc">You earn cash rewards or premium subscription benefits credited directly to your wallet.</p>
          <div className="rs-pill" style={{ borderColor: 'rgba(0,180,83,0.25)', color: '#00b453', background: 'rgba(0,180,83,0.06)' }}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
              <rect x="2" y="5" width="20" height="14" rx="2"/>
              <path d="M2 10h20"/>
            </svg>
            Direct to Wallet • Instant Credit
          </div>
        </div>
      </div>

      {/* Trust Bar */}
      <div className="rs-trust-bar" style={{ padding: '0 16px' }}>
        {[
          {
            icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z"/></svg>,
            title: '100% Safe', sub: 'and Secure',
          },
          {
            icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>,
            title: 'Your Data', sub: 'Remains Private',
          },
          {
            icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>,
            title: 'Trusted by', sub: 'Thousands',
          },
          {
            icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>,
            title: 'Exclusive Rewards', sub: '& Offers',
          },
          {
            icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>,
            title: 'Dedicated', sub: 'Support',
          },
        ].map((t, i) => (
          <div className="rs-trust-item" key={i}>
            <div className="rs-trust-icon">{t.icon}</div>
            <div>
              <div className="rs-trust-text">{t.title}</div>
              <div className="rs-trust-sub">{t.sub}</div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div style={{ textAlign: 'center' }}>
        <button className="rs-cta-btn" onClick={() => navigate('/qr-form')}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="5" width="20" height="14" rx="2"/>
            <path d="M2 10h20"/>
          </svg>
          Start Referring Today
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
          </svg>
        </button>

        <div className="rs-bottom-text">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#2ebd3a" strokeWidth="2.2" strokeLinecap="round">
            <path d="M12 2l-3 3.5H3l1 7c.5 3 3.5 7 8 9 4.5-2 7.5-6 8-9l1-7h-6L12 2z"/>
          </svg>
          Protect more people. Earn more rewards.
          <svg width="12" height="12" viewBox="0 0 24 24" fill="#e74c3c"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
        </div>
      </div>

    </section>
  );
}