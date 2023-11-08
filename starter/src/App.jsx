import NavBar from './components/Navbar'
import {Routes} from 'react-router-dom'

import Cart from "./pages/Cart";
import Home from "./pages/Home";
import { Route } from 'react-router-dom';




const App = () => {
  return <div >
   
   <div className='bg-slate-900 w-screen px-3'>
   <NavBar/>
   </div>
 

  <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/cart' element={<Cart/>}>
    </Route>
  </Routes>
  
  </div>;
};

export default App;
