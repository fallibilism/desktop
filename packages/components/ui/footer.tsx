import * as React from "react";

import { cn } from "../utils";
import { Icons } from "../icons";

export function SiteFooter({ className, siteConfig, ModeToggle }: React.HTMLAttributes<HTMLElement> & {
  siteConfig: any;
  ModeToggle: React.ReactNode;
  }) {
  return (
    <footer className={cn(className)}>
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <Icons.logo />
          <p className="text-center text-sm leading-loose md:text-left">
            Built by{" "}
            <a
              href={siteConfig.links.twitter}
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              amar-jay
            </a>
            . This application is still in development. You can follow the
            progress on{" "}
            <a
              href={siteConfig.github.url}
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              GitHub
            </a>
            .
          </p>
        </div>
        <ModeToggle />
      </div>
    </footer>
  );
}
