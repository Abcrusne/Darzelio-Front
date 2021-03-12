import React, { useState } from 'react';

const Pagination = ({ kindergartensPerPage, totalKindergartens, paginate }) => {
  const pageNumbers = [];
  //   const [buttonDisabled, setButtonDisabled] = useState(false);

  for (
    let i = 1;
    i <= Math.ceil(totalKindergartens / kindergartensPerPage);
    i++
  ) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            {/* //disabled={buttonDisabled}> */}
            <a
              onClick={
                () => paginate(number)
                //  && setButtonDisabled(true)
              }
              className="page-link"
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
