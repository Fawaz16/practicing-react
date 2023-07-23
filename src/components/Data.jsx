import React from "react";
import { styled } from "styled-components";
import { Crpto } from "./Crypto";

const data = [
  {
    name: "Bitcoin",
    price: "$32,500",
    chart: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/800px-Bitcoin.svg.png",
    change: "+5.23%",
    marketCap: "$610B",
  },
  {
    name: "Ethereum",
    price: "$2,200",
    chart: "https://example.com/ethereum_chart.png",
    change: "-3.12%",
    marketCap: "$250B",
  },
  {
    name: "Cardano",
    price: "$1.30",
    chart: "https://example.com/cardano_chart.png",
    change: "+1.75%",
    marketCap: "$42B",
  },
  {
    name: "Ripple",
    price: "$0.70",
    chart: "https://example.com/ripple_chart.png",
    change: "-1.50%",
    marketCap: "$32B",
  },
  {
    name: "Polkadot",
    price: "$18",
    chart: "https://example.com/polkadot_chart.png",
    change: "+2.34%",
    marketCap: "$16B",
  },
  {
    name: "Litecoin",
    price: "$140",
    chart: "https://example.com/litecoin_chart.png",
    change: "-0.90%",
    marketCap: "$9B",
  },
  {
    name: "Chainlink",
    price: "$22",
    chart: "https://example.com/chainlink_chart.png",
    change: "+3.75%",
    marketCap: "$8B",
  },
  {
    name: "Stellar",
    price: "$0.30",
    chart: "https://example.com/stellar_chart.png",
    change: "-2.10%",
    marketCap: "$7B",
  },
  {
    name: "Cardano",
    price: "$0.50",
    chart: "https://example.com/cardano_chart.png",
    change: "+1.25%",
    marketCap: "$6B",
  },
  {
    name: "Filecoin",
    price: "$60",
    chart: "https://example.com/filecoin_chart.png",
    change: "-0.25%",
    marketCap: "$5B",
  },
];

export const Data = () => {
  return (
    <Wrap>
      <table>
        <table>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Price</th>
            <th>Chart</th>
            <th>Change</th>

            <th>Trade</th>
          </tr>
          {data.map((item, index) => (
            <tr key={index}>
              {/* Serial Numbers */}
              <td>{index + 1}</td>

              {/* Name */}
              <td>
                <div className="name_section">
                  <img src={item.chart} alt="" />
                  <h4> {item.name}</h4>
                  <small>BTC</small>
                </div>
              </td>

              {/* Price */}
              <td>{item.price}</td>

              {/* Change */}
              <td>hello</td>

              {/* Chart */}
              <td>
                <img
                  src="https://docs.streamlit.io/images/api/area_chart.jpg"
                  alt=""
                />
              </td>

              <td>
                <button>Trade</button>
              </td>
            </tr>
          ))}
        </table>
      </table>
    </Wrap>
  );
};

let Wrap = styled.section`
  table {
    width: 100%;
  }
  .name_section{
    img{
      
    }
  }
`;
