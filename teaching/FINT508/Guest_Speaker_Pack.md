# FINT 508 — Guest Speaker Pack
## Four HRM modules for a guest lecturer with an HRM background

**Course:** FINT 508 Human Resource Analytics for FinTech Management (HKSYU, 1st Term 2026–2027)
**Course instructor:** Dr LEE, Tin Yun Philip · **Your role:** guest speaker, 2–3 sessions
**Modules in this pack:** Predicting Turnover · Strategic Resourcing · Recruitment · Compensation & Benefits
**Medium:** English (talking points written to be spoken)

---

## 0. How to use this pack

You are a **guest speaker, not the course owner**. That changes what you do and what you skip:

| You do | You don't |
|---|---|
| Teach the topic, with real practitioner and HRM depth | Course admin, syllabus, deadlines — the instructor covers that |
| Run one activity and debrief it | Assess or grade anything |
| Answer "how does this work in a real firm?" | Answer "will this be on the test?" (redirect to the instructor) |
| Hand the instructor your observations on who contributed | Enter marks yourself |
| Connect your session to the group project (AT4) | Change the assessment brief |

Each of the four modules below is **self-contained and independently teachable**. Pick two or three (Section 1 helps you choose), and ignore the rest.

### The design premise
You studied HRM. That is the strength to lead with — most of the students' difficulty in this course is not the maths, it is that they don't know what a real HR problem looks like. So each module opens with a **"what you already know → what analytics adds"** bridge, and the analytics content is deliberately kept to the level a non-programmer can teach and a non-programmer can learn. You do not need to be able to build models to teach these sessions well. You need to be able to say what the model is *for*, and what it must not be used for.

---

## 1. Choosing your sessions

The four topics form the employee lifecycle. That arc is the best structure for a guest block, because each session hands off to the next.

```
   PLAN                 GET                  KEEP                LOSE
   Strategic     →     Recruitment    →     Compensation   →    Turnover
   Resourcing                                & Benefits
   (Module A)          (Module B)           (Module C)          (Module D)
```

### If you have three sessions — the recommended build

| # | Session | Modules | Spine |
|---|---|---|---|
| 1 | **Getting the right people** | A + B (compressed) | How many do we need, and how do we choose them? |
| 2 | **Keeping them, and what that costs** | C | What is a person worth, and what does pay actually buy? |
| 3 | **Losing them — and seeing it coming** | D | Who is going to leave, and what do we do the day we know? |

This is the strongest option. It ends on the predictive session, which is the one that lands hardest, and it lets you open Session 3 with "in Session 1 we planned for 60 hires — now watch 26% of them walk out."

### If you have two sessions

| Option | Sessions | When to pick it |
|---|---|---|
| **Lifecycle pair** *(recommended)* | A + B in one, C + D in the other | You want the whole arc; strongest narrative |
| **Deep pair** | D alone, then C alone | You want depth over coverage, and the instructor is covering resourcing and recruitment |
| **Front pair** | A alone, then B alone | Your practitioner experience is heaviest in workforce planning and hiring |

### If you have to compress
Every module below has a **120-minute run sheet** and a **60-minute cut** (which blocks to drop). Two modules in one 120-minute session = run both 60-minute cuts back to back, with a single joint activity.

### Talk to the course instructor first
Five questions, one email (template in Section 6): which weeks, how many students, do they have laptops, what has been covered already, and what does he want you to connect to the group project.

---

## 2. Module A — Strategic Resourcing in FinTech
*Course position: Lesson 6 · CILO2, CILO3 · feeds AT4*

### The one big idea
> **A headcount plan is not a hiring plan. Capacity, lead time and attrition decide what is actually possible.**

### What you already know → what analytics adds

| Your HRM knowledge | The analytics upgrade | The trap to teach |
|---|---|---|
| Workforce planning, headcount budgeting | Supply-and-demand forecast that subtracts *predicted* attrition, not last year's average | Planning gross hires instead of net |
| Job analysis, competency frameworks | Skills taxonomy and talent mapping — gaps by capability, not by job title | Titles hide the real gap; two "analysts" are not interchangeable |
| Resource-based view (VRIN/VRIO) | Segmenting the workforce: critical / core / supporting / outsourceable, each with a different resourcing strategy | Treating all roles as equally worth fighting for |
| Succession planning, talent pools | Markov-style internal transition rates — how many actually move up, not how many are "ready" | "Ready now" lists that nobody promotes |
| Make-or-buy decisions | Build / buy / borrow / bot, compared on **cost and lead time together** | Choosing on cost alone when the constraint is time |

### 120-minute run sheet

| Time | Block | Content |
|---|---|---|
| 0–8 | Open | Who you are, one 60-second war story about a workforce plan that failed. Ask: *"Who here has ever been told to hire someone and it took six months?"* |
| 8–35 | **Lecture A — from headcount to capability** | Workforce segmentation, VRIO applied to a FinTech firm, the FinTech skills picture (hybrid finance+tech scarcity, regulatory constraints on key roles) |
| 35–45 | Break | — |
| 45–70 | **Lecture B — the forecast** | Opening headcount − predicted attrition + internal mobility + external hires, against demand. Time-to-fill as a hard constraint. Three scenarios: base / stretch / downturn |
| 70–105 | **Activity — Scale to 500** | Groups build a three-scenario workforce plan (below) |
| 105–120 | Debrief + close | Stress-test assumptions; what breaks these plans in real life |

**60-minute cut:** keep Lecture A to 15 minutes, Lecture B to 15, activity to 20, debrief 10. Drop the scenario planning — do base case only.

### Talking points you can carry from HRM
- **Workforce segmentation is the whole game.** Ask the class: in a 300-person virtual bank, which ten people, if they left in the same month, would stop the company operating? Those are your critical segment. Everything else gets a cheaper strategy. Most firms spend retention money evenly, which means they overspend on the replaceable and underspend on the irreplaceable.
- **Time-to-fill is a planning input, not an HR KPI.** If a licensed risk modeller takes 18 weeks to hire and your product launches in 12, your plan is already wrong and no amount of recruiter effort fixes it. This is the single most useful thing you can teach them.
- **The FinTech twist.** Funding cycles make demand lumpy — hire 60 in a quarter, then freeze. Regulation constrains who can hold certain roles. And the scarce thing is a *combination* (credit risk + production code), which universities don't produce at volume. Cite Doherty & Stephens (2023) on the hard/soft skill needs of the FinTech sector, and Ding et al. (2023) on FinTech talent evaluation in Shanghai.
- **Build / buy / borrow / bot.** Build = train internally (cheap, slow). Buy = hire (fast, expensive, uncertain). Borrow = contract or outsource (fast, no retention). Bot = automate the task away. Make them justify on *both* cost and lead time — that's the analytics thinking, not the list.

### The activity — "Scale Kestrel Pay to 500"
**Setup:** groups of 4, 30–35 minutes. Kestrel Pay is a fictitious 300-person Hong Kong payments firm.

**Give each group:** current workforce profile by role family, an 18-month product roadmap, a funding constraint, plus assumption cards (attrition 22%, time-to-fill 6–18 weeks by role, internal mobility 8%).

**They produce a one-page plan:** demand by role family → apply attrition → the two largest capability gaps → build/buy/borrow/bot for each, with cost *and* lead time → the one assumption that would break the plan if wrong.

**No-laptop version:** hand out a pre-printed table with the arithmetic scaffolded — they fill in the blanks and argue about the assumptions, which is where the learning is anyway.

**What a strong answer looks like:** states its attrition assumption explicitly and says where it came from; identifies a gap that is a *capability*, not a headcount; picks "borrow" for at least one gap on lead-time grounds; and names an assumption it is uncomfortable with.

### Slides (10)
1 Title · 2 Your background (60 sec) · 3 The question: 60 hires in 18 months — possible? · 4 Workforce segmentation · 5 VRIO for human capital · 6 The FinTech skills picture · 7 The supply-demand equation · 8 Time-to-fill as a constraint · 9 Build/buy/borrow/bot · 10 Your task

### Questions they will ask
- *"Where do you get the attrition number?"* — From your own leavers data, split by segment, not an industry average. And if you have a turnover model (Module D), from that.
- *"What if the business changes the plan every quarter?"* — Then you plan in scenarios and re-forecast quarterly. A plan that survives contact with reality is a range, not a number.
- *"Isn't this just budgeting?"* — Budgeting counts money. This counts capability and time. Ask them which one stops the product shipping.

### What to skip
Detailed Markov chain mathematics. Mention that internal movement can be modelled as transition rates, show a 3×3 example on a slide, move on.

---

## 3. Module B — Recruitment in FinTech
*Course position: Lesson 7 · CILO3, CILO4 · feeds AT2 and AT4*

### The one big idea
> **The funnel tells you where you're losing people. Validity tells you whether your choices are any good. Fairness tells you whether you're allowed to keep making them.**

### What you already know → what analytics adds

| Your HRM knowledge | The analytics upgrade | The trap to teach |
|---|---|---|
| Recruitment and selection process | The funnel as a measured system — conversion at every stage, by source and by role family | Measuring volume of applicants instead of yield of *good hires* |
| Selection method validity (structured interview, work sample, cognitive ability) | Predictive scoring of applicants from work history (Sajjadiani et al., 2019; Koenig et al., 2023) | Trusting a model more than a validated structured interview |
| Adverse impact, the four-fifths rule | Running the audit on real funnel data, at every stage, not just at the offer | Auditing only the final decision and missing the screen |
| Employer branding, realistic job previews | Source analytics: which channels produce people who stay and perform | Cost-per-hire as the headline metric |
| Interviewer training, panel design | Algorithmic CV and video screening — and its explainability problem (Liem et al., 2018) | Assuming automation removes bias (Köchling & Wehner, 2020) |
| Offer negotiation | Modelling offer-acceptance probability; prescriptive assignment of candidates to vacancies (Pessach et al., 2020) | Optimising acceptance rate by lowballing nobody and overpaying everybody |

### 120-minute run sheet

| Time | Block | Content |
|---|---|---|
| 0–8 | Open | A hiring story from your own experience — ideally one where the process, not the candidate, was the problem |
| 8–30 | **Lecture A — the funnel** | Stages, metrics, source yield, quality-of-hire and time-to-productivity as the two that matter |
| 30–45 | **Lecture B — does selection work?** | Validity of selection methods (this is your HRM home ground — teach it properly), then predictive and prescriptive selection |
| 45–55 | Break | — |
| 55–90 | **Activity — funnel + fairness audit** | Two-part exercise (below) |
| 90–110 | **Fishbowl — should the algorithm screen?** | Four roles, inner circle argues, outer circle sends in questions |
| 110–120 | Close | Where firms actually land: algorithmic assistance, human decision rights, documented criteria, right of appeal, regular monitoring |

**60-minute cut:** Lecture A 12 min, Lecture B 13 min, Part 2 of the activity only (20 min), close 15 min with the fishbowl replaced by a show-of-hands vote and three comments.

### Talking points you can carry from HRM
- **Teach validity properly — nobody else on this course will.** Structured beats unstructured. Work samples predict well because they *are* the job. Unstructured interviews feel most informative and predict least; that gap between confidence and accuracy is the reason analytics exists in hiring at all. Students remember this one for years.
- **The funnel diagnosis changes the action.** A volume problem at the top and a 6-point drop in offer acceptance in one role family are the same "we can't hire" complaint, and they need opposite responses. Walk them through it.
- **Quality-of-hire is the only metric that matters and almost nobody measures it.** Ask them how they'd measure it. Let them struggle. Then give the practical answer: 12-month retention plus first performance rating plus hiring-manager satisfaction, all imperfect, all better than cost-per-hire.
- **The fairness demonstration.** Have them try to fix adverse impact by deleting the protected attribute from the model, then show that university, career gap and postcode reproduce it. Three minutes, and it is the most memorable thing in the session.
- **Where you can add what a textbook can't:** what actually happens in a hiring meeting; why the good candidate got rejected; how a hiring manager's "not a culture fit" is often an unexamined preference. Say it plainly — they've never heard it from inside.

### The activity — recruitment analytics on a funnel extract
**Part 1 (15 min):** 800 applications with source, stage outcomes, role family. Build the funnel, compute conversion by source and stage, find the leak and say which role family it's in.

**Part 2 (20 min):** compute selection rates by a protected-attribute proxy at screening and at offer, apply the four-fifths rule, then check whether the screening score correlates with the proxy through another feature. State: is there adverse impact, at which stage, and what would you change on Monday?

**No-laptop version:** pre-computed tables on a handout. They compute two impact ratios by hand (the arithmetic is one division) and interpret. Interpretation is the learning; the division is not.

**Pass condition:** a correctly computed impact ratio *and* a stated limitation of using a proxy attribute.

### Slides (12)
1 Title · 2 You · 3 The funnel · 4 Metrics by stage · 5 Source yield vs source volume · 6 Quality-of-hire · 7 Validity of selection methods · 8 Predictive selection from work history · 9 Prescriptive assignment · 10 Adverse impact and the four-fifths rule · 11 Algorithmic screening: the explainability problem · 12 Your task

### Questions they will ask
- *"Is it legal to use AI in hiring in Hong Kong?"* — Not prohibited as such, but the PDPO obligations on collection, purpose and access still apply, and anti-discrimination law applies to the *outcome* regardless of the tool. Say what you know, flag what you don't, and refer them to the instructor and the readings.
- *"If the model is more accurate than the manager, why not just use it?"* — Accuracy is one criterion. Explainability, appeal rights, employee trust and legal defensibility are others. Ask them which they'd want applied to their own application.
- *"How do you measure quality of hire when people take a year to ramp?"* — You accept a lagging metric, and you pair it with a leading one like time-to-productivity.

### What to skip
Machine-learning mechanics of CV parsing. Show that it exists, show one failure mode, move to the fairness discussion — which is where their assessment marks are.

---

## 4. Module C — Compensation & Benefits in FinTech
*Course position: Lesson 8 · CILO3, CILO4 · feeds AT2 and AT4*

### The one big idea
> **Pay fixes pay problems. Most retention problems are not pay problems — and the way you find out is by evaluating the intervention.**

### What you already know → what analytics adds

| Your HRM knowledge | The analytics upgrade | The trap to teach |
|---|---|---|
| Job evaluation, grading, salary structures | Compa-ratio and range penetration as a distribution to analyse, not a number to report | Reporting the average and missing the tails |
| Market benchmarking, salary surveys | Regression on legitimate factors to separate the explained from the **unexplained** pay gap | Calling the raw gap "the gap" |
| Internal vs external equity | Pay compression detected in data: new hires bought in above tenured staff | Fixing the offer and creating three internal problems |
| Total rewards | Modelling which components actually move offer acceptance and retention | Assuming the benefits people list as valued are the ones that change behaviour |
| Equity theory, expectancy theory | Why perceived fairness beats absolute level — and how to measure the perception | Solving a perception problem with cash |
| Incentive design | Benchmark-based relative incentives (Agnihotri & Zhang, 2021); risk-taking effects in banking (Ahammad et al., 2015) | Incentives that quietly buy the behaviour you didn't want |
| Reward and commitment | Cross-cultural evidence that money does not buy commitment identically everywhere (Llanos & Bin Ahmad, 2016) | Importing a US pay philosophy wholesale |

### 120-minute run sheet

| Time | Block | Content |
|---|---|---|
| 0–8 | Open | A pay story: a raise that didn't work, or an equity conversation that went wrong |
| 8–35 | **Lecture A — reward architecture in FinTech** | Total rewards; job architecture, levelling, bands, compa-ratio; equity/ESOP and vesting; the bonus-cycle attrition spike; regulator interest in incentives |
| 35–45 | Break | — |
| 45–65 | **Lecture B — pay equity in the data** | Compa-ratio distributions; explained vs unexplained gap; compression; modelling offer acceptance and retention response |
| 65–95 | **Case — "Did the HK$3m work?"** | The intervention-evaluation exercise (below). This is the best thing in the module |
| 95–115 | **Groups pitch** | Three groups, 90 seconds each: what would you have set up *before* spending the money |
| 115–120 | Close | Reward is a system, not a lever |

**60-minute cut:** Lecture A 15 min (drop the regulator material), skip Lecture B's modelling half, run the intervention case for 30 min, close in 15.

### Talking points you can carry from HRM
- **The explained/unexplained distinction is the money slide.** A raw gap tells you almost nothing. Put level, function, tenure, location and performance into a regression and the residual — the part your legitimate factors *cannot* explain — is the governance problem. And a small unexplained gap is still a problem, because it means the system produced it without anyone deciding to.
- **Equity in FinTech is a promise about a valuation.** Explain vesting cliffs, refresh grants, and what happens to motivation when the valuation stops rising. Students who've only seen bank pay have never thought about this.
- **The bonus-cycle spike.** Everyone in industry knows people leave after the bonus lands. Almost no firm plans around it. That is a *diagnostic* finding that a first-year student can produce, and it makes the whole course click.
- **Pay is a hygiene factor with a floor and a ceiling.** Below market, pay causes exits. At market, more pay buys surprisingly little retention. Your job as the guest is to tell them what that feels like in a real conversation with a real employee.
- **Compression is a self-inflicted wound.** Every "we had to pay up for this candidate" creates three internal problems that surface six months later. This is practitioner knowledge; the textbook mentions it, only you can make it real.

### The case — "Did the HK$3m work?"
**Scenario:** Kestrel Pay spends HK$3m on an off-cycle retention adjustment for 60 engineers. Six months later, attrition in that group falls from 21% to 13%. The CFO wants to do it again, company-wide.

**Groups answer:** did it work?

**Guide them to build the evaluation:** an untreated comparison group · the pre-period trend (was it already falling?) · difference-in-differences reasoning · and the threats — selection into treatment (who got picked?), regression to the mean, a sector-wide hiring freeze in the same period, Hawthorne effects, and the counterfactual nobody measured.

**Each group states one design that would have given a defensible answer if it had been set up before the money was spent.**

**No-laptop version:** this case needs no computer at all. It is a reasoning exercise. That makes it the safest module to teach in an ordinary classroom.

**Why this is the strongest 30 minutes in the pack:** it is the one place where students realise that the hard part of analytics is causal reasoning, not modelling — and it needs no technical background from you to teach.

### Slides (11)
1 Title · 2 You · 3 Total rewards in FinTech · 4 Job architecture and bands · 5 Compa-ratio · 6 Equity, vesting, and the valuation promise · 7 The bonus-cycle spike · 8 Raw gap vs unexplained gap · 9 Pay compression · 10 The HK$3m question · 11 What you'd set up first

### Questions they will ask
- *"How do you find out what people are actually paid at competitors?"* — Salary surveys, benchmarking consultancies, offer data from candidates, and public filings where they exist. All lagging, all imperfect.
- *"Should pay be transparent?"* — Give the honest trade-off: transparency forces the structure to be defensible, which is good, and removes the ability to make exceptions, which is sometimes bad. Take a position and say it's yours.
- *"If a small unexplained gap is a problem, isn't every firm guilty?"* — Most are. The question is whether they know, and whether they're closing it.

### What to skip
Regression mechanics. Show the output table, teach them to read the residual, never derive a coefficient.

---

## 5. Module D — Predicting Turnover in FinTech
*Course position: Lesson 4 · CILO3, CILO4 · feeds AT2 and AT3*

### The one big idea
> **A model tells you who might leave. It doesn't tell you what to do, who's allowed to know, or whether you should have looked.**

### What you already know → what analytics adds

| Your HRM knowledge | The analytics upgrade | The trap to teach |
|---|---|---|
| Turnover taxonomy — voluntary/involuntary, functional/dysfunctional, regretted/avoidable | Defining the outcome variable precisely enough to model | "Retention" is not a variable; a dated, typed exit flag is |
| Cost of turnover | The full cost stack, used to set a decision threshold | Costing only the recruitment fee |
| Exit interviews | Systematic exit-reason coding; and their known unreliability | Believing what people say on the way out |
| Job embeddedness, shocks, the unfolding model | Predictive features that proxy for shocks — manager change, missed promotion, bonus date | Assuming dissatisfaction is the mechanism when it's often an event |
| Retention strategies | Targeting them by predicted risk and by cost of loss | Spending retention money evenly |
| Engagement surveys | Engagement as a driver measured longitudinally (Lesener et al., 2020) | Cross-sectional survey → causal claim |

### 120-minute run sheet

| Time | Block | Content |
|---|---|---|
| 0–8 | Open | The best story you have about someone leaving and everyone being surprised |
| 8–35 | **Lecture A — turnover as an HR problem** | Taxonomy, the true cost stack, FinTech-specific drivers (vesting and bonus timing, funding cycles, tiny teams, external pull from banks and big tech, young fast-promoted managers, burnout in always-on ops) |
| 35–45 | Break | — |
| 45–62 | **Lecture B — turnover as a prediction problem** | Model families at a conceptual level; class imbalance; the confusion matrix; *when* vs *whether* |
| 62–95 | **Activity — score to action** | The threshold exercise (below) |
| 95–112 | **Discussion — who gets to see the list?** | HR, the line manager, the person, nobody |
| 112–120 | Close | What you'd actually do on Monday |

**60-minute cut:** Lecture A 18 min, Lecture B 8 min (confusion matrix only), threshold exercise 20 min, "who sees the list" 14 min. Drop the model-building entirely.

### Talking points you can carry from HRM
- **Not all turnover is bad, and teaching that first prevents every later error.** Functional turnover is a healthy organisation working. The number to manage is *regretted, avoidable* turnover in the critical segment. A firm chasing a lower headline turnover rate is chasing the wrong thing.
- **The cost stack is where you earn their attention.** Replacement fee, ramp-up time, lost delivery velocity, client and regulatory continuity, knowledge and code ownership, and contagion — one person leaving makes the next person more likely to. Put a real number on one role. Watch the room change.
- **Shocks, not slow dissatisfaction.** Your HRM background gives you the unfolding model. Most exits follow an event — a new manager, a missed promotion, a bonus landing, a friend leaving. That reframes what a model should be looking at, and students who only think "unhappy → leaves" get it wrong.
- **Exit interviews are the least reliable data in HR and everyone treats them as the most.** People are managing a reference. Say what you've actually seen.
- **The threshold is a business decision, not a technical one.** A false positive costs a retention conversation and some awkwardness. A false negative costs six to nine months' salary and a capability gap. Where you set the cut-off follows from those two numbers — and that's a manager's call, not a data scientist's.

### The activity — from score to action
**Setup:** groups get a pre-computed output: 40 named (fictional) employees with a risk score, their role, tenure, manager, and an estimated replacement cost.

**They decide:** where to draw the intervention line, and why · what the intervention actually *is* for the people above it · who is told · and what they will measure in six months to know whether it worked.

**Then the twist:** tell them the model's five strongest drivers include "manager tenure under 12 months" and "no promotion in 30 months". Ask what that changes. (Answer: it moves the intervention from individual retention payments to a manager-capability and career-path problem — a systemic fix, not 40 conversations.)

**No-laptop version:** this activity is designed to need no computer. Print the 40-row table.

**With laptops:** add a 20-minute build on the open IBM HR attrition dataset before this, and let them see accuracy of 84% on a 16% base rate — then ask what a model that predicts "nobody leaves" would score. Watch it land.

### Slides (11)
1 Title · 2 You · 3 Turnover taxonomy · 4 The cost stack (with a real number) · 5 FinTech drivers · 6 Shocks and the unfolding model · 7 What a prediction model does · 8 The confusion matrix in plain English · 9 False positive vs false negative, in dollars · 10 Your 40 names · 11 Who gets to see this list?

### Questions they will ask
- *"Isn't it unfair to flag someone who hasn't done anything wrong?"* — Yes, that's exactly the tension, and it's the best question in the session. Being predicted to leave is not misconduct. Push them to separate *using it to fix a systemic problem* from *using it against an individual*.
- *"What accuracy is good enough?"* — Wrong question. Ask instead: what does a mistake cost in each direction? Then set the threshold there.
- *"Should you tell the person?"* — No clean answer. Make them argue both sides. Practically, most firms act on the pattern and never name the individual to anyone outside HR.

### What to skip
Algorithm comparison. "Logistic regression is transparent and defensible, tree-based models are more accurate and harder to explain, survival analysis tells you *when*" — three sentences, one slide, move on.

---

## 6. Coordinating with the course instructor

Send this before you build anything.

> Dear Dr Lee,
>
> Thank you for the invitation to guest lecture on FINT 508. Before I prepare, five quick questions so my sessions fit your course rather than duplicate it:
>
> 1. Which weeks would you like me to take, and is each slot the full two hours?
> 2. How many students, and will they have laptops in the room?
> 3. What will you have covered before I arrive — in particular, have they already met the descriptive/diagnostic/predictive/prescriptive framing, and have they built any model?
> 4. Is there anything you'd like me to connect explicitly to the group project or the test?
> 5. Would it help if I sent you a short note afterwards on who contributed in discussion, for your participation records?
>
> I'm proposing to cover [modules], structured as [build]. Happy to adjust.

**Two things to confirm in his answer, because they change your preparation most:**
- **Laptops or not.** Every activity here has a no-laptop version — but you need to know which one you're running.
- **Have they met the four-analytics ladder** (descriptive → diagnostic → predictive → prescriptive)? If yes, use it as shared vocabulary and it makes you sound integrated with the course. If no, spend two minutes introducing it, because all four modules sit on it.

**After each session:** send him three lines — what you covered, which activity you ran, and two or three students who contributed well. It costs you five minutes and it is genuinely useful to him for the participation mark.

---

## 7. Guest-speaker coaching

Different from teaching your own course: you have less authority in the room, they don't know you, and you get one shot per session.

### 7.1 The five things that matter most

| # | English | 廣東話 |
|---|---|---|
| 1 | **Establish why you, in 60 seconds.** Not a CV. One sentence on your background, one on why you care about this, one on what you'll give them that a textbook can't. | 一分鐘講清楚「點解係我嚟講」。唔係讀 CV，係：我做過乜、點解我在意呢樣、我可以俾到啲書度冇嘅嘢。 |
| 2 | **Lead with a story, not a framework.** You're the person who has actually been in the room. That's your entire advantage — spend it in the first three minutes. | 用故事開場，唔好用框架。你嘅優勢係你真係喺個 meeting room 入面坐過，頭三分鐘就要用出嚟。 |
| 3 | **Teach less than you planned.** Guests always over-prepare and over-run. One idea taught properly beats four rushed. | 一定要講少過你準備嘅份量。Guest 十居其九超時，講深一樣好過趕四樣。 |
| 4 | **You don't have to know the syllabus.** "That's a question for Dr Lee" is a completely respectable answer, and using it protects you. | 唔識課程細節係正常。「呢條問題要問返 Dr Lee」係完全企得住嘅答案。 |
| 5 | **Your HRM background is the asset, not a gap.** They have no shortage of technique. They have no idea what a real HR decision feels like. | 你嘅 HRM 底係優勢，唔係短板。技術佢哋大把，但佢哋完全唔知真實 HR 決定係咩感覺。 |

### 7.2 Your opening 60 seconds — fill this in
> "I'm [name]. I spent [X years] in [HR/HRM in ___], and most of what I'll say today comes from [decisions I had to make / people I had to hire / a system I had to fix], not from a textbook. What I want to give you in the next two hours is [the one idea]. If you take one thing away, take that."

Write it, say it out loud three times, and don't change it on the day.

### 7.3 Handling the analytics questions you can't answer
You will get a technical question. Three honest, credible responses:

1. **Redirect to the decision.** *"I can't tell you how the algorithm weights that. What I can tell you is what happens when a manager gets that number and has to act on it — which is the part that goes wrong."*
2. **Hand it to the instructor.** *"That's a modelling question — Dr Lee is better placed than me. Park it for next week."*
3. **Say you don't know.** *"I don't know. My instinct is [X], but don't quote me."* This costs you nothing and buys you credibility for everything else.

**Never bluff a technical answer.** In a room that has been doing modelling for weeks, you will be caught, and the HRM content — which is your real value — loses its authority with it.

### 7.4 Building rapport fast, as an outsider
- Arrive 15 minutes early and talk to whoever is there. Three conversations and the room stops being anonymous.
- **Ask them something in the first five minutes** — a show of hands works. "Hands up if you've ever been in a job interview you thought was badly run." Now they've participated and it's a conversation, not a broadcast.
- Use the instructor's framing. If he's been teaching the four-analytics ladder, use those words. It signals you're part of the course, not a visitor doing a set piece.
- Learn three names during the activity while you walk around and use them in the debrief.

### 7.5 Timing, as a guest
- You have no second chance at this material, so **decide your cuts before you walk in**. Each module above marks its 60-minute cut — use it as your fallback list.
- Put the wall-clock end time of each block on your printed run sheet.
- **Never run over.** A guest who overruns is remembered for that.
- If you finish early: open the floor. "I've got fifteen minutes — ask me anything about working in HR." That is often the best fifteen minutes of the session, and only a guest can offer it.

### 7.6 The one-page version — the morning of
1. Say your 60-second why-me. Don't extend it.
2. Story first, framework second.
3. Get a show of hands in the first five minutes.
4. Teach the one big idea slowly. Cut the rest if you must.
5. Run the activity — it is not optional, it's where they learn.
6. "I don't know" and "ask Dr Lee" are both fine.
7. Finish on time.
8. Offer open Q&A if you have spare minutes.
9. Send the instructor three lines afterwards.

---

## 8. What you need to prepare

| Module | Materials to prepare | Effort |
|---|---|---|
| **A · Resourcing** | Kestrel Pay workforce profile + roadmap; assumption cards; planning table (printed or Excel) | Medium |
| **B · Recruitment** | Funnel extract (800 rows) or pre-computed funnel tables; four-fifths worksheet; fishbowl role cards | Medium–high |
| **C · Compensation** | Compa-ratio worksheet; the HK$3m intervention scenario (one page) | **Low — easiest to prepare** |
| **D · Turnover** | The 40-row risk list with replacement costs; cost-stack worksheet | **Low** |

> **If your preparation time is tight, pick C and D.** Both work with printed handouts alone, need no dataset and no software, and both contain the strongest single activity in the pack. Module B needs the most preparation because of the funnel data.

**Common to every module:** your 60-second opening, your one war story per session, and a printed run sheet with wall-clock times.

---

## Appendix — Readings to name-drop (all from the course reference list)

| Module | Cite these |
|---|---|
| A · Resourcing | Gerhart & Feng (2021) RBV and human capital · Santoso et al. (2021) talent mapping in banking/FinTech · Doherty & Stephens (2023) hard and soft skill needs · Ding et al. (2023) FinTech talent evaluation, Shanghai |
| B · Recruitment | Pessach et al. (2020) prescriptive recruitment · Köchling & Wehner (2020) algorithmic discrimination · Koenig et al. (2023) ML in personnel selection · Liem et al. (2018) algorithmic candidate screening · Sajjadiani et al. (2019) work history as predictor |
| C · Compensation | Ahammad et al. (2015) incentive schemes in commercial banks · Agnihotri & Zhang (2021) relative-performance benchmarks · Llanos & Bin Ahmad (2016) financial compensation and commitment · Diez, Bussin & Lee (2019) reward analytics chapter |
| D · Turnover | Al Akasheh et al. (2023) a decade of turnover data mining · Park, Feng & Jeong (2024) new-employee turnover intention · Ma et al. (2020) software developer turnover risk · Sharma & Stol (2020) onboarding, fit and turnover intention · Lesener et al. (2020) drivers of engagement |
| Any module | Giermindl et al. (2022) the dark sides of people analytics · McCartney & Fu (2022) why HR analytics fails to change anything |

*Naming two or three papers per session signals you're inside the literature without turning your session into a lecture on it. Read the abstracts; you do not need to have read all of them in full to cite them honestly as "there's a body of work on this — for example…".*
