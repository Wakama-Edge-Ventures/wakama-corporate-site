"use client";

import {motion, useReducedMotion} from "framer-motion";
import {useTranslations} from "next-intl";

import {Container} from "@/components/ui/Container";

type Person = {
  name: string;
  role: string;
  body?: string;
  initials?: string;
};

export function TeamSection() {
  const t = useTranslations("companyPage");
  const shouldReduceMotion = useReducedMotion();
  const team = t.raw("team") as {
    title: string;
    body: string;
    founders: Person[];
  };
  const expertise = t.raw("expertise") as {
    advisorsTitle: string;
    advisors: Person[];
    ambassadorsTitle: string;
    ambassadors: Person[];
  };

  return (
    <section id="team" className="bg-white py-16 sm:py-18">
      <Container>
        <div className="max-w-3xl">
          <h2 className="font-display text-[clamp(1.68rem,2.55vw,2.5rem)] font-normal leading-[1.12] text-ink">
            {team.title}
          </h2>
          <p className="mt-4 max-w-2xl text-[0.98rem] leading-7 text-muted sm:text-[1.03rem]">
            {team.body}
          </p>
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-2">
          {team.founders.map((founder, index) => (
            <motion.article
              key={founder.name}
              className="rounded-[1.25rem] border border-ink/10 bg-softLight p-5 shadow-[0_18px_50px_rgba(16,24,40,0.06)]"
              initial={shouldReduceMotion ? false : {opacity: 0, y: 16}}
              whileInView={shouldReduceMotion ? undefined : {opacity: 1, y: 0}}
              viewport={{once: true, margin: "-80px"}}
              transition={{delay: index * 0.08}}
            >
              <div className="flex items-start gap-4">
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-backgroundDeep text-sm font-semibold uppercase tracking-[0.14em] text-white">
                  {founder.initials}
                </span>
                <div>
                  <h3 className="font-display text-[1.12rem] font-medium text-ink">{founder.name}</h3>
                  <p className="mt-1 text-sm font-medium text-cyanLogo">{founder.role}</p>
                  <p className="mt-3 text-sm leading-6 text-muted">{founder.body}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-cyanLogo">
              {expertise.advisorsTitle}
            </p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {expertise.advisors.map((advisor, index) => (
                <MiniCard key={advisor.name} person={advisor} index={index} shouldReduceMotion={shouldReduceMotion} />
              ))}
            </div>
          </div>

          <div>
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-cyanLogo">
              {expertise.ambassadorsTitle}
            </p>
            <div className="mt-4 grid gap-3">
              {expertise.ambassadors.map((ambassador, index) => (
                <MiniCard
                  key={ambassador.name}
                  person={ambassador}
                  index={index}
                  shouldReduceMotion={shouldReduceMotion}
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function MiniCard({
  person,
  index,
  shouldReduceMotion,
}: {
  person: Person;
  index: number;
  shouldReduceMotion: boolean | null;
}) {
  return (
    <motion.article
      className="rounded-2xl border border-ink/10 bg-white p-4 shadow-[0_16px_42px_rgba(16,24,40,0.05)]"
      initial={shouldReduceMotion ? false : {opacity: 0, y: 14}}
      whileInView={shouldReduceMotion ? undefined : {opacity: 1, y: 0}}
      viewport={{once: true, margin: "-80px"}}
      transition={{delay: index * 0.05}}
    >
      <h3 className="font-sans text-[1rem] font-medium text-ink">{person.name}</h3>
      <p className="mt-2 text-sm leading-6 text-muted">{person.role}</p>
    </motion.article>
  );
}
