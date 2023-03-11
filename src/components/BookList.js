import React from 'react';
import axios from 'axios';
import Book from './Book';

export default class BookList extends React.Component { // BookList component
  constructor(props) { 
    super(props); // Call the constructor of the parent class
    this.state = { 
      books: [] // Initialize books to an empty array
    };
  }

  componentDidMount() { // Runs when the component is mounted
    this.title = document.querySelector('title'); // Get the title element
    this.title.textContent = 'Bookle'; // Set the title to 'Bookle'
    this.loadBooks();   // Load books
  }

  componentDidUpdate(prevProps) {
    if (prevProps.author !== this.props.author || prevProps.startIndex !== this.props.startIndex) { // If author or startIndex changed
      this.loadBooks(); 
    }
  }

  loadBooks() {
    const { author, startIndex } = this.props; // Get author and startIndex from props
    if (author) {
      axios.get(`https://www.googleapis.com/books/v1/volumes?q=inauthor:${author}&startIndex=${startIndex}`) 
        .then(res => { 
          const books = res.data.items || []; // If no books, set books to an empty array
          this.setState({ books }); // Set books to the books returned by the API
        })
        .catch(error => {
          console.log(error); // Log the error
          this.setState({ books: [] }); // Set books to an empty array
        });
    }
  }

  render() {
    if (!this.props.author) { // If author is empty
      return <p>Veuillez renseigner un nom d'auteur.</p>; // Return "Veuillez renseigner un nom d'auteur."
    }
    if (this.state.books.length === 0) { // If there are no books
      return <p>Aucun livre n'a cet auteur.</p>;  // Return "Aucun livre n'a cet auteur."
    }
    return (
      <ul>
        {this.state.books.map(book => 
          <Book key={book.volumeInfo.id} book={book}/> // Return a Book component
        )}
      </ul>
    )
  }
}
