import React, {useEffect} from "react";
// import Stock from "./Stock";

function StockContainer({ stocks }) {

//  function handleClick(e) {
//   e.preventDefault()

//   fetch()
//  }
  
  return (
    <div>
      <h2>Stocks</h2>
      {stocks.map((stock) => {
        return <div key={stock.id} className="card">
          <div className="card-body">
            <h5 className="card-title">{stock.name}</h5>
            <p className="card-text">{stock.ticker}: {stock.price}</p>
          </div>
        </div>
      })}
    </div>
  );
}

export default StockContainer;
