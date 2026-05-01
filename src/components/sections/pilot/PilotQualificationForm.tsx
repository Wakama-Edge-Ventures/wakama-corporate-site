"use client";

import {motion, useReducedMotion} from "framer-motion";
import {LockKeyhole, Send} from "lucide-react";
import {useLocale, useTranslations} from "next-intl";
import {FormEvent, useState} from "react";

import {Container} from "@/components/ui/Container";
import {trackUmamiEvent} from "@/lib/analytics";

const initialValues = {
  fullName: "",
  email: "",
  organization: "",
  country: "",
  institutionType: "",
  fileVolume: "",
  operatingZone: "",
  priorityNeed: "",
  message: "",
  companyWebsite: "",
};

type FormValues = typeof initialValues;
type FieldKey = keyof FormValues;
type FormStatus = "idle" | "loading" | "success" | "error";

export function PilotQualificationForm() {
  const t = useTranslations("pilotPage.form");
  const locale = useLocale();
  const shouldReduceMotion = useReducedMotion();
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<Partial<Record<FieldKey, string>>>({});
  const [status, setStatus] = useState<FormStatus>("idle");

  const fields = t.raw("fields") as Record<FieldKey, string>;
  const institutionTypes = t.raw("institutionTypes") as string[];
  const needs = t.raw("needs") as string[];
  const reassurance = t.raw("reassurance") as string[];
  const requiredMessage = t("requiredError");
  const emailError = t("emailError");

  function updateValue(name: FieldKey, value: string) {
    setValues((current) => ({...current, [name]: value}));
    setErrors((current) => ({...current, [name]: undefined}));
    if (status !== "idle") {
      setStatus("idle");
    }
  }

  function validate() {
    const nextErrors: Partial<Record<FieldKey, string>> = {};
    const required: FieldKey[] = ["fullName", "email", "organization", "country", "institutionType", "priorityNeed"];

    required.forEach((field) => {
      if (!values[field].trim()) {
        nextErrors[field] = requiredMessage;
      }
    });

    if (values.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      nextErrors.email = emailError;
    }

    return nextErrors;
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setStatus("idle");
      trackUmamiEvent("pilot_form_validation_error", {
        locale,
        error_count: Object.keys(nextErrors).length,
      });
      return;
    }

    setStatus("loading");
    trackUmamiEvent("pilot_form_submit", {
      locale,
      institution_type: values.institutionType || null,
      priority_need: values.priorityNeed || null,
    });

    try {
      const response = await fetch("/api/pilot-request", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName: values.fullName,
          email: values.email,
          organization: values.organization,
          country: values.country,
          institutionType: values.institutionType,
          fileVolume: values.fileVolume,
          operatingZone: values.operatingZone,
          priorityNeed: values.priorityNeed,
          message: values.message,
          locale,
          companyWebsite: values.companyWebsite,
        }),
      });

      const result = (await response.json()) as {ok?: boolean; message?: string};

      if (!response.ok || !result.ok) {
        setStatus("error");
        trackUmamiEvent("pilot_form_error", {
          locale,
          institution_type: values.institutionType || null,
          priority_need: values.priorityNeed || null,
        });
        return;
      }

      setStatus("success");
      trackUmamiEvent("pilot_form_success", {
        locale,
        institution_type: values.institutionType || null,
        priority_need: values.priorityNeed || null,
      });
      setValues(initialValues);
      setErrors({});
    } catch {
      setStatus("error");
      trackUmamiEvent("pilot_form_error", {
        locale,
        institution_type: values.institutionType || null,
        priority_need: values.priorityNeed || null,
      });
    }
  }

  return (
    <section id="pilot-form" className="bg-softLight py-16 sm:py-20">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
          <div className="max-w-3xl">
            <p className="font-mono text-sm font-semibold uppercase tracking-[0.22em] text-cyanLogo">
              {t("eyebrow")}
            </p>
            <h2 className="mt-4 font-display text-[clamp(1.72rem,2.6vw,2.7rem)] font-normal leading-[1.14] text-ink">
              {t("title")}
            </h2>
            <p className="mt-4 max-w-2xl text-[0.98rem] leading-7 text-muted sm:text-[1.04rem]">
              {t("description")}
            </p>

            <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white px-3.5 py-2 text-[12px] text-muted sm:text-[13px]">
              <LockKeyhole aria-hidden="true" size={14} className="text-cyanLogo" />
              <span>{t("privacyLine")}</span>
            </div>

            <div className="mt-6 grid gap-3">
              {reassurance.map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-lg border border-ink/10 bg-white px-4 py-3">
                  <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-mintCta" />
                  <span className="text-sm leading-6 text-ink/[0.78]">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <motion.form
            onSubmit={handleSubmit}
            noValidate
            className="rounded-lg border border-ink/10 bg-white p-5 shadow-[0_22px_70px_rgba(16,24,40,0.08)] sm:p-6"
            initial={shouldReduceMotion ? false : {opacity: 0, y: 18}}
            whileInView={shouldReduceMotion ? undefined : {opacity: 1, y: 0}}
            viewport={{once: true, margin: "-80px"}}
          >
            <div className="hidden" aria-hidden="true">
              <label htmlFor="companyWebsite">{t("honeypotLabel")}</label>
              <input
                id="companyWebsite"
                type="text"
                name="companyWebsite"
                value={values.companyWebsite}
                tabIndex={-1}
                autoComplete="off"
                onChange={(event) => updateValue("companyWebsite", event.target.value)}
              />
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <InputField name="fullName" label={fields.fullName} value={values.fullName} error={errors.fullName} onChange={updateValue} required />
              <InputField name="email" label={fields.email} value={values.email} error={errors.email} onChange={updateValue} required type="email" />
              <InputField name="organization" label={fields.organization} value={values.organization} error={errors.organization} onChange={updateValue} required />
              <InputField name="country" label={fields.country} value={values.country} error={errors.country} onChange={updateValue} required />
              <SelectField name="institutionType" label={fields.institutionType} value={values.institutionType} error={errors.institutionType} options={institutionTypes} onChange={updateValue} required placeholder={t("selectPlaceholder")} />
              <InputField name="fileVolume" label={fields.fileVolume} value={values.fileVolume} error={errors.fileVolume} onChange={updateValue} />
              <InputField name="operatingZone" label={fields.operatingZone} value={values.operatingZone} error={errors.operatingZone} onChange={updateValue} className="sm:col-span-2" />
              <SelectField name="priorityNeed" label={fields.priorityNeed} value={values.priorityNeed} error={errors.priorityNeed} options={needs} onChange={updateValue} required placeholder={t("selectPlaceholder")} className="sm:col-span-2" />
              <div className="sm:col-span-2">
                <label htmlFor="message" className="text-sm font-semibold text-ink">
                  {fields.message}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={values.message}
                  onChange={(event) => updateValue("message", event.target.value)}
                  placeholder={t("messagePlaceholder")}
                  rows={5}
                  maxLength={2000}
                  className="mt-2 w-full rounded-lg border border-ink/10 bg-softLight px-4 py-3 text-sm leading-6 text-ink outline-none transition placeholder:text-muted/70 focus:border-mintCta focus:ring-4 focus:ring-mintCta/10"
                />
              </div>
            </div>

            {status === "success" ? (
              <p className="mt-5 rounded-lg border border-mintCta/30 bg-mintCta/10 px-4 py-3 text-sm font-medium text-ink">
                {t("success")}
              </p>
            ) : null}

            {status === "error" ? (
              <p className="mt-5 rounded-lg border border-orangeAccent/20 bg-orangeAccent/10 px-4 py-3 text-sm font-medium text-ink">
                {t("error")}
              </p>
            ) : null}

            <button
              type="submit"
              disabled={status === "loading"}
              className="mt-6 inline-flex h-11 w-full items-center justify-center gap-2 rounded-full bg-mintCta px-5 text-sm font-semibold text-ink shadow-glow transition duration-200 hover:-translate-y-0.5 hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mintCta sm:w-auto"
            >
              {status === "loading" ? t("submitLoading") : t("submit")}
              <Send aria-hidden="true" size={18} />
            </button>
          </motion.form>
        </div>
      </Container>
    </section>
  );
}

function InputField({
  name,
  label,
  value,
  error,
  onChange,
  required = false,
  type = "text",
  className,
}: {
  name: FieldKey;
  label: string;
  value: string;
  error?: string;
  onChange: (name: FieldKey, value: string) => void;
  required?: boolean;
  type?: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <label htmlFor={name} className="text-sm font-semibold text-ink">
        {label}
        {required ? <span className="text-orangeAccent"> *</span> : null}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        required={required}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${name}-error` : undefined}
        onChange={(event) => onChange(name, event.target.value)}
        className="mt-2 h-11 w-full rounded-lg border border-ink/10 bg-softLight px-4 text-sm text-ink outline-none transition placeholder:text-muted/70 focus:border-mintCta focus:ring-4 focus:ring-mintCta/10"
      />
      {error ? (
        <p id={`${name}-error`} className="mt-2 text-xs font-medium text-orangeAccent">
          {error}
        </p>
      ) : null}
    </div>
  );
}

function SelectField({
  name,
  label,
  value,
  error,
  options,
  onChange,
  placeholder,
  required = false,
  className,
}: {
  name: FieldKey;
  label: string;
  value: string;
  error?: string;
  options: string[];
  onChange: (name: FieldKey, value: string) => void;
  placeholder: string;
  required?: boolean;
  className?: string;
}) {
  return (
    <div className={className}>
      <label htmlFor={name} className="text-sm font-semibold text-ink">
        {label}
        {required ? <span className="text-orangeAccent"> *</span> : null}
      </label>
      <select
        id={name}
        name={name}
        value={value}
        required={required}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${name}-error` : undefined}
        onChange={(event) => onChange(name, event.target.value)}
        className="mt-2 h-11 w-full rounded-lg border border-ink/10 bg-softLight px-4 text-sm text-ink outline-none transition focus:border-mintCta focus:ring-4 focus:ring-mintCta/10"
      >
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      {error ? (
        <p id={`${name}-error`} className="mt-2 text-xs font-medium text-orangeAccent">
          {error}
        </p>
      ) : null}
    </div>
  );
}
