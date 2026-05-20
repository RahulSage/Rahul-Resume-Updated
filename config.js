/**
 * ══════════════════════════════════════════════════════════
 *  RESUME CONFIG  ·  Edit this file to personalise your site
 *  All 4 pages are rendered from this single source of truth.
 * ══════════════════════════════════════════════════════════
 */

var CONFIG = {

  /* ── Identity ─────────────────────────────────────────── */
  name:      "Rahul",
  shortName: "R",                  // nav logo letter
  title:     "Salesforce Developer",
  roles: [                         // typewriter in hero
    "Team Lead",
    "AI Specialist",
    "LWC Architect",
    "6× Certified",
  ],
  avatar:    "./assets/rahul.jpg", // replace with your photo

  /* ── Contact ──────────────────────────────────────────── */
  contact: {
    phone:    "+91 7053481005",
    email:    "rahulsage517@gmail.com",
    linkedin: "https://www.linkedin.com/in/rahul-613a8412a/",
    github:   "https://github.com/RahulSage",
    location: "New Delhi, India",
  },

  /* ── Hero stats ───────────────────────────────────────── */
  stats: [
    { value: 6,   suffix: "+", label: "Years Exp"   },
    { value: 6,   suffix: "",  label: "SF Certs"    },
    { value: 3,   suffix: "",  label: "Companies"   },
    { value: 500, suffix: "+", label: "Partners"    },
  ],

  /* ── Professional summary ─────────────────────────────── */
  summary: `Results-driven Salesforce Developer and Team Lead with <strong>6+ years</strong> of enterprise
    CRM experience delivering scalable solutions across <strong>Sales Cloud, Service Cloud, and
    Experience Cloud</strong>. Holds <strong>6 Salesforce certifications</strong> — including
    AI Specialist and AI Associate. Deep practitioner of <strong>Apex, LWC, REST/SOAP APIs, and
    Flow automation</strong>. Proven track record leading teams of 5+ developers, driving DocuSign
    and Jitterbit integrations, and architecting LWR partner portals serving
    <strong>500+ external partners</strong>. Adherent to SOLID principles, Salesforce DX CI/CD, and Agile delivery.`,

  /* ── Experience ───────────────────────────────────────── */
  experience: [
    {
      company:  "NTT DATA",
      logo:     "./assets/ntt-data.png",
      role:     "Salesforce Developer / Team Lead",
      location: "New Delhi",
      start:    "Nov 2023",
      end:      "Present",
      current:  true,
      duration: "",
      bullets: [
        "Led cross-functional team of <strong>5+ Salesforce developers</strong> on contract management & partner collaboration.",
        "DocuSign REST API integration reduced contract execution time by <strong>~40%</strong> for Third-Party Channel Contracts.",
        "Architected LWR Partner Portal serving <strong>500+ external partners</strong> with role-based access & metadata-driven UI.",
        "Salesforce DX CI/CD pipelines (GitHub Actions + scratch orgs) achieved <strong>95%+ Apex test coverage</strong>.",
        "Custom Apex Flow automation eliminated manual intervention; improved contract turnaround by <strong>3×</strong>.",
        "Translated complex stakeholder requirements into governed, scalable Salesforce architectures.",
      ],
    },
    {
      company:  "Publicis Sapient",
      logo:     "./assets/publicis.avif",
      role:     "Salesforce Developer",
      location: "New Delhi",
      start:    "Mar 2022",
      end:      "Nov 2023",
      current:  false,
      duration: "1 yr 9 mo",
      bullets: [
        "Built <strong>15+ Lightning Apps</strong>, Quick Actions, and Flows integrated with Apex triggers.",
        "Modular Role Entry module (LWC + Apex, SOLID principles) cut code duplication by <strong>40%</strong>.",
        "Batch & Queueable Apex processed <strong>100K+ records per run</strong> within Governor Limits — zero production incidents.",
        "Bi-weekly Agile sprints with consistent on-schedule major feature rollouts.",
      ],
    },
    {
      company:  "Genpact",
      logo:     "./assets/genpact.jpeg",
      role:     "Salesforce Developer",
      location: "Gurugram",
      start:    "Aug 2019",
      end:      "Mar 2022",
      current:  false,
      duration: "2 yr 8 mo",
      bullets: [
        "Developed & maintained <strong>50+ Apex classes, triggers, and LWC components</strong> for 1,000+ internal users.",
        "Automated AR workflows — dispute resolution timelines improved by <strong>35%</strong>.",
        "Jitterbit ERP integration synced <strong>10K+ records daily</strong> with zero data integrity incidents.",
        "PLM case management SOQL optimisation improved tracking efficiency by <strong>25%</strong>.",
      ],
    },
  ],

  /* ── Skills  (type → tag colour: sf / cloud / dev / prog / soft) */
  skills: [
    {
      label: "Salesforce Platform", icon: "⚡", type: "sf",
      items: ["Apex","Lightning Web Components (LWC)","Visualforce","SOQL / SOSL",
              "Salesforce Flow","Batch Apex","Queueable Apex","Platform Events",
              "Approval Processes","Governor Limits","CMS Connect"],
    },
    {
      label: "Clouds & Products", icon: "☁", type: "cloud",
      items: ["Sales Cloud","Service Cloud","Experience Cloud",
              "LWR Sites","Partner Portal","AppExchange"],
    },
    {
      label: "Integration & APIs", icon: "🔌", type: "dev",
      items: ["REST API","SOAP API","Named Credentials","DocuSign eSign API",
              "Jitterbit","External Services","Outbound Messaging"],
    },
    {
      label: "DevOps & Tooling", icon: "🛠", type: "dev",
      items: ["Salesforce DX (SFDX)","Git / GitHub","GitHub Actions","CI/CD Pipelines",
              "Scratch Orgs","VS Code","Workbench","Data Loader","Agile / Scrum"],
    },
    {
      label: "Programming", icon: "💻", type: "prog",
      items: ["JavaScript (ES6+)","Java","HTML5","CSS3",
              "SOLID Principles","OOP","Data Structures & Algorithms"],
    },
    {
      label: "Leadership", icon: "🤝", type: "soft",
      items: ["Team Leadership","Code Review","Stakeholder Management",
              "Mentoring","Problem Solving","Analytical Thinking"],
    },
  ],

  /* ── Certifications ───────────────────────────────────── */
  certifications: [
    { icon: "🏅", name: "Certified Platform Developer I",   date: "February 2021", isNew: false },
    { icon: "🏗",  name: "Certified App Builder",            date: "May 2023",      isNew: false },
    { icon: "⚙️", name: "Certified Administrator",          date: "June 2023",     isNew: false },
    { icon: "⚡", name: "Certified JavaScript Developer I", date: "July 2024",     isNew: false },
    { icon: "🤖", name: "Certified AI Associate",           date: "December 2024", isNew: true  },
    { icon: "🧠", name: "Certified AI Specialist",          date: "January 2025",  isNew: true  },
  ],

  /* ── Education ────────────────────────────────────────── */
  education: [
    {
      image:       "./assets/dtu.jpg",
      degree:      "B.Tech — Software Engineering",
      institution: "Delhi Technological University (DTU)",
      year:        "May 2019",
      description: "Core subjects: Data Structures, Algorithms, OOP, DBMS, Computer Networks.",
    },
  ],

  /* ── Achievements (summary page big-number cards) ─────── */
  achievements: [
    { value: "~40%", label: "Reduction in contract execution time via DocuSign automation" },
    { value: "3×",   label: "Improvement in contract turnaround via Apex Flow automation"  },
    { value: "35%",  label: "Faster dispute resolution via automated AR workflows"         },
    { value: "95%+", label: "Apex test coverage maintained across all CI/CD sprints"       },
    { value: "500+", label: "External partners onboarded on LWR Partner Portal"            },
    { value: "40%",  label: "Code duplication cut via SOLID-based Role Entry module"       },
  ],

  /* ── Summary page feature cards ───────────────────────── */
  summaryCards: [
    {
      image: "./assets/professional-summary.jpg",
      title: "Professional Profile",
      body:  "Results-driven Salesforce Developer & Team Lead with <strong>6+ years</strong> delivering scalable CRM solutions. 6 certifications including AI Specialist & AI Associate.",
    },
    {
      image: "./assets/leadership.jpg",
      title: "Leadership & Delivery",
      body:  "Led teams of <strong>5+ developers</strong> at NTT DATA; established CI/CD pipelines with 95%+ test coverage; mentored teams on SOLID principles and clean-code standards.",
    },
    {
      image: "./assets/expertise.jpg",
      title: "Technical Expertise",
      body:  "Expert in <strong>Apex, LWC, SOQL, Batch Apex, Platform Events</strong> and Salesforce Flow. DocuSign & Jitterbit integrations syncing 10K+ records daily.",
    },
    {
      image: "./assets/certificates.jpg",
      title: "AI & Innovation",
      body:  "<strong>AI Associate & AI Specialist</strong> certified Jan 2025. Hands-on with Einstein AI, Generative AI in Salesforce, and responsible-AI governance.",
    },
  ],

};
