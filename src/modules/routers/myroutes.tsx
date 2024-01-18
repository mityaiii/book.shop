import { Route, Routes } from 'react-router-dom'
import { MainPage } from '@/pages/main.page'
import { BooksPage } from '@/pages/books.page'

export const MyRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage/>}/>
      <Route path="/books" element={<BooksPage/>}/>
    </Routes>
  )
}
