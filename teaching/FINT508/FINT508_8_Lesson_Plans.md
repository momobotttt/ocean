# FINT 508 — Human Resource Analytics for FinTech Management
## Eight-Lesson Teaching Plan (2 hours per lesson)

**Institution:** Hong Kong Shue Yan University — Department of Economics and Finance
**Term:** 1st Term, 2026–2027
**Course code / credits:** FINT 508 · 3 academic credits · 12 QF credits · 15 weeks
**Medium of instruction:** English
**Course instructor:** Dr LEE, Tin Yun Philip
**Contact-hour budget covered by this plan:** 8 lessons x 120 minutes = 16 hours of the 24 lecture hours; the remaining lecture, tutorial (12 h), test (2 h) and consultation (2 h) hours are mapped in Appendix A.

---

## 1. How this plan is built

The eight lessons map one-to-one onto the eight teaching topics in the approved course outline. Nothing has been added to or removed from the syllabus content; the plan only sequences it, times it, and attaches activities and formative checks to each block.

Three design rules run through every lesson:

1. **The four-analytics spine.** Every topic is taught through the same lens — *descriptive → diagnostic → predictive → prescriptive*. Students meet the spine in Lesson 1 and re-apply it in Lessons 3–8, which is exactly what AT4 (Group Project) asks them to do.
2. **FinTech first, HR second.** Generic HRM theory is only introduced as scaffolding; every concept is immediately re-anchored in a FinTech setting (virtual banks, payment firms, WealthTech, RegTech, crypto exchanges, insurtech), which is what all four CILOs and every rubric descriptor demand.
3. **Ethics is a thread, not a lecture.** Algorithmic fairness, privacy, consent and the "dark sides" of people analytics are raised in every lesson at the point where the technique creates the risk, rather than being isolated in one week.

### Constructive alignment

| Lesson | Teaching topic (from course outline) | Primary CILOs | TLAs used | Assessment touchpoint |
|---|---|---|---|---|
| 1 | HR Analytics and Data-analytic Thinking | CILO1 | TLA1, TLA2 | AT1 |
| 2 | HR System and Big Data Collection | CILO1, CILO2 | TLA1, TLA2, TLA3 | AT1, AT2 |
| 3 | HR Analytics Modelling | CILO2, CILO4 | TLA1, TLA2, TLA3 | AT1, AT2, AT4 |
| 4 | Predicting Turnover in FinTech | CILO3, CILO4 | TLA1–TLA4 | AT1, AT2, AT3 |
| 5 | Predicting Work Performance in FinTech | CILO3, CILO4 | TLA1–TLA4 | AT1, AT2, AT3 |
| 6 | Enhancing Strategic Resourcing in FinTech | CILO2, CILO3 | TLA1, TLA2, TLA4 | AT1, AT4 |
| 7 | Enhancing Recruitment in FinTech | CILO3, CILO4 | TLA1–TLA4 | AT1, AT2, AT4 |
| 8 | Compensation and Benefits in FinTech | CILO3, CILO4 | TLA1–TLA4 | AT1, AT2, AT4 |

### The standard 120-minute rhythm

Unless a lesson note says otherwise, each session follows this shape. The rhythm is deliberately stable so students can prepare, but Blocks C and D change character every week (case, lab, guest, debate, clinic).

| Time | Block | Purpose |
|---|---|---|
| 0–10 min | **A. Entry check** | 5-question recap poll (Mentimeter / Kahoot) on last week + this week's pre-reading. Doubles as attendance and as the AT1 participation record. |
| 10–45 min | **B. Core lecture** | New concepts, FinTech-anchored (TLA1). |
| 45–55 min | **Break** | — |
| 55–80 min | **C. Applied block** | Demo, worked example, or guest input (TLA1/TLA2). |
| 80–110 min | **D. Student production** | Case analysis, lab task, or structured debate in the AT4 project groups (TLA2/TLA3/TLA4). |
| 110–120 min | **E. Consolidation** | Plenary debrief, one-minute paper, next-week prep and assessment reminders. |

### Tools and data used across the course

* **No-code / low-code:** Microsoft Excel with Power Query and the Analysis ToolPak; Power BI Desktop or Tableau Public for dashboards; Orange Data Mining for visual model building (no programming prerequisite — important, since the course has no pre-requisite).
* **Optional code track:** Python in Google Colab (pandas, scikit-learn). Offered as an extension for students who want it; never required for assessment.
* **Teaching datasets:**
  * `DS-1 IBM HR Analytics Employee Attrition & Performance` (1,470 rows, open on Kaggle) — used in Lessons 3, 4, 5.
  * `DS-2 FinTech-HK-Sim` — a 1,200-row simulated dataset the instructor prepares (fields: role family, hire source, tenure, engagement pulse score, code-commit / sales-KPI proxy, pay compa-ratio, bonus %, promotion flag, exit flag, exit reason). Used in Lessons 6, 7, 8 so that the FinTech context is genuinely FinTech rather than generic manufacturing.
  * `DS-3 Recruitment funnel extract` — 800 applications with source, screening score, interview score, offer/accept flags, and a protected-attribute proxy for the fairness exercise in Lesson 7.
* **Platform:** Moodle (or the University's LMS) for pre-reading, poll results, dataset distribution and submission of one-minute papers.

> **Preparation note.** DS-2 and DS-3 should be synthetic, not real employee data. This is both a practical convenience and a teaching point: students are told in Lesson 2 exactly why the instructor did not use a real HR extract.

---

## Lesson 1 — HR Analytics and Data-analytic Thinking
**Suggested week: 1 · Duration: 120 minutes · CILO1 · TLA1, TLA2 · AT1**

### Session learning outcomes
By the end of the session students can:
1. Define HR analytics and distinguish HR metrics, HR reporting and HR analytics.
2. Explain the descriptive → diagnostic → predictive → prescriptive ladder and place an HR question on the correct rung.
3. Describe what makes the FinTech sector's human-capital problem structurally different from a traditional bank's.
4. Convert a vague managerial complaint into an analytics question with a defined outcome variable, unit of analysis and decision owner.

### Pre-class preparation (assigned in Week 0 / orientation email)
* Edwards, Charlwood, Guenole & Marler (2024) — *HR analytics: an emerging field finding its place in the world alongside simmering ethical challenges*, HRMJ 34(2).
* Diez, Bussin & Lee (2019) — *Fundamentals of HR Analytics*, Ch. 1.
* Campanella et al. (2023) — *FinTech in the financial system: towards a capital-intensive and high competence human capital reality?* (skim; read the discussion section closely).
* Bring one news item from the last 12 months about hiring, attrition or pay at any FinTech firm.

### Run sheet

| Time | Activity | Detail |
|---|---|---|
| 0–15 | **Course launch** | Walk the syllabus on screen: CILOs, the four ATs and their weights (10/30/20/30), the Week 10 test, Week 12 essay, Week 15 presentation. State the participation rubric explicitly — students should know from minute one that "attends all classes, always punctual, clear reasoned statements" is what an A in AT1 looks like. Announce group formation (max 4) opens today and closes end of Lesson 2. |
| 15–25 | **Opening provocation** | Show two screens: (a) an HR dashboard with headcount, turnover %, cost-per-hire; (b) a model output ranking 40 named engineers by 6-month resignation risk. Question to the floor: *"Which one is analytics? Which one would you be willing to act on? Which one would you be willing to defend to the person named in it?"* Collect answers on Mentimeter, keep the word cloud for the closing. |
| 25–55 | **Lecture Block A — What HR analytics is** | Metrics vs. reporting vs. analytics. The four rungs with an HR example each: *descriptive* — attrition was 24% last year; *diagnostic* — it concentrated in 12–24-month engineers reporting to three managers; *predictive* — these 40 people are at risk next half-year; *prescriptive* — given a HK$2m retention budget, allocate it here. Introduce the value chain: business question → data → analysis → insight → decision → measured outcome, and McCartney & Fu's (2022) point that the chain usually breaks between insight and decision, not at the model. |
| 55–65 | **Break** | — |
| 65–85 | **Lecture Block B — Why FinTech is different** | Small headcount but extreme value concentration per head; scarce hybrid "finance + tech" skills (Doherty & Stephens, 2023); competition for talent with both banks and big tech; regulatory fit-and-proper and licensing constraints on key roles; rapid scale-up and scale-down cycles; equity-heavy pay; and — crucially — FinTech firms are *already* data-rich and analytics-literate, so the barrier to HR analytics is organisational and ethical rather than technical. Reference Bhutto, Jamal & Ullah (2023) on FinTech adoption and HR competency, and Santoso et al. (2021) on talent mapping in banking/FinTech. |
| 85–110 | **In-class activity — "From complaint to question"** | Groups of 4. Each group receives one card with a real-sounding managerial complaint from a FinTech setting, e.g. *"Our best payment engineers keep leaving after the bonus lands"*, *"We are paying agency fees three times for the same compliance role"*, *"The Series-B headcount plan says 60 hires but Talent Acquisition says that is impossible"*. Each group must produce on one slide: (i) the analytics question in one sentence; (ii) the outcome variable and how it would be measured; (iii) the unit of analysis; (iv) which rung of the ladder is needed; (v) who owns the resulting decision. Two groups present (3 min each); the class critiques against those five criteria. |
| 110–120 | **Consolidation** | Return to the opening word cloud and re-answer the provocation. Assign Lesson 2 pre-reading. Confirm group membership deadline. One-minute paper submitted to the LMS: *"One HR decision in a FinTech firm that should never be automated, and why."* |

### Formative check
The five-criterion slide is graded pass / redo, not scored — but the quality of the questions is the instructor's first read on which groups will struggle with AT4.

### Instructor notes
* Do not open a dataset today. The single most common failure in this course is students reaching for a model before they have a decision; Lesson 1 exists to prevent that.
* Keep the complaint cards; they are reused in Lesson 3 as candidate modelling problems.

### Materials
Syllabus slides · Mentimeter poll · 6 printed complaint cards · group registration sheet · LMS one-minute-paper activity.

---

## Lesson 2 — HR System and Big Data Collection
**Suggested week: 2 · Duration: 120 minutes · CILO1, CILO2 · TLA1, TLA2, TLA3 · AT1, AT2**

### Session learning outcomes
By the end of the session students can:
1. Map the HR data landscape of a FinTech firm across HRIS, ATS, LMS, payroll, engagement and digital-exhaust sources.
2. Judge whether a data source is fit for a specific HR decision, using accuracy, completeness, consistency, timeliness, granularity, representativeness and lawfulness.
3. Explain what AI-era HR systems automate, and where automation injects bias into the data itself.
4. State the consent, privacy and PDPO obligations that constrain HR data collection in Hong Kong, and identify the point at which "we can collect it" stops being the relevant question.

### Pre-class preparation
* Tonidandel, King & Cortina (2018) — *Big data methods*, ORM 21(3).
* Giermindl, Strich, Christ, Leicht-Deobald & Redzepi (2022) — *The dark sides of people analytics*, EJIS 31(3).
* Yahia, Hlel & Colomo-Palacios (2021) — *From big data to deep data to support people analytics for employee attrition prediction*, IEEE Access 9.
* Optional: Rife, Cate, Kosinski & Stillwell (2016) on recruitment and data collection through social platforms.

### Run sheet

| Time | Activity | Detail |
|---|---|---|
| 0–10 | **Entry check** | Kahoot on Lesson 1: the four rungs, metric vs. analytics, one FinTech-specific talent characteristic. Post the leaderboard — this is the participation habit the AT1 rubric rewards. |
| 10–45 | **Lecture Block A — The FinTech HR data landscape** | Systems of record (HRIS/core HR, payroll, ATS, LMS, performance platform) vs. systems of engagement (pulse surveys, recognition tools, collaboration platforms) vs. digital exhaust (ticketing, commit logs, CRM activity, call/chat metadata). For each: what it measures well, what it silently distorts, refresh frequency, and who owns it. Emphasise the join problem — employee ID mismatch across systems is the single largest practical obstacle to HR analytics, and is worth exam marks. |
| 45–55 | **Break** | — |
| 55–75 | **Lecture Block B — Data quality and the AI-era HR stack** | Seven quality dimensions with an HR failure story for each (e.g. *timeliness*: an exit flag entered three weeks after the resignation, so the model learns from the future; *representativeness*: engagement survey answered by 38% of staff, skewed to the engaged). Then AI in the HR stack: CV parsing, chatbot screening, automated scheduling, sentiment scoring — and Köchling & Wehner's (2020) finding that automation moves discrimination upstream into the training data. Introduce the distinction students must carry to the test: **bias in the world → bias in the data → bias in the model → bias in the decision.** |
| 75–105 | **Lab / clinic — Data source audit** | Groups receive a one-page "data inventory" for *Kestrel Pay*, a fictitious 300-person Hong Kong payments firm: 9 data sources with owner, refresh rate, row count, known gaps and consent status. Task: select the sources needed to answer *"Why are we losing mid-tenure engineers?"*, mark each chosen source Green / Amber / Red on fitness, name the single biggest quality risk, and list one source they will deliberately **not** use with a stated reason. Groups swap sheets and challenge each other's Reds. |
| 105–120 | **Ethics and law wrap** | Hong Kong PDPO data-protection principles applied to HR: collection limitation and purpose, notice, use limitation, retention, security, access and correction. Discuss the employee-monitoring line, and why the instructor's own teaching datasets (DS-2, DS-3) are synthetic. Close with the question that recurs on the test: *"Legal, accurate, and still wrong — give one example."* Assign Lesson 3 pre-reading and confirm AT4 group registration. |

### Formative check
Green/Amber/Red audit sheet collected and returned with comments in Lesson 3. Common errors to look for: choosing every available source, ignoring consent status, and treating high row-count as high quality.

### Instructor notes
* The Kestrel Pay inventory should include at least one source that is high-quality, legally available and still inappropriate (e.g. keystroke logs) — that is the whole point of the closing question.
* This is a good week to confirm the guest speaker for Lesson 4 or 6 (TLA2) so the date can be announced early.

### Materials
Kestrel Pay data inventory (1 page x 8 copies) · Kahoot set · PDPO summary slide · AT4 group registration form.

---

## Lesson 3 — HR Analytics Modelling
**Suggested week: 3 · Duration: 120 minutes · CILO2, CILO4 · TLA1, TLA2, TLA3 · AT1, AT2, AT4**
**Case study: HR analytics for the Chile International Bank training-needs analysis**

### Session learning outcomes
By the end of the session students can:
1. Build an HR analysis strategy: business question → hypotheses → variables → method → decision rule.
2. Describe the predictive-model development cycle — problem framing, data preparation, feature construction, train/test split, model fit, evaluation, deployment, monitoring.
3. Read the standard evaluation outputs (confusion matrix, accuracy, precision, recall, ROC-AUC) and explain why accuracy alone misleads on imbalanced HR data.
4. Compare at least three classes of HR analytics tooling and justify a choice for a given firm size and maturity (CILO4 — this is the comparison skill the rubric rewards).

### Pre-class preparation
* **Case:** Cotes & Ugarte (2021) — *A systemic and strategic approach for training needs analysis for the International Bank*, JBR 127. Read fully; come with the case questions drafted.
* Gurusinghe, Arachchige & Dayarathna (2021) — *Predictive HR analytics and talent management: a conceptual framework*.
* Sarstedt & Danks (2022) — *Prediction in HRM research: a gap between rhetoric and reality*.
* Install / open Orange Data Mining (or confirm Excel Analysis ToolPak is enabled) before class.

### Run sheet

| Time | Activity | Detail |
|---|---|---|
| 0–10 | **Entry check + audit feedback** | Return Lesson 2 audit sheets with two headline comments. Quick poll: three data-quality traps named. |
| 10–40 | **Lecture Block A — The analysis strategy** | The five-step strategy, worked live on one of the Lesson 1 complaint cards. Stress hypothesis before data: which variables would have to move for this story to be true? Cover unit of analysis (person / role / team / cohort / period), outcome definition (voluntary vs. involuntary exit; regretted vs. non-regretted), and the prediction window (next 6 months, not "ever"). Introduce leakage with a concrete HR example: including "exit interview completed = yes" as a predictor of attrition. |
| 40–50 | **Break** | — |
| 50–75 | **Case study — Chile International Bank (Cotes & Ugarte, 2021)** | Structured discussion in project groups, 15 minutes, then 10 minutes plenary. Questions: (1) What was the bank's real problem, and was training the right lever? (2) How did the authors move from a generic training request to a diagnosed need? (3) Which data did they use, and what would you have added if the bank were a virtual bank instead? (4) How would you measure whether the intervention worked? (5) The paper is a systemic, largely diagnostic approach — what would the predictive and prescriptive versions of the same problem look like? Nominate one group to answer Q5 on the board; it is the bridge into Lessons 4–8. |
| 75–105 | **Guided demo — the model development cycle end to end** | Live on DS-1 (IBM attrition), instructor-driven with students following: load → inspect → clean → define target → split 70/30 → fit a decision tree and a logistic regression → read the confusion matrix → compare accuracy vs. recall on the minority class → adjust the threshold and watch precision and recall trade off. Do this in Orange (visual) so no student is excluded by lack of coding background; show the equivalent Colab notebook on a second screen for the optional code track. Keep the emphasis on interpretation, not on tuning. |
| 105–120 | **Tool comparison and wrap** | Compare four tool classes on cost, skill required, transparency, scalability and audit-friendliness: spreadsheet (Excel), BI (Power BI / Tableau), visual ML (Orange / KNIME), code (Python / R), plus HRIS-embedded analytics (Workday, SAP SF). Students complete a comparison grid — this grid is directly reusable in the AT4 report. Assign Lesson 4 pre-reading and release DS-1 with the Lesson 4 lab brief. |

### Formative check
Tool comparison grid submitted at the door. Look for justification tied to a firm profile ("a 60-person Series-A InsurTech with one HR generalist") rather than generic feature lists.

### Instructor notes
* Time discipline matters here: the demo will overrun if you take questions on algorithm internals. Park those to consultation hours — the CILOs ask students to *apply and compare*, not to derive.
* Announce that the Week 10 test will include reading a confusion matrix. Students should leave today able to do it.

### Materials
Case PDF · DS-1 loaded and pre-cleaned as a backup file · Orange workflow saved in advance (`L3_demo.ows`) · Colab notebook link · tool comparison grid handout.

---

## Lesson 4 — Predicting Turnover in FinTech
**Suggested week: 4 · Duration: 120 minutes · CILO3, CILO4 · TLA1–TLA4 · AT1, AT2, AT3**
**Case study: predicting employee turnover**

### Session learning outcomes
By the end of the session students can:
1. Explain turnover drivers specific to the FinTech industry and distinguish functional from dysfunctional and regretted from non-regretted turnover.
2. Build and evaluate a turnover-prediction model on DS-1 and interpret the top drivers.
3. Translate a risk score into a retention decision with a cost rationale, including the cost of a false positive and of a false negative.
4. Identify the ethical and managerial hazards of naming individuals as flight risks.

### Pre-class preparation
* Al Akasheh, Malik, Hujran & Zaki (2023) — *A decade of research on data mining techniques for predicting employee turnover: a systematic literature review*.
* Park, Feng & Jeong (2024) — *Developing an advanced prediction model for new employee turnover intention*, Scientific Reports 14.
* Khera & Divya (2018) — *Predictive modelling of employee turnover in Indian IT industry using machine learning*.
* Ma et al. (2020) — *A data-driven risk measurement model of software developer turnover* (skim), and Sharma & Stol (2020) on onboarding, fit and turnover intention.
* Optional practitioner piece: Deloitte, *HR analytics and employee turnover*.

### Run sheet

| Time | Activity | Detail |
|---|---|---|
| 0–10 | **Entry check** | Poll: which of five predictors is a leakage risk; define recall in one line. |
| 10–40 | **Lecture Block A — Turnover in the FinTech industry** | Turnover taxonomy (voluntary/involuntary, functional/dysfunctional, regretted/non-regretted, avoidable/unavoidable) and the true cost stack: replacement cost, ramp-up time, lost delivery velocity, client and regulatory continuity, knowledge and code ownership, contagion effects on the remaining team. FinTech-specific drivers: vesting cliffs and bonus timing, funding-round and layoff cycles, small teams so a single exit removes a whole capability, external market pull from banks and big tech, burnout in always-on payment and trading operations, and manager quality in fast-promoted young managers. Contrast with the software-developer evidence in Ma et al. (2020) and the onboarding-fit evidence in Sharma & Stol (2020). |
| 40–50 | **Break** | — |
| 50–60 | **Lecture Block B — Model families for turnover** | Logistic regression (transparent, defensible, the regulator-friendly default), decision tree (rule extraction and easy communication to line managers), random forest / gradient boosting (accuracy, at an explainability cost), survival analysis (answers *when*, not just *whether* — the right tool when the decision is timing an intervention). Class imbalance and what to do about it. What "top drivers" from a model do and do not tell you about causation. |
| 60–100 | **Hands-on lab — build a turnover model** | In project groups on DS-1. Deliverables inside the 40 minutes: (i) a fitted model with a documented train/test split; (ii) confusion matrix at the default threshold and at one adjusted threshold; (iii) the five strongest drivers; (iv) a one-sentence statement of what the model is *for*. Instructor and one demonstrator circulate. Fast groups get the extension task: re-run restricted to employees with under 24 months' tenure and explain why the drivers change. |
| 100–115 | **Debrief — from score to action** | Each group states its threshold choice and defends it in cost terms: *false positive* = retention spend on someone who was staying anyway, plus the damage of an awkward conversation; *false negative* = a regretted exit and a replacement bill of 6–9 months' salary. Then the hard question, discussed as a class: who is allowed to see the individual risk list — HR, the line manager, the person themselves, nobody? Anchor on Giermindl et al. (2022). |
| 115–120 | **Wrap** | Release the **AT3 individual assignment brief** (2,000-word essay, APA, due Week 12) and give the topic-selection rules. Assign Lesson 5 pre-reading. |

### Formative check
Group lab output uploaded to the LMS by end of day. Marked pass / redo with comments; a redo is required if the model has leakage or if the group cannot state what the model is for.

### Instructor notes
* Best week for the **TLA2 guest speaker** if a retention or talent lead from a virtual bank or payments firm is available — 20 minutes of experience plus Q&A can replace Block B, with the lab shortened to 30 minutes.
* Watch for the group that reports 84% accuracy on a 16% attrition base rate and thinks it has succeeded. Make that mistake public and generous — it is the most valuable teaching moment of the term.

### Materials
DS-1 · saved Orange workflow `L4_turnover.ows` · cost-of-turnover worksheet · AT3 assignment brief · guest speaker briefing note.

---

## Lesson 5 — Predicting Work Performance in FinTech
**Suggested week: 5 · Duration: 120 minutes · CILO3, CILO4 · TLA1–TLA4 · AT1, AT2, AT3**
**Case study: predicting employee performance**

### Session learning outcomes
By the end of the session students can:
1. Define work performance as a multidimensional construct (task, contextual, adaptive, counterproductive) and explain the criterion problem in a FinTech setting.
2. Evaluate performance measures used in FinTech firms — OKRs, sales and AUM targets, delivery velocity, incident and quality rates, 360 ratings — for reliability, validity and gameability.
3. Build a performance-prediction model and interpret it against engagement and job-demands evidence.
4. Explain why a valid predictor of performance can still be an unacceptable basis for a management decision.

### Pre-class preparation
* Bhuvanaiah & Raya (2016) — *Predicting employee work engagement levels, determinants and performance outcome* (IT organisation context).
* Lesener, Gusy, Jochmann & Wolter (2020) — *The drivers of work engagement: a meta-analytic review of longitudinal evidence*.
* Sajjadiani, Sojourner, Kammeyer-Mueller & Mykerezi (2019) — *Using machine learning to translate applicant work history into predictors of performance and turnover*.
* Garg, Sinha, Kar & Mani (2022) — *A review of machine learning applications in HRM*.

### Run sheet

| Time | Activity | Detail |
|---|---|---|
| 0–10 | **Entry check** | Two-question poll on Lesson 4: one leakage example, one reason accuracy misleads. Announce AT3 topic-approval deadline. |
| 10–40 | **Lecture Block A — What is performance, and can we measure it?** | Campbell's dimensions applied to FinTech roles: a payments engineer, a compliance analyst, a relationship manager, a data scientist. The criterion problem — the thing we can measure is rarely the thing we care about. Deficiency, contamination and rating bias (leniency, halo, recency, central tendency). Goodhart's law in practice: commits per week, tickets closed, calls made, accounts opened. Explain why FinTech is unusually exposed here — digital work leaves dense traces, so it is tempting to measure what is easy rather than what matters. |
| 40–50 | **Break** | — |
| 50–70 | **Lecture Block B — Predicting performance** | Established predictor families: structured interviews, cognitive and work-sample tests, personality (conscientiousness), biodata and work history (Sajjadiani et al., 2019), and engagement as a proximal driver (Lesener et al., 2020; Bhuvanaiah & Raya, 2016). Modelling notes: continuous outcome → regression; banded outcome → classification; the range-restriction problem when only hired people have performance data; and multi-source outcomes to reduce single-rater bias. Frame the JD-R logic — demands and resources — as the diagnostic story behind a predictive model. |
| 70–100 | **Case-based lab — predicting performance** | Groups work on DS-1's `PerformanceRating` (with the instructor's warning that the variable is deliberately weak — that is the lesson) and then on the richer DS-2 performance proxy. Tasks: fit a model; report the strongest predictors; then answer the criterion question — *what exactly is this model predicting, and would you stake a promotion decision on it?* Groups that conclude "this outcome variable is not fit for purpose" and say why should be marked highest; this is the CILO4 comparison skill in action. |
| 100–115 | **Structured debate** | Motion: *"This FinTech firm should use predictive analytics to decide who gets promoted."* Groups assigned for and against, 4 minutes each side, 5 minutes floor questions, then a class vote before and after. Instructor closes on validity, transparency, employee voice, appeal rights and the difference between decision support and decision automation. |
| 115–120 | **Wrap** | Assign Lesson 6 pre-reading. Remind groups that AT4 interview outreach should start now — securing a senior FinTech interviewee takes weeks, not days. Distribute the interview-protocol template and consent form. |

### Formative check
One-minute paper: *"Name one performance metric your AT4 target company probably uses, and one way an employee could game it."*

### Instructor notes
* The AT4 interview outreach reminder is the single most important logistical intervention of the term. Give groups a named list of professional bodies, alumni contacts and industry associations to approach.
* If the debate runs hot, keep it — participation quality here feeds directly into the AT1 rubric evidence.

### Materials
DS-1, DS-2 · debate motion slide and timer · AT4 interview protocol template · participant consent form · voting poll.

---

## Lesson 6 — Enhancing Strategic Resourcing in FinTech
**Suggested week: 6 · Duration: 120 minutes · CILO2, CILO3 · TLA1, TLA2, TLA4 · AT1, AT4**

### Session learning outcomes
By the end of the session students can:
1. Explain strategic resourcing and workforce planning, and link them to the resource-based view of the firm.
2. Build a simple supply-and-demand workforce forecast for a scaling FinTech firm, including attrition, internal mobility and hiring lag.
3. Apply skills taxonomy and talent-mapping techniques to identify capability gaps in a FinTech workforce.
4. Compare build / buy / borrow / bot options for closing a capability gap and justify a recommendation.

### Pre-class preparation
* Gerhart & Feng (2021) — *The resource-based view of the firm, human resources, and human capital*.
* Santoso et al. (2021) — *Talent mapping: a strategic approach toward digitalization initiatives in the banking and FinTech industry in Indonesia*.
* Doherty & Stephens (2023) — *Hard and soft skill needs: higher education and the FinTech sector*.
* Ding, Qin, Yin, Lv & Bai (2023) — *Research on FinTech talent evaluation index system and recruitment strategy: evidence from Shanghai*.

### Run sheet

| Time | Activity | Detail |
|---|---|---|
| 0–10 | **Entry check** | Poll on Lesson 5: the criterion problem in one sentence; one gameable metric. |
| 10–40 | **Lecture Block A — Strategic resourcing and the RBV** | From headcount budgeting to capability planning. VRIN/VRIO applied to a FinTech firm's human capital: which capabilities are genuinely rare and hard to imitate (e.g. a licensed, audited, production-grade risk-model team) and which are commodity. Segment the workforce: critical / core / supporting / outsourceable, and match the resourcing strategy to the segment rather than treating all roles identically. Introduce the FinTech competency picture from Doherty & Stephens (2023) and the evaluation-index approach in Ding et al. (2023). |
| 40–50 | **Break** | — |
| 50–70 | **Lecture Block B — Forecasting the workforce** | The supply-demand model: opening headcount − predicted attrition (reuse the Lesson 4 model) + internal mobility + external hires, against demand driven by product roadmap, transaction-volume growth and regulatory obligations. Cover time-to-fill as a planning constraint, the difference between a hiring plan and a hiring *capacity*, scenario planning (base / stretch / downturn), and Markov-chain transition matrices for internal movement at a conceptual level. Show the prescriptive step: given a budget and a lead-time constraint, what is the optimal mix? |
| 70–105 | **Workshop — "Scale Kestrel Pay to 500"** | Groups receive Kestrel Pay's current workforce profile (DS-2 summary), an 18-month product roadmap and a funding constraint. In Excel they build a three-scenario workforce plan: forecast demand by role family, apply predicted attrition, identify the two largest capability gaps, and choose build / buy / borrow / bot for each gap with a cost and lead-time justification. Output: a one-page plan plus the model file. |
| 105–120 | **Plenary and link to AT4** | Two groups present; the class stress-tests assumptions (attrition rate, time-to-fill, internal-mobility rate). Instructor debriefs on where such plans fail in practice. Then explicitly connect the session to AT4: workforce planning is the question most likely to get a rich answer from a senior FinTech interviewee, because it is where they personally feel pain. Assign Lesson 7 pre-reading. |

### Formative check
Workforce plan file collected. Assess assumption transparency rather than arithmetic elegance — a plan that states and defends a 22% attrition assumption beats one with a hidden hard-coded number.

### Instructor notes
* Provide a partially built Excel template so groups spend the time on judgement, not on formulas.
* Alternative **TLA2 slot**: a Head of Talent or COO guest here works very well, since scaling stories are concrete and quotable.

### Materials
Kestrel Pay workforce profile and roadmap · Excel workforce-planning template · scenario-assumption card · presentation timer.

---

## Lesson 7 — Enhancing Recruitment in FinTech
**Suggested week: 7 · Duration: 120 minutes · CILO3, CILO4 · TLA1–TLA4 · AT1, AT2, AT4**
**Case study: recruitment and selection analytics**

### Session learning outcomes
By the end of the session students can:
1. Model the recruitment funnel and compute the standard metrics — source yield, conversion by stage, time-to-fill, cost-per-hire, offer-acceptance rate, quality-of-hire.
2. Explain how predictive and prescriptive analytics are applied to sourcing, screening, selection and offer decisions.
3. Test a selection process for adverse impact and interpret the result.
4. Argue a defensible position on algorithmic candidate screening, using the evidence on fairness, explainability and validity.

### Pre-class preparation
* Pessach, Singer, Avrahami, Ben-Gal, Shmueli & Ben-Gal (2020) — *Employees recruitment: a prescriptive analytics approach via machine learning and mathematical programming*.
* Köchling & Wehner (2020) — *Discriminated by an algorithm*.
* Koenig et al. (2023) — *Improving measurement and prediction in personnel selection through the application of machine learning*.
* Liem et al. (2018) — *Psychology meets machine learning: interdisciplinary perspectives on algorithmic job candidate screening*.
* Supplementary: Faliagka, Tsakalidis & Tzimas (2012) on integrated e-recruitment; Shrivastava & Dhaigude (2022), *Prime Data Tech Pvt. Ltd* teaching case.

### Run sheet

| Time | Activity | Detail |
|---|---|---|
| 0–10 | **Entry check** | Poll on Lesson 6: define build/buy/borrow/bot; one reason a hiring plan misses. |
| 10–35 | **Lecture Block A — The recruitment funnel as a measured system** | Stages: sourcing → application → screening → assessment → interview → offer → acceptance → onboarding → 12-month retention. Metrics at each stage, and the two that actually matter to the business: quality-of-hire and time-to-productivity. Source analytics — which channels yield hires who stay and perform, not merely applicants. Employer brand and the FinTech candidate market in Hong Kong. Show how a funnel diagnosis (a 6% offer-acceptance drop concentrated in one role family) leads to a different action than a volume problem. |
| 35–45 | **Lecture Block B — Predictive and prescriptive selection** | Predictive: scoring applicants on likely performance and likely retention from work history (Sajjadiani et al., 2019; Koenig et al., 2023). Prescriptive: Pessach et al.'s (2020) framing — not "who is best?" but "given many vacancies, many candidates and constraints, what is the optimal assignment?" Introduce validity, adverse impact and the four-fifths rule; automated video and CV screening and the explainability problem (Liem et al., 2018). |
| 45–55 | **Break** | — |
| 55–90 | **Case lab — recruitment and selection analytics** | On DS-3 (800 applications). Part 1 (15 min): build the funnel, compute conversion by source and stage, identify where the funnel leaks and for which role family. Part 2 (20 min): fairness audit — compute selection rates by the protected-attribute proxy at screening and at offer, apply the four-fifths rule, and check whether the screening score is a proxy for the protected attribute (e.g. through a correlated feature such as university or a career gap). Each group states: is there adverse impact, at which stage, and what would you change on Monday morning? |
| 90–110 | **Fishbowl discussion — should the algorithm screen?** | Four students in the inner circle argue the case with roles assigned (Head of Talent, engineering hiring manager, a rejected candidate, the DPO / compliance officer); the outer circle passes in written questions. Instructor closes on the practical settlement most firms reach: algorithmic assistance with human decision rights, documented criteria, a right to explanation and an appeal route, plus regular adverse-impact monitoring. |
| 110–120 | **Wrap** | **Test briefing:** format, coverage (Lessons 1–8 material as taught to Week 9), question types, and one worked example of a short question. Assign Lesson 8 pre-reading. Check AT4 interview progress group by group — anyone without a confirmed interviewee by now needs an intervention. |

### Formative check
Fairness-audit worksheet collected. The pass condition is a correctly computed impact ratio *and* a stated limitation of using a proxy attribute.

### Instructor notes
* Some students will want to "fix" adverse impact by deleting the protected attribute from the model. Let them try, then show that the proxy features reproduce it — this is the most memorable 3 minutes of the session.
* The Shrivastava & Dhaigude (2022) case is a good substitute lab if DS-3 preparation time is short.

### Materials
DS-3 · funnel template (Excel) · four-fifths-rule calculator sheet · fishbowl role cards · test-briefing slide.

---

## Lesson 8 — The Use of Compensation and Benefits in the FinTech Industry
**Suggested week: 8 · Duration: 120 minutes · CILO3, CILO4 · TLA1–TLA4 · AT1, AT2, AT4**
**Case study: monitoring the impact of interventions**

### Session learning outcomes
By the end of the session students can:
1. Describe FinTech compensation architecture — base, bonus, equity/ESOP, benefits — and the total-rewards logic behind it.
2. Run pay-equity and compa-ratio analyses and interpret an unexplained pay gap.
3. Design an evaluation for an HR intervention using pre/post comparison, a control group and difference-in-differences logic, and state the threats to that inference.
4. Assemble the whole course into one prescriptive recommendation, integrating turnover, performance, resourcing, recruitment and reward.

### Pre-class preparation
* Ahammad, Lee, Malul & Shoham (2015) — *Behavioral ambidexterity: the impact of incentive schemes on productivity, motivation, and performance of employees in commercial banks*.
* Agnihotri & Zhang (2021) — *Developing benchmarks to capture relative performance for sales force incentives decisions*.
* Llanos & Bin Ahmad (2016) — *Financial compensation and organizational commitment: differences among Mexican and Malaysian bankers*.
* Diez, Bussin & Lee (2019) — the reward-analytics chapter.
* Supplementary: Westlund & Hannon (2008) on job-satisfaction facets and developer turnover intention.

### Run sheet

| Time | Activity | Detail |
|---|---|---|
| 0–10 | **Entry check** | Poll on Lesson 7: define adverse impact; one prescriptive recruitment decision. |
| 10–40 | **Lecture Block A — Reward in FinTech** | Total rewards: base, short-term incentive, equity and vesting, benefits, and the non-financial package (learning, autonomy, remote flexibility, mission). Pay structure mechanics: job architecture, levelling, salary bands, compa-ratio, market benchmarking and the range-penetration view. FinTech-specific tensions: equity-heavy offers in a pre-IPO firm and what happens when the valuation stops rising; startup pay competing with bank pay; the bonus-cycle attrition spike from Lesson 4; and the risk-taking incentives issue that regulators care about, drawing on Ahammad et al. (2015) and Agnihotri & Zhang (2021) on benchmark-based incentive design. Note the cross-cultural evidence in Llanos & Bin Ahmad (2016) — pay does not buy commitment identically in every market. |
| 40–50 | **Break** | — |
| 50–70 | **Lecture Block B — Pay equity and predicting reward outcomes** | Compa-ratio analysis; the explained vs. unexplained gap and how a regression with legitimate factors (level, function, tenure, location, performance) isolates the residual; why a small unexplained gap is still a governance problem; pay-compression and internal-equity effects when new hires are bought in above tenured staff. Predictive uses: modelling offer-acceptance probability against offer level, and modelling retention response to a pay adjustment. |
| 70–95 | **Case study — monitoring the impact of interventions** | Scenario: Kestrel Pay spends HK$3m on an off-cycle retention adjustment for 60 engineers. Six months later, attrition in the group falls from 21% to 13%. Groups must answer: did it work? Guide them to build the evaluation properly — an untreated comparison group, the pre-period trend, difference-in-differences reasoning, and the threats: selection into treatment, regression to the mean, concurrent market changes (a hiring freeze across the sector), Hawthorne effects, and the counterfactual nobody measured. Each group states one design that would have given a defensible answer if it had been set up *before* the money was spent. |
| 95–112 | **Capstone synthesis — the integrated recommendation** | Groups receive a one-page brief from Kestrel Pay's CEO: *"Mid-tenure engineering attrition is 26%, hiring is 8 weeks behind plan, and I have HK$5m. Tell me what to do and how you will know it worked."* In 12 minutes each group produces three prioritised recommendations spanning at least three of the course's domains, each with the analytics rung it rests on, the data it needs, and its success measure. Three groups pitch in 90 seconds each. |
| 112–120 | **Course wrap and assessment run-in** | Close the four-analytics spine from Lesson 1. Confirm: Week 9 revision and guest session, **Week 10 test (2 hours, closed book)**, **Week 12 individual assignment due (2,000 words, APA, Turnitin)**, **Week 15 group presentation (~20 min) and report (min. 1,500 words)**. Restate the academic-honesty rules, including the requirement to acknowledge AI-generated content. Publish consultation slots. |

### Formative check
The three prioritised recommendations, collected as a photo of the group's sheet. This is effectively an AT4 dry run and should be returned with rubric-referenced comments before Week 15.

### Instructor notes
* The intervention-evaluation block is where the strongest students separate themselves; it is also the single richest source of test questions on causal reasoning.
* Reserve the last 8 minutes strictly for the assessment run-in. Do not let the capstone pitches eat it.

### Materials
Kestrel Pay reward dataset (DS-2 pay fields) · compa-ratio worksheet · intervention scenario handout · CEO brief · assessment schedule slide.

---

## Appendix A — Fitting the eight lessons into the 15-week term

The syllabus allocates 24 lecture hours, 12 tutorial hours, 2 test hours and 2 consultation hours (40 contact hours). The eight 2-hour lessons above are the lecture spine; the table shows a workable placement of the remaining hours.

| Week | Lecture spine (2 h) | Additional contact time | Assessment milestone |
|---|---|---|---|
| 1 | **Lesson 1** — HR analytics and data-analytic thinking | Tutorial: tool setup, LMS, Orange/Excel install clinic | Groups begin forming |
| 2 | **Lesson 2** — HR system and big data collection | Tutorial: data-quality exercises | AT4 groups confirmed (max 4) |
| 3 | **Lesson 3** — HR analytics modelling | Tutorial: Orange/Excel skills lab | Tool comparison grid |
| 4 | **Lesson 4** — Predicting turnover | Tutorial: model evaluation drill (confusion matrix, thresholds) | **AT3 brief released** |
| 5 | **Lesson 5** — Predicting work performance | Tutorial: AT4 interview protocol workshop | AT3 topic approval |
| 6 | **Lesson 6** — Strategic resourcing | Tutorial: Excel workforce-planning clinic | AT4 interviewee confirmed |
| 7 | **Lesson 7** — Recruitment analytics | Tutorial: fairness-audit practice | **Test briefing** |
| 8 | **Lesson 8** — Compensation and benefits | Tutorial: APA citation and Turnitin workshop | AT3 outline feedback |
| 9 | Revision seminar + industry guest panel (TLA2) | Tutorial: past-paper style practice, marking scheme walkthrough | Test revision |
| 10 | — | — | **AT2 Test (2 h, closed book, 30%)** |
| 11 | Test debrief + AT3 writing clinic | Consultation hours (1 h) | AT3 drafting |
| 12 | AT4 project coaching — data and analysis review | Tutorial: presentation skills | **AT3 due (2,000 words, 20%)** |
| 13 | AT4 project coaching — findings and recommendations | Tutorial: rehearsal with peer feedback | Draft slides reviewed |
| 14 | AT4 rehearsal and Q&A drill | Consultation hours (1 h) | Report draft check |
| 15 | **AT4 presentations (~20 min per group) + course close** | — | **AT4 due: presentation + report (min. 1,500 words, 30%)** |

If the timetable gives a single 3-hour block per week rather than separate lecture and tutorial slots, run the 2-hour lesson as written and use the remaining hour for that week's tutorial column.

---

## Appendix B — Assessment integration at a glance

| AT | Weight | Introduced | Supported in | Due |
|---|---|---|---|---|
| AT1 Participation | 10% | Lesson 1 (rubric shown explicitly) | Every entry check, group task and debrief | Continuous |
| AT2 Test | 30% | Lesson 7 briefing; revision in Week 9 | Entry checks, model-evaluation drills, causal-reasoning block in Lesson 8 | Week 10 |
| AT3 Individual essay | 20% | Lesson 4 | Lesson 5 topic approval, Week 8 APA workshop, Week 11 clinic | Week 12 |
| AT4 Group project | 30% | Lesson 1 (groups) / Lesson 5 (interviews) | Lessons 3, 6, 7, 8 outputs are reusable components; Weeks 12–14 coaching | Week 15 |

**Reusable AT4 components produced in class:** tool comparison grid (Lesson 3), turnover model and cost logic (Lesson 4), workforce plan (Lesson 6), funnel and fairness audit (Lesson 7), intervention-evaluation design and integrated recommendations (Lesson 8). Tell students this in Lesson 1 — it visibly raises in-class effort.

**Suggested AT3 essay topics** (students may propose their own, subject to approval): algorithmic fairness in FinTech hiring; the business case for predictive attrition modelling in a virtual bank; equity compensation and retention in pre-IPO FinTech; the limits of people analytics under the PDPO; skills-based hiring versus credential screening in FinTech; and whether HR analytics improves organisational performance (McCartney & Fu, 2022, as the anchor).

---

## Appendix C — Preparation checklist for the instructor

**Before Week 1**
- [ ] Prepare DS-2 (`FinTech-HK-Sim`, 1,200 rows) and DS-3 (recruitment funnel, 800 rows) as synthetic datasets; document the generating assumptions in a data dictionary given to students.
- [ ] Download and pre-clean DS-1 (IBM HR attrition) and save a backup copy at each demo stage, so a failed live step never stops the class.
- [ ] Build and save the Orange workflows `L3_demo.ows`, `L4_turnover.ows`; build the parallel Colab notebook for the optional code track.
- [ ] Build the Excel templates: workforce plan (Lesson 6), recruitment funnel and four-fifths calculator (Lesson 7), compa-ratio sheet (Lesson 8).
- [ ] Write the Kestrel Pay pack: company profile, data inventory, workforce profile, roadmap, CEO brief, intervention scenario.
- [ ] Set up the LMS: reading list with links, weekly polls, one-minute-paper activities, dataset area, submission points.
- [ ] Invite TLA2 guest speakers — target Lesson 4 (retention / talent lead) and Lesson 6 (Head of Talent or COO); confirm dates by Week 2 and announce them.

**Weekly**
- [ ] Refresh the entry-check poll from the previous week's one-minute papers.
- [ ] Record participation notes against the AT1 rubric the same day — the rubric distinguishes A from B on the quality and frequency of contributions, which is impossible to reconstruct at the end of term.
- [ ] Return the previous week's formative artefact with two headline comments.

---

## Appendix D — Reading map

| Lesson | Essential readings anchored to the session |
|---|---|
| 1 | Edwards et al. (2024); Diez, Bussin & Lee (2019) Ch. 1; Campanella et al. (2023) |
| 2 | Tonidandel et al. (2018); Giermindl et al. (2022); Yahia et al. (2021); Rife et al. (2016) |
| 3 | Cotes & Ugarte (2021); Gurusinghe et al. (2021); Sarstedt & Danks (2022) |
| 4 | Al Akasheh et al. (2023); Park et al. (2024); Khera & Divya (2018); Ma et al. (2020); Sharma & Stol (2020); Deloitte (n.d.) |
| 5 | Bhuvanaiah & Raya (2016); Lesener et al. (2020); Sajjadiani et al. (2019); Garg et al. (2022) |
| 6 | Gerhart & Feng (2021); Santoso et al. (2021); Doherty & Stephens (2023); Ding et al. (2023) |
| 7 | Pessach et al. (2020); Köchling & Wehner (2020); Koenig et al. (2023); Liem et al. (2018); Faliagka et al. (2012); Shrivastava & Dhaigude (2022) |
| 8 | Ahammad et al. (2015); Agnihotri & Zhang (2021); Llanos & Bin Ahmad (2016); Diez et al. (2019) reward chapter; Westlund & Hannon (2008) |
| Cross-cutting | McCartney & Fu (2022) — used in Lessons 1, 3 and 8 as the "does it actually change anything?" reference |

---

## Appendix E — Differentiation and contingency

* **Mixed technical background.** Every assessed task is completable in Excel or Orange. The Python track is optional, signposted, and never required. Pair a code-comfortable student into each group during Lesson 3 group formation.
* **Guest speaker cancels.** Each of Lessons 4 and 6 has a full 120-minute run sheet that stands without the guest; the guest slot substitutes for a lecture block, not for a lab.
* **Lab runs over.** Cut the extension task first, then shorten the debrief to two groups instead of four. Never cut the "from score to action" debrief in Lesson 4 or the assessment run-in in Lesson 8.
* **Online or hybrid delivery.** Entry checks and debates work unchanged; labs move to breakout rooms with a shared workbook per group, and the fishbowl in Lesson 7 becomes a moderated panel with chat-submitted questions.
* **Weak attendance in a given week.** Re-form groups on the day rather than letting a two-person group carry a four-person task; note the absence against AT1 the same day.

---

*Prepared as a teaching plan for FINT 508, Hong Kong Shue Yan University, 1st Term 2026–2027. Content sequencing follows the approved course outline; datasets, cases beyond the prescribed ones, activities, timings and the Kestrel Pay scenario are teaching materials designed to deliver it.*
