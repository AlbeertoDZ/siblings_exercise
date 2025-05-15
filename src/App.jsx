import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { UserContext } from './context/userContext';
import Head from './components/Head';
import Main from './components/Main'
import './App.css'

function App() {
  const [email, setEmail] = useState("");
  const [data, setData] = useState([]);

  const updateData = (newData) => {
    setData(newData);
  }

  const updateEmail = (newEmail) => {
    setEmail(newEmail);
  }

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>



      <Head />
      <Main />
      
    </>
  )
}

export default App
