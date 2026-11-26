import Link from "next/link";
import { ABOUT_ME, SOCIAL_LINKS } from "@/app/constants/data";
import { ArrowUpRight } from "lucide-react";
import { LocalizedText } from "@/components/providers/language-provider";

export default function Footer() {
  return (
    <footer className="text-center py-6">
      {/* Copyright */}
      <p className="text-sm text-muted-foreground">
        © {new Date().getFullYear()} {ABOUT_ME.name}.{" "}
        <LocalizedText en="All rights reserved." ru="Все права защищены." />
      </p>

      {/* Secondary link — point this anywhere you like (blog, old site, etc.) */}
      <p className="text-sm text-muted-foreground mt-1">
        <span className="opacity-80">
          <LocalizedText en="Still scrolling?" ru="Ещё листаете?" />
        </span>{" "}
        <Link
          href={SOCIAL_LINKS.github}
          target="_blank"
          rel="noopener noreferrer"
          className="link"
        >
          <LocalizedText
            en="Check out my work on GitHub"
            ru="Посмотрите мои проекты на GitHub"
          />
          <ArrowUpRight className="inline-block w-4 h-4 ml-1" />
        </Link>
      </p>

      {/* ASCII art */}
      {/* <div className="mt-6 flex justify-center">
        <pre className="font-mono text-[6px] sm:text-[8px] md:text-xs whitespace-pre text-muted-foreground text-center break-words">
          {`
██████╗ ███████╗███████╗██████╗  █████╗ ██╗  ██╗    ███╗   ███╗ ██████╗ ██████╗ ██╗
██╔══██╗██╔════╝██╔════╝██╔══██╗██╔══██╗██║ ██╔╝    ████╗ ████║██╔═══██╗██╔══██╗██║
██║  ██║█████╗  █████╗  ██████╔╝███████║█████╔╝     ██╔████╔██║██║   ██║██║  ██║██║
██║  ██║██╔══╝  ██╔══╝  ██╔═══╝ ██╔══██║██╔═██╗     ██║╚██╔╝██║██║   ██║██║  ██║██║
██████╔╝███████╗███████╗██║     ██║  ██║██║  ██╗    ██║ ╚═╝ ██║╚██████╔╝██████╔╝██║
╚═════╝ ╚══════╝╚══════╝╚═╝     ╚═╝  ╚═╝╚═╝  ╚═╝    ╚═╝     ╚═╝ ╚═════╝ ╚═════╝ ╚═╝
          `}
        </pre>
      </div> */}

      {/* Optional: a views counter (e.g. https://hits.sh), a build badge,
          or anything else you'd like in the footer can go here. */}
    </footer>
  );
}
