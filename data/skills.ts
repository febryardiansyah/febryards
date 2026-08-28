export type SkillGroup = {
  label: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    label: "Mobile",
    skills: ["Flutter", "Dart", "Kotlin", "Swift", "Bloc", "Riverpod", "GetX"],
  },
  {
    label: "Frontend",
    skills: ["Next.js", "React", "TypeScript", "TailwindCSS", "SASS"],
  },
  {
    label: "Backend & APIs",
    skills: ["Node.js", "REST APIs", "GraphQL"],
  },
  {
    label: "Tooling & Ops",
    skills: ["Firebase", "Git", "CI/CD", "MVVM", "SOLID", "IxGuard / DexGuard"],
  },
  {
    label: "AI-assisted",
    skills: ["Claude Code", "Prompt engineering", "Workflow automation"],
  },
];