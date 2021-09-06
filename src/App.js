import './App.css';
import Navigation from './Component/Navbar';
import Footer from './Component/Footer';
import Brand from './Component/Brand';
import Services from './Component/Services';
import Message from './Component/Message';
import Cerosal from './Component/Carousel';
import Contact from './Component/Form';

function App() {
  return (
    <div className="App">
        <Navigation/>
        <Cerosal/>     
        <Message/>
        <Services/>
        <Brand/>
        <Contact/>
        <Footer/>
    </div>
  );
}
export default App;
