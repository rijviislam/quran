
import './App.css'
import About from './component/About';
import Banner from './component/Banner';
import Nav from './component/Nav'
import RecitersTranslations from './component/RecitersTranslations'
import RecitersListening from './component/RecitersListening'
import IslamicBlog from './component/IslamicBlog'
import Carousel from './component/Carousel'
import Footer from './component/Footer'
function App() {

  return (
    <>
      <Nav />
      <Banner />
      <About />
      <RecitersTranslations />
      <Carousel />
      <IslamicBlog />
      <RecitersListening />
      <Footer />
    </>
  );
}

export default App
