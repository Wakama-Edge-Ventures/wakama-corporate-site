"use client";

import {motion, useReducedMotion} from "framer-motion";
import {useTranslations} from "next-intl";

import {Container} from "@/components/ui/Container";

type Person = {
  name: string;
  role: string;
};

export function AdvisorsSection() {
  const t = useTranslations("companyPage.expertise");
  const shouldReduceMotion = useReducedMotion();
  const advisors = t.raw("advisors") as Person[];
  const ambassadors = t.raw("ambassadors") as Person[];
  const pending = t.raw("pending") as Person[];

  return (
    <section className="bg-softLight py-16 sm:py-20">
      <Container>
        <div className="max-w-3xl">
          <h2 className="font-display text-[clamp(1.72rem,2.6vw,2.7rem)] font-normal leading-[1.14] text-ink">
            {t("title")}
          </h2>
        </div>

        <div className="mt-8 space-y-8">
          <div>
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-cyanLogo">
              {t("advisorsLabel")}
            </p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {advisors.map((advisor, index) => (
                <MiniCard
                  key={advisor.name}
                  person={advisor}
                  index={index}
                  shouldReduceMotion={shouldReduceMotion}
                />
              ))}
            </div>
          </div>

          <div>
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-cyanLogo">
              {t("ambassadorsLabel")}
            </p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {ambassadors.map((ambassador, index) => (
                <MiniCard
                  key={ambassador.name}
                  person={ambassador}
                  index={index}
                  shouldReduceMotion={shouldReduceMotion}
                />
              ))}
            </div>
          </div>

          <div>
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-cyanLogo">
              {t("pendingLabel")}
            </p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {pending.map((person, index) => (
                <MiniCard
                  key={person.name}
                  person={person}
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
      className="rounded-lg border border-ink/10 bg-white p-4 shadow-[0_16px_42px_rgba(16,24,40,0.05)]"
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
