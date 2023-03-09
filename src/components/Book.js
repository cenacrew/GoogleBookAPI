import React from 'react';

const Book = ({ book }) => {
  const { title, authors, imageLinks, description } = book.volumeInfo;

  const truncatedDescription =
    description && description.length > 250
      ? description.substr(0, 250) + '...'
      : description;

  return (
    <div className="book">
      <h2>{title ? title : 'No title available'}</h2>
      <p>by {authors ? authors.join(', ') : 'Unknown author'}</p>
      {imageLinks && imageLinks.thumbnail ? (
        <img src={imageLinks.thumbnail} alt={title} />
      ) : (
        <p>No Image</p>
      )}
      {truncatedDescription ? (
        <p>{truncatedDescription}</p>
      ) : (
        <p>No description available</p>
      )}
    </div>
  );
};

export default Book;
