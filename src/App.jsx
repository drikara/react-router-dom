
import './App.css'
import ReactDOM from "react-dom/client";
import Home from './pages/Home';
import Layout from "./pages/Layout";
import Blogs from './pages/Blogs';
import NoPage from "./pages/NoPage";
import Contact from "./pages/Contact";
import {BrowserRouter, Routes,Route} from "react-router-dom"


function App() {
  

  return (
   <BrowserRouter>
   <Routes>
      <Route path='/' element={<Layout/>}>
           <Route index element={<Home/>}/>
           <Route path='blog' element={<Blogs/>}/>
           <Route path='contact' element={<Contact/>} />
           <Route path='*' element={<NoPage/>}/>

      </Route>
   </Routes>
   
   </BrowserRouter>
     
     
  )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>)

export default App
