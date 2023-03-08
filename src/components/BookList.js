import React from 'react';
import axios from 'axios';

export default class BookList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.author !== this.props.author) {
      axios.get(`https://www.googleapis.com/books/v1/volumes?q=inauthor:${this.props.author}`)
        .then(res => {
          const books = res.data.items;
          this.setState({ books });
        })
    }
  }

  render() {
    return (
      <ul>
        {this.state.books.map(book =>
          <li key={book.id}>{book.volumeInfo.title}<img src={book.volumeInfo.imageLinks.thumbnail}></img></li>
        )}
      </ul>
    )
  }
}