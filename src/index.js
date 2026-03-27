export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    if (url.pathname === "/meow" || url.pathname === "/meow/") {
      const html = `<!DOCTYPE html>
<html lang="en">
<head>
 <meta charset="UTF-8" />
 <meta name="viewport" content="width=device-width, initial-scale=1" />
 <title>e-meow· — by </title>
 <meta name="description" content="E-meow is where you build your AI agent. Define its voice, knowledge, and behavior — before it ever sends a message on WhatsApp." />
 <style>
  :root {
   --dark: #0D0D0D;
   --dark-2: #111111;
   --dark-border: rgba(255,255,255,0.08);
   --light: #F7F7F8;
   --light-2: #EFEFEF;
   --light-border: rgba(0,0,0,0.07);
   --text-light: #0D0D0D;
   --text-muted: #6E6E80;
   --font: -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif;
   --mono: ui-monospace, "SF Mono", Menlo, Monaco, monospace;
  }
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  html { scroll-behavior: smooth; }
  body {
   font-family: var(--font);
   background: var(--light);
   color: var(--text-light);
   -webkit-font-smoothing: antialiased;
   overflow-x: hidden;
  }

  /* NAV */
  .nav {
   position: fixed; top: 0; left: 0; right: 0; z-index: 100;
   display: flex; align-items: center; justify-content: space-between;
   padding: 0 40px; height: 56px;
   background: rgba(13,13,13,0.88);
   backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px);
   border-bottom: 1px solid var(--dark-border);
  }
  .nav-logo { display: flex; align-items: center; text-decoration: none; }
  .nav-wordmark {
   font-size: 17px; font-weight: 700; letter-spacing: -0.02em;
   color: rgba(255,255,255,0.92);
   display: flex; align-items: flex-start; gap: 2px;
  }
  .nav-wordmark-dot {
   width: 5px; height: 5px; border-radius: 50%;
   background: rgba(255,255,255,0.92);
   margin-top: 4px; flex-shrink: 0;
  }
  .nav-by {
   font-size: 12px; color: rgba(255,255,255,0.28);
   margin-left: 10px; font-weight: 400;
  }
  .nav-by a { color: inherit; text-decoration: none; transition: color 0.2s; }
  .nav-by a:hover { color: rgba(255,255,255,0.5); }
  .nav-links { display: flex; align-items: center; gap: 4px; }
  .nav-link {
   font-size: 13px; color: rgba(255,255,255,0.42);
   text-decoration: none; padding: 6px 12px; border-radius: 6px;
   transition: color 0.2s, background 0.2s;
  }
  .nav-link:hover { color: rgba(255,255,255,0.75); background: rgba(255,255,255,0.06); }
  .nav-cta {
   font-size: 13px; font-weight: 600; color: var(--dark);
   background: rgba(255,255,255,0.92); border: none;
   padding: 7px 16px; border-radius: 7px; cursor: pointer;
   text-decoration: none; transition: background 0.15s, transform 0.15s;
   margin-left: 8px;
  }
  .nav-cta:hover { background: #fff; transform: translateY(-1px); }

  /* HERO */
  .hero {
   min-height: 100vh; background: var(--dark);
   display: flex; flex-direction: column;
   align-items: center; justify-content: center;
   padding: 120px 40px 100px; position: relative; overflow: hidden;
  }
  .hero::before {
   content: ""; position: absolute;
   top: 45%; left: 50%; transform: translate(-50%, -50%);
   width: 700px; height: 700px;
   background: radial-gradient(circle, rgba(255,255,255,0.035) 0%, transparent 68%);
   pointer-events: none;
  }

  /* Orbital */
  .hero-orbital {
   width: 110px; height: 110px; margin-bottom: 52px;
   opacity: 0; animation: fadeUp 0.9s ease 0.1s forwards;
  }
  .orb-path { fill: none; stroke: rgba(255,255,255,0.18); stroke-width: 1; }
  .orb-electron { fill: rgba(255,255,255,0.85); }
  .orb-nucleus { fill: rgba(255,255,255,0.88); }
  .orb-ring-1 {
   transform-origin: 55px 55px;
   animation: orbitSpin1 14s linear infinite;
  }
  .orb-ring-2 {
   transform-origin: 55px 55px;
   animation: orbitSpin2 20s linear infinite;
  }
  .orb-ring-3 {
   transform-origin: 55px 55px;
   animation: orbitSpin3 9s linear infinite;
  }
  @keyframes orbitSpin1 { to { transform: rotate(360deg); } }
  @keyframes orbitSpin2 { to { transform: rotate(-360deg); } }
  @keyframes orbitSpin3 { to { transform: rotate(360deg); } }

  /* Hero copy */
  .hero-inner {
   text-align: center; max-width: 620px;
   position: relative; z-index: 1;
  }
  .hero-label {
   font-size: 11px; font-weight: 500; letter-spacing: 0.1em;
   text-transform: uppercase; color: rgba(255,255,255,0.24);
   margin-bottom: 24px;
   opacity: 0; animation: fadeUp 0.7s ease 0.25s forwards;
  }
  .hero-h1 {
   font-size: clamp(36px, 5.5vw, 60px);
   font-weight: 700; line-height: 1.1; letter-spacing: -0.03em;
   color: rgba(255,255,255,0.94);
   margin-bottom: 20px;
   opacity: 0; animation: fadeUp 0.8s ease 0.35s forwards;
  }
  .hero-p {
   font-size: 16px; line-height: 1.7;
   color: rgba(255,255,255,0.4);
   max-width: 460px; margin: 0 auto 40px;
   opacity: 0; animation: fadeUp 0.7s ease 0.48s forwards;
  }
  .hero-btns {
   display: flex; align-items: center; justify-content: center;
   gap: 10px; flex-wrap: wrap;
   opacity: 0; animation: fadeUp 0.7s ease 0.58s forwards;
  }
  .btn-w {
   font-size: 14px; font-weight: 600; color: var(--dark);
   background: rgba(255,255,255,0.94); border: none;
   padding: 11px 22px; border-radius: 8px;
   cursor: pointer; text-decoration: none;
   display: inline-flex; align-items: center; gap: 7px;
   transition: background 0.15s, transform 0.15s;
  }
  .btn-w:hover { background: #fff; transform: translateY(-1px); }
  .btn-w svg { width: 13px; height: 13px; stroke: var(--dark); fill: none; stroke-width: 2; stroke-linecap: round; stroke-linejoin: round; }
  .btn-ghost {
   font-size: 14px; color: rgba(255,255,255,0.4);
   text-decoration: none; padding: 11px 18px; border-radius: 8px;
   border: 1px solid rgba(255,255,255,0.1);
   display: inline-flex; align-items: center; gap: 6px;
   transition: color 0.2s, border-color 0.2s, transform 0.15s;
  }
  .btn-ghost:hover { color: rgba(255,255,255,0.7); border-color: rgba(255,255,255,0.2); transform: translateY(-1px); }
  .hero-note {
   margin-top: 28px; font-size: 12px; color: rgba(255,255,255,0.18);
   opacity: 0; animation: fadeUp 0.6s ease 0.72s forwards;
  }

  /* SECTIONS */
  .section { padding: 88px 40px; background: var(--light); }
  .section.white { background: #fff; }
  .section-in { max-width: 940px; margin: 0 auto; }
  .s-label {
   font-size: 11px; font-weight: 500; letter-spacing: 0.1em;
   text-transform: uppercase; color: var(--text-muted); margin-bottom: 14px;
  }
  .s-title {
   font-size: clamp(22px, 3vw, 34px);
   font-weight: 700; letter-spacing: -0.025em; line-height: 1.2;
   color: var(--text-light); margin-bottom: 12px;
  }
  .s-sub {
   font-size: 15px; line-height: 1.65; color: var(--text-muted);
   max-width: 460px; margin-bottom: 52px;
  }

  /* Steps grid */
  .steps {
   display: grid; grid-template-columns: repeat(3, 1fr);
   border: 1px solid var(--light-border); border-radius: 12px;
   overflow: hidden; gap: 1px; background: var(--light-border);
  }
  .step { background: var(--light); padding: 30px 26px; }
  .section.white .step { background: #fff; }
  .step-n {
   font-size: 11px; font-weight: 600; letter-spacing: 0.08em;
   color: var(--text-muted); margin-bottom: 14px;
   font-family: var(--mono);
  }
  .step-t { font-size: 15px; font-weight: 600; letter-spacing: -0.01em; color: var(--text-light); margin-bottom: 8px; }
  .step-d { font-size: 13px; line-height: 1.65; color: var(--text-muted); }

  /* Features grid */
  .feat-grid {
   display: grid; grid-template-columns: repeat(2, 1fr);
   border: 1px solid var(--light-border); border-radius: 12px;
   overflow: hidden; gap: 1px; background: var(--light-border);
  }
  .feat { background: var(--light); padding: 26px 24px; display: flex; gap: 14px; align-items: flex-start; transition: background 0.15s; }
  .feat:hover { background: var(--light-2); }
  .section.white .feat { background: #fff; }
  .section.white .feat:hover { background: #F5F5F5; }
  .feat-ico {
   width: 30px; height: 30px;
   border: 1px solid var(--light-border); border-radius: 7px;
   background: var(--light-2); display: grid; place-items: center; flex-shrink: 0;
  }
  .section.white .feat-ico { background: var(--light); }
  .feat-ico svg { width: 14px; height: 14px; stroke: var(--text-muted); fill: none; stroke-width: 1.5; stroke-linecap: round; stroke-linejoin: round; }
  .feat-t { font-size: 14px; font-weight: 600; letter-spacing: -0.01em; color: var(--text-light); margin-bottom: 5px; }
  .feat-d { font-size: 13px; line-height: 1.6; color: var(--text-muted); }
 .stat-grid {
  display: grid; grid-template-columns: repeat(2, 1fr);
  gap: 14px; margin-bottom: 22px;
 }
 .stat {
  border: 1px solid var(--light-border); border-radius: 12px;
  background: #fff; padding: 18px 18px 16px;
 }
 .stat-k {
  font-size: 26px; font-weight: 700; letter-spacing: -0.02em; color: var(--text-light);
 }
 .stat-l {
  margin-top: 4px; font-size: 12px; letter-spacing: 0.04em; text-transform: uppercase;
  color: var(--text-muted);
 }
 .missing-grid {
  display: grid; grid-template-columns: repeat(2, 1fr);
  border: 1px solid var(--light-border); border-radius: 12px;
  overflow: hidden; gap: 1px; background: var(--light-border);
 }
 .missing {
  background: #fff; padding: 22px 20px;
 }
 .missing-t { font-size: 15px; font-weight: 600; letter-spacing: -0.01em; color: var(--text-light); margin-bottom: 8px; }
 .missing-d { font-size: 13px; line-height: 1.65; color: var(--text-muted); }

  /* CTA band */
  .cta-band { padding: 88px 40px; background: var(--dark); text-align: center; }
  .cta-in { max-width: 500px; margin: 0 auto; }
  .cta-h { font-size: clamp(22px, 3.5vw, 38px); font-weight: 700; letter-spacing: -0.03em; line-height: 1.15; color: rgba(255,255,255,0.92); margin-bottom: 14px; }
  .cta-p { font-size: 15px; line-height: 1.6; color: rgba(255,255,255,0.35); margin-bottom: 32px; }

  /* Divider */
  .divider { height: 1px; background: var(--light-border); }

  /* Footer */
  .footer {
   background: var(--dark-2); border-top: 1px solid var(--dark-border);
   padding: 28px 40px;
   display: flex; align-items: center; justify-content: space-between;
   flex-wrap: wrap; gap: 14px;
  }
  .f-brand {
   display: flex; align-items: center; gap: 6px;
   font-size: 14px; font-weight: 700; letter-spacing: -0.01em;
   color: rgba(255,255,255,0.45); text-decoration: none;
  }
  .f-brand-dot {
   width: 4px; height: 4px; border-radius: 50%;
   background: rgba(255,255,255,0.45);
   display: inline-block; margin-bottom: 6px;
  }
  .f-links { display: flex; align-items: center; gap: 18px; }
  .f-link { font-size: 12px; color: rgba(255,255,255,0.28); text-decoration: none; transition: color 0.2s; }
  .f-link:hover { color: rgba(255,255,255,0.55); }
  .f-copy { font-size: 12px; color: rgba(255,255,255,0.16); }

  /* Scroll fade */
  .fade-in { opacity: 0; transform: translateY(10px); transition: opacity 0.55s ease, transform 0.55s ease; }
  .fade-in.is-vis { opacity: 1; transform: translateY(0); }

  @keyframes fadeUp {
   from { opacity: 0; transform: translateY(12px); }
   to  { opacity: 1; transform: translateY(0); }
  }

  @media (max-width: 760px) {
   .nav { padding: 0 20px; }
   .nav-links .nav-link { display: none; }
   .hero { padding: 100px 24px 72px; }
   .section { padding: 60px 24px; }
  .steps { grid-template-columns: 1fr; }
  .feat-grid { grid-template-columns: 1fr; }
  .stat-grid { grid-template-columns: 1fr; }
  .missing-grid { grid-template-columns: 1fr; }
  .cta-band { padding: 60px 24px; }
  .footer { padding: 24px 20px; flex-direction: column; align-items: flex-start; }
  }
 </style>
</head>
<body>

<!-- NAV -->
<nav class="nav">
 <a href="#" class="nav-logo">
  <span class="nav-wordmark">e-meow<span class="nav-wordmark-dot"></span></span>
  <span class="nav-by">by <a href="https://.me"></a></span>
 </a>
 <div class="nav-links">
  <a href="#how" class="nav-link">How it works</a>
  <a href="#features" class="nav-link">Features</a>
  <a href="#missing" class="nav-link">What's missing</a>
  <a href="mailto:hello@.me" class="nav-cta">Get access</a>
 </div>
</nav>

<!-- HERO -->
<section class="hero">
 <!-- Orbital SVG -->
 <svg class="hero-orbital" viewBox="0 0 110 110" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <g class="orb-ring-1">
   <ellipse class="orb-path" cx="55" cy="55" rx="44" ry="16"/>
   <circle class="orb-electron" cx="99" cy="55" r="3"/>
  </g>
  <g class="orb-ring-2" style="transform:rotate(60deg);transform-origin:55px 55px">
   <ellipse class="orb-path" cx="55" cy="55" rx="44" ry="16"/>
   <circle class="orb-electron" cx="99" cy="55" r="3"/>
  </g>
  <g class="orb-ring-3" style="transform:rotate(-60deg);transform-origin:55px 55px">
   <ellipse class="orb-path" cx="55" cy="55" rx="44" ry="16"/>
   <circle class="orb-electron" cx="11" cy="55" r="3"/>
  </g>
  <circle class="orb-nucleus" cx="55" cy="55" r="4.5"/>
 </svg>

 <div class="hero-inner">
  <p class="hero-label">e-meow · by </p>
  <h1 class="hero-h1">Build the AI behind the conversation.</h1>
  <p class="hero-p">E-meow is where you shape your agent's voice, knowledge, and behavior — before it ever sends a message on WhatsApp.</p>
  <div class="hero-btns">
   <a href="mailto:hello@.me" class="btn-w">
    Request early access
    <svg viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
   </a>
   <a href="#how" class="btn-ghost">See how it works</a>
  </div>
  <p class="hero-note">Part of the ecosystem · built for WhatsApp</p>
 </div>
</section>

<!-- HOW IT WORKS -->
<section class="section" id="how">
 <div class="section-in">
  <div class="fade-in">
   <p class="s-label">How it works</p>
   <h2 class="s-title">From setup to live agent in three steps.</h2>
   <p class="s-sub">E-meow turns the complexity of AI configuration into a clean, structured workflow anyone can run.</p>
  </div>
  <div class="steps fade-in">
   <div class="step">
    <div class="step-n">01</div>
    <div class="step-t">Define the agent</div>
    <div class="step-d">Set its name, role, tone, and personality. Give it a purpose and a communication style that fits your business.</div>
   </div>
   <div class="step">
    <div class="step-n">02</div>
    <div class="step-t">Add knowledge</div>
    <div class="step-d">Upload documents, FAQs, and product information. E-meow turns your content into context your agent can reason with.</div>
   </div>
   <div class="step">
    <div class="step-n">03</div>
    <div class="step-t">Deploy to WhatsApp</div>
    <div class="step-d">Connect to your WhatsApp number and go live. Your agent handles conversations — you stay in control.</div>
   </div>
  </div>
 </div>
</section>

<div class="divider"></div>

<!-- FEATURES -->
<section class="section white" id="features">
 <div class="section-in">
  <div class="fade-in">
   <p class="s-label">Features</p>
   <h2 class="s-title">Everything you need to build a capable agent.</h2>
   <p class="s-sub">Full control over how your AI thinks, talks, and responds — without writing a single line of code.</p>
  </div>
  <div class="feat-grid fade-in">
   <div class="feat">
    <div class="feat-ico"><svg viewBox="0 0 24 24"><path d="M12 20h9M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"/></svg></div>
    <div>
     <div class="feat-t">Persona editor</div>
     <div class="feat-d">Write your agent's identity in plain language. Set its name, tone, constraints, and how it communicates.</div>
    </div>
   </div>
   <div class="feat">
    <div class="feat-ico"><svg viewBox="0 0 24 24"><path d="M4 19.5A2.5 2.5 0 016.5 17H20M4 4.5A2.5 2.5 0 016.5 7H20v13H6.5A2.5 2.5 0 014 17.5v-13z"/></svg></div>
    <div>
     <div class="feat-t">Knowledge base</div>
     <div class="feat-d">Upload PDFs, paste text, or link documents. Your agent learns from your content and references it accurately.</div>
    </div>
   </div>
   <div class="feat">
    <div class="feat-ico"><svg viewBox="0 0 24 24"><path d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18"/></svg></div>
    <div>
     <div class="feat-t">Flow logic</div>
     <div class="feat-d">Define how your agent qualifies, routes, and hands off conversations — based on your business rules.</div>
    </div>
   </div>
   <div class="feat">
    <div class="feat-ico"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M19.07 4.93a10 10 0 010 14.14M4.93 4.93a10 10 0 000 14.14M15.54 8.46a5 5 0 010 7.07M8.46 8.46a5 5 0 000 7.07"/></svg></div>
    <div>
     <div class="feat-t">WhatsApp-native</div>
     <div class="feat-d">Built for WhatsApp Business. Connects directly — no middleware, no extra tools, no technical setup required.</div>
    </div>
   </div>
   <div class="feat">
    <div class="feat-ico"><svg viewBox="0 0 24 24"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg></div>
    <div>
     <div class="feat-t">Guardrails</div>
     <div class="feat-d">Set hard limits on what your agent can and can't say. Stay compliant and on-brand across every conversation.</div>
    </div>
   </div>
   <div class="feat">
    <div class="feat-ico"><svg viewBox="0 0 24 24"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg></div>
    <div>
     <div class="feat-t">Conversation insights</div>
     <div class="feat-d">See what your agent says, how leads respond, and where handoffs happen. Improve over time with real data.</div>
    </div>
   </div>
  </div>
 </div>
</section>

<div class="divider"></div>

<!-- WHAT'S MISSING -->
<section class="section white" id="missing">
 <div class="section-in">
  <div class="fade-in">
   <p class="s-label">Build status</p>
   <h2 class="s-title">What’s missing before production launch.</h2>
   <p class="s-sub">The backend foundations are in place, but key product workflows are still being built. Estimated completion: 45–50% overall.</p>
  </div>
  <div class="stat-grid fade-in">
   <div class="stat">
    <p class="stat-k">70–80%</p>
    <p class="stat-l">Infrastructure complete</p>
   </div>
   <div class="stat">
    <p class="stat-k">25–35%</p>
    <p class="stat-l">User-facing product complete</p>
   </div>
  </div>
  <div class="missing-grid fade-in">
   <div class="missing">
    <p class="missing-t">Campaign execution</p>
    <p class="missing-d">Campaign editor, scheduling, email sending, and delivery state handling are still needed.</p>
   </div>
   <div class="missing">
    <p class="missing-t">Contact operations</p>
    <p class="missing-d">Contacts UI, CSV import, unsubscribe logic, and segmentation/tagging workflows are pending.</p>
   </div>
   <div class="missing">
    <p class="missing-t">Templates + analytics</p>
    <p class="missing-d">Template builder/preview and campaign analytics (open, click, bounce, unsubscribe) must be added.</p>
   </div>
   <div class="missing">
    <p class="missing-t">AI actions + domains</p>
    <p class="missing-d">Smart AI command center, action logs, and a settings screen for domain add/verify are still missing.</p>
   </div>
  </div>
 </div>
</section>

<!-- CTA -->
<section class="cta-band">
 <div class="cta-in fade-in">
  <h2 class="cta-h">Your agent is ready to be built.</h2>
  <p class="cta-p">E-meow is in early access. Join the list and be among the first to configure your AI on WhatsApp.</p>
  <a href="mailto:hello@.me" class="btn-w">Request early access</a>
 </div>
</section>

<!-- FOOTER -->
<footer class="footer">
 <a href="#" class="f-brand">e-meow<span class="f-brand-dot"></span></a>
 <div class="f-links">
  <a href="https://.me" class="f-link">.me</a>
  <a href="e-meow-privacy.html" class="f-link">Privacy policy</a>
  <a href="e-meow-terms.html" class="f-link">Terms &amp; conditions</a>
  <a href="mailto:hello@.me" class="f-link">Contact</a>
 </div>
 <p class="f-copy">© 2025 . All rights reserved.</p>
</footer>

<script>
 const faders = document.querySelectorAll('.fade-in');
 const io = new IntersectionObserver(entries => {
  entries.forEach(e => {
   if (e.isIntersecting) { e.target.classList.add('is-vis'); io.unobserve(e.target); }
  });
 }, { threshold: 0.1 });
 faders.forEach(el => io.observe(el));
</script>
</body>
</html>`;
      return new Response(html, {
        headers: { "content-type": "text/html;charset=UTF-8" },
      });
    }
    return new Response("Not Found", { status: 404 });
  },
};
