import './App.css';
import React from 'react';
import Paginator from './components/Paginator';

function App() {

  const [author, setAuthor] = React.useState('');
  const [startIndex, setStartIndex] = React.useState(0);

  const handleChange = (event) => {
    setAuthor(event.target.value);
    setStartIndex(0); // Reset startIndex to 0 when author is changed
  }


  return (
    
    <div id="everything">
      <header>
      </header>
      <nav>
        <h1>API de rechercher Google</h1>
        <input type="text" placeholder="Auteur" autoFocus onChange={handleChange}/>
      </nav>
      <div id="main">
      </div>
      <Paginator author={author} startIndex={startIndex} setStartIndex={setStartIndex} />
    </div>
  )
}

export default App;
