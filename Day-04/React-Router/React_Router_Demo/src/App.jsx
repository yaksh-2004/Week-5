import './App.css'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Header from './Components/Header'
import About from './Components/About'
import Contact from './Components/Contact'
import Home from './Components/Home'
 import NotFound from './Components/NotFound'

const App = () => (
  <div className="app-container">
    <div className="container">
      <BrowserRouter>
      <Header />
      <div className="Components">
        <Routes>
          <Route path="/" element ={<Home/>} />
          <Route  path="/about" element={<About/>} />
          <Route  path="/contact" element={<Contact/>} />
          <Route path ="/*" element={<NotFound/>}/>

        </Routes>
      </div>
      </BrowserRouter>
     
    </div>
  </div>
)

export default App