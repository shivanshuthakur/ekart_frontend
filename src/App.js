import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Login from "./pages/login";
import Register from "./pages/Register";
import Productcats from "./pages/Productcats";
import Addproduct from "./pages/Addproduct";

import {BrowserRouter , Route , Routes} from "react-router-dom";


function App() {
  return (
   <>
   <div>
    <Header/>
    <BrowserRouter>
       
       <Routes>
        
       <Route path='/' element={<Home/>}/>
       <Route path='/Login' element={<Login/>}/>
       <Route path='/Register' element={<Register/>}/>
       <Route path ='/Productcats/:id' element={<Productcats/>}/>
       <Route path ='/Addproduct/:id' element={<Addproduct/>}/>
       
    
       </Routes>
      
      </BrowserRouter>
    <Footer/>

   </div>





   </>
  );
}

export default App;