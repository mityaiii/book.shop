import { twMerge } from "tailwind-merge"
import { NavbarItem } from "./navbar-item"
import { Logo } from "./logo"
import { motion, useCycle } from "framer-motion"
import { IconButton } from "@material-tailwind/react"
import { BottomArrowIcon } from "@/icons/bottom-arrow-icon"

const variants = {
  hidden: {
    opacity: 0,
    display: 'none',
    y: -10,
  },
  inView: {
    opacity: 1,
    display: '',
    y: 0
  }
}

export const HeaderMobile = ({ className, navbarItems }: {
    className?: string,
    navbarItems: string[],
  }) => {
  const [navState, setNavState] = useCycle('hidden', 'inView')

  return (
    <div className={ twMerge(className, 'relative') }>
      <div className='fixed border-primary rounded-b-xl border-b-2 top-0 bg-white z-10 w-full flex flex-col items-center'>
        <Logo
          className='mt-5'
        />
        <motion.nav
          className='py-5'
          initial='inView'
          animate={ navState }
          variants={ variants }
          transition={{
            duration: .3,
          }}
        >
          <ul className='text-center flex flex-col gap-y-2'>
            { navbarItems.map((value, indx) => <NavbarItem key={indx} value={value}/> ) }
          </ul>
        </motion.nav>
        <IconButton
          color='white'
          className='translate-y-4'
          onClick={() => setNavState()}
        >
          <BottomArrowIcon/>
        </IconButton>
      </div>
    </div>
  )
}
