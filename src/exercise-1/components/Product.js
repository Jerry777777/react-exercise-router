import React from 'react';
import data from '../../exercise-2/mockups/data.json';

const idToName = {
  1: 'bicycle',
  2: 'TV',
  3: 'pencil'
};

const Product = (props) => {
  const id = props.match.params.id;
  return (
    <section id={`product-${id}`} className="product">
      <h3>Product Details:</h3>
      <p>Name: {data[idToName[id]].name}</p>
      <p>Id: {data[idToName[id]].id}</p>
      <p>Price: {data[idToName[id]].price}</p>
      <p>Quantity: {data[idToName[id]].quantity}</p>
      <p>Desc: {data[idToName[id]].desc}</p>
      <p>URL: /products/{id}</p>
    </section>
  );
};

export default Product;