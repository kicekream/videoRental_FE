import React from "react";

const Pagination = props => {
  const { itemsCount, pageSize, onPageChange } = props;
  const pagesCount = Math.ceil(itemsCount / pageSize);

  if (pagesCount === 1) return null;

  const pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        {pages.map(page => (
          <li key={page} className="page-item">
            <a className="page-link" onClick={() => onPageChange(page)}>
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;

//I had to use Math.ceil so I would get the next number if there was a remainde in pagescount
//To get the range of pages(lines 9-12), we can use anything. I chose to use for loop
//lodash can also be used
//code for Lodash:::::::::::
//run npm install lodash
//import _ from 'lodash'
//const pages = _.range(1, pagesCount + 1)
