//Here I used Router Dom to show this possibility, but I had thinked in build one simple page (App.tsx) and show the characters details in one modal.
//How this test it to show possibilities, I decided to show this possibility with react-router-dom.

//also, I decided to use ContextAPI to show how to use it to share data between components. Mainly about global state

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Body from './layout/Body'
import Footer from './layout/Footer'
import Header from './layout/Header'
import Character from './pages/Character';
import { AuthProvider } from './context/AuthContext';

function App() {

  return (
      
      <AuthProvider>
        <div className='flex flex-col h-screen w-full'>
        <Header />
          <Router>
            <Routes>
              <Route path='/' element={<Body />} />
              <Route path='/character/:id' element={<Character/>} />
            </Routes>
          </Router>
        <Footer />
        </div>
      </AuthProvider>
      
  )
}

export default App
