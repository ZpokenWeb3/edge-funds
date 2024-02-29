import { Icons } from "../icons";

export const Footer = () => {
  return (
    <div
      id="about"
      className="flex flex-col items-center mt-2 md:mt-10 gap-6 md:gap-8 scroll-section"
    >
      <div className="flex w-full flex-col items-center gap-6 md:gap-8 md:w-[68%]">
        <h1 className="text-[28px] leading-[36px] md:text-[40px] md:leading-[48px] font-semibold text-center">
          Get your questions answered
        </h1>
        <div className="grid md:grid-cols-2 gap-3 w-full">
          <div className="flex flex-col p-6 gap-6 rounded-lg border-[1px] border-border bg-muted">
            <div className="flex flex-col gap-2">
              <p className="text-xl font-bold tracking-[-0.25px] md:text-2xl">
                Learn
              </p>
              <p className="text-sm font-normal tracking-[-0.25px] md:text-base text-muted-foreground">
                Deep dive into Ultra Yield functionalities and glossary
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <p className="text-base font-bold tracking-[-0.25px]">
                  Get started
                </p>
                <div>
                  <Icons.MoveRight className="w-5 h-5 cursor-pointer hover:opacity-50" />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-base font-bold tracking-[-0.25px]">
                  Tutorials
                </p>
                <div>
                  <Icons.MoveRight className="w-5 h-5 cursor-pointer hover:opacity-50" />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-base font-bold tracking-[-0.25px]">
                  Key concepts
                </p>
                <div>
                  <Icons.MoveRight className="w-5 h-5 cursor-pointer hover:opacity-50" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col p-6 gap-6 rounded-lg border-[1px] border-border bg-muted">
            <div className="flex flex-col gap-2">
              <p className="text-xl font-bold tracking-[-0.25px] md:text-2xl">
                Support
              </p>
              <p className="text-sm font-normal tracking-[-0.25px] md:text-base text-muted-foreground">
                Contact Ultra Yield team whenever you need
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <p className="text-base font-bold tracking-[-0.25px]">FAQ</p>
                <div>
                  <Icons.MoveRight className="w-5 h-5 cursor-pointer hover:opacity-50" />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-base font-bold tracking-[-0.25px]">
                  Discord
                </p>
                <div>
                  <Icons.MoveRight className="w-5 h-5 cursor-pointer hover:opacity-50" />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-base font-bold tracking-[-0.25px]">
                  Twitter
                </p>
                <div>
                  <Icons.MoveRight className="w-5 h-5 cursor-pointer hover:opacity-50" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-6 px-0 md:py-12 md:px-[56px] w-full grid lg:grid-cols-3 gap-8 lg:gap-20">
        <div className="flex flex-col justify-between">
          <div className="flex lg:flex-col justify-between gap-6">
            <div>
              <Icons.logo className="w-[120px] h-8" />
            </div>
            <div className="flex items-center gap-4">
              <a className="cursor-pointer hover:opacity-50">
                <Icons.twitter />
              </a>
              <a className="cursor-pointer hover:opacity-50">
                <Icons.discord />
              </a>
              <a className="cursor-pointer hover:opacity-50">
                <Icons.github />
              </a>
            </div>
          </div>
          <p className="hidden lg:block text-sm font-normal tracking-[-0.25px] text-[rgba(250,250,250,0.50)]">
            © 2024 UltraYield. All rights reserved.
          </p>
        </div>
        <div className="flex gap-[88px] lg:justify-between">
          <div className="flex flex-col gap-4">
            <p className="text-sm font-normal tracking-[-0.25px] text-[rgba(250,250,250,0.50)]">
              About
            </p>
            <div className="flex flex-col gap-6 lg:gap-3">
              <a className="text-base font-normal tracking-[-0.25px] cursor-pointer hover:opacity-50">
                Team
              </a>
              <a className="text-base font-normal tracking-[-0.25px] cursor-pointer hover:opacity-50">
                Contacts
              </a>
              <a className="text-base font-normal tracking-[-0.25px] cursor-pointer hover:opacity-50">
                Token
              </a>
              <a className="text-base font-normal tracking-[-0.25px] cursor-pointer hover:opacity-50">
                Media kit
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-sm font-normal tracking-[-0.25px] text-[rgba(250,250,250,0.50)]">
              Resources
            </p>
            <div className="flex flex-col gap-6 lg:gap-3">
              <a className="text-base font-normal tracking-[-0.25px] cursor-pointer hover:opacity-50">
                Terms
              </a>
              <a className="text-base font-normal tracking-[-0.25px] cursor-pointer hover:opacity-50">
                Security
              </a>
              <a className="text-base font-normal tracking-[-0.25px] cursor-pointer hover:opacity-50">
                Privacy
              </a>
              <a className="text-base font-normal tracking-[-0.25px] cursor-pointer hover:opacity-50">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between gap-2 lg:gap-0">
          <p className="text-[10px] leading-[18px] tracking-[-0.25px] text-[rgba(250,250,250,0.50)] font-normal">
            †This performance reflects the estimated net returns of the
            portfolio for the fund averaged across all investors and weighted by
            AuM.
          </p>
          <p className="text-[10px] leading-[18px] tracking-[-0.25px] text-[rgba(250,250,250,0.50)] font-normal">
            PnL stats are based on gross trading PnL monthly returns, and Sharpe
            is calculated using a 1-year T-bill rate. YTD return is based on the
            geometric average of monthly returns.
          </p>
          <p className="text-[10px] leading-[18px] tracking-[-0.25px] text-[rgba(250,250,250,0.50)] font-normal">
            PAST RESULTS ARE NOT INDICATIVE OF FUTURE RESULTS. Performance
            figures for the Fund are net numbers and include the application of
            management fees, admin fees, fund accrued expenses, and carry. The
            performance for some months has NOT been professionally audited nor
            confirmed by a fund administrator at the time of publication.
          </p>
        </div>
        <p className="block lg:hidden text-sm font-normal tracking-[-0.25px] text-[rgba(250,250,250,0.50)]">
          © 2024 UltraYield. All rights reserved.
        </p>
      </div>
    </div>
  );
};
