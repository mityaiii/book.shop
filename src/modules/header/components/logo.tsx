import { Typography } from '@material-tailwind/react'
import { twMerge } from 'tailwind-merge'

export const Logo = ({ className }: {
  className?: string
}) => {
  return (
    <Typography className={twMerge('text-primary', className)} variant='h3'>
      .book store
    </Typography>
  )
}
