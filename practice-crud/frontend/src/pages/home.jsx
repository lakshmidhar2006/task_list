import React from 'react'

import MyBooks from '../components/MyBooks'
import { useState } from 'react'
function Home() {
    const [book, setBook]=useState([])
    // write a function to get the book from backend and display it 

  return (
    <div>
        <div><button>create book</button></div>
       {
      book.map((item, id)=>
      <MyBooks key={id} {...item}/>
      )
     }
    </div>
  )
}

export default Home
