import React from 'react'
import Book from './Book'

const BooksData=[
   {id:1,BookName:'Comic Books'},
   {id:2,BookName:'History Books'},
   {id:3,BookName:'Agricultural Books'}
]

const Books = () => {
  return (
    <>
    <div>Books</div>
    {BooksData.length && 
    BooksData.map((ele)=>
        <Book key={ele.id} BookName={ele.BookName} />
    )
    }
    </>
  )
}

export default Books