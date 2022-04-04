import React from "react";
import { useDeferredValue } from "react";

const ProductList = ({ productData }) => {
  const deferredProducts = useDeferredValue(productData);
  return (
    <ul>
      {deferredProducts.map((product) => (
        <li key={product}>{product}</li>
      ))}
    </ul>
  );
};
// const ProductList = ({ productData }) => {
//   return (
//     <ul>
//       {productData.map((product) => (
//         <li key={product}>{product}</li>
//       ))}
//     </ul>
//   );
// };

export default ProductList;
