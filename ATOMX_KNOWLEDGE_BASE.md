# AtomX Pay — Source Knowledge Base

> **Authoritative content source.** Every website, version, or variant we build for AtomX Pay must reference this file. All product claims, copy, numbers, contact details, and compliance language below are pulled directly from the live AtomX Pay properties. Do not invent new facts, fees, or claims that are not grounded here.

**Sources captured (extracted from the live React/Vite app bundles, since these are client-rendered SPAs):**
- `https://www.atomxpay.com/` — public marketing site
- `https://sandbox.atomxpay.com/` — product app (landing + onboarding/transfer flow; behind auth for deeper screens)
- `https://sandbox.atomxpay.com/v1` — same app shell as sandbox root

_Last extracted: 2026-06-14._

---

## 1. Brand & Positioning

- **Name:** AtomX Pay
- **Primary tagline:** "Global Remittances for Indians in Less Than 15 Minutes" (page title) / hero: **"Global Remittances in 15 Minutes."**
- **Meta description (www):** "Secure, Real-Time and Compliant Transfers at Guaranteed Google Rates. Send money to India instantly with blockchain technology."
- **Meta description (sandbox):** "Fast, secure, and transparent global money transfers using blockchain technology."
- **Company one-liner (www footer):** "Revolutionizing cross-border payments with blockchain technology. Fast, secure, and transparent global money transfers."
- **Company one-liner (sandbox footer):** "Real-time cross-border payments powered by blockchain technology. Fast, secure, and transparent global money transfers."
- **Theme color:** `#4e148c` (purple). Brand gradient used throughout: purple → orange (`from-primary to-accent`, `from-purple-600 to-orange-500`).
- **Core corridor:** USA → India (USD → INR). Receiver payout via UPI / Indian bank rails.

**Hero block (exact copy):**
- Title: "Global Remittances in 15 Minutes."
- Subtitle lines:
  - "No preloaded rates. No banking middleman. No delay."
  - "Atomic settlement with transparent blockchain transfers."
- Trust badges: "100% Compliant", "No Hidden Fees", "Encrypted Security"
- Primary CTA: "Get Started"

**Recurring CTAs / closers:**
- "Ready to experience blockchain-powered transfers?" → "Get Started with AtomX Pay"
- "Start Blockchain Transfer"

---

## 2. Value Proposition (the four pillars)

1. **Speed** — ~15-minute settlement via blockchain rails (vs 1–5 days traditional).
2. **Transparency** — Live "Google" / market exchange rate with zero markup; a low flat fee shown before confirmation; "What I see is what they get."
3. **Compliance** — MSB-licensed in the USA, FIU-registered in India; AML/CFT compliant; bank-grade encryption.
4. **No middlemen** — Direct blockchain settlement, zero correspondent-bank intermediaries.

---

## 3. Fees, Rates & Limits (use these exact numbers)

- **Flat transfer fee:** $4 USD (also expressed as ₹250 INR / €2.5 EUR). A second "comparison" data point lists AtomX fees as USD 3 / EUR 2.5 / INR 250 — **flat fee headline = $4; comparison-table fee = $3.** Use $4 as the canonical headline flat fee unless replicating the comparison table.
- **Exchange-rate markup:** 0% (live market / "Google" rate, zero margin).
- **Promo:** "Zero fee for the first transfer."
- **Transfer time:** "~15 minutes".
- **Minimum transaction amount:** 2 USD.
- **Maximum transaction amount:** variable (enforced per-corridor; shown dynamically in app).
- **Live rate source:** app fetches from `https://open.er-api.com/v6/latest/{base}` (Exchange Rate API). Rate refreshes automatically; labeled "Live Exchange Rate".

**Supported currency pair (live):** USD → INR (`$` → `₹`).

---

## 4. Rate Calculator (homepage widget)

- Title: "Live Rates, Seamless Transfers"
- Labels: "You Send", "They Receive", "Live Exchange Rate", "Flat Fee", "Transfer Time", "Total Cost"
- Values shown: Flat Fee $4 / Transfer Time ~15 minutes / "Zero fee for the first transfer"
- Button: "Start Transfer"

---

## 5. Competitive Comparison Table

**Section title:** "Traditional Rails vs. Blockchain Rails — The Numbers Don't Lie."

Three categories:
- **Traditional Banking Rails**
- **Money Service Businesses (MSBs) using Traditional Rails**
- **Fintech on Blockchain Rails** (AtomX Pay)

| Provider | Category | FX Markup | Fee (USD) | Fee (EUR) | Fee (INR) | Time |
|---|---|---|---|---|---|---|
| **AtomX Pay** | Blockchain | **0%** | **$3** | €2.5 | ₹250 | **~15 minutes** |
| Wells Fargo | Traditional | 5% | $45 | €40 | ₹3500 | 3–5 days |
| SBI | Traditional | 4% | $35 | €30 | ₹2800 | 2–4 days |
| ICICI Bank | Traditional | 3% | $30 | €25 | ₹2500 | 2–3 days |
| Western Union | MSB | 3% | $15 | €12 | ₹1200 | 1–2 days |
| Remitly | MSB | 1.5% | $4.99 | €4.5 | ₹400 | 1–3 days |
| WISE | MSB | 1% | $8 | €7 | ₹650 | 1–2 days |

**Infrastructure comparison ("Traditional Banking Rails vs. Blockchain Rails")** — subtitle: "Infrastructure comparison showing why blockchain rails deliver superior performance". Columns: Traditional / Fintech (digital wrapper) / AtomX.

| Aspect | Traditional | Fintech (wrapper) | AtomX |
|---|---|---|---|
| Settlement Method | Correspondent banking network | Digital interface, same rails | Direct blockchain settlement |
| Infrastructure | SWIFT/ACH networks | API over traditional rails | Native blockchain protocol |
| Operating Hours | Banking business hours | Limited by banking hours | 24/7/365 blockchain network |
| Exchange Rates | Bank-set rates with margins | Pre-loaded pools with markups | Live market rates, zero margin |
| Intermediaries | 3–5 correspondent banks | Digital wrapper, same banks | Zero intermediaries |
| Settlement Speed | 2–5 business days | 1–3 days (still bank-dependent) | 15 minutes blockchain confirmation |
| Transparency | Opaque processing | Limited visibility | Full blockchain transparency |
| Cost Structure | Multiple hidden fees | Fees hidden in FX rates | Transparent: Google rate + fee |

---

## 6. How It Works (3 steps)

**Section title:** "How AtomX Pay works?"
**Subtitle:** "Watch your money travel the modern way — zero middlemen, zero delays"

1. **Sign Up & Verify — Simple and Secure**
   "Create your AtomX Pay account in minutes. Complete quick KYC verification for both sender and receiver to ensure every transfer is safe and fully compliant." (icon: user-check)
2. **Connect & Lock In Rates — No Banking Delays**
   "Link your bank account or digital wallet, then view real-time exchange rates with zero markup. Lock in the exact rate you see — no hidden spreads, no pre-loaded currency pools." (icon: link)
3. **Transfer & Settle — In Just 15 Minutes**
   "Send funds via blockchain rails with end-to-end transparency. Track your transfer at every stage, from initiation to final settlement, completed in just 15 minutes." (icon: send)

**Compliance band:** "Built on Blockchain. Backed by Compliance." — "MSB-licensed in the USA, FIU-registered in India. Blockchain rails with traditional regulatory protection." CTA: "Start Blockchain Transfer".

---

## 7. Testimonials

**Section title:** "What Our Customers Say" — subtitle "Glimpses of our satisfied customers who trust AtomX Pay". All 5-star.

- **Sandeep R.** — Software Engineer, New York — "Family Remittances": "I used to send money to my parents in India through traditional money transfer operators, and it always took a couple of days. With AtomX Pay, my transfers reach them in minutes via UPI — no hidden fees, no delays. It's the easiest way I've ever supported my family."
- **Rahul K.** — Financial Analyst, Chicago — "Transparent & Fair": "With traditional services, I never knew how much my family would actually receive — exchange rates and fees kept changing. AtomX Pay is different. What I see is what they get, every time, and the transfer is complete in minutes."
- **Priya M.** — Product Manager, San Francisco — "Emergency Transfers": "When my brother had a medical emergency, a bank wire would have taken 2–3 days. AtomX Pay delivered the money in under 15 minutes. Knowing I can send funds instantly when my family needs me most has made all the difference."

---

## 8. FAQ (verbatim)

1. **How do I send money with AtomX Pay?** — "You can initiate a transfer directly through our app or website. Simply: Select the country and amount you want to send, Choose your recipient, Fund the transfer using your preferred payment method, Track the transfer in real time until it reaches the recipient."
2. **What payment methods are supported?** — "AtomX Pay supports ACH, Wire, RTP, FedNow, and Debit Cards in the US, as well as UPI, IMPS, and RTGS in India, along with additional local payment rails where available."
3. **How long does a transfer take?** — "Transfers are typically completed in 15 minutes when funds are sent through RTP, Zelle, or FedNow, which settle in real time. For transfers made via ACH or Wire, the 15-minute settlement window applies once the funds are received in your AtomX Pay account."
4. **Why should I trust AtomX Pay?** — "Compliance first: AtomX Pay is fully licensed and compliant with international AML/CFT regulations. Transparent pricing: We offer guaranteed Google exchange rates with no hidden spreads. Secure technology: All transfers are powered by blockchain rails with bank-grade encryption. Proven track record: Trusted by global Indians for fast, reliable cross-border remittances."
5. **What are the transfer fees?** — "We charge a low, flat service fee per transfer, clearly displayed before you confirm your transaction. There are no hidden charges or exchange mark-ups — you always get the exact rate shown."
6. **Which documents are required for KYC? / What is the KYC Process?**
   - (www) "A valid government-issued photo ID (passport, Aadhaar, driver's license, or equivalent), Proof of address (utility bill, bank statement, or rental agreement), In some cases, additional documents may be requested depending on the amount and destination country."
   - (sandbox) "To ensure security and regulatory compliance, identity verification is conducted through our trusted verification partner. The process includes: Live selfie verification to confirm identity, Government-issued ID document verification, Automated data checks against trusted databases. This process is secure, quick, and typically completed within minutes."

---

## 9. About AtomX Pay (sandbox)

- **Founder experience:** "AtomX Pay is founded by experienced global professionals with an average of 18+ years of experience across the U.S. and India in Web3, digital assets, payments, risk management, and regulatory compliance."
- **Mission:** "We are passionate about working at the intersection of blockchain technology and regulated financial infrastructure, bringing meaningful innovation to real-world cross-border payments."
- **Stealth mode:** "AtomX Pay is currently operating in stealth mode as we build next-generation infrastructure for seamless global money movement."
- **The Problem We're Solving** — "Even today, cross-border payments remain slow, expensive, and opaque."
  - Average settlement times: 1–2 business days
  - Total costs: 2–5% or more
  - Lower fees often mean compromised exchange rates
  - Very few providers offer truly live, market-aligned exchange rates
  - Conclusion: "Despite advances in fintech, most international transfers continue to rely on legacy correspondent banking rails."
- **Our Belief** — "Cross-border payments should be as simple as domestic payments. When you send an email, you don't think about whether it's domestic or international — it simply arrives. Sending money across borders should feel just as seamless."
- **Our Solution** — "We leverage blockchain technology to connect domestic banking systems in sender and recipient jurisdictions."
  - Near real-time settlement — not delayed clearing
  - Live, transparent exchange rates
  - Reduced reliance on intermediaries
  - True cross-border efficiency
  - Conclusion: "We combine blockchain rails with regulatory safeguards to deliver genuine real-time settlement — not just faster messaging."

---

## 10. Product / App Flow (sandbox)

**Onboarding (Welcome page):** "Welcome to AtomX Pay" → "Your account has been successfully created. To start sending money to India, complete a few quick steps below." — "These steps take less than 5 minutes and are required to comply with US federal regulations." Steps:
1. Create Account
2. Verify Your Identity (KYC)
3. Add a Payment Method
4. Add a Recipient

**Get Verified screen:** "Complete these steps to unlock full account features." — "Required by US financial regulations (FinCEN KYC/AML)."
- **1. Identity Verification** — "Secure your account with identity verification." Uses **Plaid IDV** (live selfie + government ID + automated data checks). States: "Identity Verified Successfully", "Identity Under Review" ("We've received your information. A manual review is currently in progress." / "Our compliance team is verifying your documents.").
- **2. Payment Method** — "Link your bank account to start making payments." Uses **Plaid Link** to connect a US bank account (e.g., Checking Account ending in ****). "Your US bank account is connected and ready for transfers."

**Dashboard:** "Welcome back, …" — tiles: Active Transaction (Live tracking), Transfer Volume (USD) — "This month", Verified Recipients, Avg Delivery Time, Recent Transactions ("Your last 5 transactions"). Note: "The time mentioned above is in the EST time zone." CTA: "Send Money".

**Send Money flow:**
- Select recipient ("Select a recipient" / "No verified recipients yet" / "Add a Recipient"), Send Amount / Receive Amount, live rate ("Fetching rate…", "INR · Rate refreshes automatically").
- **Purpose of Transfer** (e.g., "Family Maintenance").
- **Payment Method:** Debit Card, Apple Pay; Credit Card = "Coming Soon".
- **Review & Confirm:** Sender Details, Receiver Details, Exchange Rate ("Guaranteed exchange rate"), Delivery Time ("15 Minutes"), You Send (USD) / Transfer amount / Transfer fee / Total to pay / Recipient Receives (INR). Buttons: "Confirm & Pay", "Back to Edit".
- Min 2 USD / max enforced. Success: "Payment submitted successfully".

**Tech stack signals (from bundles):** React + TanStack Router, Vite PWA, Azure (MSAL) + WorkOS auth, Plaid (Link + IDV), Zod validation, libphonenumber. App routes include: login, register, welcome, dashboard, send-money, recipients, transactions, profile, get-verified, bank, resources, privacy-policy, terms-of-service, workos-callback.

---

## 11. Supported Payment Rails & Geography

- **US (collection):** ACH, Wire, RTP, FedNow, Zelle, Debit Cards. (Credit Card / Apple Pay surfaced in UI; Credit Card "Coming Soon".)
- **India (disbursement):** UPI, IMPS, RTGS, plus local bank rails.
- **Currency support claim (blog/marketing):** "Local currencies in over 50 countries." (Live product corridor is USD→INR.)

---

## 12. Legal Disclaimers (Send Money flow — "Disclaimers & Important Information")

- **Transfer Processing & Infrastructure:** "AtomX leverages advanced infrastructure, including blockchain-based settlement for cross-border transfers, to enable near real-time processing. We prioritize the use of real-time local payment rails for both fund collection and disbursement wherever available, enhancing speed and efficiency across the transaction lifecycle."
- **Transaction Timing & Dependencies:** "While transactions are typically processed in near real time, actual delivery times may vary based on local banking systems, destination country infrastructure, bank operating hours, holidays, and time zone differences. Any delays are primarily driven by these external factors."
- **Fees & Exchange Rates:** "Exchange rates and applicable fees are determined at the time of transaction. Rates and charges may vary based on market conditions, destination, and transaction parameters. All applicable fees and rates will be displayed prior to confirmation."
- **Recipient Information & Credit:** "Transfers are processed based on the recipient details provided by the sender. Please ensure all information is accurate and complete, as funds will be credited to the account corresponding to the details submitted."
- **Limits & Service Conditions:** "Transaction limits and processing conditions may vary depending on the destination corridor, payment method, and applicable regulatory requirements."
- **Important Notice:** "Final delivery times and transaction outcomes may be influenced by factors beyond AtomX's control, including third-party banking systems and local regulatory environments."

---

## 13. Company / Contact / Legal Entities

- **USA:** AtomX Pay Inc — EIN **39-4492691**
  - www site address: 350 Fifth Avenue, New York, NY 10118
  - sandbox address: 100 Barron Circle, Somerset, NJ 08873
- **India:** AtomX Pay Private Limited — CIN **U62099MH2025PTC452119** — Gemstar Commercial Complex, Malad (West), Mumbai – 400064
- **Contact email:** contactus@atomxpay.com ("For any queries or grievances, please write to us at …")
- **Licensing claims:** MSB-licensed (USA); FIU-registered (India); AML/CFT compliant. KYC/AML required by US federal regulations (FinCEN). Identity verification via Plaid IDV.
- **Copyright:** "© 2025 AtomX Pay. All rights reserved." (www) / "© 2026 AtomX Pay. All rights reserved." (sandbox)
- **Footer links:** Send Money, Register, Resources, Privacy Policy, Terms of Service.

---

## 14. Resources / Blog (marketing content library)

Section: "Latest News & Insights" — "Stay updated with the latest in remittances and fintech."

- **Blockchain and Cross-Border Payments — Insights From Industry Leaders** (Article, Mar 15 2025, 8 min). Industry quotes: Jamie Dimon (CEO, JPMorgan Chase), Lael Brainard (Former Fed Governor), Daleep Singh (Chief Global Economist, PGIM), Larry Fink (CEO, BlackRock).
- **Financial Inclusion with Blockchain: Unlocking Economic Opportunity for Billions** (Article, Mar 10 2025, 6 min). Key stats: remittances to low/middle-income countries reached **$656B in 2023**, projected **$690B by 2025**, global flows nearing **$913B**; average traditional transfer cost cited; unbanked population; Nepal remittances as share of GDP.
- **Regulatory Compliance in Fintech** (Article, Mar 5 2025, 4 min).
- **Blockchain Rails Talk Podcast — S2 E8: The Future of Digital Remittances** (Podcast, Aug 25 2025, 45 min) — features Sarah Chen, CTO at AtomX Pay.
- **From Frustration to Transformation: How a Major Tech Company Revolutionized Employee Remittances with AtomX Pay** (Case study, Aug 22 2025, 12 min) — "TechGlobal Inc.", Fortune 500, 10,000+ employees across 25 countries.
- **Regulatory Framework Updates: New Guidelines for Blockchain-Based Payment Services in 2025** (Article, Aug 20 2025, 8 min).

> Note: Some blog "content" fields are placeholders ("Detailed content about regulatory compliance...", "Full case study details...") — treat titles/excerpts as canonical; bodies are partially stub.

---

## 15. Page Structure / Section Order (MANDATORY constraint)

New versions must follow the sandbox.atomxpay.com section format. The verified on-page render order from the live bundle is:

1. **Hero** (tagline + trust badges + Get Started)
2. **Live Rate Calculator** (You Send / They Receive)
3. **Comparison** — "Traditional Rails vs. Blockchain Rails" (this is the "Why AtomX" proof)
4. **How It Works** — 3 steps, with the **Compliance band** ("Built on Blockchain. Backed by Compliance.") embedded at its end
5. **Testimonials**
6. **FAQ**
7. **Resources / Blog**
8. **Footer** (contact, legal entities, links)

User's stated required core sequence: **Comparison → How It Works → Why AtomX → Compliance.** Note: in the live site there is no standalone "Why AtomX" section — the Comparison table _is_ the "why," and Compliance is a band inside How It Works. When the user says "Why AtomX," treat it as either the comparison or a dedicated value-pillar block placed right after How It Works.

**Suggested refinement (proposed, not yet approved):** Hero → Calculator → **Comparison (Why AtomX)** → **How It Works** → **Why AtomX value pillars** (Speed / Transparency / Compliance / No-middlemen as explicit cards) → **Compliance band** → Testimonials → FAQ → Resources → Footer. This makes "Why AtomX" an explicit section instead of leaving it implicit in the comparison, while keeping the user's ordering intent.

---

## 16. Voice, Tone & Copy Rules

- **Tone:** Confident, transparent, human, family-oriented. Emphasize speed (15 min), no hidden fees, "what you see is what they get", compliance-backed.
- **Recurring phrases:** "zero middlemen, zero delays", "Live market rates, zero margin", "Built on Blockchain. Backed by Compliance.", "No hidden fees, ever", "Transparent: Google rate + fee".
- **Brand writing rule (per project memory):** bright/warm/emotional remittance tone; **do not use em dashes** in generated copy (source uses them; our generated variants should not).
- **Canonical numbers to reuse:** 15-minute settlement, $4 flat fee (0% markup), min $2, 0% FX markup, MSB-licensed (US) / FIU-registered (India), USD→INR corridor.
