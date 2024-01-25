import { Link } from 'react-router-dom'

export const Pagination = () => {
  return (
    <div className='mt-12 text-center'>
        { [...Array(1, 2, 3).map((value, indx) => <Link 
        key={indx} 
        to={ '#' }
        className='text-2xl px-3 hover:text-primary transition-colors'
        >
            { value }
        </Link>)] }
    </div>
  )
}
