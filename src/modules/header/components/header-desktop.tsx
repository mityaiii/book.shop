import { NavbarItem } from './navbar-item'
import { twMerge } from 'tailwind-merge'
import { motion } from 'framer-motion'
import { Logo } from './logo'

export const HeaderDesktop = ({ className, navbarItems }: {
  navbarItems: string[],
  className?: string,
}) => {
  return (
    <motion.div 
      className={twMerge('', className)}
      initial={{ y: -50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1}}
      transition={{duration: .3, }}
    >
      <nav className='py-4 px-2 border-b-2 border-primary max-w-[1280px] w-4/5 flex justify-between mx-auto items-center'>
        <Logo/>
        <ul className='flex gap-x-8'>
          { navbarItems.map((value, indx) => <NavbarItem key={indx} value={value}/>) }
        </ul>
      </nav>
    </motion.div>
  )
}
