import Image from "next/image";

const skills = [
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Framer Motion",
  "Shadcn",
  "UI Design",
  "Design Systems",
  "Landing Pages",
  "A/B Testing",
  "Figma",
  "React",
  "Onboarding",
];

export default function Home() {
  return (
    <main>
      <div className="mx-auto overflow-hidden sm:overflow-visible sm:px-8 xl:max-w-8xl xl:px-8">
        <div className="grid grid-cols-1 items-start border-white/10 sm:mt-8 sm:border-t xl:grid-cols-[34rem_minmax(0,1fr)]">
          {/* ── Left column — sticky ── */}
          <div className="relative border-b border-white/10 px-8 pb-12 pt-8 sm:border-x sm:px-12 sm:py-16 xl:sticky xl:top-0 xl:border-r-0 xl:min-h-screen">
            {/* Corner gradients */}
            <span className="absolute from-white/10 to-transparent -left-px top-[-33px] h-8 w-px bg-gradient-to-t" />
            <span className="absolute from-white/10 to-transparent -right-px top-[-33px] h-8 w-px bg-gradient-to-t" />
            <span className="absolute from-white/10 to-transparent -left-px bottom-[-33px] h-8 w-px bg-gradient-to-b hidden xl:block" />
            <span className="absolute from-white/10 to-transparent -top-px left-[-33px] h-px w-8 bg-gradient-to-l" />
            <span className="absolute from-white/10 to-transparent -top-px right-[-33px] h-px w-8 bg-gradient-to-r xl:hidden" />
            <span className="absolute from-white/10 to-transparent -bottom-px left-[-33px] h-px w-8 bg-gradient-to-l" />
            <span className="absolute from-white/10 to-transparent -bottom-px right-[-33px] h-px w-8 bg-gradient-to-r hidden xl:block" />

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
              className="rounded-full object-cover object-top mb-6 ring-1 ring-white/10 size-40"
            />

            {/* Name + title */}
            <h1 className="text-4xl font-semibold leading-none tracking-tight text-white mb-1 xl:text-5xl/none">
              Rémi Charreau
            </h1>
            <p className="mt-3 text-base text-zinc-400">Design Engineer</p>

            {/* Meta */}
            <dl className="mt-4 flex flex-wrap gap-x-6 gap-y-1 text-sm text-zinc-500">
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
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                <a
                  href="mailto:remi.charreau@me.com"
                  className="hover:text-zinc-300 transition-colors"
                >
                  remi.charreau@gmail.com
                </a>
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
              ].map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300 hover:bg-white/10 transition-colors"
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

            {/* Skill badges */}
            <div className="mt-8 flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-400"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* ── Right column — scrollable ── */}
          <div className="relative px-8 pb-16 pt-12 border-white/10 sm:mb-24 sm:border-x sm:border-b sm:px-12 sm:pt-16">
            {/* Corner gradients */}
            <span className="absolute from-white/10 to-transparent -right-px top-[-33px] h-8 w-px bg-gradient-to-t hidden xl:block" />
            <span className="absolute from-white/10 to-transparent -top-px right-[-33px] h-px w-8 bg-gradient-to-r hidden xl:block" />
            <span className="absolute from-white/10 to-transparent -bottom-px right-[-33px] h-px w-8 bg-gradient-to-r hidden xl:block" />
            <span className="absolute from-white/10 to-transparent -bottom-px left-[-33px] h-px w-8 bg-gradient-to-l hidden xl:block" />
            <span className="absolute from-white/10 to-transparent -left-px bottom-[-33px] h-8 w-px bg-gradient-to-b hidden xl:block" />
            <span className="absolute from-white/10 to-transparent -right-px bottom-[-33px] h-8 w-px bg-gradient-to-b hidden xl:block" />

            {/* Bio */}
            <section className="mb-12 max-w-xl">
              <p className="text-base leading-7 text-zinc-400">
                13 years designing and shipping complex web products — mostly
                SaaS B2B in high-growth environments. I turn ideas into
                production-ready interfaces, design and code, no handoff with
                engineering. Strong focus on motion, micro-interactions, and the
                last 10% that makes the web feel right.
              </p>
              <p className="mt-4 text-base leading-7 text-zinc-400">
                Currently at{" "}
                <a
                  href="https://vibe.co"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-zinc-300 underline underline-offset-2 decoration-white/30 transition-colors"
                >
                  Vibe.co
                </a>{" "}
                — working on the app, the creative generator, and the marketing
                site. Available for select freelance projects.
              </p>
            </section>

            <hr className="border-white/10 mb-12" />

            {/* What I do */}
            <section className="mb-12">
              <h2 className="text-xs font-semibold uppercase tracking-widest text-zinc-500 mb-6">
                What I do
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {[
                  {
                    title: "Design Engineering",
                    desc: "UI design, design systems, component libraries. One person doing both sides, shipped as-is.",
                  },
                  {
                    title: "Front-End",
                    desc: "Next.js · TypeScript · Tailwind CSS · Shadcn · Framer Motion. Production-level code with a focus on interaction quality.",
                  },
                  {
                    title: "Growth",
                    desc: "Landing pages, A/B testing, onboarding & activation — structured iteration to move conversion metrics.",
                  },
                ].map((item) => (
                  <div key={item.title}>
                    <p className="text-sm font-medium text-white mb-1">
                      {item.title}
                    </p>
                    <p className="text-sm leading-6 text-zinc-500">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <hr className="border-white/10 mb-12" />

            {/* Experience */}
            <section className="mb-12">
              <h2 className="text-xs font-semibold uppercase tracking-widest text-zinc-500 mb-6">
                Experience
              </h2>
              <div className="space-y-7">
                {[
                  {
                    period: "2023 — Now",
                    role: "Design Engineer",
                    company: "Vibe.co",
                    desc: "Building the product UI, a creative generator, and the marketing site end-to-end.",
                  },
                  {
                    period: "2022",
                    role: "Design Engineer",
                    company: "Cohort · eFounders",
                    desc: "Shipped a loyalty & engagement platform from 0 to 1 at a startup studio.",
                  },
                  {
                    period: "2017 — 2020",
                    role: "Head of Design · PM / Product Designer",
                    company: "DentalMonitoring · Paris",
                    desc: "Led design for an AI-powered orthodontic monitoring platform. Grew from designer to Head of Design over 3 years.",
                  },
                  {
                    period: "2020 — 2021",
                    role: "Head of Product Management",
                    company: "invoxia · Paris",
                    desc: null,
                  },
                  {
                    period: "2016 — 2017",
                    role: "PM / Product Designer",
                    company: "SimpliField · Paris",
                    desc: null,
                  },
                  {
                    period: "2011 — 2016",
                    role: "Designer / Developer",
                    company: "Freelance · Paris",
                    desc: "Web agency run as a SaaS product — 55 projects delivered to 27 clients over 5 years.",
                  },
                ].map((item) => (
                  <div key={item.company} className="flex gap-6">
                    <div className="w-28 shrink-0 text-xs text-zinc-600 pt-0.5 tabular-nums">
                      {item.period}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-white">
                        {item.role}
                      </p>
                      <p className="text-sm text-zinc-500">{item.company}</p>
                      {item.desc && (
                        <p className="mt-1 text-sm leading-6 text-zinc-600">
                          {item.desc}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <hr className="border-white/10 mb-12" />

            {/* Side projects */}
            <section>
              <h2 className="text-xs font-semibold uppercase tracking-widest text-zinc-500 mb-6">
                Side projects
              </h2>
              <div className="flex gap-6">
                <div className="w-28 shrink-0 text-xs text-zinc-600 pt-0.5 tabular-nums">
                  2010 — 2013
                </div>
                <div>
                  <p className="text-sm font-medium text-white">
                    Concours AST{" "}
                    <span className="font-normal text-zinc-500">· Founder</span>
                  </p>
                  <p className="mt-1 text-sm leading-6 text-zinc-600">
                    Online prep platform for business school exams. 2k+ active
                    members/year, 30k page views/month, 20 contributors. Sold to
                    ecole2commerce.com.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
