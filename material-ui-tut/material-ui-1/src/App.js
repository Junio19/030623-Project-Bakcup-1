import React from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Notes from './pages/Notes';
import Create from './pages/Create';


const App = () => {
  return (
    <BrowserRouter>
      <main>
          <Routes>
            <Route path='/' element={<Notes />} />
            <Route path='/create' element={<Create />} />
          </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App