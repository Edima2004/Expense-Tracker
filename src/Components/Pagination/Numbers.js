import React from "react";

const Numbers = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav>
      <ul className="numbers">
        {pageNumbers.map((num) => (
          <li key={num}>
            <a href="!#" onClick={() => paginate(num)}>
              {num}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Numbers;
