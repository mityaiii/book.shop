import { HeaderMobile } from './header-mobile'
import { HeaderDesktop } from './header-desktop'

export const HeaderHoc = ({ navbarItems }: {
  navbarItems: string[]
}) => {
  return (
    <>
      <HeaderMobile className='block md:hidden' navbarItems={navbarItems}/>
      <HeaderDesktop className='md:block hidden' navbarItems={navbarItems}/>
    </>
  )
}
