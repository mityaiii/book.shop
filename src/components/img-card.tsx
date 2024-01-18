import { IconButton, Typography } from '@material-tailwind/react'
import { LeftArrowIcon } from '@/icons/left-arrow.icon'
import { ImageWithRoundedCorners } from './image-with-rounded-corners'

export const ImgCard = ({ src, alt, title }: {
  src: string,
  alt: string,
  title: string,
}) => {
  return (
    <div className='h-full relative'>
      <ImageWithRoundedCorners
        className='h-96 md:h-full'
        src={src} alt={alt}
      />
      <div className='absolute flex items-center gap-x-3 left-0 top-4 -translate-x-2 md:-translate-x-16'>
        <Typography 
          variant='paragraph'
          className='text-3xl'
        >{ title }</Typography>
        <IconButton
          className='bg-primary w-7 h-7 md:w-8 md:h-8'
        >
          <LeftArrowIcon/>
        </IconButton>
      </div>
    </div>
  )
}
