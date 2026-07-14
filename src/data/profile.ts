export const profile = {
  name: "Noah Stokes",
  email: "nstokes@uwaterloo.ca",
  summary:
    "Computer Science student at the University of Waterloo building practical AI tools, full-stack systems, and workflow automation.",
  links: {
    projects: "#projects",
    resume: "/resume.pdf",
    github: "https://github.com/noah-stokes",
    linkedin: "https://www.linkedin.com/in/noah-stokes-603109254/",
    email: "mailto:nstokes@uwaterloo.ca",
  },
};

export const projects = [
  {
    name: "Controlla",
    status: "In Progress",
    description:
      "Voice-controlled laptop automation system that turns wake-phrase commands into streaming transcription, action planning, and macOS control.",
    stack: ["Python", "FastAPI", "JavaScript", "WebSockets", "AppleScript"],
    system: {
      input: "Voice command",
      process: "Transcription + planning + screenshot verification",
      output: "Mouse, keyboard, and app actions",
    },
  },
  {
    name: "Overhand",
    status: "Built",
    description:
      "AI document tool that converts handwritten notes into structured LaTeX PDFs with chat-based editing and a synchronized preview loop.",
    stack: ["Python", "Vite", "React", "OpenCV", "Pillow", "OpenAI Vision API"],
    system: {
      input: "Uploaded handwritten notes",
      process: "Image preprocessing + vision transcription + LaTeX editing",
      output: "Compiled, exportable PDF",
    },
  },
  {
    name: "Fraud Detector Extension",
    status: "Built",
    description:
      "Real-time phishing detection Chrome extension backend built for SpurHacks 2025, using DOM parsing and LLM scoring for live alerts.",
    stack: ["React", "Node.js", "Express", "Chrome Extension APIs", "Gemini"],
    system: {
      input: "Current webpage DOM",
      process: "High-signal extraction + token filtering + LLM classification",
      output: "Live scam risk alert",
    },
  },
];

export const techGroups = [
  {
    label: "Frontend",
    items: ["React", "Vite", "JavaScript", "TypeScript", "HTML", "CSS"],
  },
  {
    label: "Backend",
    items: ["Ruby on Rails", "FastAPI", "Flask", "Node.js", "Express", "WebSockets"],
  },
  {
    label: "AI / Automation",
    items: ["OpenAI API", "OpenAI Vision API", "Gemini", "RAG", "Embeddings", "AppleScript"],
  },
  {
    label: "Data",
    items: ["PostgreSQL", "SQL", "Data Extraction", "Validation", "Screenshot Verification"],
  },
  {
    label: "Tools",
    items: ["Git", "GitHub", "GitHub Actions", "RSpec", "VCR", "FactoryBot", "Selenium"],
  },
];

export const timeline = [
  {
    period: "May 2026 - Aug 2026",
    title: "Incoming AI Analyst",
    meta: "Correctional Service Canada",
    description:
      "Incoming member of CSC's AI Innovation Team, helping build practical AI tools for operational use cases and responsible AI adoption.",
  },
  {
    period: "Sep 2025 - Dec 2025",
    title: "Junior Software Developer",
    meta: "TUQ Inc.",
    description:
      "Built AI form-assistant and RAG-powered action-execution systems in a Rails and PostgreSQL app, reducing form completion time by about 65% and submission failures by about 40%.",
  },
  {
    period: "Sep 2024 - May 2029",
    title: "Bachelor of Computer Science",
    meta: "University of Waterloo",
    description:
      "Relevant coursework includes Data Structures and Algorithms, Object-Oriented Programming, and Computer Organization.",
  },
];

export const focusItems = [
  "Building Controlla as a voice-controlled automation system with screenshot verification and replanning.",
  "Developing Overhand into a full handwritten-notes to LaTeX/PDF workflow with AI chat editing.",
  "Applying AI systems work across form extraction, RAG action execution, and practical operations tooling.",
];
