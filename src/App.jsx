import Navbar from './components/Navbar'
import NavbarMob from './components/NavbarMob'
import Hero from './components/Hero'
import LetsMakeItHappen from './components/LetsMakeItHappen'
import Services from './components/Services'
import AboutUs from './components/AboutUs'
import Portfolio from './components/Portfolio'
import WhyChooseUs from './components/WhyChooseUs'
import Form from './components/Form'
import Faq from './components/Faq'
import Footer from './components/Footer'


export default function App() {
  return (
    <>
    <Navbar/>
    <NavbarMob/>
    <Hero/>
    <LetsMakeItHappen/>
    <Services/>
    
    {/* 
    <AboutUs/>
    <Portfolio/>
    <WhyChooseUs/>
    <Form/>
    <Faq/>
    <Footer/> 
    */}
    </>
  )
}