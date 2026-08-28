export type Project = {
  slug: string;
  title: string;
  year: number;
  emoji: string;
  categories: string[];
  role: string;
  summary: string;
  problem: string;
  solution: string[];
  stack: string[];
  metrics?: { label: string; value: string }[];
  thumbs: [string, string, string];
  gallery: string[];
  links: {
    live?: string;
    appStore?: string;
    playStore?: string;
    repo?: string;
  };
  awards?: string[];
  selected?: boolean;
  client?: string;
};

const C = "https://res.cloudinary.com/febryar/image/upload";

export const projects: Project[] = [
  {
    slug: "bi-superapp",
    title: "BI Superapp",
    year: 2026,
    emoji: "🏛️",
    categories: ["Mobile", "Flutter", "B2B"],
    role: "Lead Mobile Apps Developer",
    summary:
      "Superapp portal unifying core functions at Bank Indonesia — Policy, Institutional, and HR clusters — for faster information access.",
    problem:
      "Bank Indonesia employees were juggling multiple internal apps to access policy documents, institutional info, and HR services. The legacy stack made secure distribution difficult and reverse engineering a real risk.",
    solution: [
      "Built a unified mobile entry point across Android and iOS using Flutter, with Riverpod for state and Flutter Hooks for memory efficiency.",
      "Wired advanced code obfuscation (ixGuard + DexGuard) to harden the release builds against tampering.",
      "Designed a modular feature shell so internal teams can ship new clusters without touching core navigation.",
      "Shipped a private CI pipeline tied to internal QA, with branch-based rollout.",
    ],
    stack: [
      "Flutter",
      "Riverpod",
      "Flutter Hooks",
      "MVVM",
      "ixGuard",
      "DexGuard",
      "Dependency Injection",
      "SOLID",
    ],
    metrics: [
      { label: "Clusters unified", value: "3" },
      { label: "Platforms", value: "Android + iOS" },
    ],
    thumbs: [
      `${C}/v1780412472/portfolio%20showcase/BI_Superapp_1_wwigbc.png`,
      `${C}/v1780412472/portfolio%20showcase/BI_Superapp_1_wwigbc.png`,
      `${C}/v1780412472/portfolio%20showcase/BI_Superapp_1_wwigbc.png`,
    ],
    gallery: [
      `${C}/v1780412472/portfolio%20showcase/BI_Superapp_1_wwigbc.png`,
    ],
    links: {
      appStore:
        "https://apps.apple.com/id/app/digital-workplace-mobile/id1644633624",
    },
    awards: [],
    selected: true,
    client: "Bank Indonesia",
  },
  {
    slug: "cariilmu",
    title: "Cariilmu",
    year: 2024,
    emoji: "📚",
    categories: ["Mobile", "Flutter", "EdTech"],
    role: "Mobile Apps Developer",
    summary:
      "An EdTech platform for Prakerja training via video, webinar, and offline sessions.",
    problem:
      "Learners in Indonesia needed a single Android/iOS app to discover Prakerja training, watch video lessons, and attend webinars — with content that survives flaky connectivity.",
    solution: [
      "Owned end-to-end mobile development and on-time deployment to App Store and Play Store.",
      "Applied SOLID principles so the codebase scales cleanly as the curriculum grew.",
      "Built custom interactive video players with offline caching.",
      "Used BloC to decouple business logic from the UI, keeping the code testable.",
      "Integrated REST APIs, push notifications, analytics, crash reporting, and local storage.",
      "Wrote Kotlin/Swift bridges for native features the Flutter ecosystem couldn't reach.",
    ],
    stack: ["Flutter", "BloC", "Kotlin", "Swift", "Firebase", "MVVM", "SOLID"],
    thumbs: [
      `${C}/v1780494957/portfolio%20showcase/Gemini_Generated_Image_jaf0oyjaf0oyjaf0_1_h25mto.png`,
      `${C}/v1780494957/portfolio%20showcase/Gemini_Generated_Image_jaf0oyjaf0oyjaf0_1_h25mto.png`,
      `${C}/v1780494957/portfolio%20showcase/Gemini_Generated_Image_jaf0oyjaf0oyjaf0_1_h25mto.png`,
    ],
    gallery: [
      `${C}/v1780494957/portfolio%20showcase/Gemini_Generated_Image_jaf0oyjaf0oyjaf0_1_h25mto.png`,
    ],
    links: {
      playStore:
        "https://play.google.com/store/apps/details?id=com.ibj.cariilmu",
    },
    selected: true,
    client: "Cariilmu",
  },
  {
    slug: "muatparts-plus",
    title: "Muatparts PLUS",
    year: 2024,
    emoji: "🚛",
    categories: ["Mobile", "Flutter", "B2B"],
    role: "Mobile Apps Developer",
    summary:
      "B2B marketplace for high-quality truck spare parts and industrial components, streamlining procurement for logistics fleets.",
    problem:
      "Logistics teams were buying spare parts through spreadsheets and phone calls — slow, opaque, and error-prone for fleet-wide procurement.",
    solution: [
      "Cut production crash rates by hunting down and fixing critical bugs across the app.",
      "Designed and shipped high-impact transaction flows to streamline the buyer journey.",
      "Partnered with UI/UX, BA, and QC for high-fidelity releases.",
      "Used GetX for state management — cleaner code, faster feature deployment.",
      "Built a modular internal library to keep design consistent across feature teams.",
      "Integrated AI tooling (Claude Code) to automate boilerplate code generation and sprint velocity.",
    ],
    stack: ["Flutter", "GetX", "Firebase", "Claude Code", "MVVM"],
    thumbs: [
      `${C}/v1780490925/portfolio%20showcase/Gemini_Generated_Image_kvwv7akvwv7akvwv_1_cwmgfn.png`,
      `${C}/v1780490925/portfolio%20showcase/Gemini_Generated_Image_kvwv7akvwv7akvwv_1_cwmgfn.png`,
      `${C}/v1780490925/portfolio%20showcase/Gemini_Generated_Image_kvwv7akvwv7akvwv_1_cwmgfn.png`,
    ],
    gallery: [
      `${C}/v1780490925/portfolio%20showcase/Gemini_Generated_Image_kvwv7akvwv7akvwv_1_cwmgfn.png`,
    ],
    links: {
      playStore:
        "https://play.google.com/store/apps/details?id=com.azlogistik.muatmuattransporter",
    },
    selected: true,
    client: "muatmuat",
  },
  {
    slug: "manga-api",
    title: "manga-api",
    year: 2023,
    emoji: "🗾",
    categories: ["Open Source", "API", "TypeScript"],
    role: "Maintainer",
    summary:
      "REST API for Bahasa Indonesia manga & comics — the data layer behind manga_mint.",
    problem:
      "There was no clean public source of Indonesian-language manga metadata that a hobby client could hit without scraping.",
    solution: [
      "Designed a REST API surface that hobby clients could integrate without scraping.",
      "Kept the schema small and predictable so community wrappers stayed maintainable.",
      "Documented endpoints so newcomers could contribute clients without reverse-engineering.",
    ],
    stack: ["TypeScript", "REST"],
    metrics: [
      { label: "Stars", value: "272" },
      { label: "Forks", value: "97" },
    ],
    thumbs: [
      `${C}/v1741435733/Febry_Ardiansyah_-_IT_c9x8wf.jpg`,
      `${C}/v1741435733/Febry_Ardiansyah_-_IT_c9x8wf.jpg`,
      `${C}/v1741435733/Febry_Ardiansyah_-_IT_c9x8wf.jpg`,
    ],
    gallery: [],
    links: {
      repo: "https://github.com/febryardiansyah/manga-api",
    },
    selected: false,
  },
  {
    slug: "manga-mint",
    title: "manga_mint",
    year: 2022,
    emoji: "🌿",
    categories: ["Open Source", "Flutter", "Mobile"],
    role: "Maintainer",
    summary: "Online manga reader application in Bahasa Indonesia.",
    problem:
      "Reading Indonesian-translated manga meant jumping between shady sites with bad UX and ads.",
    solution: [
      "Built a clean Flutter reader with offline downloads and bookmark sync.",
      "Designed a discover/feed flow that surfaced new chapters reliably.",
      "Kept the architecture modular so contributors could add sources without forking.",
    ],
    stack: ["Dart", "Flutter", "REST"],
    metrics: [
      { label: "Stars", value: "67" },
      { label: "Forks", value: "37" },
    ],
    thumbs: [
      `${C}/v1741435733/Febry_Ardiansyah_-_IT_c9x8wf.jpg`,
      `${C}/v1741435733/Febry_Ardiansyah_-_IT_c9x8wf.jpg`,
      `${C}/v1741435733/Febry_Ardiansyah_-_IT_c9x8wf.jpg`,
    ],
    gallery: [],
    links: {
      repo: "https://github.com/febryardiansyah/manga_mint",
    },
    selected: false,
  },
  {
    slug: "animku",
    title: "animku",
    year: 2022,
    emoji: "🎌",
    categories: ["Open Source", "Flutter", "Mobile"],
    role: "Maintainer",
    summary: "Unofficial myanimelist.net application.",
    problem: "MyAnimeList's mobile experience lagged behind desktop for power users tracking seasonal shows.",
    solution: [
      "Built a Flutter client focused on seasonal tracking and fast search.",
      "Kept the design honest to MAL's data model instead of inventing new abstractions.",
    ],
    stack: ["Dart", "Flutter", "REST"],
    metrics: [
      { label: "Stars", value: "25" },
      { label: "Forks", value: "6" },
    ],
    thumbs: [
      `${C}/v1741435733/Febry_Ardiansyah_-_IT_c9x8wf.jpg`,
      `${C}/v1741435733/Febry_Ardiansyah_-_IT_c9x8wf.jpg`,
      `${C}/v1741435733/Febry_Ardiansyah_-_IT_c9x8wf.jpg`,
    ],
    gallery: [],
    links: {
      repo: "https://github.com/febryardiansyah/animku",
    },
    selected: false,
  },
  {
    slug: "petgram-mobile",
    title: "petgram-mobile",
    year: 2021,
    emoji: "🐾",
    categories: ["Open Source", "Flutter", "ML"],
    role: "Maintainer",
    summary:
      "Instagram for pets, built with Flutter and on-device ML to detect pet posts.",
    problem:
      "Existing pet social apps mixed pets with non-pet content, making the feed noisy for actual animal lovers.",
    solution: [
      "Built a Flutter mobile client with a clean pet-first feed.",
      "Integrated an on-device ML model to flag posts containing pets at upload time.",
    ],
    stack: ["Dart", "Flutter", "ML"],
    metrics: [
      { label: "Stars", value: "12" },
      { label: "Forks", value: "6" },
    ],
    thumbs: [
      `${C}/v1741435733/Febry_Ardiansyah_-_IT_c9x8wf.jpg`,
      `${C}/v1741435733/Febry_Ardiansyah_-_IT_c9x8wf.jpg`,
      `${C}/v1741435733/Febry_Ardiansyah_-_IT_c9x8wf.jpg`,
    ],
    gallery: [],
    links: {
      repo: "https://github.com/febryardiansyah/petgram-mobile",
    },
    selected: false,
  },
];

export const selectedProjects = projects.filter((p) => p.selected);
export const archiveProjects = projects.filter((p) => !p.selected);

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export function getAdjacentProjects(slug: string) {
  const idx = projects.findIndex((p) => p.slug === slug);
  if (idx === -1) return { prev: undefined, next: undefined };
  const prev = idx > 0 ? projects[idx - 1] : projects[projects.length - 1];
  const next = idx < projects.length - 1 ? projects[idx + 1] : projects[0];
  return { prev, next };
}