import Image from "next/image";
import ThemeToggle from "./components/ThemeToggle";

const work = [
  {
    logo: "/logos/vibe.svg",
    color: "#4F46E5",
    name: "Vibe.co",
    role: "Design Engineer",
    period: "Jan 2023 — Now",
    desc: "Building the product UI, a creative generator, and the marketing site end-to-end.",
  },
  {
    logo: "/logos/vook.svg",
    color: "#0883C6",
    name: "Vook.ai",
    role: "Design Engineer",
    period: "2023",
    desc: "Built the core product experience for an AI-powered platform.",
  },
  {
    logo: "/logos/baback.svg",
    color: "#7C3AED",
    name: "Baback.co",
    role: "Design Engineer",
    period: "2023",
    desc: "Designed and shipped the product interface and brand experience.",
  },
  {
    logo: "/logos/bastion.svg",
    color: "#3D88FF",
    name: "Bastion.tech",
    role: "Design Engineer",
    period: "2023",
    desc: "Built the product UI for a cybersecurity platform.",
  },
  {
    logo: "/logos/cohort.svg",
    color: "#FF7554",
    name: "Cohort · eFounders",
    role: "Design Engineer",
    period: "2022",
    desc: "Shipped a loyalty & engagement platform from 0 to 1 at a startup studio.",
  },
  {
    logo: "/logos/invoxia.svg",
    color: "#0019FF",
    name: "invoxia",
    role: "Head of Product Management",
    period: "2020 — 2021",
    desc: "Led product for a connected devices company.",
  },
  {
    logo: "/logos/dentalmonitoring.svg",
    color: "#17AAB4",
    name: "DentalMonitoring",
    role: "Head of Design · PM",
    period: "2017 — 2020",
    desc: "Led design for an AI-powered orthodontic monitoring platform. Grew from designer to Head of Design over 3 years.",
  },
  {
    logo: "/logos/simplifield.svg",
    color: "#FE1A45",
    name: "SimpliField",
    role: "PM / Product Designer",
    period: "2016 — 2017",
    desc: "PM and product designer on a retail execution platform.",
  },
  {
    logo: "/logos/freelance.svg",
    color: "#52525B",
    name: "Freelance",
    role: "Designer / Developer",
    period: "2011 — 2016",
    desc: "Web agency run as a SaaS product — 55 projects delivered to 27 clients over 5 years.",
  },
];

const whatIDo = [
  {
    title: "Product Design",
    desc: "End-to-end product design, from concept to shipped interface — no handoff, no gap.",
    tasks: [
      "User flows & wireframes",
      "UI design & prototyping",
      "Design systems & component libraries",
      "Design tokens & theming",
    ],
    skills: ["Figma"],
  },
  {
    title: "Front-End",
    desc: "Production-level code with a focus on interaction quality.",
    tasks: [
      "Component architecture",
      "Animations & micro-interactions",
      "Responsive & accessible layouts",
      "Performance optimization",
    ],
    skills: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Shadcn",
      "React",
      "Claude Code",
    ],
  },
  {
    title: "Growth",
    desc: "Structured iteration on the surfaces that move conversion metrics.",
    tasks: [
      "Landing page design & build",
      "A/B test setup & analysis",
      "Onboarding & activation flows",
      "Funnel audit & optimization",
    ],
    skills: ["Statsig", "Looker"],
  },
];

const courses = [
  { title: "Animations.dev", author: "Emil Kowalski", year: "2025" },
  { title: "TypeScript", author: "Udemy (Academind)", year: "2020" },
  { title: "Next.js (beginner)", author: "Udemy", year: "2020" },
  { title: "React.js", author: "Udemy (Academind)", year: "2019" },
  { title: "Swift", author: "Lynda.com", year: "2015" },
  { title: "JavaScript", author: "Lynda.com", year: "2011" },
  { title: "Flash & ActionScript 3", author: null, year: "2007" },
];

const books = [
  {
    title: "Refactoring UI",
    author: "Adam Wathan & Steve Schoger",
    year: "2022",
  },
  {
    title: "How To Write Unmaintainable Code",
    author: "Roedy Green",
    year: "2021",
  },
  { title: "(Design) Sprint", author: "Jake Knapp", year: "2018" },
  {
    title: "The Design of Everyday Things",
    author: "Donald Norman",
    year: "2019",
  },
  { title: "Atomic Design", author: "Brad Frost", year: "2017" },
  {
    title: "Designing Interfaces",
    author: "Tidwell, Brewer & Valencia",
    year: "2016",
  },
  { title: "The Lean Startup", author: "Eric Ries", year: "2016" },
];

export default function Home() {
  return (
    <main>
      <div className="mx-auto overflow-hidden sm:overflow-visible sm:px-8 xl:max-w-8xl xl:px-8">
        <div className="grid grid-cols-1 items-start border-zinc-200 dark:border-zinc-800 sm:mt-8 sm:border-t xl:grid-cols-[34rem_minmax(0,1fr)]">
          {/* ── Left column — sticky ── */}
          <div className="relative border-b border-zinc-200 dark:border-zinc-800 px-8 pb-12 pt-8 sm:border-x sm:px-12 sm:py-16 xl:sticky xl:top-0 xl:border-r-0 xl:min-h-screen">
            <ThemeToggle />

            {/* Corner gradients */}
            <span className="absolute from-zinc-200 dark:from-zinc-800 to-transparent -left-px top-[-33px] h-8 w-px bg-gradient-to-t" />
            <span className="absolute from-zinc-200 dark:from-zinc-800 to-transparent -right-px top-[-33px] h-8 w-px bg-gradient-to-t" />
            <span className="absolute from-zinc-200 dark:from-zinc-800 to-transparent -left-px bottom-[-33px] h-8 w-px bg-gradient-to-b hidden xl:block" />
            <span className="absolute from-zinc-200 dark:from-zinc-800 to-transparent -top-px left-[-33px] h-px w-8 bg-gradient-to-l" />
            <span className="absolute from-zinc-200 dark:from-zinc-800 to-transparent -top-px right-[-33px] h-px w-8 bg-gradient-to-r xl:hidden" />
            <span className="absolute from-zinc-200 dark:from-zinc-800 to-transparent -bottom-px left-[-33px] h-px w-8 bg-gradient-to-l" />
            <span className="absolute from-zinc-200 dark:from-zinc-800 to-transparent -bottom-px right-[-33px] h-px w-8 bg-gradient-to-r hidden xl:block" />

            {/* Glow line bottom */}
            <div className="absolute inset-x-0 -bottom-2 flex h-2 justify-center overflow-hidden">
              <div className="-mt-px flex h-[2px] w-full max-w-sm">
                <div className="w-full flex-none blur-sm [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(20,184,166,0.3)_67.19%,rgba(20,184,166,0)_100%)]" />
                <div className="-ml-[100%] w-full flex-none blur-[1px] [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(20,184,166,0.3)_67.19%,rgba(20,184,166,0)_100%)]" />
              </div>
            </div>

            {/* Photo */}
            <Image
              src="/avatar.webp"
              alt="Rémi Charreau"
              width={160}
              height={160}
              className="rounded-full object-cover object-top mb-6 ring-1 ring-zinc-200 dark:ring-zinc-800 size-40"
            />

            {/* Name + title */}
            <h1 className="text-4xl font-semibold leading-none tracking-tight text-zinc-900 dark:text-white mb-1 xl:text-5xl/none">
              Rémi Charreau
            </h1>
            <p className="mt-3 text-base text-zinc-500 dark:text-zinc-400">
              Design Engineer
            </p>

            {/* Meta */}
            <dl className="mt-4 flex flex-wrap gap-x-6 gap-y-1 text-base text-zinc-400 dark:text-zinc-500">
              <div className="flex items-center gap-1.5">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span>Lyon, France</span>
              </div>
            </dl>

            {/* Links */}
            <div className="mt-5 flex gap-3">
              {[
                {
                  label: "LinkedIn",
                  href: "https://www.linkedin.com/in/remicharreau",
                },
                { label: "GitHub", href: "https://github.com/RemiCharreau" },
                { label: "Twitter", href: "https://x.com/RemiCharreau" },
                { label: "Email", href: "mailto:remi.charreau@gmail.com" },
              ].map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 rounded-full border border-zinc-200 dark:border-zinc-700 bg-zinc-100 dark:bg-zinc-800 px-3 py-1 text-base text-zinc-600 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
                >
                  {label}
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="opacity-40"
                  >
                    <path d="M7 7h10v10" />
                    <path d="M7 17 17 7" />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* ── Right column — scrollable ── */}
          <div className="relative px-8 pb-16 pt-12 border-zinc-200 dark:border-zinc-800 sm:mb-24 sm:border-x sm:border-b sm:px-12 sm:pt-16">
            {/* Corner gradients */}
            <span className="absolute from-zinc-200 dark:from-zinc-800 to-transparent -right-px top-[-33px] h-8 w-px bg-gradient-to-t hidden xl:block" />
            <span className="absolute from-zinc-200 dark:from-zinc-800 to-transparent -top-px right-[-33px] h-px w-8 bg-gradient-to-r hidden xl:block" />
            <span className="absolute from-zinc-200 dark:from-zinc-800 to-transparent -bottom-px right-[-33px] h-px w-8 bg-gradient-to-r hidden xl:block" />
            <span className="absolute from-zinc-200 dark:from-zinc-800 to-transparent -bottom-px left-[-33px] h-px w-8 bg-gradient-to-l hidden xl:block" />
            <span className="absolute from-zinc-200 dark:from-zinc-800 to-transparent -left-px bottom-[-33px] h-8 w-px bg-gradient-to-b hidden xl:block" />
            <span className="absolute from-zinc-200 dark:from-zinc-800 to-transparent -right-px bottom-[-33px] h-8 w-px bg-gradient-to-b hidden xl:block" />

            {/* Bio */}
            <section className="mb-12 max-w-[70ch]">
              <p className="text-base leading-7 text-zinc-500 dark:text-zinc-400">
                I got into web in 2007 making Flash sites. Over time I drifted
                toward design, then product management — which taught me a lot
                about how products are actually built and why things fail. But I
                kept finding myself most useful when I could just open the
                editor and fix things myself.
              </p>
              <p className="mt-4 text-base leading-7 text-zinc-500 dark:text-zinc-400">
                These days I work as a Design Engineer — somewhere between
                design and front-end, which is where I feel most at home.
                Currently at{" "}
                <a
                  href="https://vibe.co"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-900 dark:text-white hover:text-zinc-600 dark:hover:text-zinc-300 underline underline-offset-2 decoration-zinc-300 dark:decoration-zinc-700 transition-colors"
                >
                  Vibe.co
                </a>
                , and available for select freelance projects.
              </p>
            </section>

            <hr className="border-zinc-200 dark:border-zinc-800 mb-12" />

            {/* What I do */}
            <section className="mb-12">
              <h2 className="text-base font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-6">
                What I do
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                {whatIDo.map((item) => (
                  <div key={item.title}>
                    <p className="text-base font-medium text-zinc-900 dark:text-white mb-2">
                      {item.title}
                    </p>
                    <p className="text-base leading-6 text-zinc-500 dark:text-zinc-400 mb-3">
                      {item.desc}
                    </p>
                    <ul className="mb-4 space-y-1">
                      {item.tasks.map((task) => (
                        <li
                          key={task}
                          className="text-base text-zinc-400 dark:text-zinc-500 flex items-start gap-1.5"
                        >
                          <span className="mt-1.5 size-1 rounded-full bg-zinc-300 dark:bg-zinc-600 shrink-0" />
                          {task}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-1.5">
                      {item.skills.map((skill) => (
                        <span
                          key={skill}
                          className="inline-flex items-center rounded-full border border-zinc-200 dark:border-zinc-700 bg-zinc-100 dark:bg-zinc-800 px-2.5 py-0.5 text-base text-zinc-500 dark:text-zinc-400"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <hr className="border-zinc-200 dark:border-zinc-800 mb-12" />

            {/* Work */}
            <section className="mb-12">
              <h2 className="text-base font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-6">
                Work
              </h2>
              <div className="space-y-7">
                {work.map((item) => (
                  <div key={item.name} className="flex gap-4">
                    <div
                      className="shrink-0 size-10 rounded-lg flex items-center justify-center p-2"
                      style={{ backgroundColor: item.color }}
                    >
                      <Image
                        src={item.logo}
                        alt={item.name}
                        width={48}
                        height={48}
                        unoptimized
                        style={{
                          filter: "brightness(0) invert(1)",
                          width: "auto",
                          height: "48px",
                        }}
                      />
                    </div>
                    <div className="min-w-0">
                      <p className="text-lg font-semibold text-zinc-900 dark:text-white leading-tight">
                        {item.name}
                      </p>
                      <p className="text-base text-zinc-400 dark:text-zinc-500 mt-0.5 tabular-nums">
                        {item.period}
                      </p>
                      <p className="mt-2 text-base leading-6 text-zinc-500 dark:text-zinc-400">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <hr className="border-zinc-200 dark:border-zinc-800 mb-12" />

            {/* Courses */}
            <section className="mb-12">
              <h2 className="text-base font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-6">
                Courses
              </h2>
              <div className="space-y-3">
                {courses.map((item) => (
                  <div
                    key={item.title}
                    className="flex items-baseline justify-between gap-4"
                  >
                    <div className="flex items-baseline gap-2 min-w-0">
                      <p className="text-base text-zinc-900 dark:text-white shrink-0">
                        {item.title}
                      </p>
                      {item.author && (
                        <p className="text-base text-zinc-400 dark:text-zinc-500 truncate">
                          · {item.author}
                        </p>
                      )}
                    </div>
                    <p className="text-base text-zinc-400 dark:text-zinc-500 tabular-nums shrink-0">
                      {item.year}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <hr className="border-zinc-200 dark:border-zinc-800 mb-12" />

            {/* Books */}
            <section className="mb-12">
              <h2 className="text-base font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-6">
                Books
              </h2>
              <div className="space-y-3">
                {books.map((item) => (
                  <div
                    key={item.title}
                    className="flex items-baseline justify-between gap-4"
                  >
                    <div className="flex items-baseline gap-2 min-w-0">
                      <p className="text-base text-zinc-900 dark:text-white shrink-0">
                        {item.title}
                      </p>
                      <p className="text-base text-zinc-400 dark:text-zinc-500 truncate">
                        · {item.author}
                      </p>
                    </div>
                    <p className="text-base text-zinc-400 dark:text-zinc-500 tabular-nums shrink-0">
                      {item.year}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
