import { twMerge } from "tailwind-merge"
import defaultImage from "@/assets/default-image.jpeg"

export const ImageWithShadow = ({ className, src, alt }: {
    className?: string
    src?: string,
    alt?: string,
}) => {
  return (
    <img
      className={twMerge('h-full w-full rounded-lg object-cover object-center shadow-xl shadow-blue-gray-900/50', className)}
      src={ src || defaultImage }
      alt={ alt || "nature image" }
    />
  )
}
