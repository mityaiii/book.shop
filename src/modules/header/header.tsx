import { HeaderHoc } from './components/header.hoc'

export const Header = ({ navbarItems }: {
  navbarItems: INavbarItem[]
}) => {
  return (
    <header>
      <HeaderHoc navbarItems={navbarItems}/>
    </header>
  )
}
