import React from "react";
import { random } from "../Constant/random";
import Heading from "./Heading";


export const Random = () => {
    const AboutPageHeader = () => {
        return (
          <header className="header-01">
            <Heading title="Normal Data"/>
          </header>
        );
      };
      const Stock = ({ company, ticker, stockPrice }) => {
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
                
             
              </tr>
            </tbody>
          </table>
        );
      };
    return (
      <>
        <AboutPageHeader />
        <div className="stock-container-01 pb-5">
          {random.map((data, key) => {
            return (
              <div key={key}>
                <Stock
                  key={key}
                  company={data.company}
                  ticker={data.ticker}
                  stockPrice={data.stockPrice}
                />
              </div>
            );
          })}
        </div>
      </>
    );
  };
