import { cn } from "@/lib/utils";
import Image, { ImageProps } from "next/image";
import * as React from "react";

interface ImageItemProps extends ImageProps {
  src: string;
  alt: string;
  className?: string;
}

const ImageItem: React.FC<ImageItemProps> = ({ alt, className, src }) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={0}
      height={0}
      sizes="100vw"
      className={cn("w-full h-auto", className)}
    />
  );
};

export default ImageItem;
