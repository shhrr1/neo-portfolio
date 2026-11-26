"use client";

import {
  User,
  Mail,
  Calendar,
  Github,
  Linkedin,
  ArrowRight,
} from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";
import { FaRegCommentDots } from "react-icons/fa";
import { SiPeerlist } from "react-icons/si";
import { useState, ChangeEvent, FormEvent, ComponentType } from "react";
import Meeting from "../ui/cal-meeting";
import { SOCIAL_LINKS, CONTACT_FORM_ENDPOINT } from "@/app/constants/data";
import {
  useLanguage,
  useTranslations,
} from "@/components/providers/language-provider";
import { translations, type Language } from "@/app/constants/translations";

// =============================================
// TYPE DEFINITIONS
// =============================================
interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormField {
  name: keyof FormData;
  type: string;
  label: { en: string; ru: string };
  icon: ComponentType<{ className?: string }>;
  placeholder: { en: string; ru: string };
  rows?: number;
}

type FormStatus = "idle" | "submitting" | "success" | "error";

type SetStateFunction<T> = (value: T | ((prev: T) => T)) => void;

// =============================================
// FORM CONFIGURATION
// =============================================
const FORM_CONFIG = {
  endpoint: CONTACT_FORM_ENDPOINT,
  initialData: { name: "", email: "", message: "" } as FormData,
  fields: [
    {
      name: "name",
      type: "text",
      label: { en: "Name", ru: "Имя" },
      icon: User,
      placeholder: { en: "Your name", ru: "Ваше имя" },
    },
    {
      name: "email",
      type: "email",
      label: { en: "Email", ru: "Эл. почта" },
      icon: Mail,
      placeholder: {
        en: "your.email@example.com",
        ru: "your.email@example.com",
      },
    },
    {
      name: "message",
      type: "textarea",
      label: { en: "Message", ru: "Сообщение" },
      icon: FaRegCommentDots,
      placeholder: {
        en: "What would you like to discuss?",
        ru: "О чём хотите поговорить?",
      },
      rows: 5,
    },
  ] as FormField[],
};

// =============================================
// HELPER FUNCTIONS
// =============================================
const submitForm = async (
  formData: FormData,
  setStatus: SetStateFunction<FormStatus>,
  setErrorMessage: SetStateFunction<string>,
  setFormData: SetStateFunction<FormData>,
  language: Language
) => {
  setStatus("submitting");
  setErrorMessage("");

  try {
    const response = await fetch(FORM_CONFIG.endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setStatus("success");
      setFormData(FORM_CONFIG.initialData);
    } else {
      const errorData = await response.json();
      setErrorMessage(
        errorData.error || translations[language].contact.submitError
      );
      setStatus("error");
    }
  } catch {
    setErrorMessage(translations[language].contact.unexpectedError);
    setStatus("error");
  }
};

const renderField = (
  field: FormField,
  formData: FormData,
  handleChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
  language: Language
) => {
  const Icon = field.icon;
  const commonClasses =
    "flex-1 py-4 bg-transparent text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none transition-colors duration-200";

  return (
    <div
      key={field.name}
      className="flex items-start gap-4 px-4 group transition-colors focus-within:bg-muted/30"
    >
      <div className="py-4 flex items-center text-muted-foreground/60 transition-colors duration-200 group-focus-within:text-foreground">
        <Icon className="w-5 h-5" />
      </div>
      {field.type === "textarea" ? (
        <textarea
          id={field.name}
          name={field.name}
          value={formData[field.name]}
          onChange={handleChange}
          required
          aria-label={field.label[language]}
          placeholder={field.placeholder[language]}
          rows={field.rows}
          className={`${commonClasses} resize-none`}
        />
      ) : (
        <input
          type={field.type}
          id={field.name}
          name={field.name}
          value={formData[field.name]}
          onChange={handleChange}
          required
          aria-label={field.label[language]}
          placeholder={field.placeholder[language]}
          className={commonClasses}
        />
      )}
    </div>
  );
};

// =============================================
// MAIN COMPONENT
// =============================================
const Contact = () => {
  const { language } = useLanguage();
  const copy = useTranslations();
  const [formData, setFormData] = useState<FormData>(FORM_CONFIG.initialData);
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    submitForm(formData, setStatus, setErrorMessage, setFormData, language);
  };

  return (
    <section id="contact">
      <div className="flex items-center py-2 px-4 border-b border-dashed border-border text-foreground">
        <h2 className="text-2xl font-semibold flex items-center">
          {copy.sections.contact}
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 divide-y lg:divide-y-0 lg:divide-x divide-dashed divide-border">
        {/* Contact Form */}
        <div className="lg:col-span-3">
          <div>
            <div className="p-4 border-b border-dashed border-border">
              <h3 className="text-xl font-medium mb-1">
                {copy.contact.sendHeading}
              </h3>
              <p className="text-sm text-muted-foreground">
                {copy.contact.sendDescription}
              </p>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="border-b border-dashed border-border divide-y divide-dashed divide-border">
                {FORM_CONFIG.fields.map((field) =>
                  renderField(field, formData, handleChange, language)
                )}
              </div>

              <div className="p-4">
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className={`btn w-full px-3 py-2 rounded-lg text-sm font-medium flex items-center justify-center gap-2 cursor-pointer group ${status === "submitting" ? "opacity-70 cursor-not-allowed" : ""}`}
                >
                  {status === "submitting" ? (
                    copy.contact.sending
                  ) : (
                    <>
                      <span>{copy.contact.send}</span>
                      <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                    </>
                  )}
                </button>

                {status === "success" && (
                  <p className="text-green-600 text-sm text-center">
                    {copy.contact.sent}
                  </p>
                )}
                {status === "error" && (
                  <p className="text-red-600 text-sm text-center">
                    {errorMessage}
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="lg:col-span-2 divide-y divide-dashed divide-border">
          {/* Meeting Scheduler */}
          <div className="flex flex-col items-start w-full">
            <div className="p-4 border-b border-dashed border-border w-full">
              <h3 className="text-xl font-medium mb-1">
                {copy.contact.meetingHeading}
              </h3>
              <p className="text-sm text-muted-foreground">
                {copy.contact.meetingDescription}
              </p>
            </div>

            <div className="p-4 border-b border-dashed border-border w-full">
              <h4 className="text-lg font-medium mb-1">
                {copy.contact.discoveryCall}
              </h4>
              <p className="text-sm text-muted-foreground">
                {copy.contact.discoveryDescription}
              </p>
            </div>
            <div className="p-4 w-full">
              <Meeting />
            </div>
          </div>

          {/* Social Media Links */}
          <div className="flex flex-col items-start w-full">
            <div className="p-4 border-b border-dashed border-border w-full">
              <h3 className="text-xl font-medium mb-1">
                {copy.contact.followHeading}
              </h3>
              <p className="text-sm text-muted-foreground">
                {copy.contact.followDescription}
              </p>
            </div>

            <div className="p-4 w-full flex justify-start">
              <div className="grid grid-cols-4 gap-3 w-full max-w-[280px]">
                {/* GitHub */}
                <a
                  href={SOCIAL_LINKS.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 btn flex items-center justify-center"
                  title="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>

              
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
