import { twMerge } from "tailwind-merge"
import defaultImage from "@/assets/default-image.jpeg"

export const ImageWithRoundedCorners = ({ className, src, alt }: {
  className?: string
  src?: string,
  alt?: string,
}) => {
  return (
    <img
      className={twMerge('object-cover object-center w-full rounded-lg h-full', className)}
      src={ src || defaultImage }
      alt={ alt || "nature image" }
    />
  )
}
