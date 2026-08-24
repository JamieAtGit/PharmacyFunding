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
    title: 'Pharmacy Acquisition Finance',
    desc:  'For buying an existing pharmacy or starting ownership for the first time.',
    hl:    'Up to 80% LTV — potentially 100%',
    items: [
      'Purchase of independent pharmacies',
      'Group acquisitions',
      'First-time buyers',
      'Goodwill + property acquisition',
      'Loan to value up to 80% (potentially 100% depending on circumstances)',
    ],
  },
  {
    id:    'group-growth',
    title: 'M&A / Group Growth Finance',
    desc:  'For pharmacy groups or ambitious operators.',
    hl:    'Multi-site & portfolio deals',
    items: [
      'Multi-site expansion',
      'Roll-up strategies',
      'Portfolio refinancing',
      'Growth capital',
      'Up to 100% finance available to buy your second site',
    ],
  },
  {
    id:    'refinance',
    title: 'Pharmacy Refinance & Debt Restructuring',
    desc:  'For improving existing finance arrangements, Pharmacy Funding assists with:',
    hl:    'Reduce cost of borrowing',
    items: [
      'Reviewing existing funding lines to refinance to cheaper interest rates',
      'Consolidating loans',
      'Reducing monthly repayments',
      'Releasing equity from the business',
      'Renegotiating existing lending structures',
    ],
  },
  {
    id:    'property',
    title: 'Commercial Property Finance',
    desc:  'Pharmacy Funding will assist your property finance needs whether it be:',
    hl:    'Freehold purchase & remortgage',
    items: [
      'Freehold purchase',
      'Leasehold funding',
      'Property-backed lending',
      'Expansion into new premises',
    ],
  },
  {
    id:    'refurb',
    title: 'Pharmacy Refurbishment & Fit-Out Finance',
    desc:  'For improving or expanding premises.',
    hl:    'Dispensary & retail upgrades',
    items: [
      'Shopfitting',
      'Dispensing area upgrades',
      'Patient consultation rooms',
      'Refurbishments for compliance or growth',
    ],
  },
  {
    id:    'buyin',
    title: 'Pharmacist Buy In / Buy Out',
    desc:  'Finance for ownership transitions between partners in a pharmacy.',
    hl:    'Partner transitions',
    items: [
      'Buy-In: funding solutions to help pharmacists purchase a share in an existing pharmacy partnership and step into ownership',
      'Buy-Out: finance to support full or partial partner exits, enabling smooth ownership transitions within pharmacy businesses',
    ],
  },
  {
    id:    'asset',
    title: 'Equipment & Asset Finance',
    desc:  'For spreading the cost of asset, equipment and system purchases:',
    hl:    'Robots, PMR & fit-out assets',
    items: [
      'Dispensing automation',
      'IT systems & software',
      'Clinical equipment',
      'Delivery vehicles',
    ],
  },
  {
    id:    'working-capital',
    title: 'Working Capital Finance',
    desc:  'For day-to-day cash flow support.',
    hl:    'NHS cash flow management',
    items: [
      'Stock purchases',
      'Staffing costs',
      'Seasonal cash flow gaps',
      'Supplier payments',
    ],
  },
];

const DETAIL = {
  acquisition: {
    image: 'images/pharmacist-consultation.jpg', imagePos: 'center 30%', optNum: '01',
    what: 'Acquisition finance is a loan structured to fund the purchase of a pharmacy — covering the goodwill (the value of the business), fixtures and fittings, and in some cases the property itself. It is structured specifically around the NHS income and dispensing data of the pharmacy being acquired, not standard business metrics.',
    how: [
      'Lenders assess the pharmacy\'s dispensing volumes, FP34 NHS income and profitability alongside the purchase price — a completely different framework to a standard commercial loan.',
      'Most deals run over 5–15 years with capital and interest repayments calibrated to the pharmacy\'s monthly cash flow.',
      'LTV is typically up to 80% of the purchase price. 100% can be achievable if you have an existing pharmacy or property to offer as additional security.',
      'We present your case exclusively to specialist pharmacy lenders and manage the application from first enquiry through to drawdown.',
    ],
    suitable: [
      'You are buying your first pharmacy and stepping into ownership',
      'You already own a pharmacy and want to add another site to your group',
      'You have been offered a pharmacy and need finance confirmed quickly',
      'You are a pharmacist ready to leave employment and buy your own business',
      'Solicitors have exchanged and you need funds ready for a completion date',
    ],
    steps: [
      { n: '01', title: 'Initial conversation', text: 'Tell us about the pharmacy, the asking price, and your background. No paperwork at this stage — just a clear picture of what you\'re trying to achieve.' },
      { n: '02', title: 'Fact find', text: 'We collect dispensing data (FP34s), recent accounts, and transaction details. We do this efficiently to avoid unnecessary admin on your side.' },
      { n: '03', title: 'Lender approach', text: 'We package your case and present it to our panel of specialist pharmacy lenders — framed to maximise the probability of approval and competitive terms.' },
      { n: '04', title: 'Offer & recommendation', text: 'We present the best offers clearly, explain the terms, and give our honest recommendation. The decision is always yours — no pressure.' },
      { n: '05', title: 'Legal & valuation', text: 'Standard commercial conveyancing runs alongside the credit process. We liaise with the lender throughout to keep things moving.' },
      { n: '06', title: 'Drawdown', text: 'Funds released on completion day. We remain available as your pharmacy grows and your next funding need arises.' },
    ],
    similar: ['group-growth', 'buyin', 'property'],
  },
  'group-growth': {
    image: 'images/pharmacist-tablet.jpg', imagePos: 'center 30%', optNum: '02',
    what: 'Group Growth and M&A Finance is built for pharmacy operators who already own one or more pharmacies and want to expand through further acquisition, portfolio deals, or structured mergers. Lenders in this space assess your combined dispensing data and group accounts — not each site in isolation — giving experienced operators greater borrowing power.',
    how: [
      'Your group\'s consolidated income across all sites is used to assess affordability, often unlocking more than a single-site assessment would allow.',
      'We can structure finance across multiple sites simultaneously, or arrange a portfolio acquisition as a single coordinated transaction.',
      'Equity from existing pharmacies can often reduce the deposit requirement on new purchases, accelerating expansion.',
      'Specialist group lenders understand pharmacy group dynamics and can move with far greater speed and flexibility than general commercial banks.',
    ],
    suitable: [
      'You own one or more pharmacies and want to acquire additional sites',
      'You are pursuing a portfolio or multi-site transaction in one go',
      'You want to restructure ownership or equity across a growing group',
      'You need to refinance across existing sites to release equity for further acquisition',
      'Your accountant has recommended a holding company or group restructure',
    ],
    steps: [
      { n: '01', title: 'Group overview', text: 'Share your existing sites, combined dispensing volumes, and what you\'re looking to acquire or restructure.' },
      { n: '02', title: 'Information gathering', text: 'Group accounts, FP34 data across all sites, existing loan schedules, and details of any target acquisition.' },
      { n: '03', title: 'Structure review', text: 'We advise on the most efficient way to finance the expansion — including whether a holding company or cross-site security structure makes sense.' },
      { n: '04', title: 'Lender approach', text: 'We approach specialist pharmacy group lenders — institutions that understand multi-site operators and make decisions accordingly.' },
      { n: '05', title: 'Terms & negotiation', text: 'Offers presented clearly with our honest recommendation. We negotiate on your behalf to secure the most appropriate terms.' },
      { n: '06', title: 'Completion', text: 'Coordinated across all sites where required. We stay in contact as the group continues to evolve.' },
    ],
    similar: ['acquisition', 'refinance', 'property'],
  },
  refinance: {
    image: 'images/currency-uk.jpg', imagePos: 'center center', optNum: '03',
    what: 'Refinance means replacing your existing pharmacy loan — or consolidating multiple facilities — with a new arrangement, usually to reduce your interest rate, extend the term, or release equity. Debt restructuring goes further: reorganising your entire borrowing profile to ease monthly repayments and free up cash flow for reinvestment or further acquisition.',
    how: [
      'We review your existing loan schedule, rate, and remaining term against what is currently available in the specialist pharmacy lending market.',
      'Where multiple loans exist across different sites or assets, we can consolidate them into a single, cleaner facility.',
      'Equity release through remortgaging existing pharmacy goodwill or property can fund further acquisition without requiring a sale.',
      'We give you an honest upfront assessment — if the numbers do not justify a switch after exit penalties and fees, we will tell you before wasting your time.',
    ],
    suitable: [
      'Your existing pharmacy loan was arranged more than two years ago',
      'Your interest rate feels high relative to current market conditions',
      'You have multiple loans you would like to consolidate into one facility',
      'You want to release equity from your pharmacy without selling',
      'Monthly repayments are placing sustained pressure on your cash flow',
    ],
    steps: [
      { n: '01', title: 'Loan schedule review', text: 'Share details of your existing facilities — balances, rates, remaining terms, and any early repayment charges.' },
      { n: '02', title: 'Market comparison', text: 'We benchmark your existing deal against current specialist lender rates to identify genuine savings.' },
      { n: '03', title: 'Honest assessment', text: 'We confirm whether refinancing makes financial sense after accounting for exit penalties and arrangement costs.' },
      { n: '04', title: 'Lender approach', text: 'If it stacks up, we package and present your case to lenders most likely to offer the best terms.' },
      { n: '05', title: 'New facility agreed', text: 'Your existing lender is repaid on completion. We manage the process to ensure a clean, timely switch.' },
      { n: '06', title: 'Ongoing review', text: 'We stay in touch as rates and your business evolve, ensuring your borrowing remains competitive over time.' },
    ],
    similar: ['property', 'working-capital', 'group-growth'],
  },
  property: {
    image: 'images/pharmacist-clipboard.jpg', imagePos: 'center 25%', optNum: '04',
    what: 'Commercial Property Finance covers the purchase of the freehold of your pharmacy premises, a commercial mortgage to refinance existing property debt, or finance for mixed-use buildings where your pharmacy occupies the ground floor. Owning your freehold removes lease renewal uncertainty.',
    how: [
      'Lenders assess property value, the strength of the tenancy (underpinned by NHS income), and your ability to service the debt.',
      'LTV is typically up to 70–75% on commercial property, though specialist pharmacy lenders can often go higher where the pharmacy income is strong.',
      'Finance can cover the property element of a combined acquisition (goodwill plus premises in one transaction) or as a standalone property deal.',
      'Terms typically run 10–25 years, suited to the long-term nature of property ownership.',
    ],
    suitable: [
      'Your landlord has offered to sell the freehold of your premises',
      'You want to purchase the building your pharmacy currently occupies',
      'You are buying a pharmacy where the property is included in the deal price',
      'You have an existing commercial mortgage you want to review or refinance',
      'You want to invest in a mixed-use property for current or future pharmacy use',
    ],
    steps: [
      { n: '01', title: 'Property details', text: 'Address, estimated value, current tenure, and your pharmacy\'s existing relationship with the premises.' },
      { n: '02', title: 'Information gathering', text: 'Accounts, FP34 data, existing mortgage statement (if refinancing), and details of the proposed transaction.' },
      { n: '03', title: 'Valuation', text: 'The lender instructs an RICS-qualified surveyor to value the property. We can refer you to suitable valuers if needed.' },
      { n: '04', title: 'Lender approach', text: 'We approach commercial property lenders with specific pharmacy sector knowledge and established relationships.' },
      { n: '05', title: 'Legal process', text: 'Standard commercial conveyancing runs alongside credit approval. We liaise with the lender throughout to keep things on track.' },
      { n: '06', title: 'Completion', text: 'Funds released on legal completion. You now own the freehold of your pharmacy premises.' },
    ],
    similar: ['acquisition', 'refinance', 'refurb'],
  },
  refurb: {
    image: 'images/ImgThree.jpg', imagePos: 'center 30%', optNum: '05',
    what: 'Refurbishment Finance funds the modernisation of your pharmacy — dispensary redesign, new consultation rooms, retail area refresh, accessibility upgrades, or automation installation. It can be arranged as a standalone facility secured against NHS income, or incorporated into a wider acquisition or refinance package.',
    how: [
      'Lenders use your pharmacy\'s monthly FP34 NHS income to assess affordability — in many cases no property security is required.',
      'Loan amounts typically range from £30,000 to £500,000 or more depending on project scope, with terms of 3–7 years.',
      'Funds can be drawn in stages as the project progresses, or as a lump sum, depending on how your contractors invoice.',
      'We include project quotes in the lender submission to demonstrate a clear operational return and cash flow justification.',
    ],
    suitable: [
      'Your dispensary layout is outdated or no longer operationally efficient',
      'You want to add a consultation room to deliver enhanced clinical services',
      'Your retail area needs refreshing to improve over-the-counter revenue',
      'You are installing dispensing automation and need to fund the conversion work',
      'You have recently acquired a pharmacy and want to refit it to your standard',
    ],
    steps: [
      { n: '01', title: 'Project scope', text: 'Tell us what you\'re planning and obtain contractor quotes. This makes the lender case significantly stronger from the outset.' },
      { n: '02', title: 'Information gathering', text: 'FP34 dispensing data, recent accounts, and itemised project quotes from contractors or suppliers.' },
      { n: '03', title: 'Lender approach', text: 'We present to lenders who understand pharmacy cash flow and the operational return a well-planned refurbishment delivers.' },
      { n: '04', title: 'Offer confirmed', text: 'Finance agreed before work begins where possible — so you can commit to contractors with confidence.' },
      { n: '05', title: 'Drawdown', text: 'Funds released as required — staged to match contractor invoices or as a lump sum, per the agreed structure.' },
      { n: '06', title: 'Project complete', text: 'New space operational. Repayments structured around the pharmacy\'s monthly dispensing income.' },
    ],
    similar: ['asset', 'acquisition', 'working-capital'],
  },
  buyin: {
    image: 'images/shakingHands.png', imagePos: 'center center', optNum: '06',
    what: 'Buy-In and Buy-Out Finance covers ownership transitions between partners in a pharmacy. A buy-in is where a new partner purchases a stake in an existing business. A buy-out is where one partner acquires the other\'s share — either to become sole owner or to change the ownership split. Both are common in pharmacy and both require finance structured around NHS income and sector-specific valuations.',
    how: [
      'The value of the share being transferred is agreed — typically based on an independent valuation or a multiple of dispensing income and profitability.',
      'Finance is arranged for the incoming partner (buy-in) or the remaining partner taking over full ownership (buy-out).',
      'Repayment terms are structured to the pharmacy\'s cash flow, typically over 5–10 years.',
      'Specialist lenders understand pharmacy partnership models and the sector\'s unique valuation conventions, ensuring a smoother and faster process.',
    ],
    suitable: [
      'You are a pharmacist looking to buy into an existing practice as a partner',
      'You want to buy out your co-owner and take full control of the business',
      'A partner is retiring and you need to fund the buy-out of their share',
      'You are bringing in a new partner and they need finance to fund their stake',
      'A partnership agreement\'s put and call option is being exercised',
    ],
    steps: [
      { n: '01', title: 'Partnership overview', text: 'Share the current ownership structure, the proposed change, and the agreed or estimated value of the share being transferred.' },
      { n: '02', title: 'Valuation', text: 'If no valuation is in place, we can refer you to specialist pharmacy sector valuers to establish an agreed, defensible share price.' },
      { n: '03', title: 'Heads of terms', text: 'Legal heads of terms document the transaction structure and are agreed before approaching lenders.' },
      { n: '04', title: 'Lender approach', text: 'We approach lenders experienced in pharmacy partnership transitions — those familiar with the sector\'s valuation conventions.' },
      { n: '05', title: 'Finance agreed', text: 'Terms structured to the incoming or remaining partner\'s cash flow, typically over 5–10 years.' },
      { n: '06', title: 'Legal completion', text: 'Solicitors handle the partnership deed and share transfer. We liaise with lenders to align timelines and avoid delays.' },
    ],
    similar: ['acquisition', 'group-growth', 'refinance'],
  },
  asset: {
    image: 'images/mach4.png', imagePos: 'center center', imageSize: '85%', optNum: '07',
    what: 'Asset Finance allows you to fund capital equipment — dispensing robots, PMR systems, delivery vehicles, refrigeration, and other clinical or operational assets — without drawing on working capital or cash reserves. The asset itself or the pharmacy\'s income provides the security, keeping your balance sheet flexible and your cash available for the business.',
    how: [
      'Hire Purchase: Fixed monthly payments to acquire the asset. Once all payments (and any option-to-purchase fee) have been made, ownership transfers to you. The asset is generally recognised on your balance sheet, and businesses can typically claim tax relief through capital allowances (or depreciation for accounting purposes, depending on the jurisdiction and tax rules).',
      'Finance Lease: You lease the asset for most of its useful life, making fixed rental payments. At the end of the term, you may continue leasing, refinance, sell the asset on behalf of the lessor, or return it, depending on the agreement. Often used for higher-value equipment and technology.',
      'Operating Lease: A rental agreement where you use the asset for a fixed period and typically return it at the end of the lease. Often suited to vehicles and equipment that you want to upgrade regularly. (Accounting treatment depends on the accounting standards applicable to your business.)',
      'Speed of arranging finance: Finance for smaller items can often be arranged within 24–48 hours (subject to lender approval), making asset finance one of the quicker funding options available to pharmacies.',
    ],
    suitable: [
      'You are investing in a dispensing robot, carousel, or pharmacy automation system',
      'You need to replace or upgrade your PMR or patient management software and hardware',
      'You are purchasing a delivery vehicle to run a new or expanded delivery service',
      'You want to preserve working capital by spreading the cost of major equipment',
      'You have a supplier quote and want to check whether finance makes commercial sense',
    ],
    steps: [
      { n: '01', title: 'Equipment details', text: 'Tell us what you\'re buying, the supplier, and the quoted price. A pro-forma invoice speeds things up significantly.' },
      { n: '02', title: 'Quick assessment', text: 'For most equipment we can provide indicative terms within 24 hours — no lengthy fact-find required for smaller items.' },
      { n: '03', title: 'Documents signed', text: 'Straightforward process with minimal paperwork, particularly for pharmacies with a clean credit and trading history.' },
      { n: '04', title: 'Supplier paid', text: 'Funds paid directly to the supplier on your behalf. You take delivery of the equipment.' },
      { n: '05', title: 'Asset in use', text: 'Fixed monthly repayments begin. Asset operational and delivering operational return from day one.' },
    ],
    similar: ['refurb', 'working-capital', 'acquisition'],
  },
  'working-capital': {
    image: 'images/currency-world.jpg', imagePos: 'center center', optNum: '08',
    what: 'Working Capital Finance helps pharmacies manage the cash flow gaps that arise from NHS monthly payment cycles, stock purchasing, staffing costs and seasonal fluctuations in prescription volumes. Depending on your needs, solutions may include dedicated working capital facilities such as revolving credit facilities, business overdrafts or invoice finance, providing flexible access to funds to support day-to-day operations and business growth.',
    how: [
      'Revolving credit facility: Works like a flexible loan, allowing you to draw down and repay funds as needed, paying interest only on the balance you use at any given time.',
      'Business overdraft: Provides access to an agreed borrowing limit linked to your business current account, offering short-term flexibility to cover temporary cash flow fluctuations. Interest is typically charged only on the amount overdrawn, although fees may also apply.',
      'Invoice finance: Releases cash against your NHS FP34 income before payment is received, reducing the gap between dispensing prescriptions and receiving NHS funds.',
      'Funding limits: Facilities are typically sized based on your monthly NHS income, dispensing patterns and operating costs, rather than relying solely on a generic business credit score.',
      'Designed for pharmacies: Specialist lenders understand the predictability of NHS income, meaning funding solutions can often be tailored to the cash flow needs of pharmacy businesses.',
    ],
    suitable: [
      'Your pharmacy regularly experiences a cash flow gap between month-start and the NHS payment date',
      'You need short-term finance to stock up ahead of a seasonal prescription peak',
      'You want a buffer facility available on demand without re-applying each time you need it',
      'Your existing bank overdraft is insufficient, expensive, or under regular review',
      'You are opening a new dispensary and need cash flow support during the early months',
    ],
    steps: [
      { n: '01', title: 'Cash flow review', text: 'Share your monthly NHS income and typical expenditure pattern. A simple one-page cash flow summary is sufficient to begin.' },
      { n: '02', title: 'FP34 data', text: 'We use your dispensing data to size the facility correctly and build the lender submission around your actual income patterns.' },
      { n: '03', title: 'Lender approach', text: 'We approach specialist lenders with NHS income-linked working capital products — not generic business loan providers.' },
      { n: '04', title: 'Facility agreed', text: 'Revolving credit, business overdraft or invoice-based facility, sized to your real needs and structured for maximum flexibility.' },
      { n: '05', title: 'Drawdown', text: 'Access funds within the agreed facility as and when required. Repay when NHS payments arrive each month.' },
      { n: '06', title: 'Ongoing management', text: 'Facility reviewed as your dispensing volumes grow. We remain your point of contact for any changes or queries.' },
    ],
    similar: ['refinance', 'asset', 'refurb'],
  },
};

const STEPS = [
  {
    n: '1',
    title: 'Initial Meeting',
    text: 'We start with an initial meeting either face to face or online to discuss your specific needs and circumstances. This is crucial for us to gain an understanding of your business.',
  },
  {
    n: '2',
    title: 'Gathering of Information',
    text: 'We will request various pieces of information such as Annual Accounts, Management Information and FP34s. This enables us to assess the best finance solutions for your business.',
  },
  {
    n: '3',
    title: 'Building your Funding Application',
    text: 'Based on our meeting and review of information provided, we produce a bespoke business plan which will outline the various financing options and demonstrate viability of the funding proposal.',
  },
  {
    n: '4',
    title: 'Engaging with Potential Funders',
    text: 'Pharmacy Funding approaches potential funders for you, informing you of the lenders that have been approached, the indicative interest rates and fees quoted along with any specific lender requirements. Once all indicative options have been received, we write a recommendation report outlining the best funder partners and take this forward to a formal offer. We guide you through every step.',
  },
  {
    n: '5',
    title: 'Funding Approval and Drawdown',
    text: 'We finalise the terms and oversee the transaction until the funds are drawn, ensuring the funds are released promptly.',
  },
  {
    n: '6',
    title: 'Post Funding Support & Reviews',
    text: 'Once funding is in place, we remain available to support ongoing needs, refinancing opportunities and future growth plans. We review your position as your business evolves.',
  },
];

const WHY = [
  {
    icon: '<path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" fill="none"/>',
    title: 'Specialist Pharmacy Finance Expertise',
    body: 'We focus exclusively on the pharmacy sector, meaning we understand NHS income, dispensing data, and the way pharmacy businesses are valued and financed.',
  },
  {
    icon: '<circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="1.8" fill="none"/><path d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" fill="none"/>',
    title: 'Access to Specialist Lenders',
    body: 'We work with a wide range of lenders, including those who actively fund pharmacy acquisitions, refinances, and growth projects — giving you options beyond traditional high-street banks.',
  },
  {
    icon: '<polyline points="22 12 18 12 15 21 9 3 6 12 2 12" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" fill="none"/>',
    title: 'Structured to Improve Approval Chances',
    body: 'We help present your application in a way lenders understand, improving clarity, structure, and funding outcomes — reducing delays and avoiding unnecessary rejections.',
  },
  {
    icon: '<circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.8" fill="none"/><polyline points="12 6 12 12 16 14" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" fill="none"/>',
    title: 'Faster, More Efficient Process',
    body: 'Because we know the sector and lenders well, we can move quickly from enquiry to decision without unnecessary back and forth.',
  },
  {
    icon: '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" fill="none"/><circle cx="9" cy="7" r="4" stroke="currentColor" stroke-width="1.8" fill="none"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" fill="none"/>',
    title: 'Support From Start to Completion and Beyond',
    body: 'We stay involved throughout the process right through to completion and funding release, building long-term relationships and providing ongoing guidance after drawdown.',
  },
  {
    icon: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" fill="none"/>',
    title: 'Independent & Transparent',
    body: 'We act as an independent credit broker — our focus is on finding suitable funding options for your situation. We are authorised and regulated by the Financial Conduct Authority.',
  },
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
    cta: true,
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
      <a class="fcard-link" href="fundingDetail.html?type=${f.id}">Full details &amp; process ${arrowIcon()}</a>
    </div>
  `).join('');
}

/* ── Detail page ──────────────────────────────────── */

function buildDetail() {
  const root = document.getElementById('detail-root');
  if (!root) return;
  const type = new URLSearchParams(window.location.search).get('type');
  const funding = FUNDING.find(f => f.id === type);
  const detail  = DETAIL[type];
  if (!funding || !detail) {
    root.innerHTML = `<div class="wrap" style="padding:100px 0;text-align:center"><h2>Option not found.</h2><p style="margin-top:16px"><a href="fundingOptions.html">Back to funding options</a></p></div>`;
    return;
  }
  document.title = `${funding.title} | Pharmacy Funding`;
  const idx = FUNDING.indexOf(funding);

  const plusIc = `<span class="suit-ic" aria-hidden="true"><svg viewBox="0 0 18 18" fill="none"><line x1="9" y1="2" x2="9" y2="16" stroke="#0CAD72" stroke-width="2.5" stroke-linecap="round"/><line x1="2" y1="9" x2="16" y2="9" stroke="#0CAD72" stroke-width="2.5" stroke-linecap="round"/></svg></span>`;

  const similarCards = detail.similar.map(sid => {
    const f2 = FUNDING.find(f => f.id === sid);
    if (!f2) return '';
    const n2 = FUNDING.indexOf(f2);
    return `
      <a class="fcard sim-card" href="fundingDetail.html?type=${f2.id}">
        <div class="fnum">Option ${String(n2 + 1).padStart(2, '0')}</div>
        <h3>${f2.title}</h3>
        <p class="fd">${f2.desc}</p>
        <ul>${f2.items.slice(0, 3).map(it => `<li>${checkIcon()}<span>${it}</span></li>`).join('')}</ul>
        ${f2.hl ? `<span class="hl">${f2.hl}</span>` : ''}
        <span class="fcard-link">Full details ${arrowIcon()}</span>
      </a>`;
  }).join('');

  root.innerHTML = `
    <div class="photo-hero" style="background-image:url('${detail.image}');background-position:${detail.imagePos};background-size:${detail.imageSize || 'cover'}">
      <div class="wrap">
        <span class="eyebrow">Option ${detail.optNum}</span>
        <h1>${funding.title}</h1>
        <p class="sub">${funding.desc}</p>
        <a class="cta-btn" href="contact.html">Get a no-obligation quote ${arrowIcon()}</a>
      </div>
    </div>
    <main>
      <section class="detail-sec">
        <div class="wrap">
          <div class="detail-grid">
            <div>
              <span class="eyebrow blue">What is it?</span>
              <h2 style="margin-top:12px">${funding.title}</h2>
            </div>
            <p class="lead">${detail.what}</p>
          </div>
        </div>
      </section>
      <div class="band">
        <section class="detail-sec">
          <div class="wrap">
            <span class="eyebrow blue">How does it work?</span>
            <h2 style="margin-top:12px;max-width:28ch">The mechanics, explained simply.</h2>
            <ul class="detail-how">
              ${detail.how.map(h => `<li>${h}</li>`).join('')}
            </ul>
          </div>
        </section>
      </div>
      <section class="detail-sec">
        <div class="wrap">
          <div class="detail-grid">
            <div>
              <span class="eyebrow blue">Is it right for you?</span>
              <h2 style="margin-top:12px;max-width:20ch">You may be in the right place if&hellip;</h2>
            </div>
            <ul class="suitable-list">
              ${detail.suitable.map(s => `<li>${plusIc}<span>${s}</span></li>`).join('')}
            </ul>
          </div>
        </div>
      </section>
      <div class="band">
        <section class="detail-sec">
          <div class="wrap">
            <span class="eyebrow blue">The process</span>
            <h2 style="margin-top:12px;max-width:28ch">Step by step, from enquiry to completion.</h2>
            <div class="timeline" style="margin-top:40px">
              ${detail.steps.map(s => `
                <div class="step">
                  <div class="node">${s.n}</div>
                  <div><h3>${s.title}</h3><p>${s.text}</p></div>
                </div>`).join('')}
            </div>
          </div>
        </section>
      </div>
      <section class="detail-sec">
        <div class="wrap">
          <span class="eyebrow blue">Why Pharmacy Funding?</span>
          <h2 style="margin-top:12px;max-width:28ch">Specialists in pharmacy finance.</h2>
          <p style="margin-top:16px;max-width:62ch;color:var(--ink-soft);font-size:15.5px;line-height:1.7">Unlike generalist brokers, we work exclusively in the pharmacy sector. Every lender on our panel understands NHS income, dispensing data, and the commercial dynamics of pharmacy ownership — which means your case is assessed by people who know the sector, not just the numbers. We manage the lender relationship on your behalf from start to completion, and we're paid by the lender, not by you.</p>
          <div class="why" id="whyGrid" style="margin-top:36px"></div>
        </div>
      </section>
      <div class="band">
        <section class="detail-sec">
          <div class="wrap">
            <span class="eyebrow blue">Related options</span>
            <h2 style="margin-top:12px;max-width:28ch">Other funding types you may need.</h2>
            <div class="sim-grid" style="margin-top:36px">${similarCards}</div>
          </div>
        </section>
      </div>
      <div class="cta-band">
        <div class="wrap">
          <h2>Ready to explore your options?</h2>
          <p>The initial conversation costs nothing. We'll give you a clear picture of what's possible for your pharmacy.</p>
          <div class="actions">
            <a class="cta-btn" href="contact.html">Start the conversation ${arrowIcon()}</a>
            <a class="cta-btn ghost" href="tel:+441727222476">Call 01727 222 476</a>
          </div>
        </div>
      </div>
    </main>`;

  buildWhyGrid(true);
  observeNew(root);
}

/* ── Timeline ─────────────────────────────────────── */

function buildTimeline(noAnim) {
  const el = document.getElementById('timeline');
  if (!el) return;
  el.innerHTML = STEPS.map((s, i) => `
    <div class="step${noAnim ? '' : ' rv' + (i > 0 ? ' d' + Math.min(i, 4) : '')}">
      <div class="node">${s.n}</div>
      <div>
        <h3>${s.title}</h3>
        <p>${s.text}</p>
      </div>
    </div>
  `).join('');
}

/* ── Why grid ─────────────────────────────────────── */

function buildWhyGrid(noAnim) {
  const el = document.getElementById('whyGrid');
  if (!el) return;
  el.innerHTML = WHY.map((w, i) => `
    <div class="w${noAnim ? '' : ' rv' + (i > 0 ? ' d' + Math.min(i, 4) : '')}">
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

let rvObserver;
function initScrollReveal() {
  rvObserver = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        rvObserver.unobserve(e.target);
      }
    });
  }, { threshold: 0.08 });
  document.querySelectorAll('.rv').forEach(el => rvObserver.observe(el));
}
function observeNew(root) {
  if (!rvObserver) return;
  (root || document).querySelectorAll('.rv').forEach(el => rvObserver.observe(el));
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
    const data = new URLSearchParams(new FormData(form)).toString();
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: data,
    }).finally(() => {
      form.style.display = 'none';
      thanks.classList.add('show');
      window.scrollTo({ top: thanks.getBoundingClientRect().top + window.scrollY - 100, behavior: 'smooth' });
    });
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
  const isHowItWorks = !!document.getElementById('timeline');
  buildAssistList();
  buildFundingGrid();
  buildTimeline(isHowItWorks);
  buildWhyGrid(isHowItWorks);
  buildSelector();
  buildDetail();
  initScrollReveal();
  initHeaderScroll();
  initBurger();
  initContactForm();
  initSlideshow();
  setYear();
  handleHashScroll();
});
