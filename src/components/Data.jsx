import React from 'react'
import { styled } from 'styled-components'
import { Crpto } from './Crypto'



const data = [
    { name: 'Bitcoin', price: '$32,500', chart: 'https://example.com/bitcoin_chart.png', change: '+5.23%', marketCap: '$610B' },
    { name: 'Ethereum', price: '$2,200', chart: 'https://example.com/ethereum_chart.png', change: '-3.12%', marketCap: '$250B' },
    { name: 'Cardano', price: '$1.30', chart: 'https://example.com/cardano_chart.png', change: '+1.75%', marketCap: '$42B' },
    { name: 'Ripple', price: '$0.70', chart: 'https://example.com/ripple_chart.png', change: '-1.50%', marketCap: '$32B' },
    { name: 'Polkadot', price: '$18', chart: 'https://example.com/polkadot_chart.png', change: '+2.34%', marketCap: '$16B' },
    { name: 'Litecoin', price: '$140', chart: 'https://example.com/litecoin_chart.png', change: '-0.90%', marketCap: '$9B' },
    { name: 'Chainlink', price: '$22', chart: 'https://example.com/chainlink_chart.png', change: '+3.75%', marketCap: '$8B' },
    { name: 'Stellar', price: '$0.30', chart: 'https://example.com/stellar_chart.png', change: '-2.10%', marketCap: '$7B' },
    { name: 'Cardano', price: '$0.50', chart: 'https://example.com/cardano_chart.png', change: '+1.25%', marketCap: '$6B' },
    { name: 'Filecoin', price: '$60', chart: 'https://example.com/filecoin_chart.png', change: '-0.25%', marketCap: '$5B' }
  ];
  




export const Data = () => {
  return (
    <Wrap>
    
       <table>
    {/* <thead>
      <tr className='Heading'>
        <th>Name</th>
        <th>Price</th>
        <th>Chart</th>
        <th>Change</th>
        <th>Market Cap</th>
        <th>Trade</th>
      </tr>
      <tbody className='Second'>
          <tr>
        <td>Bitcoin</td>
        <td>50%</td>
        <td>50%</td>
        <td>50%</td>
        <td>50%</td>
        <td>50%</td>
       </tr> */}
          

      {/* </tbody> */}
    {/* </thead> */}

    <table>
  <tr>
    <th>Name</th>
    <th>Price</th>
    <th>Chart</th>
    <th>Change</th>
    <th>Market-cap</th>
    <th>Trade</th>
  </tr>
  <tr>
  {data.map((item) => (
    <tr key={item.name}>
      <td>{item.name}</td>
      <td>{item.price}</td>
      <td><img src={item.chart}  /></td>
      <td>{item.change}</td>
      <td>{item.marketCap}</td>
      <td><button>Trade</button></td>
    </tr>
  ))}
  </tr>
  
</table>
    </table>
</Wrap>      
  )
}

let Wrap=styled.section`
table .Heading th{
    width:10%;
}
.Second td{
    width:100;
}
`
