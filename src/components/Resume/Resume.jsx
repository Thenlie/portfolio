import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';
import PDF from './resume.pdf';

function Resume() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  function changePage(offset) {
    setPageNumber(prevPageNumber => prevPageNumber + offset);
  }

  function previousPage() {changePage(-1)}
  function nextPage() {changePage(1)}

  return (
    <>
        <p className='my-2 text-center'>You can also view and download my resume on <a href='https://docs.google.com/document/d/1WIhRvkGBx_Na3KBbDt7rj2FpzR6Nu42luJl0uBDsOYw/edit?usp=sharing' target={"_blank"} rel="noreferrer">Google Drive</a>.</p>
        <Document file={PDF} onLoadSuccess={onDocumentLoadSuccess}>
            <Page pageNumber={pageNumber} />
        </Document>
        <div className='text-center mb-3'>
            <p>
                Page {pageNumber || (numPages ? 1 : '--')} of {numPages || '--'}
            </p>
            <button className='m-1 btn btn-secondary' type="button" disabled={pageNumber <= 1} onClick={previousPage}>
                Previous
            </button>
            <button className='m-1 btn btn-secondary' type="button" disabled={pageNumber >= numPages} onClick={nextPage}>
                Next
            </button>
      </div>
    </>
  );
}

export default Resume;