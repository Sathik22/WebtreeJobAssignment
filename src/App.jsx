import  React from 'react'
import {Routes,Route} from 'react-router-dom'
import './App.css'
import UserProfile from './Component/UserProfile/UserProfile'

function App() {

  return (
    <Routes>
     <Route path='/' element={<UserProfile />} />
    </Routes>
  )
}

export default App
