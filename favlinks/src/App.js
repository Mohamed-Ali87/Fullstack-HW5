import React from 'react'
import LinkContainer from './components/LinkContainer'
import { useEffect } from 'react'

function App() {

  useEffect(() =>{
    fetch("http://localhost:8000/api")
    
  } )

  return (
    <div className="App">
      <LinkContainer />
    </div>
  )
}

export default App
