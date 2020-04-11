import axios from "axios";

export default {
  getBooks: query => {
    return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + query + "&key=AIzaSyAvmwvkjISmyWsCd0ug0DpPu655wYPyGSY");
  },
  getSavedBooks: function() {
    return axios.get("/api/books");
  },
  saveBook: bookData => {
    return axios.post("/api/books", bookData);
  },
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  }
  
};
