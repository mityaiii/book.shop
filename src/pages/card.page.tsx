import { ImageWithShadow } from '@/components/image-with-shadow'
import { MinusIcon } from '@/icons/minus.icon'
import { PlusIcon } from '@/icons/plus.icon'
import { Button, Typography } from '@material-tailwind/react'
import { useCallback, useState } from 'react'

const values = {
  title: 'Airpods',
  description: 'With plenty of talk and listen time, voice-activated Siri access, and an\navailable wireless charging case.',
  img: 'https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=927&amp;q=80',
  price: 95,
}

const minValue = 1;
const maxValue = 99;

export const CardPage = () => {
  const [qty, setQty] = useState(1);

  const increasQty = useCallback(() => {
    if (qty >= maxValue) {
      return;
    }

    setQty(prevValue => prevValue + 1)
  }, [qty])

  const decreaseQty = useCallback(() => {
    if (qty <= minValue) {
      return;
    }

    setQty(prevValue => prevValue - 1)
  }, [qty])

  const changeQty = useCallback((value: string) => {  
    const intValue = Number(value);

    if (value === '') {
      setQty(intValue);
      return;
    }

    if (intValue < minValue || intValue > maxValue) {
      return;
    }

    setQty(intValue);
  }, [qty])

  return (
    <div className='w-full mt-32 md:mt-0 grid min-h-[60vh] place-items-center'>
      <div className='md:flex mx-auto gap-x-12'>
        <ImageWithShadow
          src={values.img}
          className='h-96 w-96 mx-auto'
        />
        <div className='flex flex-col mx-auto gap-y-5 mt-5 md:mt-0 md:max-w-[50%]'>
          <Typography
            variant='h2'
            className='text-center md:text-start'
          >
            { values.title }
          </Typography>
          <Typography
            className='text-center md:text-start whitespace-pre-line'
            variant='paragraph'
          >
            { values.description }
          </Typography>
          <div className='flex mx-auto md:mx-0 gap-x-5'>
            <div className='border-[1px] relarive border-black flex items-center h-12'>
              <button 
                onClick={decreaseQty}
                className='flex justify-center w-8'
              >
                <MinusIcon/>
              </button>
              <input 
                value={qty}
                onChange={(e) => { changeQty(e.target.value) }}
                type='number'
                className='h-full text-xl placeholder:text-xl w-12 text-center'
              />
              <button 
                className='flex justify-center w-8'
                onClick={increasQty}
              >
                <PlusIcon/>
              </button>
            </div>

            <Button
              color='yellow'
              variant='outlined'
              size='lg'
              className='text-black font-thin hover:bg-yellow-400 transition-colors'
            >Купить</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
