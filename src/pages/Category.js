import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

const Category = () => {
  return (
    <React.Fragment>
      <h2>Halaman Category</h2>
      <ul>
        <li>
          <Link to="foods">Foods</Link>
        </li>
        <li>
          <Link to="drinks">Drinks</Link>
        </li>
      </ul>
      <hr />
      <Routes>
        <Route
          path="foods"
          element="List of foods: bakso, sate, soto, dll"
        />
        <Route
          path="drinks"
          element="List of drinks: air mineral, es teh, kopi, dll"
        />
      </Routes>
    </React.Fragment>
  );
};

export default Category;
