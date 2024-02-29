import { cn } from "@/lib/utils";
import Image, { ImageProps } from "next/image";
import React from "react";

interface Size {
  modile: {
    width: number;
    height: number;
  };
  desktop: { width: number; height: number };
}

export const CustomResponsiveImage = ({
  src,
  alt,
  size,
  className,
  ...props
}: ImageProps & { size: Size }) => {
  return (
    <>
      <Image
        src={src}
        alt={alt}
        width={size.desktop.width}
        height={size.desktop.height}
        className={cn("hidden md:block", className)}
        {...props}
      />
      <Image
        src={src}
        alt={alt}
        width={size.modile.width}
        height={size.modile.height}
        className={cn("md:hidden", className)}
        {...props}
      />
    </>
  );
};
