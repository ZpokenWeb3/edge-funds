"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Input } from "../ui/input";
import { useMemo, useState } from "react";
import { z } from "zod";

export const JoinModal = ({
  buttonClassName,
}: {
  buttonClassName?: string;
}) => {
  const [email, setEmail] = useState("");

  const validation = useMemo(() => {
    if (!email) return false;
    const emailSchema = z.string().email();
    try {
      emailSchema.parse(email);
      return false;
    } catch {
      return true;
    }
  }, [email]);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className={buttonClassName}>More Details</Button>
      </DialogTrigger>
      <DialogContent className="w-[calc(100%-32px)] md:w-[400px]">
        {validation && (
          <div className="md:hidden absolute rounded-sm bg-[#18181A] text-[#C93232] text-[12px] leading-[18px] font-normal h-[38px] px-4 py-[10px] top-[-50px] left-[50%] translate-x-[-50%] w-[163px]">
            Email address is invalid
          </div>
        )}
        <DialogHeader>
          <DialogTitle>Be the First to Join</DialogTitle>
          <DialogDescription>Get more info in one click</DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-2 relative">
          {validation && (
            <div className="hidden md:block absolute rounded-sm bg-[#18181A] text-[#C93232] text-[12px] leading-[18px] font-normal h-[38px] px-4 py-[10px] left-[-195px] w-[163px]">
              Email address is invalid
            </div>
          )}
          <Input
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={validation ? "border-[#C93232]" : ""}
          />
          <Input placeholder="Telegram (Optional)" />
        </div>
        <DialogFooter>
          <Button className="w-full" variant="outline">
            Visit Telegram
          </Button>
          <Button className="w-full" disabled={!email || validation}>
            Submit
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
