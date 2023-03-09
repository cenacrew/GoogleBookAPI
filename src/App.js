import './App.css';
import React from 'react';
import BookList from './components/BookList';

function App() {

  const [author, setAuthor] = React.useState('');

  const handleChange = (event) => {
    setAuthor(event.target.value);
  }


  return (
    
    <div id="everything">
      <header>
        <title>Bookle</title>
      </header>
      <nav>
        <h1>API de rechercher Google</h1>
        <input type="text" placeholder="Auteur" autofocus onChange={handleChange}/>
      </nav>
      <div id="main">
      </div>
      <BookList author={author}/>
      <footer>
        <a>Previous</a>
        <a>Next</a>
      </footer>
    </div>
  )
}

export default App;
