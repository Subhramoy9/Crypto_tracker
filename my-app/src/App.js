import './App.css';
import Home from './Home';


import {
  BrowserRouter as
    Router,
  Routes,
  Route
} from "react-router-dom";
import CoinInfo from './CoinInfo';
import SignIn from './SignIn';
import SignUp from './SignUp';


function App() {
 return(
  <>
  
   <Router>
    <Routes>
    <Route path='/' element={<SignUp/>}/>
    <Route path='/signin' element={<SignIn/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/coin/:id' element={<CoinInfo/>}/>
    </Routes>
  </Router> 
 
  

  </>
 )
}

export default App;
