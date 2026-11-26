"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { useTranslations } from "@/components/providers/language-provider";

export default function BackButton() {
  const router = useRouter();
  const copy = useTranslations();

  const handleBack = () => {
    const navigatedFromMainPage = sessionStorage.getItem(
      "navigatedFromMainPage"
    );

    if (navigatedFromMainPage === "true") {
      sessionStorage.removeItem("navigatedFromMainPage");
      router.back();
    } else {
      router.push("/");
    }
  };

  return (
    <button
      onClick={handleBack}
      className="link inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
    >
      <ArrowLeft className="w-4 h-4" />
      {copy.buttons.backToPortfolio}
    </button>
  );
}
