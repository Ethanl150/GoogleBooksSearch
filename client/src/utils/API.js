import axios from "axios";
import key from "./key"

export default {
  getBooks: query => {
    return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + query + "&key=" + key.APIKEY);
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
