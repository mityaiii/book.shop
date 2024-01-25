import { CrossIcon } from "@/icons/cross.icon"
import { Button } from "@material-tailwind/react"
import { useState } from "react";

export const MyForm = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
      isOpen ? 
      <div className="container px-5 py-24 mx-auto flex">
        <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
          <div onClick={() => { console.log(isOpen); setIsOpen(false) } }>
            <CrossIcon className='absolute right-2 top-2 hover:stroke-yellow-500 hover:scale-110 transition-colors'/>
          </div>
          <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Feedback</h2>
          <p className="leading-relaxed mb-5 text-gray-600">Post-ironic portland shabby chic echo park, banjo fashion axe</p>
          <div className="relative mb-4">
            <label className="leading-7 text-sm text-gray-600">Email</label>
            <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-primary focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
          <div className="relative mb-4">
            <label className="leading-7 text-sm text-gray-600">Message</label>
            <textarea id="message" name="message" className="w-full bg-white rounded border border-gray-300 focus:border-primary focus:ring-2 focus:ring-yellow-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
          </div>
          <Button
            className='bg-primary'
            onClick={ () => {} }
          >Button</Button>
          <p className="text-xs text-gray-500 mt-3">Chicharrones blog helvetica normcore iceland tousled brook viral artisan.</p>
        </div>
      </div>
      : <div className='w-96 h96'>

      </div>
  )
}
