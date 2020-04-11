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
            })
            .catch(err => console.log(err))
    }

    const getBooks = () => {
        API.getSavedBooks()
            .then(res => {
                console.log(res.data)
                setBooks(res.data)
            })
            .catch(err => console.log(err))
    }

    return (
        <>
            <div className="container-fluid bg-light d-flex flex-column align-items-center">
                <h2 className="p-5">Saved Books</h2>
            </div>
            <div className="container mt-5">
                {books && books.map((book, i) => (
                    <>
                        <div className="mt-5">
                            <div className="row justify-content-between">
                                <div className="row col-sm-9 flex-column">
                                    <h1>{book.title}</h1>
                                    {book.authors === "N/A" ? <h2>Author N/A</h2> : <h2>By {book.authors}</h2>}
                                </div>
                                <div className="row col-sm-3 justify-content-end">
                                    <a href={book.link} target="_blank" rel="noopener noreferrer"><button className="btn btn-warning col-sm-5 mt-3">View</button></a>
                                    <button onClick={() => handleDelete(book._id)} className="btn btn-warning col-sm-5 ml-1 mt-3">Delete</button>
                                </div>
                            </div>
                            <div className="row">
                                <img src={book.image} className="img col-sm-2" />
                                {book.description === "No description available" ? <p className="col-sm-10"><i>No description available</i></p> : <p className="col-sm-10">{book.description}</p>}
                            </div>
                        </div>
                        <hr />
                    </>
                ))}
            </div>
        </>
    )
}

export default Saved;