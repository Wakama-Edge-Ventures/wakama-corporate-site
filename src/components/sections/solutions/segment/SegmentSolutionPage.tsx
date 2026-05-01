"use client";

import {motion, useReducedMotion} from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  FileCheck2,
  Gauge,
  Landmark,
  Layers3,
  MapPinned,
  Radar,
  ShieldCheck,
  Sprout,
} from "lucide-react";
import {useLocale, useTranslations} from "next-intl";

import {Button} from "@/components/ui/Button";
import {Container} from "@/components/ui/Container";

type SegmentSolutionPageProps = {
  namespace: string;
  heroPrimaryHref: string;
  heroSecondaryHref: string;
  finalPrimaryHref: string;
  finalSecondaryHref: string;
};

type CardItem = {
  title: string;
  body: string;
};

type Governance = {
  leftTitle: string;
  leftItems: string[];
  rightTitle: string;
  rightItems: string[];
  rule: string;
};

function withLocale(locale: string, href: string) {
  return `/${locale}${href}`;
}

function SectionIntro({
  eyebrow,
  title,
  description,
  dark = false,
}: {
  eyebrow: string;
  title: string;
  description: string;
  dark?: boolean;
}) {
  return (
    <div className="max-w-3xl">
      <p className="font-mono text-sm font-semibold uppercase tracking-[0.22em] text-cyanLogo">
        {eyebrow}
      </p>
      <h2
        className={
          dark
            ? "mt-4 font-display text-[clamp(1.8rem,2.8vw,2.7rem)] font-light leading-[1.12] text-white"
            : "mt-4 font-display text-[clamp(1.8rem,2.8vw,2.7rem)] font-light leading-[1.12] text-ink"
        }
      >
        {title}
      </h2>
      <p
        className={
          dark
            ? "mt-4 max-w-2xl text-[0.98rem] leading-7 text-white/68 sm:text-[1rem]"
            : "mt-4 max-w-2xl text-[0.98rem] leading-7 text-muted sm:text-[1rem]"
        }
      >
        {description}
      </p>
    </div>
  );
}

export function SegmentSolutionPage({
  namespace,
  heroPrimaryHref,
  heroSecondaryHref,
  finalPrimaryHref,
  finalSecondaryHref,
}: SegmentSolutionPageProps) {
  const t = useTranslations(namespace);
  const locale = useLocale();
  const shouldReduceMotion = useReducedMotion();

  const heroProofs = t.raw("hero.proofs") as string[];
  const problemCards = t.raw("problem.cards") as CardItem[];
  const approachSteps = t.raw("approach.steps") as CardItem[];
  const pilotCards = t.raw("pilot.cards") as CardItem[];
  const deliverables = t.raw("deliverables.items") as string[];
  const governance = t.raw("governance") as Governance;
  const trustSteps = t.raw("trust.steps") as CardItem[];

  const heroIcons = [MapPinned, Gauge, FileCheck2, ShieldCheck];
  const problemIcons = [Landmark, Layers3, FileCheck2, Radar];
  const approachIcons = [MapPinned, CheckCircle2, Gauge, FileCheck2, Radar];
  const pilotIcons = [Sprout, MapPinned, Gauge, FileCheck2];
  const trustIcons = [Sprout, Layers3, ShieldCheck, ArrowRight, Landmark];

  return (
    <>
      <section className="relative overflow-hidden border-b border-white/[0.06] bg-backgroundDeep pb-14 pt-24 sm:pt-28 lg:pb-16 lg:pt-[6.7rem]">
        <div className="absolute inset-0 data-grid opacity-20" />
        <motion.div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(circle_at_18%_24%,rgba(53,245,155,0.15),transparent_34%),radial-gradient(circle_at_80%_28%,rgba(99,224,232,0.14),transparent_30%),radial-gradient(circle_at_80%_78%,rgba(181,139,232,0.1),transparent_32%)]"
          animate={shouldReduceMotion ? undefined : {opacity: [0.58, 0.9, 0.58], scale: [1, 1.02, 1]}}
          transition={{duration: 8, repeat: Infinity, ease: "easeInOut"}}
        />
        <Container className="relative">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <p className="font-mono text-sm font-semibold uppercase tracking-[0.22em] text-cyanLogo">
                {t("hero.eyebrow")}
              </p>
              <h1 className="mt-5 max-w-3xl font-display text-[clamp(1.9rem,3.8vw,3.55rem)] font-light leading-[1.06] text-white">
                {t("hero.title")}
              </h1>
              <p className="mt-5 max-w-2xl text-[1rem] leading-7 text-white/72 sm:text-[1.06rem] sm:leading-8">
                {t("hero.subtitle")}
              </p>
              <p className="mt-4 max-w-2xl text-sm font-medium leading-6 text-cyanLogo/88 sm:text-[0.96rem]">
                {t("hero.promise")}
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Button href={withLocale(locale, heroPrimaryHref)} size="md">
                  {t("hero.primaryCta")}
                </Button>
                <Button href={withLocale(locale, heroSecondaryHref)} variant="secondary" size="md">
                  {t("hero.secondaryCta")}
                </Button>
              </div>
            </div>

            <div className="rounded-[1.35rem] border border-white/10 bg-white/[0.05] p-4 shadow-[0_22px_64px_rgba(7,10,18,0.24)] backdrop-blur-xl sm:p-5">
              <div className="grid gap-3 sm:grid-cols-2">
                {heroProofs.map((proof, index) => {
                  const Icon = heroIcons[index % heroIcons.length] ?? MapPinned;

                  return (
                    <motion.div
                      key={proof}
                      className="flex items-center gap-3 rounded-xl border border-white/10 bg-backgroundDeep/58 px-3.5 py-3"
                      initial={shouldReduceMotion ? false : {opacity: 0, y: 12}}
                      whileInView={shouldReduceMotion ? undefined : {opacity: 1, y: 0}}
                      viewport={{once: true}}
                      transition={{delay: index * 0.06}}
                    >
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] text-mintCta">
                        <Icon aria-hidden="true" size={18} />
                      </span>
                      <span className="text-sm font-medium leading-6 text-white/78">{proof}</span>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-softLight py-16 sm:py-20">
        <Container>
          <SectionIntro
            eyebrow={t("problem.eyebrow")}
            title={t("problem.title")}
            description={t("problem.description")}
          />
          <div className="mt-8 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {problemCards.map((card, index) => {
              const Icon = problemIcons[index % problemIcons.length] ?? Landmark;

              return (
                <motion.article
                  key={card.title}
                  className="rounded-[1.1rem] border border-ink/10 bg-white p-5 shadow-[0_18px_50px_rgba(16,24,40,0.06)]"
                  initial={shouldReduceMotion ? false : {opacity: 0, y: 16}}
                  whileInView={shouldReduceMotion ? undefined : {opacity: 1, y: 0}}
                  viewport={{once: true, margin: "-80px"}}
                  transition={{delay: index * 0.06}}
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-ink text-white">
                    <Icon aria-hidden="true" size={18} />
                  </span>
                  <h3 className="mt-4 font-display text-[1.08rem] font-medium leading-6 text-ink">
                    {card.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-6 text-muted">{card.body}</p>
                </motion.article>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <Container>
          <SectionIntro
            eyebrow={t("approach.eyebrow")}
            title={t("approach.title")}
            description={t("approach.description")}
          />
          <div className="mt-8 grid gap-3 md:grid-cols-2 xl:grid-cols-5">
            {approachSteps.map((step, index) => {
              const Icon = approachIcons[index % approachIcons.length] ?? MapPinned;

              return (
                <motion.article
                  key={step.title}
                  className="rounded-[1.1rem] border border-ink/10 bg-softLight p-5 shadow-[0_16px_42px_rgba(16,24,40,0.05)]"
                  initial={shouldReduceMotion ? false : {opacity: 0, y: 16}}
                  whileInView={shouldReduceMotion ? undefined : {opacity: 1, y: 0}}
                  viewport={{once: true, margin: "-80px"}}
                  transition={{delay: index * 0.06}}
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-ink text-white">
                    <Icon aria-hidden="true" size={18} />
                  </span>
                  <h3 className="mt-4 font-display text-[1.05rem] font-medium leading-6 text-ink">
                    {step.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-6 text-muted">{step.body}</p>
                </motion.article>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden bg-navy py-16 sm:py-20">
        <div className="absolute inset-0 data-grid opacity-16" />
        <motion.div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(circle_at_18%_28%,rgba(53,245,155,0.14),transparent_34%),radial-gradient(circle_at_86%_72%,rgba(99,224,232,0.13),transparent_32%)]"
          animate={shouldReduceMotion ? undefined : {opacity: [0.52, 0.86, 0.52], scale: [1, 1.02, 1]}}
          transition={{duration: 7.5, repeat: Infinity, ease: "easeInOut"}}
        />
        <Container className="relative">
          <SectionIntro
            eyebrow={t("pilot.eyebrow")}
            title={t("pilot.title")}
            description={t("pilot.description")}
            dark
          />
          <div className="mt-8 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
            {pilotCards.map((card, index) => {
              const Icon = pilotIcons[index % pilotIcons.length] ?? Sprout;

              return (
                <motion.article
                  key={card.title}
                  className="rounded-[1.1rem] border border-white/10 bg-white/[0.06] p-5 shadow-[0_18px_54px_rgba(7,10,18,0.18)]"
                  initial={shouldReduceMotion ? false : {opacity: 0, y: 16}}
                  whileInView={shouldReduceMotion ? undefined : {opacity: 1, y: 0}}
                  viewport={{once: true, margin: "-80px"}}
                  transition={{delay: index * 0.06}}
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-mintCta text-ink">
                    <Icon aria-hidden="true" size={18} />
                  </span>
                  <h3 className="mt-4 font-display text-[1.05rem] font-medium leading-6 text-white">
                    {card.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-6 text-white/70">{card.body}</p>
                </motion.article>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <Container>
          <SectionIntro
            eyebrow={t("deliverables.eyebrow")}
            title={t("deliverables.title")}
            description={t("deliverables.description")}
          />
          <div className="mt-8 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {deliverables.map((item, index) => (
              <motion.div
                key={item}
                className="flex items-center gap-3 rounded-[1rem] border border-ink/10 bg-softLight px-4 py-3.5 shadow-[0_14px_36px_rgba(16,24,40,0.05)]"
                initial={shouldReduceMotion ? false : {opacity: 0, y: 14}}
                whileInView={shouldReduceMotion ? undefined : {opacity: 1, y: 0}}
                viewport={{once: true, margin: "-80px"}}
                transition={{delay: index * 0.04}}
              >
                <CheckCircle2 aria-hidden="true" size={18} className="shrink-0 text-mintCta" />
                <span className="text-sm font-medium leading-6 text-ink">{item}</span>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-softLight py-16 sm:py-20">
        <Container>
          <SectionIntro
            eyebrow={t("governance.eyebrow")}
            title={t("governance.title")}
            description={t("governance.description")}
          />
          <div className="mt-8 grid gap-3 lg:grid-cols-2">
            <div className="rounded-[1.15rem] border border-ink/10 bg-white p-5 shadow-[0_16px_42px_rgba(16,24,40,0.05)]">
              <h3 className="font-display text-[1.08rem] font-medium text-ink">{governance.leftTitle}</h3>
              <div className="mt-4 grid gap-2.5">
                {governance.leftItems.map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-lg border border-ink/10 bg-softLight px-3.5 py-3">
                    <CheckCircle2 aria-hidden="true" size={17} className="shrink-0 text-cyanLogo" />
                    <span className="text-sm leading-6 text-ink">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[1.15rem] border border-ink/10 bg-white p-5 shadow-[0_16px_42px_rgba(16,24,40,0.05)]">
              <h3 className="font-display text-[1.08rem] font-medium text-ink">{governance.rightTitle}</h3>
              <div className="mt-4 grid gap-2.5">
                {governance.rightItems.map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-lg border border-ink/10 bg-softLight px-3.5 py-3">
                    <CheckCircle2 aria-hidden="true" size={17} className="shrink-0 text-orangeAccent" />
                    <span className="text-sm leading-6 text-ink">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <p className="mt-6 max-w-4xl rounded-xl border border-ink/10 bg-white px-5 py-4 text-[0.96rem] font-medium leading-7 text-ink shadow-[0_14px_36px_rgba(16,24,40,0.04)]">
            {governance.rule}
          </p>
        </Container>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <Container>
          <SectionIntro
            eyebrow={t("trust.eyebrow")}
            title={t("trust.title")}
            description={t("trust.description")}
          />
          <div className="mt-8 rounded-[1.2rem] border border-ink/10 bg-softLight p-4 shadow-[0_16px_42px_rgba(16,24,40,0.05)] sm:p-5">
            <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-5">
              {trustSteps.map((step, index) => {
                const Icon = trustIcons[index % trustIcons.length] ?? Sprout;

                return (
                  <motion.article
                    key={step.title}
                    className="rounded-[1rem] border border-ink/10 bg-white p-4 shadow-[0_12px_30px_rgba(16,24,40,0.04)]"
                    initial={shouldReduceMotion ? false : {opacity: 0, y: 14}}
                    whileInView={shouldReduceMotion ? undefined : {opacity: 1, y: 0}}
                    viewport={{once: true, margin: "-80px"}}
                    transition={{delay: index * 0.05}}
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-ink text-white">
                      <Icon aria-hidden="true" size={18} />
                    </span>
                    <h3 className="mt-4 font-display text-[1rem] font-medium text-ink">{step.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-muted">{step.body}</p>
                  </motion.article>
                );
              })}
            </div>
            <p className="mt-5 max-w-3xl text-sm leading-6 text-muted">{t("trust.note")}</p>
          </div>
        </Container>
      </section>

      <section className="bg-[#0B1020] py-16">
        <Container>
          <div className="relative overflow-hidden rounded-[1.6rem] border border-white/10 bg-[radial-gradient(circle_at_top,_rgba(80,212,196,0.18),_transparent_38%),linear-gradient(135deg,#0B1020_0%,#121A31_100%)] px-6 py-8 shadow-[0_28px_80px_rgba(11,16,32,0.42)] sm:px-8 lg:px-10">
            <div className="absolute inset-0 data-grid opacity-18" />
            <div className="relative max-w-3xl">
              <h2 className="font-display text-[clamp(1.55rem,2.4vw,2.35rem)] font-normal leading-[1.12] text-white">
                {t("finalCta.title")}
              </h2>
              <p className="mt-3 max-w-2xl text-[0.97rem] leading-7 text-white/70 sm:text-[1.01rem]">
                {t("finalCta.subtitle")}
              </p>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button href={withLocale(locale, finalPrimaryHref)} size="md">
                {t("finalCta.primaryCta")}
              </Button>
              <Button href={withLocale(locale, finalSecondaryHref)} size="md" variant="secondary">
                {t("finalCta.secondaryCta")}
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
