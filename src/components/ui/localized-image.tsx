"use client";

import Image, { type ImageProps } from "next/image";
import { useLanguage } from "@/components/providers/language-provider";

interface LocalizedImageProps extends Omit<ImageProps, "alt"> {
  alt: string;
  altRu?: string;
}

export default function LocalizedImage({
  alt,
  altRu,
  ...props
}: LocalizedImageProps) {
  const { language } = useLanguage();

  return <Image {...props} alt={language === "ru" ? altRu ?? alt : alt} />;
}
