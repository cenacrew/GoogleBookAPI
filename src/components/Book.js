import React from 'react';

const Book = ({ book }) => {
  const { title, authors, imageLinks, description } = book.volumeInfo; 

  const truncatedDescription = // Truncate description to 250 characters
    description && description.length > 250   
      ? description.substr(0, 250) + '...'  
      : description;  

  return (
    <div className="book">
      <a target="_blank" href={book.volumeInfo.previewLink}><h2>{title ? title : 'Pas de titre disponible'}</h2></a> 
      <p>Par {authors ? authors.join(', ') : 'Auteur inconnu'}</p> 
      {imageLinks && imageLinks.thumbnail ? ( 
        <img src={imageLinks.thumbnail} alt={title} /> // Display thumbnail if available
      ) : (
        <svg version="1.1" id="Layer_1"x="0px" y="0px" width="240px" viewBox="885.267 97.026 595.28 468.967" enable-background="new 885.267 97.026 595.28 468.967">
          <g>
            <path d="M1188.817,560.994c-44.025,0-61.375-26.134-67.799-41.713l-1.275-3.094H890.267V102.026h227.617 c25.866,0,50.33,11.359,67.118,31.164l3.814,4.5l3.814-4.5c16.785-19.805,41.249-31.164,67.119-31.164h215.797v414.161h-214.461 l-1.368,2.814C1252.097,534.684,1232.751,560.994,1188.817,560.994z M924.359,461.216h161.012c38.599,0,77.485,1.203,91.863,15.58 l8.535,8.536V208.015c0-43.675-26.646-71.896-67.885-71.896H924.359V461.216z M1259.75,136.119 c-29.714,0-53.889,24.178-53.889,53.896v288.317l8.535-8.536c7.523-7.523,20.068-8.949,40.587-8.949 c4.835,0,10.116,0.079,15.707,0.163c6.464,0.097,13.79,0.206,21.569,0.206h149.193V136.119H1259.75z"/>
          </g>
          <polygon points="1194.779,166.807 1200.112,504.807 1218.779,504.807 1250.779,480.14 1450.112,490.14 1450.112,120.14 1233.446,132.14 1198.779,151.474 "/>
          <g>
            <path fill="#FFFFFF" d="M1300.061,348.398l-0.37-9.633c-1.111-18.896,5.188-38.162,21.858-58.169 c11.856-14.078,21.49-25.934,21.49-38.532c0-12.967-8.522-21.488-27.046-22.229c-12.228,0-27.048,4.446-36.681,11.115, l-12.597-40.385c13.339-7.78,35.568-15.19,61.873-15.19c48.906,0,71.136,27.046,71.136,57.798 c0,28.158-17.412,46.683-31.493,62.244c-13.707,15.19-19.265,29.64-18.895,46.313v6.669H1300.061z M1290.428,404.112 c0-19.636,13.709-33.714,32.975-33.714c20.007,0,32.974,14.078,33.345,33.714c0,19.268-13.338,33.717-33.345,33.717 C1303.766,437.829,1290.428,423.379,1290.428,404.112z"/>
          </g>
        </svg> // Display a book icon if no thumbnail is available
      )}
      {truncatedDescription ? (
        <p>{truncatedDescription}</p>
      ) : (
        <p>Pas de description disponible.</p> // Display 'Pas de description disponible.' if no description is available
      )}
    </div>
  );
};

export default Book;
