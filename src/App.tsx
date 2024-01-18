import { Layout } from "./components/layout";
import { Footer } from "./modules/footer/footer";
import { Header } from "./modules/header/header";
import { MyRoutes } from "./modules/routers/myroutes";

const navbarItems: string[] = [
  'главная',
  'книги',
  'аксессуары',
  'контакты',
]


function App() {
  return (
    <div>
      <Header navbarItems={navbarItems}/>
      <Layout>
        <MyRoutes/>
      </Layout>
      <Footer navbarItems={navbarItems}/>
    </div>
  )
}

export default App;
