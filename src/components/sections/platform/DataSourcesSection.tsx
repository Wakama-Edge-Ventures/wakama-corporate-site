"use client";

import {motion, useReducedMotion} from "framer-motion";
import {
  CloudSun,
  FileBadge2,
  FileClock,
  Leaf,
  MapPinned,
  RadioTower,
  Tractor,
  UsersRound,
  type LucideIcon,
} from "lucide-react";
import {useTranslations} from "next-intl";

import {Container} from "@/components/ui/Container";

const icons: LucideIcon[] = [FileBadge2, MapPinned, UsersRound, RadioTower, Leaf, CloudSun, Tractor, FileClock];

export function DataSourcesSection() {
  const t = useTranslations("platformPage.dataSources");
  const shouldReduceMotion = useReducedMotion();
  const items = t.raw("items") as Array<{title: string; body: string}>;

  return (
    <section className="bg-white py-16 sm:py-20">
      <Container>
        <div className="max-w-3xl">
          <h2 className="font-display text-[clamp(1.9rem,3vw,2.75rem)] font-light leading-[1.12] text-ink">
            {t("title")}
          </h2>
          <p className="mt-4 max-w-2xl text-[0.98rem] leading-7 text-muted sm:text-[1rem]">
            {t("intro")}
          </p>
        </div>

        <div className="mt-8 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          {items.map((item, index) => {
            const Icon = icons[index] ?? FileBadge2;

            return (
              <motion.div
                key={item.title}
                initial={shouldReduceMotion ? false : {opacity: 0, y: 18}}
                whileInView={shouldReduceMotion ? undefined : {opacity: 1, y: 0}}
                viewport={{once: true, margin: "-80px"}}
                transition={{delay: index * 0.06}}
                whileHover={shouldReduceMotion ? undefined : {y: -4}}
              >
                <div className="h-full min-h-[168px] rounded-lg border border-ink/10 bg-[linear-gradient(180deg,#FFFFFF_0%,#F8FBFA_100%)] p-4 shadow-[0_10px_24px_rgba(16,24,40,0.04)]">
                  <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-cyanLogo">
                    {t("sourceLabel", {number: index + 1})}
                  </p>
                  <span className="mt-3 flex h-9 w-9 items-center justify-center rounded-lg bg-backgroundDeep text-cyanLogo">
                    <Icon aria-hidden="true" size={18} />
                  </span>
                  <h3 className="mt-3 font-sans text-[0.98rem] font-medium leading-6 text-ink">{item.title}</h3>
                  <p className="mt-1.5 text-[0.87rem] leading-6 text-muted">{item.body}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
