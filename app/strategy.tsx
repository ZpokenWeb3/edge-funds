import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export const Strategy = () => {
  return (
    <div
      className="lg:h-screen rounded-[16px] md:rounded-[32px] bg-[#101012] flex justify-center px-2 pt-2 md:py-10 md:px-0 pb-2 md:pb-0 scroll-section"
      id="strategy"
    >
      <div className="flex flex-col items-center md:w-[68%]">
        <h1 className="text-[28px] leading-[36px] md:text-[40px] md:leading-[48px] font-semibold mb-2">
          Strategy
        </h1>
        <p className="text-sm font-normal md:text-base tracking-[-0.25px] text-center text-muted-foreground mb-6 md:mb-8">
          Diversified/multifaceted Market-Neutral strategy spanning cross-
          <br />
          chain arbitrage, market making and hedged yield farming
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
          <div className="flex flex-col gap-3">
            <div className="p-6 flex flex-col gap-2 bg-muted rounded-lg border-[1px] border-[rgba(250,250,250,0.02)] backdrop-blur-xl">
              <h3 className="text-xl lg:text-2xl font-bold tracking-[-0.25px]">
                3-year audited track record
              </h3>
              <h4 className="text-sm lg:text-base font-normal tracking-[-0.25px] text-muted-foreground">
                Audited track record targeting{" "}
                <span className="font-bold text-foreground">15-30% APR</span>
              </h4>
            </div>
            <div className="p-6 flex flex-col gap-2 bg-muted rounded-lg border-[1px] border-[rgba(250,250,250,0.02)] backdrop-blur-xl">
              <h3 className="text-xl lg:text-2xl font-bold tracking-[-0.25px]">
              Uncorrelated Returns Average 3 year APR {'>'} Average 3-year APR
              </h3>
              <h4 className="text-sm lg:text-base font-normal tracking-[-0.25px] text-muted-foreground">
                Alternative source of yield
              </h4>
            </div>
            <div className="p-6 flex flex-col gap-2 bg-muted rounded-lg border-[1px] border-[rgba(250,250,250,0.02)] backdrop-blur-xl">
              <h3 className="text-xl lg:text-2xl font-bold tracking-[-0.25px]">
                Enhance returns, minimize risks
              </h3>
              <h4 className="text-sm lg:text-base font-normal tracking-[-0.25px] text-muted-foreground">
                Sharpe of 3.0 and 8.2 in last 90 days
              </h4>
            </div>
          </div>
          <div className="p-6 flex flex-col justify-between gap-8 lg:gap-0 bg-muted rounded-lg border-[1px] border-[rgba(250,250,250,0.02)] backdrop-blur-xl">
            <div>
              <Icons.logo className="w-[90px] h-6" />
            </div>
            <h2 className="text-2xl lg:text-[32px] lg:leading-10 font-bold">
              Maximize your token potential by earning token-on-token yield
            </h2>
            <div className="flex justify-between">
              <div className="relative h-8 w-[120px]">
                <Image src="/strategy_icon.webp" alt="strategy" fill />
              </div>
              <Button>Deposit</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
