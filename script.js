/* ================================================
   PHARMACY FUNDING — MAIN SCRIPT
   ================================================ */

/* ── Data ────────────────────────────────────────── */

const ASSIST = [
  { ttl: 'First pharmacy acquisition',         desc: 'Finance structured around your first purchase.' },
  { ttl: 'Multi-site group expansion',          desc: 'Funding for your second, third, or tenth site.' },
  { ttl: 'Refinance & debt restructuring',      desc: 'Review existing borrowing and reduce your cost of funds.' },
  { ttl: 'Commercial property purchase',        desc: 'Buy the freehold or remortgage your existing premises.' },
  { ttl: 'Refurbishment & fit-out',             desc: 'Modernise your dispensary or retail space.' },
  { ttl: 'Buy-in & buy-out funding',            desc: 'Finance partner transitions smoothly and quickly.' },
  { ttl: 'Equipment & asset finance',           desc: 'Fund dispensing robots, PMR systems, and more.' },
  { ttl: 'Working capital',                     desc: 'Smooth cash flow gaps linked to NHS payment cycles.' },
];

const FUNDING = [
  {
    id:    'acquisition',
    title: 'Acquisition Finance',
    desc:  'Finance to buy your first pharmacy or add to your existing group.',
    hl:    'Up to 85% LTV — potentially 100%',
    items: [
      'First pharmacy acquisitions',
      'Second and subsequent acquisitions',
      'Up to 85% LTV, potentially 100% using first site as additional security',
      'NHS dispensing income used in affordability assessment',
      'Goodwill, fixtures and fittings, and property included',
    ],
  },
  {
    id:    'group-growth',
    title: 'Group Growth & M&A Finance',
    desc:  'Structured funding for multi-site operators expanding through acquisition.',
    hl:    'Multi-site & portfolio deals',
    items: [
      'Single or multi-site acquisitions',
      'Portfolio and M&A transactions',
      'Refinance across the group to release equity',
      'Lenders who understand pharmacy group dynamics',
      'Finance structured around consolidated dispensing data',
    ],
  },
  {
    id:    'refinance',
    title: 'Refinance & Debt Restructuring',
    desc:  'Review existing borrowing to reduce cost of funds and improve cash flow.',
    hl:    'Reduce cost of borrowing',
    items: [
      'Refinance of existing acquisition or property loans',
      'Consolidation of multiple facilities',
      'Release of equity for reinvestment',
      'Interest rate review and renegotiation',
      'Bridging finance where speed is required',
    ],
  },
  {
    id:    'property',
    title: 'Commercial Property Finance',
    desc:  'Buy the freehold of your pharmacy premises or remortgage to release equity.',
    hl:    'Freehold purchase & remortgage',
    items: [
      'Purchase of freehold pharmacy premises',
      'Commercial remortgage for equity release',
      'Mixed-use properties with pharmacy ground floor',
      'New build and development finance',
      'Lease extensions and lease-to-freehold',
    ],
  },
  {
    id:    'refurb',
    title: 'Refurbishment & Fit-Out Finance',
    desc:  'Fund the modernisation of your dispensary, consultation room, or retail area.',
    hl:    'Dispensary & retail upgrades',
    items: [
      'Dispensary redesign and refit',
      'Consultation room installation',
      'Retail area refurbishment',
      'Accessibility upgrades',
      'Linked to FP34 dispensing data for affordability',
    ],
  },
  {
    id:    'buyin',
    title: 'Buy-In & Buy-Out Funding',
    desc:  'Finance partner transitions — whether buying in or buying out a co-owner.',
    hl:    'Partner transitions',
    items: [
      'Incoming partner buy-in finance',
      'Outgoing partner buy-out funding',
      'Structured over appropriate terms to match cash flow',
      'Specialist lenders familiar with pharmacy partnership models',
      'Legal and valuation support referrals available',
    ],
  },
  {
    id:    'asset',
    title: 'Equipment & Asset Finance',
    desc:  'Fund dispensing automation, PMR systems, and other capital equipment.',
    hl:    'Robots, PMR & fit-out assets',
    items: [
      'Dispensing robots (Rowa, Apoteca, and others)',
      'PMR and patient management systems',
      'Refrigeration, consultation room equipment',
      'Delivery vehicles',
      'Hire purchase, finance lease, and operating lease options',
    ],
  },
  {
    id:    'working-capital',
    title: 'Working Capital',
    desc:  'Manage the cash flow gaps that come with NHS monthly payment cycles.',
    hl:    'NHS cash flow management',
    items: [
      'Revolving credit facilities',
      'Invoice finance and factoring',
      'Overdraft alternatives',
      'Linked to FP34 and NHS dispensing patterns',
      'Short-term and ongoing facilities available',
    ],
  },
];

const STEPS = [
  {
    n: '1',
    title: 'Initial Consultation',
    text: 'We start with a conversation — no paperwork, no obligation. We\'ll listen to what you\'re trying to achieve, understand your pharmacy\'s position and help you think through the right type of funding for your situation.',
  },
  {
    n: '2',
    title: 'Fact Find',
    text: 'Once you\'re ready to proceed, we gather the information lenders will need: dispensing data, FP34s, accounts, and details of the transaction. We do this efficiently so you\'re not spending time on unnecessary admin.',
  },
  {
    n: '3',
    title: 'Market Review',
    text: 'We approach our panel of specialist pharmacy lenders — not generic high-street banks — and present your case in the way most likely to secure approval and the best terms.',
  },
  {
    n: '4',
    title: 'Recommendation',
    text: 'We present you with the most suitable offers, explain the terms clearly, and give you our honest recommendation. You decide — no pressure, no pushing you towards any particular lender.',
  },
  {
    n: '5',
    title: 'Application & Credit',
    text: 'We manage the application and credit process on your behalf — liaising with the lender, responding to queries, and keeping things moving to minimise delays.',
  },
  {
    n: '6',
    title: 'Drawdown & Beyond',
    text: 'Once the facility is in place, we remain available. As your pharmacy grows or your funding requirements change, we\'re here to help you structure the next step.',
  },
];

const WHY = [
  { title: 'Sector specialists',        body: 'We understand NHS income streams, FP34s, dispensing data and how lenders assess pharmacy goodwill. That knowledge means your application is structured correctly from the start.',
    icon: '<circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/>' },
  { title: 'Whole-of-market access',    body: 'We work with a wide panel of specialist pharmacy lenders — not just one bank. More options means better terms and a higher probability of approval.',
    icon: '<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>' },
  { title: 'No fee to you',             body: 'We\'re paid commission by the lender who funds your transaction. We tell you the amount before the arrangement completes — full transparency, no hidden charges.',
    icon: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/>' },
  { title: 'Bespoke applications',      body: 'We don\'t send generic applications. Every submission is structured around your specific pharmacy, your numbers, and your ambitions.',
    icon: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>' },
  { title: 'Start to finish',           body: 'From initial enquiry through to drawdown, we manage the process and the lender relationship. You focus on running your pharmacy.',
    icon: '<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>' },
  { title: 'FCA regulated',             body: 'Pharmacy Funding is a trading style of Stoneacre Assets Limited, authorised and regulated by the Financial Conduct Authority (FCA No 1009039).',
    icon: '<path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 0 0 1.946-.806 3.42 3.42 0 0 1 4.438 0 3.42 3.42 0 0 0 1.946.806 3.42 3.42 0 0 1 3.138 3.138 3.42 3.42 0 0 0 .806 1.946 3.42 3.42 0 0 1 0 4.438 3.42 3.42 0 0 0-.806 1.946 3.42 3.42 0 0 1-3.138 3.138 3.42 3.42 0 0 0-1.946.806 3.42 3.42 0 0 1-4.438 0 3.42 3.42 0 0 0-1.946-.806 3.42 3.42 0 0 1-3.138-3.138 3.42 3.42 0 0 0-.806-1.946 3.42 3.42 0 0 1 0-4.438 3.42 3.42 0 0 0 .806-1.946 3.42 3.42 0 0 1 3.138-3.138z"/>' },
];

/* Selector: 4 user situations with descriptions and targeted chip links */
const CHOICES = [
  {
    label: 'Buy a pharmacy',
    icon: '<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>',
    panelHeading: 'Buying a pharmacy',
    desc: 'Whether it\'s your first pharmacy or another for the group, we\'ll structure acquisition finance and any property element to maximise approval.',
    chips: [
      { label: 'Acquisition Finance',         id: 'acquisition' },
      { label: 'M&A / Group Growth Finance',  id: 'group-growth' },
      { label: 'Commercial Property Finance', id: 'property' },
    ],
    cta: false,
  },
  {
    label: 'Grow my pharmacy',
    icon: '<polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/>',
    panelHeading: 'Growing your pharmacy',
    desc: 'From multi-site expansion to releasing equity or buying in a partner, here\'s where we\'d focus.',
    chips: [
      { label: 'M&A / Group Growth Finance',    id: 'group-growth' },
      { label: 'Refinance & Debt Restructuring', id: 'refinance' },
      { label: 'Pharmacist Buy-In / Buy-Out',    id: 'buyin' },
    ],
    cta: true,
  },
  {
    label: 'Improve cash flow',
    icon: '<line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>',
    panelHeading: 'Improving cash flow',
    desc: 'Smooth out seasonal gaps, fund stock and staffing, or restructure existing debt to ease monthly repayments.',
    chips: [
      { label: 'Working Capital Finance',        id: 'working-capital' },
      { label: 'Refinance & Debt Restructuring', id: 'refinance' },
    ],
    cta: true,
  },
  {
    label: 'Upgrade my premises',
    icon: '<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>',
    panelHeading: 'Upgrading your premises',
    desc: 'Refurbishment, fit-out, new equipment or a freehold purchase — funded so it supports growth and compliance.',
    chips: [
      { label: 'Refurbishment & Fit-Out Finance', id: 'refurb' },
      { label: 'Commercial Property Finance',     id: 'property' },
      { label: 'Equipment & Asset Finance',       id: 'asset' },
    ],
    cta: true,
  },
];

/* ── Render helpers ──────────────────────────────── */

function checkIcon() {
  return `<svg viewBox="0 0 24 24" fill="none" stroke-width="2.5"><path d="M20 6 9 17l-5-5" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
}

function arrowIcon() {
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 6l6 6-6 6" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
}

/* ── Assist list ─────────────────────────────────── */

function buildAssistList() {
  const el = document.getElementById('assistList');
  if (!el) return;
  el.innerHTML = ASSIST.map((a, i) => `
    <a class="row rv${i > 1 ? ' d' + Math.min(i % 4, 4) : ''}" href="fundingOptions.html" aria-label="${a.ttl}">
      <div class="num">0${i + 1}</div>
      <div>
        <div class="ttl">${a.ttl}</div>
        <div class="desc">${a.desc}</div>
      </div>
      <div class="arrow">${arrowIcon()}</div>
    </a>
  `).join('');
}

/* ── Funding grid ─────────────────────────────────── */

function buildFundingGrid() {
  const el = document.getElementById('fundingGrid');
  if (!el) return;
  el.innerHTML = FUNDING.map((f, i) => `
    <div class="fcard rv" id="fc-${f.id}">
      <div class="fnum">Option ${String(i + 1).padStart(2, '0')}</div>
      <h3>${f.title}</h3>
      <p class="fd">${f.desc}</p>
      <ul>
        ${f.items.map(it => `<li>${checkIcon()}<span>${it}</span></li>`).join('')}
      </ul>
      ${f.hl ? `<span class="hl">${f.hl}</span>` : ''}
    </div>
  `).join('');
}

/* ── Timeline ─────────────────────────────────────── */

function buildTimeline() {
  const el = document.getElementById('timeline');
  if (!el) return;
  el.innerHTML = STEPS.map((s, i) => `
    <div class="step rv${i > 0 ? ' d' + Math.min(i, 4) : ''}">
      <div class="node">${s.n}</div>
      <div>
        <h3>${s.title}</h3>
        <p>${s.text}</p>
      </div>
    </div>
  `).join('');
}

/* ── Why grid ─────────────────────────────────────── */

function buildWhyGrid() {
  const el = document.getElementById('whyGrid');
  if (!el) return;
  el.innerHTML = WHY.map((w, i) => `
    <div class="w rv${i > 0 ? ' d' + Math.min(i, 4) : ''}">
      <div class="w-ic"><svg viewBox="0 0 24 24">${w.icon}</svg></div>
      <h4>${w.title}</h4>
      <p>${w.body}</p>
    </div>
  `).join('');
}

/* ── Funding selector ────────────────────────────── */

function buildSelector() {
  document.querySelectorAll('.sel-mount').forEach(mount => {
    const isHome = !document.getElementById('fundingGrid');

    mount.innerHTML = `
      <div class="selector">
        <h2>What do you need your funding for?</h2>
        <p class="sd">Tell us what you're trying to achieve and we'll point you straight to the right finance.</p>
        <div class="choices" role="group" aria-label="Funding situation selector">
          ${CHOICES.map((c, i) => `
            <button class="choice rv d${Math.min(i, 3)}" data-idx="${i}" aria-pressed="false">
              <svg class="ci" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">${c.icon}</svg>
              <span class="ct">${c.label}</span>
            </button>
          `).join('')}
        </div>
        <div class="result" role="region" aria-live="polite">
          <div class="r-title"></div>
          <p class="r-desc"></p>
          <div class="recs"></div>
          <div class="r-cta"></div>
        </div>
      </div>
    `;

    mount.querySelectorAll('.choice').forEach(btn => {
      btn.addEventListener('click', () => {
        const idx = parseInt(btn.dataset.idx);
        const choice = CHOICES[idx];
        const result = mount.querySelector('.result');
        const wasSelected = btn.classList.contains('sel');

        mount.querySelectorAll('.choice').forEach(b => {
          b.classList.remove('sel');
          b.setAttribute('aria-pressed', 'false');
        });

        if (wasSelected) {
          result.classList.remove('show');
          return;
        }

        btn.classList.add('sel');
        btn.setAttribute('aria-pressed', 'true');

        result.querySelector('.r-title').textContent = choice.panelHeading;
        result.querySelector('.r-desc').textContent = choice.desc;
        result.querySelector('.recs').innerHTML = choice.chips.map(chip =>
          isHome
            ? `<a class="chip" href="fundingOptions.html#fc-${chip.id}">${chip.label}</a>`
            : `<button class="chip" data-target="fc-${chip.id}">${chip.label}</button>`
        ).join('');

        result.querySelector('.r-cta').innerHTML = choice.cta
          ? `<a class="cta-btn" href="contact.html" style="margin-top:6px">Get a no-obligation answer ${arrowIcon()}</a>`
          : '';

        result.classList.add('show');

        if (!isHome) {
          result.querySelectorAll('.chip[data-target]').forEach(chip => {
            chip.addEventListener('click', () => {
              const card = document.getElementById(chip.dataset.target);
              if (!card) return;
              card.scrollIntoView({ behavior: 'smooth', block: 'center' });
              setTimeout(() => card.classList.add('flash'), 350);
              setTimeout(() => card.classList.remove('flash'), 1100);
            });
          });
        }
      });
    });
  });
}

/* ── Scroll reveal ────────────────────────────────── */

function initScrollReveal() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.08 });
  document.querySelectorAll('.rv').forEach(el => obs.observe(el));
}

/* ── Header scroll shadow ────────────────────────── */

function initHeaderScroll() {
  const hdr = document.getElementById('hdr');
  if (!hdr) return;
  const update = () => hdr.classList.toggle('scrolled', window.scrollY > 260);
  window.addEventListener('scroll', update, { passive: true });
  update();
}

/* ── Burger menu ──────────────────────────────────── */

function initBurger() {
  const burger = document.getElementById('burger');
  const nav    = document.getElementById('nav');
  if (!burger || !nav) return;

  burger.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    burger.setAttribute('aria-expanded', open);
    const spans = burger.querySelectorAll('span');
    if (open) {
      spans[0].style.transform = 'translateY(7px) rotate(45deg)';
      spans[1].style.opacity   = '0';
      spans[2].style.transform = 'translateY(-7px) rotate(-45deg)';
    } else {
      spans.forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
    }
  });

  document.addEventListener('click', e => {
    if (!burger.contains(e.target) && !nav.contains(e.target)) {
      nav.classList.remove('open');
      burger.setAttribute('aria-expanded', 'false');
      burger.querySelectorAll('span').forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
    }
  });
}

/* ── Copyright year ───────────────────────────────── */

function setYear() {
  document.querySelectorAll('#yr').forEach(el => {
    el.textContent = new Date().getFullYear();
  });
}

/* ── Deep-link hash scroll (fundingOptions.html) ─── */

function handleHashScroll() {
  if (!window.location.hash) return;
  const target = document.querySelector(window.location.hash);
  if (!target) return;
  setTimeout(() => {
    target.scrollIntoView({ behavior: 'smooth', block: 'center' });
    setTimeout(() => target.classList.add('flash'), 400);
    setTimeout(() => target.classList.remove('flash'), 1150);
  }, 300);
}

/* ── Contact form ─────────────────────────────────── */

function initContactForm() {
  const form   = document.getElementById('enquiry');
  const thanks = document.querySelector('.thanks');
  if (!form || !thanks) return;

  form.addEventListener('submit', e => {
    e.preventDefault();
    form.style.display = 'none';
    thanks.classList.add('show');
    window.scrollTo({ top: thanks.getBoundingClientRect().top + window.scrollY - 100, behavior: 'smooth' });
  });
}

/* ── Photo slideshow ──────────────────────────────── */

function initSlideshow() {
  const wrap = document.querySelector('.slides');
  if (!wrap) return;

  const slides = wrap.querySelectorAll('.slide');
  const dots   = document.querySelectorAll('.slide-dot');
  if (!slides.length) return;

  let current = 0;
  let timer;

  function goTo(n) {
    slides[current].classList.remove('active');
    dots[current]?.classList.remove('active');
    current = (n + slides.length) % slides.length;
    slides[current].classList.add('active');
    dots[current]?.classList.add('active');
  }

  function next() { goTo(current + 1); }
  function prev() { goTo(current - 1); }

  function autoplay() {
    clearInterval(timer);
    timer = setInterval(next, 5000);
  }

  slides[0].classList.add('active');
  dots[0]?.classList.add('active');
  autoplay();

  document.querySelector('.slide-nav-btn.next')?.addEventListener('click', () => { next(); autoplay(); });
  document.querySelector('.slide-nav-btn.prev')?.addEventListener('click', () => { prev(); autoplay(); });
  dots.forEach((dot, i) => dot.addEventListener('click', () => { goTo(i); autoplay(); }));
  wrap.addEventListener('mouseenter', () => clearInterval(timer));
  wrap.addEventListener('mouseleave', autoplay);
}

/* ── Init ─────────────────────────────────────────── */

document.addEventListener('DOMContentLoaded', () => {
  buildAssistList();
  buildFundingGrid();
  buildTimeline();
  buildWhyGrid();
  buildSelector();
  initScrollReveal();
  initHeaderScroll();
  initBurger();
  initContactForm();
  initSlideshow();
  setYear();
  handleHashScroll();
});
