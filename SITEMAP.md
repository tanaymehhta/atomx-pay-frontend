# AtomX Pay — Sitemap & Page Specification

> A page-by-page map of the AtomX Pay website and product. For each page this file lists three things: **Purpose** (why the page exists), **Information on the page** (what content it holds), and **Links to** (the other pages it references). Grounded in `ATOMX_KNOWLEDGE_BASE.md` and modeled on the page structures of major remittance sites (Wise, Remitly, Western Union, MoneyGram, WorldRemit, Xoom, Revolut, Ria, Instarem).

**Canonical facts reused throughout:** USD to INR corridor, about 15 minute settlement, $4 flat fee (0% FX markup), $2 minimum, zero fee on first transfer, MSB-licensed in the USA, FIU-registered in India, payout via UPI / IMPS / RTGS.

**Rule:** no em dashes anywhere in copy.

---

## How to read this

The site is split into two halves, the same way every remittance site we studied is split:

1. **Public site** — anyone can see it. Marketing, proof, pricing, help, legal.
2. **Logged-in product** — only after sign in. Dashboard, recipients, send flow, history.

Every page below is marked **[Public]** or **[Login]**.

---

## 1. Sitemap tree (the quick view)

### Public site
```
/ (Home)
├─ /how-it-works
├─ /pricing                      (fees + live rate calculator)
├─ /send-money                   (product hub)
│   └─ /send-money/india         (corridor page; growth pattern for future corridors)
├─ /why-atomx                    (speed / transparency / compliance / no middlemen)
├─ /compliance                   (licensing + security + KYC/AML)
├─ /about
├─ /resources                    (blog / news / podcast / case studies)
│   └─ /resources/{article-slug}
├─ /help                         (FAQ + contact)
│   ├─ /help/track               (track a transfer by reference, no login)
│   └─ /help/fraud               (fraud and safety)
├─ /currency-converter           (USD to INR live rate tool)
├─ /login
├─ /register
└─ Legal
    ├─ /privacy-policy
    ├─ /terms-of-service
    └─ /licenses
```

### Logged-in product
```
/app (after login)
├─ /welcome                      (onboarding checklist, new users)
├─ /get-verified                 (KYC via Plaid IDV)
├─ /bank                         (link bank / payment method via Plaid Link)
├─ /dashboard                    (account home)
├─ /send-money                   (the real transfer flow)
├─ /recipients                   (manage recipients)
├─ /transactions                 (history)
└─ /profile                      (settings)
```

---

## 2. Public pages (full detail)

### 2.1 Home — `/` [Public]
**Purpose:** The front door. Sell the feeling of sending money home in minutes, and push the visitor into the calculator or sign up.

**Information on the page:**
- Hero: "Global Remittances in 15 Minutes." Subtext: "No preloaded rates. No banking middleman. No delay." Trust badges: 100% Compliant, No Hidden Fees, Encrypted Security.
- Live rate calculator (You Send / They Receive, live USD to INR rate, $4 flat fee, ~15 minute transfer time, "Zero fee for the first transfer").
- Comparison block: "Traditional Rails vs. Blockchain Rails" (AtomX vs banks, MSBs, other fintech).
- How It Works: the 3 steps in short form.
- Why AtomX value pillars: Speed, Transparency, Compliance, No middlemen.
- Compliance band: "Built on Blockchain. Backed by Compliance."
- Testimonials (Sandeep R., Rahul K., Priya M.).
- FAQ preview (top 4 to 5 questions).
- Resources preview (latest 3 articles).
- Footer.

**Links to:** `/register` (primary CTA "Get Started"), `/send-money` (calculator "Start Transfer"), `/pricing`, `/how-it-works`, `/why-atomx`, `/compliance`, `/about`, `/help`, `/resources`, `/login`, `/privacy-policy`, `/terms-of-service`.

---

### 2.2 How It Works — `/how-it-works` [Public]
**Purpose:** Explain the 3-step mechanic for visitors who want detail before signing up.

**Information on the page:**
- Section title: "How AtomX Pay works?" Subtitle: "Watch your money travel the modern way, zero middlemen, zero delays."
- Step 1: Sign Up & Verify (quick KYC for sender and receiver).
- Step 2: Connect & Lock In Rates (link bank or wallet, see live rate with zero markup, lock the rate).
- Step 3: Transfer & Settle (blockchain rails, track every stage, done in 15 minutes).
- Supported rails callout: US side ACH, Wire, RTP, FedNow, Zelle, Debit Card; India side UPI, IMPS, RTGS.
- Compliance band.

**Links to:** `/register` ("Get Started"), `/pricing`, `/compliance`, `/help` (for deeper questions), `/send-money`.

---

### 2.3 Pricing — `/pricing` [Public]
**Purpose:** Show the cost plainly. This is a differentiation page since most rivals hide fees in the FX rate.

**Information on the page:**
- Headline fee: $4 flat per transfer, 0% FX markup, live "Google" market rate.
- First transfer free promo.
- Embedded live rate calculator (You Send, They Receive, Live Exchange Rate, Flat Fee, Transfer Time, Total Cost).
- Limits: $2 minimum, max enforced per corridor.
- Full comparison table (AtomX vs Wells Fargo, SBI, ICICI, Western Union, Remitly, Wise) with FX markup, fee, and time.
- Note on what "no hidden fees" means.

**Links to:** `/send-money` ("Start Transfer"), `/register`, `/how-it-works`, `/why-atomx`, `/currency-converter`, `/help` (fee FAQ).

---

### 2.4 Send Money (hub) — `/send-money` [Public]
**Purpose:** The product landing page. For a logged-out visitor it is a marketing + entry page; once logged in it becomes the real transfer flow (see 3.5).

**Information on the page:**
- What you can do: send USD to INR, payout to UPI or Indian bank.
- Live calculator entry.
- Short reminder of speed, fee, and compliance.
- Corridor highlight (India), with room to add more corridors later.

**Links to:** `/login` and `/register` (to start a real transfer), `/send-money/india`, `/pricing`, `/how-it-works`.

---

### 2.5 Corridor page — `/send-money/india` [Public]
**Purpose:** SEO + intent capture. Every remittance site we studied leans on "send money to [country]" pages as their main search engine; this is the AtomX version, starting with the live India corridor.

**Information on the page:**
- "Send money to India in 15 minutes."
- Live USD to INR rate, $4 fee, first transfer free.
- Payout methods in India: UPI, IMPS, RTGS, bank deposit.
- Local trust notes: FIU-registered in India.
- Mini FAQ specific to India transfers.
- Calculator.

**Links to:** `/register`, `/send-money`, `/pricing`, `/help/track`, `/compliance`.

> Growth note: when new corridors launch, repeat this template at `/send-money/{country}` and link them from a corridor index under `/send-money`.

---

### 2.6 Why AtomX — `/why-atomx` [Public]
**Purpose:** Make the four value pillars explicit instead of leaving them implied in the comparison table.

**Information on the page:**
- Speed: ~15 minute settlement vs 1 to 5 days traditional.
- Transparency: live market rate, 0% markup, fee shown before you confirm. "What I see is what they get."
- Compliance: MSB-licensed US, FIU-registered India, AML/CFT, bank-grade encryption.
- No middlemen: direct blockchain settlement, zero correspondent banks.
- Infrastructure comparison table (Traditional vs Fintech wrapper vs AtomX).

**Links to:** `/compliance`, `/how-it-works`, `/pricing`, `/register`.

---

### 2.7 Compliance — `/compliance` [Public]
**Purpose:** The trust and safety page. Standard and important in this industry.

**Information on the page:**
- Licensing: MSB-licensed in the USA, FIU-registered in India.
- "Built on Blockchain. Backed by Compliance."
- KYC / AML explanation, required by US federal regulations (FinCEN).
- Identity verification handled by Plaid IDV (live selfie, government ID, automated checks).
- Security: bank-grade encryption.
- Legal entities: AtomX Pay Inc (USA), AtomX Pay Private Limited (India).

**Links to:** `/get-verified` (or `/register` if logged out), `/privacy-policy`, `/terms-of-service`, `/licenses`, `/help/fraud`.

---

### 2.8 About — `/about` [Public]
**Purpose:** Company story and credibility.

**Information on the page:**
- Founders: global professionals, average 18+ years across US and India in Web3, payments, risk, compliance.
- Mission: blockchain plus regulated financial infrastructure.
- The problem: cross-border payments are slow, expensive, opaque (1 to 2 day settlement, 2 to 5% cost).
- Our belief: sending money abroad should feel as simple as sending an email.
- Our solution: blockchain rails connecting domestic banking systems, near real-time settlement, live rates, fewer intermediaries.
- Stealth-mode note.

**Links to:** `/compliance`, `/resources`, `/help` (contact), `/register`.

---

### 2.9 Resources — `/resources` [Public]
**Purpose:** Content library for SEO and trust. "Latest News & Insights."

**Information on the page:**
- Article cards with title, type, date, read time, excerpt. Current set: Blockchain and Cross-Border Payments; Financial Inclusion with Blockchain; Regulatory Compliance in Fintech; Blockchain Rails Talk Podcast S2 E8; TechGlobal case study; Regulatory Framework Updates 2025.
- Categories or filters (article, podcast, case study).

**Links to:** each `/resources/{article-slug}`, `/register` (closing CTA), `/about`.

---

### 2.10 Article — `/resources/{article-slug}` [Public]
**Purpose:** Individual blog post, podcast, or case study.

**Information on the page:**
- Title, date, read time, body, author where relevant (for example Sarah Chen, CTO at AtomX Pay on the podcast).
- Related articles list.
- CTA back into the product.

**Links to:** `/resources` (back to index), related `/resources/{slug}` pages, `/register`.

---

### 2.11 Help / FAQ — `/help` [Public]
**Purpose:** Self-serve support and contact.

**Information on the page:**
- FAQ (verbatim set): How do I send money; What payment methods are supported; How long does a transfer take; Why should I trust AtomX Pay; What are the transfer fees; KYC documents and process.
- Contact: contactus@atomxpay.com for queries and grievances.
- Links into track and fraud sub-pages.

**Links to:** `/help/track`, `/help/fraud`, `/pricing` (fee questions), `/compliance` (KYC questions), `/register`.

---

### 2.12 Track a transfer — `/help/track` [Public]
**Purpose:** Let a sender or recipient check status by reference number without logging in. Western Union, MoneyGram, and Ria all offer this; it is a useful trust feature.

**Information on the page:**
- Input field for transfer reference / ID.
- Status stages (initiated, funded, in settlement, delivered).
- Note on EST time zone and that delivery can depend on local banking hours.

**Links to:** `/login` (full history), `/help`, `/help/fraud`.

---

### 2.13 Fraud and safety — `/help/fraud` [Public]
**Purpose:** Scam awareness and how to stay safe.

**Information on the page:**
- Common scam patterns and warnings.
- How AtomX protects transfers (KYC, encryption, compliance).
- How to report a problem (contactus@atomxpay.com).

**Links to:** `/compliance`, `/help`, `/help/track`.

---

### 2.14 Currency converter — `/currency-converter` [Public]
**Purpose:** Top-of-funnel rate tool, the same acquisition pattern Wise, Revolut, and MoneyGram use.

**Information on the page:**
- Live USD to INR rate (auto-refreshing), with amount input.
- "Live market rate, zero margin" message.
- CTA to start a real transfer.

**Links to:** `/send-money`, `/pricing`, `/register`.

---

### 2.15 Login — `/login` [Public]
**Purpose:** Entry to the logged-in product.

**Information on the page:**
- Email / sign-in fields (WorkOS / Azure MSAL auth in the live stack).
- Link to register and to password reset.

**Links to:** `/register`, `/dashboard` (on success), `/help`.

---

### 2.16 Register — `/register` [Public]
**Purpose:** Create an account.

**Information on the page:**
- Sign-up fields.
- Note that next steps (KYC, payment method) take under 5 minutes and are required by US federal regulations.

**Links to:** `/welcome` (on success), `/login`, `/terms-of-service`, `/privacy-policy`.

---

### 2.17 Privacy Policy — `/privacy-policy` [Public]
**Purpose:** Legal. How data is handled.

**Information on the page:** Data collection, use, retention, and rights.

**Links to:** `/terms-of-service`, `/licenses`, `/help`.

---

### 2.18 Terms of Service — `/terms-of-service` [Public]
**Purpose:** Legal. The user agreement.

**Information on the page:** Terms of use, transfer disclaimers (processing, timing, fees and rates determined at transaction time, recipient information accuracy, limits).

**Links to:** `/privacy-policy`, `/licenses`, `/help`.

---

### 2.19 Licenses — `/licenses` [Public]
**Purpose:** Regulatory disclosure. Standard on every compliant remittance site.

**Information on the page:**
- US: AtomX Pay Inc, EIN 39-4492691, MSB license.
- India: AtomX Pay Private Limited, CIN U62099MH2025PTC452119, FIU registration.
- Registered addresses.

**Links to:** `/compliance`, `/privacy-policy`, `/terms-of-service`.

---

## 3. Logged-in product (full detail)

> All of these require login. None should be public or indexed. This matches every site we studied: recipients, dashboard, and history are always behind auth.

### 3.1 Welcome / onboarding — `/welcome` [Login]
**Purpose:** Guide a brand new user through setup.

**Information on the page:**
- "Welcome to AtomX Pay. Your account has been created. Complete a few quick steps to start sending money to India." Note: under 5 minutes, required by US federal regulations.
- Checklist: Create Account, Verify Your Identity (KYC), Add a Payment Method, Add a Recipient.

**Links to:** `/get-verified`, `/bank`, `/recipients`, `/dashboard`.

---

### 3.2 Get Verified (KYC) — `/get-verified` [Login]
**Purpose:** Identity verification to unlock full account features.

**Information on the page:**
- "Required by US financial regulations (FinCEN KYC/AML)."
- Identity verification via Plaid IDV (live selfie, government ID, automated checks).
- States: Identity Verified Successfully, Identity Under Review.

**Links to:** `/bank` (next step), `/dashboard`, `/compliance`.

---

### 3.3 Link bank / payment method — `/bank` [Login]
**Purpose:** Connect a funding source.

**Information on the page:**
- "Link your bank account to start making payments." Plaid Link to connect a US bank account.
- Confirmation: "Your US bank account is connected and ready for transfers."
- Supported US rails: ACH, Wire, RTP, FedNow, Zelle, Debit Card. Credit Card and Apple Pay surfaced; Credit Card "Coming Soon."

**Links to:** `/recipients` (next step), `/send-money`, `/dashboard`.

---

### 3.4 Dashboard — `/dashboard` [Login]
**Purpose:** Account home. The AtomX mental model is a pipe, not a wallet, so this leads with the live in-flight transfer, not a stored balance.

**Information on the page:**
- "Welcome back, …"
- Tiles: Active Transaction (live tracking), Transfer Volume USD (this month), Verified Recipients, Avg Delivery Time.
- Recent Transactions (last 5). Note: times in EST.
- Primary CTA: "Send Money."

**Links to:** `/send-money`, `/recipients`, `/transactions`, `/profile`, `/get-verified` (if KYC incomplete), `/bank` (if no payment method).

---

### 3.5 Send Money flow — `/send-money` [Login]
**Purpose:** The core transaction. Multi-step.

**Information on the page:**
- Select recipient (or "No verified recipients yet" -> Add a Recipient).
- Send Amount / Receive Amount, live rate ("INR, Rate refreshes automatically"), $2 minimum.
- Purpose of Transfer (for example Family Maintenance).
- Payment Method (Debit Card, Apple Pay; Credit Card Coming Soon).
- Review & Confirm: Sender Details, Receiver Details, Exchange Rate (guaranteed), Delivery Time (15 minutes), You Send, Transfer fee, Total to pay, Recipient Receives.
- Disclaimers & Important Information (processing, timing, fees, recipient credit, limits).
- Buttons: Confirm & Pay, Back to Edit. Success: "Payment submitted successfully."

**Links to:** `/recipients` (add recipient), `/bank` (add payment method), `/transactions` (after submit), `/dashboard`, `/terms-of-service` (disclaimers).

---

### 3.6 Recipients — `/recipients` [Login]
**Purpose:** Manage the people you send to.

**Information on the page:**
- List of verified recipients with payout details (UPI / Indian bank).
- Add a recipient flow, recipient KYC where required.
- Edit and remove.

**Links to:** `/send-money` (send to a recipient), `/dashboard`.

---

### 3.7 Transactions — `/transactions` [Login]
**Purpose:** Full transfer history and per-transfer tracking.

**Information on the page:**
- Transaction list (date, amount sent, amount received, recipient, status).
- Per-transfer detail with the live tracking stages.
- Note: times in EST.

**Links to:** `/send-money` (send again), `/help/track`, `/dashboard`.

---

### 3.8 Profile / settings — `/profile` [Login]
**Purpose:** Account settings.

**Information on the page:**
- Personal details, KYC status, linked bank and payment methods, notification and security settings, sign out.

**Links to:** `/get-verified`, `/bank`, `/privacy-policy`, `/terms-of-service`, `/dashboard`.

---

## 4. Global navigation (what every page carries)

**Header (public):** Home, How It Works, Pricing, Why AtomX, Resources, Help, with Login and Get Started buttons.

**Header (logged in):** Dashboard, Send Money, Recipients, Transactions, with Profile menu.

**Footer (every page):** Send Money, Register, Resources, Privacy Policy, Terms of Service, Licenses, contact email (contactus@atomxpay.com), legal entities (AtomX Pay Inc, AtomX Pay Private Limited), copyright.

---

## 5. What is core vs optional

**Core (build first):** Home, Pricing, How It Works, Send Money hub, Login, Register, Welcome, Get Verified, Bank, Dashboard, Send Money flow, Recipients, Transactions, Help/FAQ, Compliance, Privacy, Terms.

**Strong second wave:** Why AtomX, Currency Converter, Track a transfer, Fraud and safety, Resources + articles, About, Licenses, India corridor page.

**Future growth:** more `/send-money/{country}` corridor pages and a corridor index, currency-pair sub-pages under the converter, referral / rewards page.
