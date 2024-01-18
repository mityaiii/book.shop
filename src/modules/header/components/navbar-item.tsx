import { Typography } from '@material-tailwind/react'

export const NavbarItem = ({ value }: {
    value: string,
}) => {
  return (
    <li>
			<Typography
				as='a'
        href="#"
        color="blue-gray"
        className="font-normal transition-colors hover:text-primary"
			>{ value }</Typography>
    </li> 
  )
}
