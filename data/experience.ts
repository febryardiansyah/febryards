export type Experience = {
  role: string;
  company: string;
  period: string;
  location: string;
  bullets: string[];
  stack: string[];
  current?: boolean;
};

export const experience: Experience[] = [
  {
    role: "Mobile Apps Developer",
    company: "Central Bank of Indonesia",
    period: "Apr 2026 — Present",
    location: "On-site",
    current: true,
    bullets: [
      "Developed Bank Indonesia Super Apps features and improvements",
      "Integrated advanced code obfuscation and RASP tools (ixGuard & DexGuard) to prevent reverse engineering",
      "Architected a memory-efficient frontend using Riverpod and Flutter Hooks",
      "Collaborated with cross-functional teams to deliver high-quality releases on time",
    ],
    stack: ["Flutter", "MVVM", "Riverpod", "ixGuard", "DexGuard", "Dependency Injection"],
  },
  {
    role: "Mobile Apps Developer",
    company: "muatmuat",
    period: "Mar 2025 — Feb 2026",
    location: "On-site",
    bullets: [
      "Optimized app performance by identifying and resolving critical bugs, leading to a significant reduction in production crash rates",
      "Designed and implemented high-impact transaction-related features, streamlining the user journey and improving overall transaction efficiency",
      "Partnered with UI/UX, BA, and QC teams to deliver high-fidelity designs and seamless product releases",
      "Used GetX for state management to decouple business logic from the UI, resulting in cleaner, more maintainable code and faster feature deployment",
      "Created a modular internal library to streamline feature development and ensure design consistency",
      "Researched and integrated AI-powered development tools to automate boilerplate code generation and repetitive tasks, successfully boosting sprint velocity and developer productivity",
    ],
    stack: ["Flutter", "Firebase", "Facebook SDK", "Git", "GetX", "Claude Code", "MVVM"],
  },
  {
    role: "Frontend Developer",
    company: "Carillimu",
    period: "Nov 2024 — Feb 2025",
    location: "Remote",
    bullets: [
      "Translated designs into efficient components using TailwindCSS",
      "Integrated RESTful APIs to fetch and display data dynamically",
      "Managed application state effectively using Context API",
    ],
    stack: ["Next.js", "TailwindCSS", "SASS", "TypeScript", "Axios", "Git"],
  },
  {
    role: "Mobile Apps Developer",
    company: "Carillimu",
    period: "May 2022 — Feb 2025",
    location: "Remote",
    bullets: [
      "Managed end-to-end development and on-time deployment to the App Store and Play Store.",
      "Applied SOLID principles to ensure a modular, maintainable, and highly scalable codebase.",
      "Developed high-precision UI components, including custom interactive video players.",
      "Utilized BloC to decouple business logic from the UI, ensuring the code is reusable and easy to test.",
      "Integrated RESTful APIs, push notifications, analytics, crash reporting, and local data storage.",
      "Developed advanced features requiring native integration using Kotlin (Android) and Swift (iOS).",
      "Collaborated effectively with Backend developers and UI/UX designers within an Agile environment.",
    ],
    stack: ["Flutter", "Kotlin", "Swift", "Firebase", "Facebook SDK", "Apple SDK", "Git", "BloC", "MVVM"],
  },
  {
    role: "Mobile Apps Developer",
    company: "PT. IDEJUALAN CREATIVE",
    period: "Nov 2021 — Feb 2022",
    location: "Remote",
    bullets: [
      "Created e-learning mobile app from scratch for Android and iOS",
      "Integrated with Dio package for seamless API communication",
    ],
    stack: ["Flutter", "Apple SDK", "Facebook SDK", "Firebase", "REST API", "BloC", "Git"],
  },
];