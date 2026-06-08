import {
  ShieldCheck,
  Smartphone,
  Users,
  Zap,
  ScanLine,
  Lock,
  Car,
  PawPrint,
  Briefcase,
  UserRound,
  Baby,
  Wifi,
} from "lucide-react";

const styles = `
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800;900&family=Barlow:wght@400;500;600&display=swap');

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

.nfc-section {
  --g:   #22c55e;
  --bg:  #031a07;
  --txt: #f1f5f9;
  --mut: rgba(241,245,249,0.60);
  position: relative;
  background: var(--bg);
  overflow: hidden;
  font-family: 'Outfit', sans-serif;
}

/* ══════════════════════════════════════
   BACKGROUND
   Rich deep forest green — bright center-left glow
   exactly matching reference Image 1
══════════════════════════════════════ */
.nfc-bg {
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  background:
    /* Strong bright top-center-left burst */
    radial-gradient(ellipse 60% 80% at 24% 38%, rgba(22,160,65,0.92) 0%, rgba(12,110,40,0.62) 24%, transparent 56%),
    /* Secondary mid-left fill */
    radial-gradient(ellipse 40% 55% at 5%  62%, rgba(8,80,26,0.58)   0%, transparent 52%),
    /* Top subtle */
    radial-gradient(ellipse 28% 36% at 44% 6%,  rgba(7,80,22,0.28)   0%, transparent 50%),
    /* Very dark base */
    #031a07;
}

/* ══════════════════════════════════════
   MAIN GRID
══════════════════════════════════════ */
.nfc-grid {
  position: relative;
  z-index: 1;
  max-width: 1380px;
  margin: 0 auto;
  padding: 56px 52px 48px;
  display: grid;
  grid-template-columns: 46% 54%;
  gap: 40px;
  align-items: center;
  min-height: 540px;
}

/* ══════════════════════════════════════
   LEFT — VISUAL SCENE
   Scene: 480 × 520px
   Disc centre approx: cx=270, cy=238
══════════════════════════════════════ */
.nfc-left {
  display: flex;
  align-items: center;
  justify-content: center;
}

.nfc-scene {
  position: relative;
  width: 480px;
  height: 520px;
}

/* ── HALO: blurred green radial glow behind disc ── */
.nfc-halo {
  position: absolute;
  top: 50%; left: 56%;
  transform: translate(-50%, -47%);
  width: 340px; height: 340px;
  border-radius: 50%;
  background: radial-gradient(circle,
    rgba(34,197,94,0.40) 0%,
    rgba(34,197,94,0.18) 32%,
    rgba(34,197,94,0.05) 58%,
    transparent 72%
  );
  filter: blur(24px);
  z-index: 1;
  animation: hPulse 3.5s ease-in-out infinite;
}
@keyframes hPulse {
  0%,100% { opacity:0.82; transform:translate(-50%,-47%) scale(1);    }
  50%      { opacity:1;    transform:translate(-50%,-47%) scale(1.11); }
}

/* ── 3 GLOWING RINGS (soft glow, not just border) ── */
.nfc-ring {
  position: absolute;
  border-radius: 50%;
  top: 50%; left: 56%;
  transform: translate(-50%, -47%);
  z-index: 2;
  pointer-events: none;
}
.nfc-ring--1 {
  width: 230px; height: 230px;
  border: 1.8px solid rgba(34,197,94,0.45);
  box-shadow:
    0 0 22px 6px rgba(34,197,94,0.24),
    inset 0 0 22px 6px rgba(34,197,94,0.08);
  animation: ringPulse 3.2s ease-in-out infinite;
}
.nfc-ring--2 {
  width: 346px; height: 346px;
  border: 1.2px solid rgba(34,197,94,0.18);
  box-shadow: 0 0 14px 4px rgba(34,197,94,0.10);
  animation: ringPulse 3.2s ease-in-out 1.1s infinite;
}
.nfc-ring--3 {
  width: 462px; height: 462px;
  border: 1px solid rgba(34,197,94,0.09);
  box-shadow: 0 0 8px 2px rgba(34,197,94,0.05);
  animation: ringPulse 3.2s ease-in-out 2.2s infinite;
}
@keyframes ringPulse {
  0%,100% { opacity:1; }
  50%      { opacity:0.25; }
}

/* ── NFC DISC ──
   Very dark, large disc with BRIGHT green inner glow ring
   This is the most important visual detail from the references
── */
.nfc-disc {
  position: absolute;
  top: 50%; left: 56%;
  transform: translate(-50%, -47%);
  width: 168px; height: 168px;
  border-radius: 50%;
  z-index: 5;
  /* Very dark core, slightly lighter center-top */
  background:
    radial-gradient(circle at 40% 34%,
      #1e4025 0%,
      #0e2012 38%,
      #060f07 66%,
      #020604 100%
    );
  /* THE KEY: bright green neon border glow ring */
  border: 3px solid rgba(34,197,94,0.72);
  box-shadow:
    /* Inner neon ring glow */
    inset 0 0 0 10px rgba(34,197,94,0.10),
    inset 0 0 40px rgba(34,197,94,0.18),
    /* Outer disc glow */
    0 0 0 12px rgba(34,197,94,0.08),
    0 0 65px rgba(34,197,94,0.60),
    0 0 130px rgba(34,197,94,0.26),
    inset 0 2px 0 rgba(255,255,255,0.08);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3px;
  animation: discPulse 3.5s ease-in-out infinite;
}
@keyframes discPulse {
  0%,100% {
    box-shadow:
      inset 0 0 0 10px rgba(34,197,94,0.10),
      inset 0 0 40px rgba(34,197,94,0.18),
      0 0 0 12px rgba(34,197,94,0.08),
      0 0 65px rgba(34,197,94,0.60),
      0 0 130px rgba(34,197,94,0.26),
      inset 0 2px 0 rgba(255,255,255,0.08);
  }
  50% {
    box-shadow:
      inset 0 0 0 14px rgba(34,197,94,0.16),
      inset 0 0 56px rgba(34,197,94,0.26),
      0 0 0 20px rgba(34,197,94,0.11),
      0 0 95px rgba(34,197,94,0.85),
      0 0 190px rgba(34,197,94,0.36),
      inset 0 2px 0 rgba(255,255,255,0.08);
  }
}
.nfc-disc-icon  { color: #22c55e; }
.nfc-disc-brand {
  font-size: 11px; font-weight: 800;
  color: #f1f5f9; letter-spacing: 0.05em; margin-top: 5px;
}
.nfc-disc-tag {
  font-size: 7.5px; font-weight: 700;
  color: #22c55e; letter-spacing: 0.10em;
}

/* ── SVG DASHED CURVED CONNECTORS ── */
.nfc-svg {
  position: absolute;
  inset: 0;
  z-index: 3;
  pointer-events: none;
  overflow: visible;
  width: 100%;
  height: 100%;
}

/* ══════════════════════════════════════
   PILLS — WHITE BACKGROUND (matching reference exactly)
   Image 1 clearly shows: white/light background pills with dark text
══════════════════════════════════════ */
.nfc-pill {
  position: absolute;
  display: flex; align-items: center; gap: 9px;
  padding: 11px 18px;
  border-radius: 100px;
  /* WHITE / very light background — as in reference */
  background: rgba(255,255,255,0.96);
  border: none;
  font-size: 13.5px; font-weight: 700;
  /* Dark text on white background */
  color: #0f1f12;
  white-space: nowrap;
  box-shadow:
    0 8px 32px rgba(0,0,0,0.45),
    0 2px 8px rgba(0,0,0,0.30);
  z-index: 8;
}
/* Icon stays green on white pill */
.nfc-pill-ico { color: #22c55e; flex-shrink: 0; }

/* "Tap to Connect" — top-right, above disc */
.nfc-pill--tap {
  top: 18px;
  left: 50%;
  transform: translateX(-18%);
  animation: pillFloatA 5s ease-in-out infinite;
}
/* "Owner Connection" — right of disc */
.nfc-pill--owner {
  top: 33%;
  right: -4px;
  transform: translateY(-50%);
  animation: pillFloatB 5s ease-in-out 1.6s infinite;
}
/* "Privacy Protected" — below disc */
.nfc-pill--privacy {
  bottom: 84px;
  left: 50%;
  transform: translateX(-20%);
  animation: pillFloatC 5s ease-in-out 0.9s infinite;
}

@keyframes pillFloatA {
  0%,100% { transform: translateX(-18%) translateY(0); }
  50%      { transform: translateX(-18%) translateY(-8px); }
}
@keyframes pillFloatB {
  0%,100% { transform: translateY(-50%); }
  50%      { transform: translateY(calc(-50% - 8px)); }
}
@keyframes pillFloatC {
  0%,100% { transform: translateX(-20%) translateY(0); }
  50%      { transform: translateX(-20%) translateY(-7px); }
}

/* ══════════════════════════════════════
   HAND + PHONE
   — Whole hand-holding-phone unit as one SVG
   — Positioned bottom-left, tilted ~-10deg
   — Matches Image 2: fingers visible on both sides
══════════════════════════════════════ */
.nfc-hand-wrap {
  position: absolute;
  bottom: -40px;
  left: -52px;
  z-index: 6;
  transform-origin: bottom center;
  animation: phoneFloat 4.5s ease-in-out infinite;
  /* phone + hand rendered as single SVG, no separate div phone */
}
@keyframes phoneFloat {
  0%,100% { transform: rotate(-10deg) translateY(0); }
  50%      { transform: rotate(-10deg) translateY(-10px); }
}

/* Phone body (sits on top of hand SVG via stacking) */
.nfc-phone {
  width: 124px;
  height: 212px;
  background: linear-gradient(158deg, #1a1d1b, #0d100e);
  border: 2px solid rgba(255,255,255,0.13);
  border-radius: 28px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 13px 8px 12px;
  box-shadow:
    0 44px 110px rgba(0,0,0,0.95),
    0 0 40px rgba(34,197,94,0.14),
    inset 0 1px 0 rgba(255,255,255,0.08);
  position: relative;
  overflow: hidden;
  /* Ensure phone renders on top of hand */
  z-index: 2;
}
/* Left volume buttons */
.nfc-phone::before {
  content: '';
  position: absolute;
  left: -3px; top: 54px;
  width: 3px; height: 20px;
  background: rgba(255,255,255,0.11);
  border-radius: 2px;
  box-shadow: 0 28px 0 rgba(255,255,255,0.09);
}
/* Right power button */
.nfc-phone::after {
  content: '';
  position: absolute;
  right: -3px; top: 65px;
  width: 3px; height: 30px;
  background: rgba(255,255,255,0.11);
  border-radius: 2px;
}

.nfc-phone-notch {
  width: 40px; height: 7px;
  background: #000;
  border-radius: 5px;
  margin-bottom: 11px;
  flex-shrink: 0;
}
.nfc-phone-screen {
  flex: 1;
  width: 100%;
  background: linear-gradient(158deg, #0b210f, #050d07);
  border-radius: 17px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
  padding: 10px 6px;
  border: 1px solid rgba(34,197,94,0.12);
}
.nfc-phone-check {
  width: 38px; height: 38px;
  border-radius: 50%;
  background: rgba(34,197,94,0.18);
  border: 1.5px solid rgba(34,197,94,0.42);
  display: flex; align-items: center; justify-content: center;
  margin-bottom: 4px;
}
.nfc-phone-check svg { width: 19px; height: 19px; }
.nfc-phone-wifi {
  display: flex; align-items: center; justify-content: center;
  margin-bottom: 1px;
}
.nfc-phone-lbl {
  font-family: 'Outfit', sans-serif;
  font-size: 7px; font-weight: 800;
  color: #f1f5f9; text-align: center; line-height: 1.3;
}
.nfc-phone-sub {
  font-family: 'Outfit', sans-serif;
  font-size: 5.5px;
  color: rgba(241,245,249,0.42); text-align: center;
}
.nfc-phone-home {
  width: 34px; height: 3.5px;
  background: rgba(255,255,255,0.17);
  border-radius: 2px;
  margin-top: 10px;
  flex-shrink: 0;
}

/*
  Hand SVG wrapper:
  - Positioned absolute, fills area BELOW and AROUND the phone
  - z-index 1 so it's behind phone body (z-index 2)
  - Fingers show on left, right, and bottom of phone
*/
.nfc-hand-svg {
  position: absolute;
  /* align so hand wraps phone naturally */
  top: 60px;   /* fingers start partway up the phone sides */
  left: -28px;
  width: 180px;
  height: 220px;
  z-index: 1;  /* behind phone (z-index 2) but above scene bg */
  pointer-events: none;
}

/* ══════════════════════════════════════
   RIGHT — CONTENT
══════════════════════════════════════ */
.nfc-right {
  display: flex;
  flex-direction: column;
  gap: 22px;
}

.nfc-badge {
  display: inline-flex; align-items: center; gap: 8px;
  padding: 8px 18px;
  border-radius: 100px;
  background: rgba(6,18,9,0.96);
  border: 1px solid rgba(34,197,94,0.34);
  font-size: 12px; font-weight: 700;
  color: #22c55e;
  letter-spacing: 0.09em;
  width: fit-content;
  box-shadow: 0 0 22px rgba(34,197,94,0.10);
}
.nfc-badge-dot {
  width: 7px; height: 7px; border-radius: 50%;
  background: #22c55e;
  box-shadow: 0 0 10px rgba(34,197,94,0.85);
  animation: dotBlink 2s ease-in-out infinite;
}
@keyframes dotBlink { 0%,100%{opacity:1;} 50%{opacity:0.22;} }

.nfc-h2 {
  font-size: clamp(34px, 4vw, 56px);
  font-weight: 900;
  line-height: 1.04;
  letter-spacing: -0.03em;
  color: #f1f5f9;
}
.nfc-h2-green {
  background: linear-gradient(90deg, #22c55e 0%, #4ade80 65%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.nfc-desc {
  font-family: 'Barlow', sans-serif;
  font-size: 15.5px;
  color: var(--mut);
  line-height: 1.72;
  max-width: 490px;
}
.nfc-desc strong {
  color: rgba(241,245,249,0.92);
  font-weight: 700;
}

.nfc-cards {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
}
.nfc-card {
  display: flex; align-items: flex-start; gap: 14px;
  padding: 17px 18px;
  background: rgba(6,16,9,0.82);
  border: 1px solid rgba(34,197,94,0.12);
  border-radius: 16px;
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  transition: background 0.25s, border-color 0.25s, transform 0.22s;
  cursor: default;
}
.nfc-card:hover {
  background: rgba(34,197,94,0.08);
  border-color: rgba(34,197,94,0.30);
  transform: translateY(-2px);
}
.nfc-card--wide { grid-column: 1 / -1; }
.nfc-card-ico {
  width: 40px; height: 40px; flex-shrink: 0;
  border-radius: 11px;
  background: rgba(34,197,94,0.13);
  border: 1px solid rgba(34,197,94,0.22);
  display: flex; align-items: center; justify-content: center;
  transition: box-shadow 0.25s;
}
.nfc-card:hover .nfc-card-ico { box-shadow: 0 0 20px rgba(34,197,94,0.40); }
.nfc-card-title {
  font-size: 14.5px; font-weight: 800;
  color: var(--txt); margin-bottom: 5px;
  letter-spacing: -0.01em;
}
.nfc-card-sub {
  font-family: 'Barlow', sans-serif;
  font-size: 13px; color: var(--mut); line-height: 1.55;
}

/* ══════════════════════════════════════
   PRODUCT BAR
══════════════════════════════════════ */
.nfc-pbar {
  position: relative; z-index: 1;
  background: rgba(3,10,5,0.98);
  border-top: 1px solid rgba(34,197,94,0.14);
}
.nfc-pbar-in {
  max-width: 1380px; margin: 0 auto;
  padding: 22px 52px;
  display: flex; align-items: center; flex-wrap: wrap; gap: 0;
}
.nfc-pbar-lbl {
  font-size: 14px; font-weight: 700;
  color: rgba(241,245,249,0.78);
  white-space: nowrap; flex-shrink: 0;
  padding-right: 32px;
  border-right: 1px solid rgba(255,255,255,0.10);
  margin-right: 32px;
}
.nfc-pbar-list { display: flex; align-items: center; gap: 28px; flex-wrap: wrap; }
.nfc-prod {
  display: flex; align-items: center; gap: 8px;
  font-size: 13px; font-weight: 600;
  color: rgba(241,245,249,0.65);
  transition: color 0.2s; cursor: default;
}
.nfc-prod:hover { color: #22c55e; }
.nfc-prod-ico {
  width: 34px; height: 34px; border-radius: 10px;
  background: rgba(34,197,94,0.10);
  border: 1px solid rgba(34,197,94,0.20);
  display: flex; align-items: center; justify-content: center;
  transition: box-shadow 0.2s;
}
.nfc-prod:hover .nfc-prod-ico { box-shadow: 0 0 14px rgba(34,197,94,0.34); }

/* ══════════════════════════════════════
   BOTTOM STRIP
══════════════════════════════════════ */
.nfc-strip {
  position: relative; z-index: 1;
  background: rgba(2,8,3,0.99);
  border-top: 1px solid rgba(34,197,94,0.15);
}
.nfc-strip-in {
  max-width: 1380px; margin: 0 auto;
  padding: 17px 52px;
  display: flex; align-items: center; flex-wrap: wrap; gap: 0;
}
.nfc-strip-lhs {
  display: flex; align-items: center; gap: 10px;
  flex-shrink: 0; padding-right: 28px;
}
.nfc-strip-hl {
  font-size: 14px; font-weight: 800;
  color: var(--txt); white-space: nowrap;
}
.nfc-strip-sep {
  width: 1px; height: 26px;
  background: rgba(255,255,255,0.13);
  flex-shrink: 0; margin-right: 28px;
}
.nfc-strip-txt {
  font-family: 'Barlow', sans-serif;
  font-size: 13.5px; color: var(--mut); line-height: 1.5;
}

/* ══════════════════════════════════════
   RESPONSIVE
══════════════════════════════════════ */
@media (max-width: 1100px) {
  .nfc-grid  { grid-template-columns: 1fr 1fr; gap: 32px; padding: 50px 28px 42px; }
  .nfc-scene { width: 380px; height: 430px; }
}
@media (max-width: 820px) {
  .nfc-grid  { grid-template-columns: 1fr; padding: 44px 20px 38px; }
  .nfc-left  { justify-content: center; }
  .nfc-scene { width: 320px; height: 360px; }
  .nfc-pbar-in { padding: 18px 20px; flex-direction: column; align-items: flex-start; gap: 14px; }
  .nfc-pbar-lbl { border-right: none; padding-right: 0; margin-right: 0; }
  .nfc-strip-in { padding: 14px 20px; }
  .nfc-strip-sep { display: none; }
}
@media (max-width: 520px) {
  .nfc-cards { grid-template-columns: 1fr; }
  .nfc-card--wide { grid-column: auto; }
  .nfc-scene { width: 280px; height: 316px; }
  .nfc-phone { width: 98px; height: 172px; }
  .nfc-pill { font-size: 12px; padding: 9px 14px; }
  .nfc-h2 { font-size: 28px; }
}
`;

const CARDS = [
  { icon: Smartphone, title: "Tap Any Phone",     sub: "Works on all modern NFC-enabled smartphones" },
  { icon: Zap,        title: "Instant Access",    sub: "Quick access to relevant information" },
  { icon: ShieldCheck,title: "No App Needed",     sub: "No downloads or sign-ups. Just tap and connect." },
  { icon: ScanLine,   title: "Dual Mode",         sub: "NFC tap + QR scan both supported" },
  { icon: Lock,       title: "Privacy Protected", sub: "Owner details remain hidden and under your control", wide: true },
];

const PRODUCTS = [
  { icon: Car,       label: "Vehicle Tags" },
  { icon: PawPrint,  label: "Pet Tags" },
  { icon: Briefcase, label: "Luggage Tags" },
  { icon: UserRound, label: "Senior Citizen Bands" },
  { icon: Baby,      label: "Child Safety Bands" },
];

export default function NFCTechnology() {
  return (
    <>
      <style>{styles}</style>
      <section className="nfc-section">

        <div className="nfc-bg" />

        <div className="nfc-grid">

          {/* ══ LEFT VISUAL ══ */}
          <div className="nfc-left">
            <div className="nfc-scene">

              {/* Blurred green halo behind disc */}
              <div className="nfc-halo" />

              {/* 3 soft glowing rings */}
              <div className="nfc-ring nfc-ring--1" />
              <div className="nfc-ring nfc-ring--2" />
              <div className="nfc-ring nfc-ring--3" />

              {/*
                Dashed curved SVG connectors — viewBox 480×520
                Disc centre: cx=268, cy=244
                "Tap to Connect":   pill top edge ~y=34, centre-x ~288
                "Owner Connection": pill centre ~x=436, y=172
                "Privacy Protected":pill centre ~x=258, y=416
              */}
              <svg
                className="nfc-svg"
                viewBox="0 0 480 520"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Disc top → Tap to Connect */}
                <path
                  d="M 268 160 C 268 116, 272 76, 280 48"
                  stroke="rgba(34,197,94,0.52)"
                  strokeWidth="1.4"
                  strokeDasharray="5.5 4"
                  strokeLinecap="round"
                  fill="none"
                />
                {/* Disc right → Owner Connection */}
                <path
                  d="M 352 234 C 382 224, 408 210, 432 176"
                  stroke="rgba(34,197,94,0.46)"
                  strokeWidth="1.4"
                  strokeDasharray="5.5 4"
                  strokeLinecap="round"
                  fill="none"
                />
                {/* Disc bottom → Privacy Protected */}
                <path
                  d="M 268 328 C 268 364, 262 390, 256 414"
                  stroke="rgba(34,197,94,0.44)"
                  strokeWidth="1.4"
                  strokeDasharray="5.5 4"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>

              {/* NFC Disc */}
              <div className="nfc-disc">
                <ShieldCheck size={36} className="nfc-disc-icon" strokeWidth={1.7} />
                <span className="nfc-disc-brand">ScanForSafe</span>
                <span className="nfc-disc-tag">TAP TO CONNECT</span>
              </div>

              {/* WHITE pills */}
              <div className="nfc-pill nfc-pill--tap">
                <Smartphone size={14} className="nfc-pill-ico" />
                <span>Tap to Connect</span>
              </div>
              <div className="nfc-pill nfc-pill--owner">
                <Users size={14} className="nfc-pill-ico" />
                <span>Owner Connection</span>
              </div>
              <div className="nfc-pill nfc-pill--privacy">
                <ShieldCheck size={14} className="nfc-pill-ico" />
                <span>Privacy Protected</span>
              </div>

              {/* HAND + PHONE */}
              <div className="nfc-hand-wrap">

                {/*
                  SVG hand — skin-tone, gripping phone from bottom
                  Matches Image 2: visible fingers + palm beneath phone
                */}
                <svg
                  className="nfc-hand-svg"
                  viewBox="0 0 186 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Base palm shape — warm skin tone */}
                  <path
                    d="M 18 92 C 22 68, 40 50, 66 40 C 88 32, 122 34, 144 48 C 162 58, 168 76, 156 86 C 140 98, 52 104, 18 92 Z"
                    fill="#c68642"
                  />
                  {/* Palm shadow / depth */}
                  <path
                    d="M 18 92 C 22 68, 40 50, 66 40 C 88 32, 122 34, 144 48 C 162 58, 168 76, 156 86 C 140 98, 52 104, 18 92 Z"
                    fill="url(#palmShadow)"
                  />
                  <defs>
                    <radialGradient id="palmShadow" cx="60%" cy="80%" r="60%">
                      <stop offset="0%" stopColor="rgba(0,0,0,0)" />
                      <stop offset="100%" stopColor="rgba(0,0,0,0.35)" />
                    </radialGradient>
                  </defs>
                  {/* Thumb */}
                  <path
                    d="M 18 92 C 8 78, 6 60, 18 48 C 26 40, 38 42, 40 54 C 42 62, 34 72, 26 80 Z"
                    fill="#c68642"
                  />
                  {/* Thumb shadow */}
                  <path
                    d="M 18 92 C 8 78, 6 60, 18 48 C 26 40, 38 42, 40 54 C 42 62, 34 72, 26 80 Z"
                    fill="rgba(0,0,0,0.18)"
                  />
                  {/* Finger 1 (index) */}
                  <path d="M 60 41 C 58 27, 60 14, 64 7"  stroke="#c68642" strokeWidth="8" strokeLinecap="round"/>
                  <path d="M 60 41 C 58 27, 60 14, 64 7"  stroke="rgba(0,0,0,0.15)" strokeWidth="8" strokeLinecap="round" opacity="0.6"/>
                  {/* Knuckle line finger 1 */}
                  <line x1="56" y1="30" x2="66" y2="30" stroke="rgba(0,0,0,0.18)" strokeWidth="1" strokeLinecap="round"/>
                  {/* Finger 2 (middle) */}
                  <path d="M 80 37 C 78 22, 80 8,  84 2"  stroke="#c68642" strokeWidth="8" strokeLinecap="round"/>
                  <path d="M 80 37 C 78 22, 80 8,  84 2"  stroke="rgba(0,0,0,0.12)" strokeWidth="8" strokeLinecap="round" opacity="0.5"/>
                  <line x1="76" y1="26" x2="86" y2="26" stroke="rgba(0,0,0,0.18)" strokeWidth="1" strokeLinecap="round"/>
                  {/* Finger 3 (ring) */}
                  <path d="M 100 37 C 100 23, 102 9, 104 3" stroke="#c68642" strokeWidth="8" strokeLinecap="round"/>
                  <path d="M 100 37 C 100 23, 102 9, 104 3" stroke="rgba(0,0,0,0.12)" strokeWidth="8" strokeLinecap="round" opacity="0.5"/>
                  <line x1="96" y1="26" x2="108" y2="26" stroke="rgba(0,0,0,0.18)" strokeWidth="1" strokeLinecap="round"/>
                  {/* Finger 4 (pinky) */}
                  <path d="M 118 42 C 120 30, 122 18, 122 12" stroke="#c68642" strokeWidth="7" strokeLinecap="round"/>
                  <path d="M 118 42 C 120 30, 122 18, 122 12" stroke="rgba(0,0,0,0.12)" strokeWidth="7" strokeLinecap="round" opacity="0.4"/>
                  <line x1="114" y1="32" x2="124" y2="32" stroke="rgba(0,0,0,0.16)" strokeWidth="1" strokeLinecap="round"/>
                  {/* Palm crease lines */}
                  <path d="M 44 68 Q 90 60 140 68" stroke="rgba(0,0,0,0.14)" strokeWidth="1.2" strokeLinecap="round" fill="none"/>
                  <path d="M 38 80 Q 90 72 148 78" stroke="rgba(0,0,0,0.10)" strokeWidth="1"   strokeLinecap="round" fill="none"/>
                </svg>

                <div className="nfc-phone">
                  <div className="nfc-phone-notch" />
                  <div className="nfc-phone-screen">
                    <div className="nfc-phone-check">
                      <svg viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                    </div>
                    <div className="nfc-phone-wifi">
                      <Wifi size={13} color="#22c55e" />
                    </div>
                    <p className="nfc-phone-lbl">NFC Tag Detected</p>
                    <p className="nfc-phone-sub">Connecting securely...</p>
                  </div>
                  <div className="nfc-phone-home" />
                </div>
              </div>

            </div>
          </div>

          {/* ══ RIGHT CONTENT ══ */}
          <div className="nfc-right">

            <div className="nfc-badge">
              <span className="nfc-badge-dot" />
              <Wifi size={13} color="#22c55e" />
              NFC TECHNOLOGY
            </div>

            <h2 className="nfc-h2">
              NFC Technology —<br />
              <span className="nfc-h2-green">Tap. Connect. Protect.</span>
            </h2>

            <p className="nfc-desc">
              Tap any NFC-enabled smartphone to securely connect with the owner or
              access emergency contact information when needed.{" "}
              <strong>No app. No hassle.<br />Just a simple tap.</strong>
            </p>

            <div className="nfc-cards">
              {CARDS.map(({ icon: Icon, title, sub, wide }) => (
                <div key={title} className={`nfc-card${wide ? " nfc-card--wide" : ""}`}>
                  <div className="nfc-card-ico">
                    <Icon size={19} color="#22c55e" strokeWidth={1.8} />
                  </div>
                  <div>
                    <div className="nfc-card-title">{title}</div>
                    <div className="nfc-card-sub">{sub}</div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* ══ PRODUCT BAR ══ */}
        <div className="nfc-pbar">
          <div className="nfc-pbar-in">
            <span className="nfc-pbar-lbl">Available Across ScanForSafe Products</span>
            <div className="nfc-pbar-list">
              {PRODUCTS.map(({ icon: Icon, label }) => (
                <div key={label} className="nfc-prod">
                  <div className="nfc-prod-ico">
                    <Icon size={17} color="#22c55e" strokeWidth={1.7} />
                  </div>
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ══ BOTTOM STRIP ══ */}
        <div className="nfc-strip">
          <div className="nfc-strip-in">
            <div className="nfc-strip-lhs">
              <ShieldCheck size={17} color="#22c55e" strokeWidth={1.8} />
              <span className="nfc-strip-hl">One Tap Can Make a Big Difference</span>
            </div>
            <div className="nfc-strip-sep" />
            <p className="nfc-strip-txt">
              Connecting the right people at the right time through QR + NFC technology.
            </p>
          </div>
        </div>

      </section>
    </>
  );
}