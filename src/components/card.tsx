import { motion } from "framer-motion"
import { Link } from "react-router-dom"

export const Card = ({ value }: {
  value: ICardProps
}) => {
  return(
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1}}
      transition={{duration: .3, }}
      className="mx-auto relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-72"
    >
      <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white bg-clip-border rounded-xl h-72">
        <img
          src={ value.img }
          alt="card-image" className="object-cover w-full h-full" />
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
            Apple AirPods
          </p>
          <p className="block  font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
            ${value.price}
          </p>
        </div>
        <p className="block font-sans text-xs antialiased font-normal leading-normal text-gray-700 opacity-75">
          { value.description }
        </p>
      </div>
      <div className="p-6 pt-0">
        <div className='flex justify-center gap-x-[1px]'>
          <Link 
            className='w-1/2 align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-primary text-white shadow-md shadow-yellow-900/10 hover:shadow-lg hover:shadow-yellow-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none rounded-r-none border-r-0' 
            to={'#'}>
              Купить</Link>
          <Link 
            className='w-1/2 align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-primary text-white shadow-md shadow-yellow-900/10 hover:shadow-lg hover:shadow-yellow-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none rounded-l-none' 
            to={'1'}>
              Подробнее</Link> 
        </div>
      </div>
    </motion.div>
  )
}
