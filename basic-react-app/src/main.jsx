import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// const anotherUser = "chai aur react"
// const reactElement = React.createElement(
//   'a',
//   {href: 'https://google.com', target: '_blank'},
//   'click me to visit google',
//   anotherUser
// )

// ReactDom.createRoot(document.getElementById('root')).
// render(
//   reactElement
// )


createRoot(document.getElementById('root')).render(

    <App /> 
 
   
)
