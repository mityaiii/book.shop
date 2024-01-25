import { useNavbarItems } from '@/stores/navbarItem.store'
import { Link } from 'react-router-dom';

export const NavbarItem = ({ indx, value }: {
  indx: number,
  value: INavbarItem,
}) => {
  const state = useNavbarItems(); 

  return (
    <li
      onClick={() => { 
        state.setIndxOfActiveLink(indx)
      }}
    >
			<Link
        to={ value.link }
        className={`font-normal transition-colors hover:text-primary 
        ${ state.indxOfActiveLink === indx ? 'text-primary' : 'text-black'}`}
			>{ value.title }</Link>
    </li> 
  )
}
