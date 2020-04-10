import React, { useState, useEffect } from "react";
import API from "../utils/API.js"

function Saved() {

    const [books, setBooks] = useState([])

    useEffect(() => {
        getBooks();
    }, [])


    const handleDelete = id => {
        API.deleteBook(id)
            .then(res => {
                setBooks(books.filter(book => book._id !== id))
                console.log(res)
            })
            .catch(err => console.log(err))
    }

    const getBooks = () => {
        API.getSavedBooks()
            .then(data => {
                    console.log(data)
                    // setBooks(data)
                }
            )
            .catch(err => console.log(err))
    }


    return (




        <>
            <div className="container bg-light d-flex flex-column align-items-center">
                <h2 className="mt-4">Saved Books</h2>
            </div>
            <div className="container mt-5">

                {books && books.map(book => (
                    <div className="mt-5">
                        <h1 className="text-center">Saved</h1>
                        <div className="row justify-content-between">

                            <div className="row col-sm-9 flex-column">
                                <h1>{book.volumeInfo.title}</h1>
                                {book.volumeInfo.authors ?
                                    <h2>{book.volumeInfo.authors.join(" & ")}</h2> : <h2>N/A</h2>}
                            </div>

                            <div className="row col-sm-3 justify-content-end">
                                <a href={book.volumeInfo.infoLink} target="_blank" rel="noopener noreferrer"><button className="btn btn-primary col-sm-5 mt-3">View</button></a>
                                <button onClick={handleDelete(book._id)} className="btn btn-primary col-sm-5 ml-1 mt-3">Delete</button>
                            </div>
                        </div>

                        <div className="row">

                            {/* {book.volumeInfo.imageLinks.thumbnail ? <img src={book.volumeInfo.imageLinks.thumbnail} className="img col-sm-2" /> : <img src="https://www.tiffanyjonesre.com/assets/images/image-not-available.jpg" className="img col-sm-2" />} */}

                            {/* <img src={book.volumeInfo.imageLinks.thumbnail ? (book.volumeInfo.imageLinks.thumbnail) : ("https://www.tiffanyjonesre.com/assets/images/image-not-available.jpg")} className="img" /> */}

                            <img src="https://www.tiffanyjonesre.com/assets/images/image-not-available.jpg" className="img col-sm-2" />

                            {book.volumeInfo.description ? <p className="col-sm-10">{book.volumeInfo.description}</p> : <p className="col-sm-10"><i>No description available</i></p>}

                        </div>
                    </div>
                ))}
            </div>
        </>











    )
}

export default Saved;