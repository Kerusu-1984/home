import NextImage from "next/image";
import { ImgHTMLAttributes } from "react";

const CustomImage = ({
  src,
  alt,
  className,
  width,
  height,
}: ImgHTMLAttributes<HTMLImageElement>) => {
  if (!src) return <span>no image</span>;

  return width && height ? (
    <NextImage
      src={src}
      alt={alt}
      className={className}
      width={width}
      height={height}
    />
  ) : (
    <img src={src} alt={alt} className={className} />
  );
};

export default CustomImage;
