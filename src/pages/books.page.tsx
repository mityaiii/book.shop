import { Card } from "@/components/card"
import { Pagination } from "@/components/pagination"
import bookImage from "@assets/book.jpg"

const values: ICardProps[] = [
  {
    title: 'Airpods',
    description: 'With plenty of talk and listen time, voice-activated Siri access, and an\navailable wireless charging case.',
    img: bookImage,
    price: 95,
  },
  {
    title: 'Airpods',
    description: 'With plenty of talk and listen time, voice-activated Siri access, and an\navailable wireless charging case.',
    img: bookImage,
    price: 95,
  },
  {
    title: 'Airpods',
    description: 'With plenty of talk and listen time, voice-activated Siri access, and an\navailable wireless charging case.',
    img: bookImage,
    price: 95,
  },
  {
    title: 'Airpods',
    description: 'With plenty of talk and listen time, voice-activated Siri access, and an\navailable wireless charging case.',
    img: bookImage,
    price: 95,
  },
  {
    title: 'Airpods',
    description: 'With plenty of talk and listen time, voice-activated Siri access, and an\navailable wireless charging case.',
    img: bookImage,
    price: 95,
  },
  {
    title: 'Airpods',
    description: 'With plenty of talk and listen time, voice-activated Siri access, and an\navailable wireless charging case.',
    img: bookImage,
    price: 95,
  }
]

export const BooksPage = () => {
  return (
    <div>
      <div className='grid grid-cols-main gap-5'>
        { values.map((value, indx) => <Card key={indx} value={value}/>) }
      </div>
      <Pagination/>
    </div>
  )
}
