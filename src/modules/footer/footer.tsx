import { Typography } from '@material-tailwind/react'


export const Footer = ({ navbarItems }: {
  navbarItems: string[]
}) => {
  return (
    <footer className="w-full bg-white p-8">
      <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-white text-center md:justify-between">
        <img src="https://docs.material-tailwind.com/img/logo-ct-dark.png" alt="logo-ct" className="w-10" />
        <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
          { navbarItems.map((value, indx) => <li key={indx}>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors hover:text-primary"
            >
              { value }
            </Typography>
          </li>) }
        </ul>
      </div>
      <hr className="my-8 border-blue-gray-50" />
      <Typography color="blue-gray" className="text-center font-normal">
        &copy; 2024 Mityaiii official
      </Typography>
    </footer>
  )
}
