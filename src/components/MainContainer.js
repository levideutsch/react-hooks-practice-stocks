import React from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";
import { useEffect, useState } from "react";

function MainContainer() {

const [data, setData] = useState([])

// Rendering all stocks
  useEffect(() => {
    fetch("http://localhost:3001/stocks")
    .then((response) => response.json())
    .then((data) => setData(data))
  }, [])

  function handleBought(stock) {
    console.log("in bought list!", stock)
  }

  return (
    <div>
      <SearchBar />
      <div className="row">
        <div className="col-8">
      <StockContainer stocks={data}/>
        </div>
        <div className="col-4">
          <PortfolioContainer />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
