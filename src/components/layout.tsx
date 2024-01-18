import React from 'react'

export const Layout = ({ children }: {
  children: React.ReactNode
}) => {
  return (
    <section className='mx-auto w-[95%] md:w-2/3'>
      { children }
    </section>
  )
}
