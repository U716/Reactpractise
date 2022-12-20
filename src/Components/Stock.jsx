import React from "react";
import { stockData } from "../Constant/data";


export const Stocks = () => {
    const InstrumentalPageHeader = () => {
        return (
          <header className="header">
            <h2>Stock Track</h2>
          </header>
        );
      };
      const Stock = ({ company, ticker, stockPrice, timeElapsed }) => {
        if (!company) return <div />;
        return (
          <table>
            <tbody>
              <tr>
                <td>
                  <h5>{company}</h5>
                </td>
                <td>
                  <h5>{ticker}</h5>
                </td>
                <td>
                  <h4>{stockPrice}</h4>
                </td>
                <td>
                  <p>{timeElapsed}</p>
                </td>
              </tr>
            </tbody>
          </table>
        );
      };
    return (
      <>
        <InstrumentalPageHeader />
        <div className="stock-container pb-5">
          {stockData.map((data, key) => {
            return (
              <div key={key}>
                <Stock
                  key={key}
                  company={data.company}
                  ticker={data.ticker}
                  stockPrice={data.stockPrice}
                  timeElapsed={data.timeElapsed}
                />
              </div>
            );
          })}
        </div>
      </>
    );
  };
