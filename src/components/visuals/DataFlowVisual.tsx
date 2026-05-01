"use client";

import {motion, useReducedMotion} from "framer-motion";
import {DatabaseZap, LayoutDashboard, RadioTower, ShieldCheck, Sprout} from "lucide-react";
import {useTranslations} from "next-intl";
import Image from "next/image";

const nodeIcons = [Sprout, RadioTower, ShieldCheck, DatabaseZap, LayoutDashboard];
type FlowNode = {
  title: string;
  body: string;
};

export function DataFlowVisual() {
  const t = useTranslations("visuals.dataFlow");
  const shouldReduceMotion = useReducedMotion();
  const nodes = t.raw("nodes") as FlowNode[];
  const roles = t.raw("roles") as string[];
  const stepOffsets = ["lg:ml-[40%]", "lg:ml-[30%]", "lg:ml-[20%]", "lg:ml-[10%]", "lg:ml-0"];
  const connectorOffsets = ["lg:left-[56%]", "lg:left-[46%]", "lg:left-[36%]", "lg:left-[26%]"];

  return (
    <div className="relative overflow-hidden rounded-lg border border-white/10 bg-navy/72 p-5 shadow-panel">
      <div className="absolute inset-0 data-grid opacity-55" />
      <div className="absolute -right-24 -top-24 h-56 w-56 rounded-full bg-cyanLogo/12 blur-3xl" />
      <div className="absolute -bottom-24 left-8 h-60 w-60 rounded-full bg-mintCta/10 blur-3xl" />

      <div className="relative">
        <div className="mb-6 flex items-center justify-between">
          <span className="font-mono text-xs uppercase tracking-[0.22em] text-cyanLogo">
            {t("label")}
          </span>
          <span className="inline-flex items-center gap-2 rounded-full border border-mintCta/25 bg-mintCta/10 px-3 py-1 font-mono text-xs text-mintCta">
            <Image
              src="/brand/solana.jpg"
              alt=""
              width={14}
              height={14}
              className="h-3.5 w-3.5 rounded-full object-cover"
            />
            {t("status")}
          </span>
        </div>

        <div className="relative">
          <div className="relative z-10 space-y-0 lg:space-y-2">
            {nodes.map((node, index) => {
              const Icon = nodeIcons[index] ?? DatabaseZap;
              const trustLayer = index === 2;
              const oracleLayer = index === 3;
              const deliveryLayer = index === 4;

              return (
                <div key={node.title} className="relative">
                  <motion.div
                    className={[
                      "relative rounded-lg border bg-white/[0.047] p-4 transition duration-200 hover:-translate-y-1 hover:bg-white/[0.066] lg:w-[60%] lg:p-4",
                      stepOffsets[index],
                      trustLayer ? "border-mintCta/32 shadow-[0_0_34px_rgba(53,245,155,0.14)]" : "border-white/10",
                      oracleLayer ? "border-cyanLogo/22" : "",
                      deliveryLayer ? "border-violetLogo/22" : "",
                    ].join(" ")}
                    initial={shouldReduceMotion ? false : {opacity: 0, y: 18}}
                    whileInView={shouldReduceMotion ? undefined : {opacity: 1, y: 0}}
                    viewport={{once: true, margin: "-80px"}}
                    transition={{delay: index * 0.1}}
                  >
                    <div className="flex items-start gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-cyanLogo/18 bg-cyanLogo/9 text-cyanLogo">
                        <Icon aria-hidden="true" size={19} />
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-white/42">
                            {roles[index]}
                          </span>
                          {trustLayer ? (
                            <motion.span
                              aria-hidden="true"
                              className="h-1.5 w-1.5 rounded-full bg-mintCta"
                              animate={shouldReduceMotion ? undefined : {scale: [1, 1.7, 1], opacity: [0.7, 1, 0.7]}}
                              transition={{duration: 2, repeat: Infinity, ease: "easeInOut"}}
                            />
                          ) : null}
                        </div>
                        <p className="mt-1 text-sm font-semibold leading-6 text-white">{node.title}</p>
                        <p className="mt-1 text-xs leading-5 text-white/58">{node.body}</p>
                      </div>
                    </div>

                    <div className="mt-4 h-1 overflow-hidden rounded-full bg-white/8">
                      <motion.div
                        className="h-full rounded-full bg-gradient-to-r from-cyanLogo via-mintCta to-orangeAccent"
                        initial={{width: "28%"}}
                        animate={shouldReduceMotion ? undefined : {width: ["28%", "86%", "50%"]}}
                        transition={{duration: 3.4 + index * 0.25, repeat: Infinity, ease: "easeInOut"}}
                      />
                    </div>
                  </motion.div>

                  {index < nodes.length - 1 ? (
                    <div
                      aria-hidden="true"
                      className={[
                        "flex h-10 items-center justify-center lg:absolute lg:top-full lg:block lg:h-9 lg:w-[20%]",
                        connectorOffsets[index],
                      ].join(" ")}
                    >
                      <div className="relative h-full w-px bg-white/12 lg:h-px lg:w-full lg:translate-y-4 lg:-rotate-[20deg] lg:bg-white/14">
                        {!shouldReduceMotion ? (
                          <>
                            <motion.span
                              className="absolute left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-mintCta shadow-[0_0_14px_rgba(53,245,155,0.7)] lg:hidden"
                              animate={{top: ["0%", "100%"], opacity: [0, 1, 0]}}
                              transition={{duration: 1.55, repeat: Infinity, ease: "easeInOut", delay: index * 0.18}}
                            />
                            <motion.span
                              className="absolute -top-1 hidden h-2 w-2 rounded-full bg-mintCta shadow-[0_0_14px_rgba(53,245,155,0.7)] lg:block"
                              animate={{left: ["100%", "0%"], opacity: [0, 1, 0]}}
                              transition={{duration: 1.55, repeat: Infinity, ease: "easeInOut", delay: index * 0.18}}
                            />
                          </>
                        ) : null}
                      </div>
                    </div>
                  ) : null}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
