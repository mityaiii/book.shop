import { ImageWithRoundedCorners } from "@/components/image-with-rounded-corners"
import { ImgCard } from "@/components/img-card"
import { HeartIcon } from "@/icons/heart.icon"
import { MyCarousel } from "@/modules/carousel/mycarousel"
import { Button, IconButton, Typography } from "@material-tailwind/react"
import { motion } from "framer-motion"

const cardVariants = {
  hidden: {
    y: 50,
    opacity: 0
  },
  inView: {
    y: 0,
    opacity: 1
  }
} 

export const MainPage = () => {
  return (
    <div className='flex flex-col gap-y-12 md:gap-y-28 my-5'>
      <motion.div
        initial={'hidden'}
        whileInView={'inView'}
        variants={cardVariants}
        transition={{duration: .3, }}
      >
        <MyCarousel/>
      </motion.div>

      <motion.div 
        className='flex flex-col gap-y-5'
        initial={'hidden'}
        whileInView={'inView'}
        variants={cardVariants}
        transition={{duration: .3, }}
      >
        <Typography
          variant='paragraph'
          className='text-xl md:text-3xl font-light max-w-xl'
        >Новая книга совместной издательской программы masters x Ad Marginem</Typography>
        <div className="flex flex-col md:grid grid-cols-2 grid-rows-2 gap-x-8 md:gap-x-32 gap-y-8">
          <div className="row-span-2 md:h-[42rem]">
            <ImgCard 
              src='https://thumb.tildacdn.com/tild3632-3866-4261-a366-323234633434/-/cover/403x599/center/center/-/format/webp/DMN01513-2.jpg' 
              alt='books'
              title='книги'
            />
          </div>
          <div className='md:h-[20rem]'>
            <ImgCard 
              src='https://thumb.tildacdn.com/tild6235-3238-4364-b937-663339663534/-/cover/599x250/center/center/-/format/webp/4_2_copy_.jpg' 
              alt='books'
              title='искусство'
            />
          </div>
          <div className="col-start-2 md:h-[20rem]">
            <ImgCard 
              src='https://thumb.tildacdn.com/tild3530-3336-4365-b366-656365353837/-/cover/599x250/center/center/-/format/webp/noroot.jpg' 
              alt='books'
              title='аксессуары'
            />
          </div>
        </div>
      </motion.div>

      <motion.div 
        className="md:flex md:justify-between"
        initial={'hidden'}
        whileInView={'inView'}
        variants={cardVariants}
        transition={{duration: .3, }}
      >
        <ImageWithRoundedCorners
          src='https://static.tildacdn.com/tild3466-3936-4232-b039-353533353633/photo.jpg'
          className='md:w-2/3 h-96 md:h-[40em]'
        />
        <div className='pt-3 md:pt-0 flex flex-col gap-y-3'>
          <Typography
            variant="h5"
            className="text-2xl"
          >Подарочный сертификат</Typography>
          <Typography
            variant="h6"
            className="text-xl"
          >от 500 р.</Typography>
          <div className='flex gap-x-5'>
            <Button className="bg-primary">Купить</Button>
            <IconButton
              variant='outlined'
              className='rounded-full'
            >
              <HeartIcon/>
            </IconButton>
          </div>
          <Typography
            variant="paragraph"
          >в наличии бумажная и электронная версии</Typography>
        </div>
      </motion.div>
    </div>
  )
}