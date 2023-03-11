import React from 'react';
import axios from 'axios';
import Book from './Book';

export default class BookList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    };
  }

  componentDidMount() {
    this.title = document.querySelector('title');
    this.title.textContent = 'Bookle';
    this.loadBooks();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.author !== this.props.author || prevProps.startIndex !== this.props.startIndex) {
      this.loadBooks();
    }
  }

  loadBooks() {
    const { author, startIndex } = this.props;
    if (author) {
      axios.get(`https://www.googleapis.com/books/v1/volumes?q=inauthor:${author}&startIndex=${startIndex}`)
        .then(res => {
          const books = res.data.items || [];
          this.setState({ books });
        })
        .catch(error => {
          console.log(error);
          this.setState({ books: [] });
        });
    }
  }

  render() {
    if (!this.props.author) {
      return <p>Veuillez renseigner un nom d'auteur.</p>;
    }
    if (this.state.books.length === 0) {
      return <p>Aucun livre n'a cet auteur.</p>;
    }
    return (
      <ul>
        {this.state.books.map(book =>
          <Book key={book.volumeInfo.id} book={book}/>
        )}
      </ul>
    )
  }
}
