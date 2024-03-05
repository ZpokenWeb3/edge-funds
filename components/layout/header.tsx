"use client";

import { Dispatch, SetStateAction, useState } from "react";
import { Icons } from "../icons";
import { Button, buttonVariants } from "../ui/button";
import { Sheet, SheetContent } from "../ui/sheet";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { CustomResponsiveImage } from "../custom-responsive-image";
import { JoinModal } from "../modal/join-modal";
import { DisclaimerModal } from "../modal/disclaimer-modal";

const links = [
  { label: "Strategy", pageNumber: 1 },
  { label: "Perfomance", pageNumber: 2 },
  { label: "About", pageNumber: 3 },
];

export const OFFSET = 300;

export default function Header({
  currentPage,
  setCurrentPage,
}: {
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number | undefined>>;
}) {
  const [open, setOpen] = useState<boolean>(false);

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
                key={l.label}
                onClick={() => setOpen(false)}
                href={`#${l.label.toLowerCase()}`}
                className={cn(
                  buttonVariants({
                    size: "ghost",
                    variant: "ghost",
                  }),
                  "text-base font-medium p-4",
                  currentPage === l.pageNumber && "bg-[#18181A] rounded-sm",
                )}
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <JoinModal />
        </SheetContent>
      </Sheet>

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
            <Button
              key={l.label}
              onClick={() => setCurrentPage(l.pageNumber)}
              size="ghost"
              variant="ghost"
              className={cn(
                "text-base font-medium",
                currentPage === l.pageNumber && "text-[#00A3FF]",
              )}
            >
              {l.label}
            </Button>
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

      <DisclaimerModal />
    </>
  );
}
