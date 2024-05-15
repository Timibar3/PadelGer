import React from 'react'
import ReactDOM from 'react-dom/client'
import './components/NavBar/stylesNavBar.css'
import NavBar from './components/NavBar/NavBar.jsx'
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NavBar/>
    <ItemListContainer greetings={'Hola Mundo!!'} />
  </React.StrictMode>,
)
