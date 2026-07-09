"use client";

import {motion, useReducedMotion} from "framer-motion";
import {
  BadgeCheck,
  BrainCircuit,
  Building2,
  Handshake,
  Landmark,
  LineChart,
  LockKeyhole,
  ShieldCheck,
  Truck,
  UsersRound,
  type LucideIcon,
} from "lucide-react";
import {useTranslations} from "next-intl";

import {Container} from "@/components/ui/Container";
import {cn} from "@/lib/utils";

type Person = {
  name: string;
  role: string;
  body?: string;
  initials?: string;
  linkedinUrl?: string;
};

type Tone = "leadership" | "core" | "consultant" | "advisor";

const toneStyles: Record<
  Tone,
  {
    card: string;
    iconWrap: string;
    icon: string;
    badge: string;
    glow: string;
  }
> = {
  leadership: {
    card: "border-cyanLogo/24 bg-[linear-gradient(145deg,#FFFFFF_0%,#F7FCFD_48%,rgba(99,224,232,0.13)_100%)] shadow-[0_22px_60px_rgba(16,24,40,0.08)]",
    iconWrap: "border-cyanLogo/26 bg-backgroundDeep text-cyanLogo shadow-[0_16px_38px_rgba(7,10,18,0.18)]",
    icon: "text-cyanLogo",
    badge: "border-cyanLogo/24 bg-cyanLogo/10 text-cyanLogo",
    glow: "bg-cyanLogo/12",
  },
  core: {
    card: "border-mintCta/22 bg-[linear-gradient(145deg,#FFFFFF_0%,#F8FFFB_56%,rgba(53,245,155,0.1)_100%)] shadow-[0_18px_48px_rgba(16,24,40,0.065)]",
    iconWrap: "border-mintCta/28 bg-mintCta/12 text-ink",
    icon: "text-wakamaGreen",
    badge: "border-mintCta/24 bg-mintCta/10 text-wakamaGreen",
    glow: "bg-mintCta/12",
  },
  consultant: {
    card: "border-orangeAccent/20 bg-[linear-gradient(145deg,#FFFFFF_0%,#FFFBF7_58%,rgba(255,122,26,0.08)_100%)] shadow-[0_18px_48px_rgba(16,24,40,0.06)]",
    iconWrap: "border-orangeAccent/24 bg-orangeAccent/10 text-orangeAccent",
    icon: "text-orangeAccent",
    badge: "border-orangeAccent/22 bg-orangeAccent/10 text-orangeAccent",
    glow: "bg-orangeAccent/10",
  },
  advisor: {
    card: "border-violetLogo/18 bg-white shadow-[0_14px_34px_rgba(16,24,40,0.045)]",
    iconWrap: "border-violetLogo/20 bg-violetLogo/10 text-violetLogo",
    icon: "text-violetLogo",
    badge: "border-violetLogo/18 bg-violetLogo/10 text-violetLogo",
    glow: "bg-violetLogo/8",
  },
};

function getPersonIcon(person: Person): LucideIcon {
  if (person.name === "Jebbar Marouane") return Building2;
  if (person.name === "Syntyche Kouadio") return Handshake;
  if (person.name === "Soumaya Jebbar") return Landmark;
  if (person.name === "Kouadio Ahou Évodie") return ShieldCheck;
  if (person.name === "Abderrazak Kessam") return BadgeCheck;
  if (person.name === "Yassine Haoud") return Truck;
  if (person.name === "Arthur Brice Konanwa") return BrainCircuit;
  if (person.name === "Rabiî El Mourabite") return LineChart;
  if (person.name === "Moussa Bakayoko") return LockKeyhole;
  return UsersRound;
}

export function TeamSection() {
  const t = useTranslations("companyPage");
  const shouldReduceMotion = useReducedMotion();
  const team = t.raw("team") as {
    title: string;
    body: string;
    foundersTitle: string;
    founders: Person[];
    coreTitle: string;
    core: Person[];
  };
  const expertise = t.raw("expertise") as {
    consultantsTitle: string;
    consultants: Person[];
    strategicTitle: string;
    strategicAdvisors: Person[];
  };

  return (
    <section id="team" className="relative overflow-hidden bg-white py-14 sm:py-16">
      <div aria-hidden="true" className="absolute left-[-8rem] top-16 h-64 w-64 rounded-full bg-cyanLogo/8 blur-3xl" />
      <div aria-hidden="true" className="absolute right-[-9rem] top-72 h-72 w-72 rounded-full bg-violetLogo/8 blur-3xl" />
      <Container>
        <div className="relative max-w-3xl">
          <h2 className="font-display text-[clamp(1.68rem,2.55vw,2.5rem)] font-normal leading-[1.12] text-ink">
            {team.title}
          </h2>
          <p className="mt-3 max-w-2xl border-l-2 border-cyanLogo/30 pl-4 text-[0.98rem] leading-7 text-muted sm:text-[1.03rem]">
            {team.body}
          </p>
        </div>

        <div className="relative mt-7">
          <GroupHeading title={team.foundersTitle} icon={Building2} tone="leadership" />
          <div className="mt-4 grid gap-4 lg:grid-cols-2">
            {team.founders.map((founder, index) => (
              <PersonCard
                key={founder.name}
                person={founder}
                index={index}
                shouldReduceMotion={shouldReduceMotion}
                tone="leadership"
                featured
              />
            ))}
          </div>
        </div>

        <TeamGroup
          title={team.coreTitle}
          people={team.core}
          shouldReduceMotion={shouldReduceMotion}
          tone="core"
          icon={Landmark}
          className="lg:grid-cols-2"
        />

        <TeamGroup
          title={expertise.consultantsTitle}
          people={expertise.consultants}
          shouldReduceMotion={shouldReduceMotion}
          tone="consultant"
          icon={ShieldCheck}
          className="lg:grid-cols-2"
        />

        <TeamGroup
          title={expertise.strategicTitle}
          people={expertise.strategicAdvisors}
          shouldReduceMotion={shouldReduceMotion}
          tone="advisor"
          icon={UsersRound}
          className="sm:grid-cols-2 lg:grid-cols-5"
        />
      </Container>
    </section>
  );
}

function TeamGroup({
  title,
  people,
  shouldReduceMotion,
  tone,
  icon,
  className = "sm:grid-cols-2 lg:grid-cols-3",
}: {
  title: string;
  people: Person[];
  shouldReduceMotion: boolean | null;
  tone: Tone;
  icon: LucideIcon;
  className?: string;
}) {
  if (people.length === 0) {
    return null;
  }

  return (
    <div className="relative mt-6">
      <GroupHeading title={title} icon={icon} tone={tone} />
      <div className={`mt-4 grid gap-3 ${className}`}>
        {people.map((person, index) => (
          <MiniCard
            key={person.name}
            person={person}
            index={index}
            shouldReduceMotion={shouldReduceMotion}
            tone={tone}
          />
        ))}
      </div>
    </div>
  );
}

function GroupHeading({title, icon: Icon, tone}: {title: string; icon: LucideIcon; tone: Tone}) {
  const styles = toneStyles[tone];

  return (
    <div className="flex items-center gap-3">
      <span className={cn("flex h-8 w-8 items-center justify-center rounded-full border", styles.iconWrap)}>
        <Icon aria-hidden="true" size={15} />
      </span>
      <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-ink/62">
        {title}
      </p>
      <span className="h-px flex-1 bg-gradient-to-r from-ink/10 via-ink/6 to-transparent" />
    </div>
  );
}

function PersonCard({
  person,
  index,
  shouldReduceMotion,
  tone,
  featured = false,
}: {
  person: Person;
  index: number;
  shouldReduceMotion: boolean | null;
  tone: Tone;
  featured?: boolean;
}) {
  const Icon = getPersonIcon(person);
  const styles = toneStyles[tone];

  return (
    <motion.article
      className={cn(
        "group relative overflow-hidden rounded-[1.15rem] border p-4 transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_24px_58px_rgba(16,24,40,0.1)] sm:p-5",
        styles.card,
        featured ? "min-h-[12.5rem]" : "min-h-[11rem]",
      )}
      initial={shouldReduceMotion ? false : {opacity: 0, y: 16}}
      whileInView={shouldReduceMotion ? undefined : {opacity: 1, y: 0}}
      viewport={{once: true, margin: "-80px"}}
      transition={{delay: index * 0.08}}
    >
      <div aria-hidden="true" className={cn("absolute -right-12 -top-12 h-32 w-32 rounded-full blur-3xl", styles.glow)} />
      <LinkedInLink person={person} tone={tone} className="absolute right-4 top-4 z-10" />
      <div className="relative flex items-start gap-4">
        <span className={cn("flex h-12 w-12 shrink-0 items-center justify-center rounded-full border", styles.iconWrap)}>
          <Icon aria-hidden="true" size={21} className={styles.icon} />
        </span>
        <div>
          <h3 className="font-display text-[1.12rem] font-medium text-ink">{person.name}</h3>
          <p className={cn("mt-2 inline-flex rounded-full border px-2.5 py-1 text-[12px] font-semibold leading-5", styles.badge)}>
            {person.role}
          </p>
          <p className="mt-3 text-sm leading-6 text-muted">{person.body}</p>
        </div>
      </div>
    </motion.article>
  );
}

function MiniCard({
  person,
  index,
  shouldReduceMotion,
  tone,
}: {
  person: Person;
  index: number;
  shouldReduceMotion: boolean | null;
  tone: Tone;
}) {
  const Icon = getPersonIcon(person);
  const styles = toneStyles[tone];

  return (
    <motion.article
      className={cn(
        "group relative overflow-hidden rounded-[1rem] border p-4 transition duration-200 hover:-translate-y-0.5",
        styles.card,
      )}
      initial={shouldReduceMotion ? false : {opacity: 0, y: 14}}
      whileInView={shouldReduceMotion ? undefined : {opacity: 1, y: 0}}
      viewport={{once: true, margin: "-80px"}}
      transition={{delay: index * 0.05}}
    >
      <div aria-hidden="true" className={cn("absolute -right-10 -top-10 h-24 w-24 rounded-full blur-3xl", styles.glow)} />
      <LinkedInLink person={person} tone={tone} className="absolute right-3 top-3 z-10" compact />
      <div className="relative flex items-start gap-3">
        <span className={cn("mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border", styles.iconWrap)}>
          <Icon aria-hidden="true" size={17} className={styles.icon} />
        </span>
        <div className={person.linkedinUrl ? "pr-9" : undefined}>
          <h3 className="font-sans text-[1rem] font-semibold text-ink">{person.name}</h3>
          {tone === "core" || tone === "consultant" ? (
            <p className={cn("mt-2 inline-flex rounded-full border px-2.5 py-1 text-[12px] font-semibold leading-5", styles.badge)}>
              {person.role}
            </p>
          ) : (
            <p className="mt-1 text-sm leading-6 text-muted">{person.role}</p>
          )}
        </div>
      </div>
      {person.body ? <p className="mt-3 text-sm leading-6 text-muted">{person.body}</p> : null}
    </motion.article>
  );
}

function LinkedInLink({
  person,
  tone,
  compact = false,
  className,
}: {
  person: Person;
  tone: Tone;
  compact?: boolean;
  className?: string;
}) {
  if (!person.linkedinUrl) {
    return null;
  }

  const styles = toneStyles[tone];

  return (
    <a
      href={person.linkedinUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="LinkedIn profile"
      className={cn(
        "inline-flex items-center justify-center rounded-full border transition hover:-translate-y-px focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyanLogo",
        styles.badge,
        compact ? "h-8 w-8" : "h-9 w-9",
        className,
      )}
    >
      <LinkedInIcon className={compact ? "h-[15px] w-[15px]" : "h-4 w-4"} />
    </a>
  );
}

function LinkedInIcon({className}: {className?: string}) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M20.45 20.45h-3.56v-5.58c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.44-2.13 2.94v5.68H9.35V8.98h3.42v1.57h.05a3.75 3.75 0 0 1 3.37-1.85c3.6 0 4.27 2.37 4.27 5.45v6.3ZM5.34 7.41a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12Zm1.78 13.04H3.56V8.98h3.56v11.47ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
    </svg>
  );
}
