import { useState, useRef } from 'react'
import viteLogo from '/vite.svg'
import './styles/App.css'
import axios from 'axios'
import Languages from './modules/languages'
import InpOut from './modules/inp_out'

function App() {
  return (
    <>
      
      <Languages/>
      <InpOut/>
      
    </>
  )
}

export default App
