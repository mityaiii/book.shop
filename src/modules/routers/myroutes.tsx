import { Route, Routes } from 'react-router-dom'
import { MainPage } from '@/pages/main.page'
import { BooksPage } from '@/pages/books.page'
import { CardPage } from '@/pages/card.page'
import { AccessoriesPage } from '@/pages/accessories.page'
import { ContactsPage } from '@/pages/contacts.page'

export const MyRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage/>}/>
      <Route path="/books" element={<BooksPage/>}/>
      <Route path="/books/1" element={<CardPage/>}/>
      <Route path="/accessories" element={<AccessoriesPage/>}/>
      <Route path="/contacts" element={<ContactsPage/>}/>
    </Routes>
  )
}
