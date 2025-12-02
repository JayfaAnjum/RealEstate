
import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import About from './pages/about'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Profile from './pages/Profile'
import Home from './pages/Home'
import Header from './components/Header'
import { Toaster } from 'sonner';


function App() {
  

  return (
  
   <BrowserRouter>
   <Header />
    <Toaster position="top-right" richColors />
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

//npm init -y for getting package.json

//type:"module" then only it used es6 instead of common js

//dev is not special command so we need to add npm run 

//start is a specail command so we need to add start here

//.env files should be in the root folder because it contain mostly global variable

//if we use export const sigup we need to import is as it is 
//but if we use export default signup we can import with any name 

// we can create user two method .create is shortcut and we can use new user and save method we can use it 
//for hasing password validating the keys 