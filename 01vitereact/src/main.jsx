import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
    return(
        <div>
            heyya
        </div>
    )
}
const anotherelement = (
    <a href='https://google.com' target='_blank'>click to visit google</a>
)
const reactelement = React.createElement(
    'a',
    {href:'https://youtube.com' , target:'_blank'},
    'click ot visit youtube', 
    anotherelement,
    
)
createRoot(document.getElementById('root')).render(
    //anotherelement,
    reactelement,
    
)
