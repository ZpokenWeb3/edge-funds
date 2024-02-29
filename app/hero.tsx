"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { EffectCoverflow } from "swiper/modules";
import useScreenSize from "@/hooks/screen-size";
import { sliderTokens } from "@/constants/data";

import "swiper/css";
import "swiper/css/effect-coverflow";
import { CustomResponsiveImage } from "@/components/custom-responsive-image";

export const Hero = () => {
  const screen = useScreenSize();

  return (
    <div
      className="relative h-[680px] md:h-screen rounded-[16px] md:rounded-[32px] scroll-section"
      id="hero"
    >
      <div className="flex flex-col items-center z-10 relative pt-10 md:pt-[56px]">
        <div className="flex items-start">
          <h1 className="text-[28px] leading-[36px] md:text-[40px] md:leading-[48px] font-semibold mb-2 text-center">
            Earn Ultra Yield on Any Token
            <span className="text-[12px] leading-5 md:text-base font-semibold pl-1 align-top">
              †
            </span>
          </h1>
        </div>
        <p className="text-sm font-normal md:text-base tracking-[-0.25px] text-center text-muted-foreground mb-[118px] md:mb-[66px] lg:w-[30%]">
          Generate additional yield on your tokens without selling them through
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
                className="flex flex-col items-center p-6 bg-[rgba(0,0,0,0.50)] md:gap-8 rounded-3xl border-[rgba(250,250,250,0.02)] border-[1px] w-[270px] backdrop-blur-[24px]"
              >
                <div className="flex justify-center">
                  <CustomResponsiveImage
                    src={t.icon_uri}
                    alt={t.name}
                    size={{
                      modile: {
                        width: t.name === "USD" ? 100 : 56,
                        height: 56,
                      },
                      desktop: {
                        width: t.name === "USD" ? 140 : 80,
                        height: 80,
                      },
                    }}
                  />
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
      <div className="bg-[url(/hero_mobile_bg.webp)] md:bg-[url(/hero.webp)] bg-cover bg-no-repeat inset-0 absolute z-0 rounded-[16px] md:rounded-[32px]" />
      <div className="hidden md:block bg-gradient-to-r from-[rgba(0,0,0,0.84)] to-[rgba(0,0,0,0.00)] top-0 left-0 h-screen absolute z-0 inset-0 w-[47%]" />
      <div className="hidden md:block bg-gradient-to-l from-[rgba(0,0,0,0.84)] to-[rgba(0,0,0,0.00)] top-0 right-0 h-screen absolute z-0  w-[47%]" />
    </div>
  );
};
