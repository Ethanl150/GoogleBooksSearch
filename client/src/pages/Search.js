import React, { useState } from "react";
import API from "../utils/API.js"


function Search() {

    const [books, setBooks] = useState([])
    const [search, setSearch] = useState("")

    const handleInputChange = e => {
        setSearch(e.target.value);
        console.log(search)
    }

    const handleFormSubmit = e => {
        e.preventDefault();
        API.getBooks(search)
            .then(res => {
                setBooks(res.data.items)
                console.log(res.data.items)
            })
            .catch(err => console.log(err))
    }

    const handleSave = e => {
        console.log(e.target.id)
        const savedBook = books.filter(book => book.id === e.target.id)
        // console.log(savedBook[0].volumeInfo.title)
        // console.log(savedBook[0].volumeInfo.authors.join(" & "))
        // console.log(savedBook[0].volumeInfo.infoLink)
        // console.log(savedBook[0].volumeInfo.description)
        const bookData = {
            title: savedBook[0].volumeInfo.title,
            authors: savedBook[0].volumeInfo.authors || "N/A",
            link: savedBook[0].volumeInfo.infoLink,
            description: savedBook[0].volumeInfo.description || "No description available",
            image: savedBook[0].volumeInfo.imageLinks.thumbnail || "https://www.tiffanyjonesre.com/assets/images/image-not-available.jpg"
        }
        console.log(bookData)
        API.saveBook(bookData).then(res => console.log(res)).catch(err => console.log(err))
    }

    return (
        <>
            <div className="container-fluid bg-light d-flex flex-column align-items-center">
                <h2 className="mt-4">Search for and save books of interest.</h2>
                <form className="mt-4 pb-3" onSubmit={handleFormSubmit}>
                    <label htmlFor="bookSearch">Book:</label>
                    <input type="text" id="bookSearch" name="booksearch" className="ml-3" placeholder="Search..." onChange={handleInputChange} />
                    <input type="submit" className="btn btn-warning ml-3" />
                </form>
            </div>
            <div className="container mt-5">

                {books && books.map((book, i) => (
                    <>
                        <div className="mt-5" key={i}>
                            <div className="row justify-content-between">

                                <div className="row col-sm-9 flex-column">
                                    <h1>{book.volumeInfo.title}</h1>
                                    {book.volumeInfo.authors ?
                                        <h2>{book.volumeInfo.authors}</h2> : <h2>N/A</h2>}
                                </div>

                                <div className="row col-sm-3 justify-content-end">
                                    <a href={book.volumeInfo.infoLink} target="_blank" rel="noopener noreferrer"><button className="btn btn-warning col-sm-5 mt-3">View</button></a>
                                    <button onClick={handleSave} id={book.id} className="btn btn-warning col-sm-5 ml-1 mt-3">Save</button>
                                </div>
                            </div>

                            <div className="row">

                                {book.volumeInfo.imageLinks ? <img src={book.volumeInfo.imageLinks.thumbnail} className="img col-sm-2" /> : <img src="https://www.tiffanyjonesre.com/assets/images/image-not-available.jpg" className="img col-sm-2" />}

                                {/* <img src={book.volumeInfo.imageLinks.thumbnail ? (book.volumeInfo.imageLinks.thumbnail) : ("https://www.tiffanyjonesre.com/assets/images/image-not-available.jpg")} className="img" /> */}

                                {/* <img src="https://www.tiffanyjonesre.com/assets/images/image-not-available.jpg" className="img col-sm-2" /> */}

                                {book.volumeInfo.description ? <p className="col-sm-10">{book.volumeInfo.description}</p> : <p className="col-sm-10"><i>No description available</i></p>}

                            </div>
                        </div>
                        <hr />
                    </>
                ))}
            </div>
        </>
    )
}

export default Search;









