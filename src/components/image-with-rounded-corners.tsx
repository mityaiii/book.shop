import { twMerge } from "tailwind-merge"

export const ImageWithRoundedCorners = ({ className, src, alt }: {
  className?: string
  src?: string,
  alt?: string,
}) => {
  return (
    <img
      className={twMerge('object-cover object-center w-full rounded-lg h-full', className)}
      src={ src || "https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2832&amp;q=80" }
      alt={ alt || "nature image" }
    />
  )
}
