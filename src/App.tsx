import { useEffect, useState } from "react";
import { Layout } from "./components/layout";
import { Footer } from "./modules/footer/footer";
import { Header } from "./modules/header/header";
import { Loader } from "./modules/loader/loader";
import { MyRoutes } from "./modules/routers/myroutes";

const navbarItems = [
  {
    title: 'главная',
    link: '/',
  },
  {
    title: 'книги',
    link: '/books',
  },
  {
    title: 'аксессуары',
    link: '/accessories',
  },
  {
    title: 'контакты',
    link: '/contacts',
  },
]

function App() {
  // const history = history();
  // const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   const unlisten = history.listen(() => {
  //     setLoading(true);
  //     // Simulate a delay (replace with your actual asynchronous operation)
  //     setTimeout(() => {
  //       setLoading(false);
  //     }, 2000);
  //   });

  //   return () => {
  //     unlisten();
  //   };
  // }, [history]);

  // return (
  //   <div>
  //     {loading && <Loader />}
  //     <Switch>
  //       <Route path="/about" component={About} />
  //       <Route path="/" component={Home} />
  //     </Switch>
  //   </div>
  // );
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      await new Promise(resolve => setTimeout(resolve, 1000));

      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    loading 
    ?
      <Loader />
    :
    <>
      <Header navbarItems={navbarItems}/>
      <Layout>
        <MyRoutes/>
      </Layout>
      <Footer navbarItems={navbarItems}/>
    </>
    
  )
}

export default App;
