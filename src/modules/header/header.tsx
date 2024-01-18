import { HeaderHoc } from './components/header.hoc'

export const Header = ({ navbarItems }: {
  navbarItems: string[]
}) => {
  return (
    <header>
      <HeaderHoc navbarItems={navbarItems}/>
    </header>
  )
}
