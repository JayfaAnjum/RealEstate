
import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import About from './pages/about'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Profile from './pages/Profile'
import Home from './pages/Home'
import Header from './components/Header'



function App() {
  

  return (
  
   <BrowserRouter>
   <Header />
   <Routes>
    <Route path="/about" element={<About/>} />
   
   <Route path="/home" element={<Home/>} />
    <Route path="/login"  element={<Login/>}/>
  
  
    <Route path="/Signup" element={<SignUp/>} />
   
   
    <Route path="/profile" element={<Profile/>} />
   </Routes>
   
   </BrowserRouter>
    
  )
}

export default App
//here we console ninja for see console output in vscode instead of web browser

//es7 has lot of features

// tailwindcss intellisense

//prettier