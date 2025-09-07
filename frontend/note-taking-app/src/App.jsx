import { useState } from 'react'
import HomePage from './pages/HomePage'
import NoteDetailPage from './pages/NoteDetailPage'
import CreatePage from './pages/CreatePage'
import { Route, Routes } from 'react-router'
import NotFound from './pages/NotFound'


function App() {
  return (
      <div data-theme = 'valentine' className='bg-base-300/50 text-warning-content' >
        
      <Routes>
        <Route path = '/' element = {<HomePage/>} />
        <Route path = '/note/:id' element = {<NoteDetailPage/>} />
        <Route path = '/create' element = {<CreatePage/>} />
        <Route path = '*' element = {<NotFound/>} />

      </Routes>
      </div>
      
  )
}

export default App
