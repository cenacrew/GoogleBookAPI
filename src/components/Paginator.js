import React, { useState, useEffect } from 'react';
import BookList from './BookList';

const Paginator = ({ author, startIndex, setStartIndex }) => {
  const [totalItems, setTotalItems] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    if (author) {
      fetch(`https://www.googleapis.com/books/v1/volumes?q=inauthor:${author}&startIndex=${startIndex}&maxResults=10`)
        .then(response => response.json())
        .then(data => {
          const totalItems = data.totalItems || 0;
          setTotalItems(totalItems);
        })
        .catch(error => {
          console.error(error);
          setTotalItems(0);
        });
    }
  }, [author, startIndex]);

  useEffect(() => {
    const currentPage = Math.ceil(startIndex / 10) + 1;
    setCurrentPage(currentPage);
  }, [startIndex]);

  const handlePrevious = () => {
    setStartIndex(Math.max(startIndex - 10, 0));
  };

  const handleNext = () => {
    setStartIndex(startIndex + 10);
  };

  const disableNextButton = startIndex + 10 >= totalItems;

  const totalPages = Math.ceil(totalItems / 10);

  return (
    <>
      <BookList author={author} startIndex={startIndex} />
      <footer>
        <button disabled={startIndex === 0} onClick={handlePrevious}>
          Previous
        </button>
        <div>
          {`Page ${currentPage} of ${totalPages}`}
        </div>
        <button disabled={disableNextButton} onClick={handleNext}>
          Next
        </button>
      </footer>
    </>
  );
};

export default Paginator;
