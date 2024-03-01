"use client";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "../ui/dialog";
import { Checkbox } from "../ui/checkbox";
import { useEffect, useState } from "react";

export const DisclaimerModal = () => {
  const [open, setOpen] = useState<boolean | null>();
  const [terms, setTerms] = useState<boolean>(false);

  useEffect(() => {
    setOpen(!Boolean(localStorage.getItem("terms")));
  }, []);

  if (open === null) return;
  return (
    <Dialog open={open}>
      <DialogContent
        className="w-[calc(100%-32px)] md:min-w-[600px] md:w-[600px] gap-0"
        isCloseButton={false}
      >
        <p className="text-2xl font-bold mb-2">Disclaimer</p>
        <p className="text-sm tracking-[-0.25px] font-normal text-muted-foreground">
          No representation or warranty is made concerning any aspect of the
          Amphor Protocol, including its suitability, quality, availability,
          accessibility, accuracy or safety. As more fully explained in the
          Terms of Use (available here ), your access to and use of the Amphor
          Protocol through this interface is entirely at your own risk and could
          lead to substantial losses. You take full responsibility for your use
          of the Interface, and acknowledge that you use it on the basis of your
          own enquiry, without solicitation or inducement by contributors (as
          defined in the Terms of Use).
        </p>
        <br />
        <p className="text-sm tracking-[-0.25px] font-normal text-muted-foreground">
          This interface is not available to residents of the Democratic
          People’s Republic of Korea, the Crimea region of Ukraine, the People’s
          Republic of China, the Russian Federation, the United States of
          America, or any other jurisdiction in which accessing or using the
          Protocol is prohibited (“Prohibited Jurisdictions”). In using this
          Interface, you confirm that you are not located in, incorporated or
          otherwise established in, or resident of, a Prohibited Jurisdiction.
        </p>
        <div className="flex items-center space-x-2 mt-6">
          <Checkbox
            id="terms"
            checked={terms}
            onCheckedChange={(val) => setTerms(val as boolean)}
          />
          <label
            htmlFor="terms"
            className="text-sm font-normal peer-disabled:cursor-not-allowed peer-disabled:opacity-70 tracking-[-0.25px] text-muted-foreground"
          >
            I confirm that I have read, understand and accept the{" "}
            <span
              className="font-bold text-foreground underline cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                window.open(
                  "https://amphorprotocol.github.io/terms-of-service/",
                  "_blank",
                );
              }}
            >
              Terms of Service.
            </span>
          </label>
        </div>
        <Button
          className="w-[124px] mt-6"
          disabled={!terms}
          onClick={() => {
            localStorage.setItem("terms", "true");
            setOpen(false);
          }}
        >
          Enter
        </Button>
      </DialogContent>
    </Dialog>
  );
};
