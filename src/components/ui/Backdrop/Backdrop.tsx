import { ComponentProps } from "react";
import Image, { StaticImageData } from "next/image";

export const imageSizes = {
  backdrop: {
    w300: "w300",
    w780: "w780",
    w1280: "w1280",
    original: "original"
  }
};

type BackdropSize = keyof typeof imageSizes.backdrop;

interface MediaBackdropProps extends ComponentProps<"div"> {
  image?: StaticImageData | string;
  size?: BackdropSize;
  alt: string;
  priority?: boolean;
}

export const Backdrop: React.FC<MediaBackdropProps> = ({
  image,
  alt,
  priority
}) => {
  if (!image) return <div>Loading....</div>;

  const imageSrc = typeof image === "string" ? image : image.src;

  return (
    <div className="container relative h-full">
      <Image
        className="h-full w-full object-cover md:object-contain"
        src={imageSrc}
        alt={alt}
        priority={priority}
        unoptimized
        fill
      />
    </div>
  );
};
