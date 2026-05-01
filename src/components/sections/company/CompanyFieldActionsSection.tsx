"use client";

import {motion, useReducedMotion} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {useTranslations} from "next-intl";

import {Container} from "@/components/ui/Container";
import {trackFarmerAccess} from "@/lib/analytics";

const imageSpans = ["lg:col-span-7", "lg:col-span-5", "lg:col-span-4", "lg:col-span-4", "lg:col-span-4"];
const imageRatios = ["aspect-[16/10]", "aspect-[16/10]", "aspect-[4/3]", "aspect-[4/3]", "aspect-[4/3]"];

export function CompanyFieldActionsSection() {
  const t = useTranslations("companyPage.fieldActions");
  const shouldReduceMotion = useReducedMotion();
  const captions = t.raw("captions") as string[];
  const images = captions.map((caption, index) => ({
    src: `/company/field/field-${index + 1}.jpg`,
    caption,
  }));

  return (
    <section className="bg-white py-16 sm:py-18">
      <Container>
        <div className="max-w-3xl">
          <h2 className="font-display text-[clamp(1.68rem,2.55vw,2.45rem)] font-normal leading-[1.12] text-ink">
            {t("title")}
          </h2>
          <p className="mt-4 max-w-2xl text-[0.98rem] leading-7 text-muted sm:text-[1.03rem]">
            {t("body")}
          </p>
          <Link
            href="https://farmer.wakama.farm/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackFarmerAccess("company_field_section")}
            className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-cyanLogo transition hover:text-ink"
          >
            {t("farmerCta")}
          </Link>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-12">
          {images.map((image, index) => (
            <motion.article
              key={image.src}
              className={`${imageSpans[index] ?? "lg:col-span-4"} overflow-hidden rounded-[1.25rem] border border-ink/10 bg-softLight shadow-[0_18px_50px_rgba(16,24,40,0.06)]`}
              initial={shouldReduceMotion ? false : {opacity: 0, y: 18}}
              whileInView={shouldReduceMotion ? undefined : {opacity: 1, y: 0}}
              viewport={{once: true, margin: "-80px"}}
              transition={{delay: index * 0.06}}
            >
              <div className={`relative ${imageRatios[index] ?? "aspect-[4/3]"}`}>
                <Image
                  src={image.src}
                  alt={image.caption}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover transition duration-500 motion-safe:hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/62 via-black/8 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-4">
                  <p className="font-display text-[1rem] font-medium text-white">{image.caption}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
}
