"use client";

import { useState } from "react";
import { Icons } from "../icons";
import { Button, buttonVariants } from "../ui/button";
import { Sheet, SheetContent } from "../ui/sheet";
import { cn } from "@/lib/utils";
import Link from "next/link";

const links = ["Strategy", "Perfomance", "About"];

export default function Header() {
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
            <div>
              <Icons.logo className="w-[90px] h-6 md:w-[144px] md:h-[38px]" />
            </div>
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
                )}
              >
                {l}
              </Link>
            ))}
          </nav>
          <Button>More Details</Button>
        </SheetContent>
      </Sheet>
      <div className="fixed left-5 right-5 md:left-[16%] md:right-[16%] bg-muted bottom-10 flex items-center justify-between p-4 rounded-lg z-[100]">
        <div>
          <Icons.logo className="w-[90px] h-6 md:w-[144px] md:h-[38px]" />
        </div>
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
              )}
            >
              {l}
            </Link>
          ))}
        </nav>
        <Button className="hidden lg:block">More Details</Button>
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
    </>
  );
}
