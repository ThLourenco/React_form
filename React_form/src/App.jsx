import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

import { MyForm } from './components/MyForm'

function App() {
  const [count, setCount] = useState(0)

  return(
    <div className='App'>
      <h1>Form em React</h1>
      <MyForm userName="Thiago" email="taeiqw@email.com"/>
    </div>
  );
}

export default App
