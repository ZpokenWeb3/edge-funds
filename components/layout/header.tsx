"use client";

import { useEffect, useState } from "react";
import { Icons } from "../icons";
import { buttonVariants } from "../ui/button";
import { Sheet, SheetContent } from "../ui/sheet";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { CustomResponsiveImage } from "../custom-responsive-image";
import { JoinModal } from "../modal/join-modal";
import { DisclaimerModal } from "../modal/disclaimer-modal";

const links = ["Strategy", "Perfomance", "About"];

export const OFFSET = 300;

export default function Header() {
  const [open, setOpen] = useState<boolean>(false);
  const [hash, setHash] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const newActiveLinks = [...document.querySelectorAll(".scroll-section")]
        .filter((section) => {
          const rect = section.getBoundingClientRect();

          return rect.top <= OFFSET && rect.bottom > OFFSET;
        })
        .map((section) => section.id);

      if (newActiveLinks.length) {
        setHash(newActiveLinks[0]);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Sheet open={open}>
        <SheetContent
          side="bottom"
          className="w-screen h-screen flex flex-col justify-end pb-[112px] border-0 gap-4"
        >
          <div
            className={cn(
              "fixed left-5 right-5 md:left-[20%] md:right-[20%] bg-muted bottom-10 flex items-center justify-between p-4 rounded-lg z-[100] opacity-0 h-[56px]",
            )}
          >
            <CustomResponsiveImage
              src="/logo.svg"
              alt="Logo"
              size={{
                modile: {
                  width: 90,
                  height: 24,
                },
                desktop: {
                  width: 144,
                  height: 38,
                },
              }}
            />
            <div
              className="block lg:hidden cursor-pointer hover:opacity-50"
              onClick={(e) => {
                setOpen((state) => !state);
              }}
            >
              {open ? (
                <Icons.X className="w-6 h-6 text-foreground" />
              ) : (
                <Icons.burger />
              )}
            </div>
          </div>
          <nav className="flex flex-col">
            {links.map((l) => (
              <Link
                key={l}
                href={`#${l.toLowerCase()}`}
                onClick={() => setOpen(false)}
                className={cn(
                  buttonVariants({
                    size: "ghost",
                    variant: "ghost",
                  }),
                  "text-base font-medium p-4",
                  hash === `${l.toLowerCase()}` && "bg-[#18181A] rounded-sm",
                )}
              >
                {l}
              </Link>
            ))}
          </nav>
          <JoinModal />
        </SheetContent>
      </Sheet>
      {hash === "about" ? (
        <></>
      ) : (
        <div className="fixed left-5 right-5 md:left-[16%] md:right-[16%] bg-muted bottom-10 flex items-center justify-between px-4 py-[6px] rounded-lg z-[100]">
          <CustomResponsiveImage
            src="/logo.svg"
            alt="Logo"
            size={{
              modile: {
                width: 90,
                height: 24,
              },
              desktop: {
                width: 144,
                height: 38,
              },
            }}
          />
          <nav className="hidden lg:flex gap-4">
            {links.map((l) => (
              <Link
                key={l}
                href={`#${l.toLowerCase()}`}
                className={cn(
                  buttonVariants({
                    size: "ghost",
                    variant: "ghost",
                  }),
                  "text-base font-medium",
                  hash === `${l.toLowerCase()}` && "text-[#00A3FF]",
                )}
              >
                {l}
              </Link>
            ))}
          </nav>
          <JoinModal buttonClassName="hidden lg:block" />

          <div
            className="block lg:hidden cursor-pointer hover:opacity-50"
            onClick={() => {
              setOpen((state) => !state);
            }}
          >
            {open ? (
              <Icons.X className="w-6 h-6 text-foreground" />
            ) : (
              <Icons.burger />
            )}
          </div>
        </div>
      )}
      <DisclaimerModal />
    </>
  );
}
