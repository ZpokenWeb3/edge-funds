"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { EffectCoverflow } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import useScreenSize from "@/hooks/screen-size";
import { sliderTokens } from "@/constants/data";

export const Hero = () => {
  const screen = useScreenSize();

  return (
    <div
      className="relative h-[680px] md:h-screen rounded-[16px] md:rounded-[32px]"
      id="hero"
    >
      <div className="hero_bg inset-0 absolute z-0 rounded-[16px] md:rounded-[32px]" />
      <div className="flex flex-col items-center z-10 relative pt-10 md:pt-[56px]">
        <div className="flex items-start">
          <h1 className="text-[28px] leading-[36px] md:text-[40px] md:leading-[48px] font-semibold mb-2 text-center">
            Earn yield on any token{" "}
            <span className="text-[12px] leading-5 md:text-base font-semibold pl-1 align-top">
              †
            </span>
          </h1>
        </div>
        <p className="text-sm font-normal md:text-base tracking-[-0.25px] text-center text-muted-foreground mb-[118px] md:mb-[66px]">
          Generate additional yield on your tokens without selling them through
          <br />
          uncorrelated market-neutral strategies
        </p>
        {screen.height && screen.width ? (
          <Swiper
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
            }}
            slidesPerView={screen.width < 768 ? 1.5 : 4}
            modules={[EffectCoverflow]}
          >
            {sliderTokens.map((t) => (
              <SwiperSlide
                key={t.name}
                className="flex flex-col p-6 bg-[rgba(0,0,0,0.50)] md:gap-8 items-center rounded-3xl border-[rgba(250,250,250,0.02)] border-[1px] w-[270px] backdrop-blur-[24px]"
              >
                <div
                  className={cn(
                    "relative left-[50%] translate-x-[-50%]",
                    t.name === "USDC"
                      ? "h-[56px] w-[112px] md:h-[80px] md:w-[160px]"
                      : "h-[56px] w-[56px] md:h-[80px] md:w-[80px]",
                  )}
                >
                  <Image src={t.icon_uri} alt={t.name} fill />
                </div>

                <div className="flex flex-col items-center py-8">
                  <h1 className="text-[28px] leading-[36px] font-semibold md:text-[40px] md:leading-[48px]">
                    {t.month_APR}%
                  </h1>
                  <p>{t.name}</p>
                </div>
                <Button className="w-full">Deposit</Button>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};
