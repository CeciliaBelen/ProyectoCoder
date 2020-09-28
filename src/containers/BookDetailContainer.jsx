import React, {useState} from 'react';
import { useEffect } from 'react';
import Data from '../utils/books.json';
import BookDetail from '../components/products/BookDetail'

export default function BookDetailContainer(){
    let bookList = Data
    const [loading, setLoading] = useState(false);
    const [books, setBooks] = useState([]);
    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
          setBooks(bookList);
          setLoading(false);
        }, 3000);
      }, [bookList]);
   
    useEffect(()=>{setBooks()}, [])

    if (loading) {
        return (
          <div>
            <h2>Catálogo</h2> 
            <h4>Cargando</h4>
          </div>
        );
      }
    
    return(
        <div>
            {books.map((book) => (
                <BookDetail data={book}/>
            ))}
        </div>
    )
}