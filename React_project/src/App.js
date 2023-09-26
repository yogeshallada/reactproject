
import './App.css';
import Home from './home';
import Menu from './menu'; 
import History from './history';
import MainCharacters from './maincharacters';
import Movieslist from './movieslist';
import Contact from './contact';
import Medias from './medias';
import { BrowserRouter,Router,Route,Routes} from "react-router-dom";
function App()
{
  return(
    <div className='App'>
      <div>
      <h1 className='heading'>Marvel Studios</h1><br /></div>
    <BrowserRouter>
    <Menu />
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/home" element={<Home />}/>
      <Route path="/history" element={<History />}/>
      <Route path="/maincharacters" element={<MainCharacters />}/>
      <Route path="/movieslist" element={<Movieslist />}/>
      <Route path="/contact" element={<Contact />}/>
      <Route path="/medias" element={<Medias />}/>
    </Routes>
    </BrowserRouter>
    </div>
  )
}
export default App