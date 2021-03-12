import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import pdf from '../Guide/Tevu.pdf';
import '../../Style/style.css';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Guide = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  return (
    <div className="pdfGuide">
      <Document
        file={pdf}
        onLoadSuccess={({ numPages }) => {
          setNumPages(numPages);
        }}
        loading="..."
        onLoadError={(error) => alert('Nepavyko! ')}
        error="Nepavyko pakrauti PDF failo!"
        noData="Nėra duomenų!"
      >
        {/* <Page pageNumber={pageNumber} /> */}
        {Array.apply(null, Array(numPages))
          .map((x, i) => i + 1)
          .map((page) => (
            <Page pageNumber={page} />
          ))}
      </Document>
      <p>Iš viso puslapių: {numPages}</p>
      {/* <p>
        Puslapis {pageNumber} iš {numPages}
      </p> */}
    </div>
  );
};
export default Guide;
