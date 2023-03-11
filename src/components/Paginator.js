import React, { useState, useEffect } from 'react';
import BookList from './BookList';

const Paginator = ({ author, startIndex, setStartIndex }) => {  // Pagination component
  const [totalItems, setTotalItems] = useState(0);  // Total number of items
  const [currentPage, setCurrentPage] = useState(1); // Current page number

  useEffect(() => {
    if (author) {
      fetch(`https://www.googleapis.com/books/v1/volumes?q=inauthor:${author}&startIndex=${startIndex}&maxResults=10`) // Fetch the total number of items
        .then(response => response.json())
        .then(data => {
          const totalItems = data.totalItems || 0; // If no items, set totalItems to 0
          setTotalItems(totalItems); // Set totalItems to the total number of items
        })
        .catch(error => { // If error, set totalItems to 0
          console.error(error);
          setTotalItems(0);
        });
    }
  }, [author, startIndex]); // Run when author or startIndex changes

  useEffect(() => {
    const currentPage = Math.ceil(startIndex / 10) + 1; // Calculate current page number
    setCurrentPage(currentPage); // Set current page number
  }, [startIndex]); // Run when startIndex changes

  const handlePrevious = () => { // Handle previous button click
    setStartIndex(Math.max(startIndex - 10, 0)); // Set startIndex to the previous page
  };

  const handleNext = () => { // Handle next button click
    setStartIndex(startIndex + 10); // Set startIndex to the next page
  };

  const disableNextButton = startIndex + 10 >= totalItems; // Disable next button if there are no more items

  const totalPages = Math.ceil(totalItems / 10); // Calculate total number of pages

  return (
    <>
      <BookList author={author} startIndex={startIndex} /> {/* BookList component */}
      <footer>
        <button disabled={startIndex === 0} onClick={handlePrevious}> {/* Previous button */}
          Précédent
        </button>
        <div>
          {`Page ${currentPage} of ${totalPages}`} {/* Current page number and total number of pages */}
        </div>
        <button disabled={disableNextButton} onClick={handleNext}> {/* Next button */}
          Suivant
        </button>
      </footer>
    </>
  );
};

export default Paginator;
