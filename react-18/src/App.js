import { useState, useTransition } from "react";
import "./App.css";
import ProductList from "./component/ProductList";
import generateDummyData from "./data";

const dummyData = generateDummyData();

const filterData = (inputValue) => {
  if (!inputValue) {
    return dummyData;
  }
  return dummyData.filter((product) =>
    product.toLowerCase().includes(inputValue.toLowerCase())
  );
};

function App() {
  const [inputValue, setInputValue] = useState("");
  const productData = filterData(inputValue);

  // react 18 hook
  const [isPending, startTransition] = useTransition(productData);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    // startTransition(() => {
    //   setInputValue(e.target.value);
    // });
  };

  return (
    <div className="App">
      <input value={inputValue} onChange={(e) => handleInputChange(e)} />
      {isPending && <div> Loading... </div>}
      <ProductList productData={productData} />
    </div>
  );
}

export default App;
