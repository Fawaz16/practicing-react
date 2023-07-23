import React from 'react'

export const Crpto = ({name, price , chart,change,marketcap}) => {
  return (
    <div>  
       <tr>{name}</tr>
       <tr>{price}</tr>
       <tr><img src={chart} alt="" /> </tr>
       <tr><img src={change}alt="" /> </tr>
       <tr>{marketcap}</tr>
      </div>
  )
}

// {data.map((item) => (
//     <tr key={item.name}>
//       <td>{item.name}</td>
//       <td>{item.price}</td>
//       <td><img src={item.chart}  /></td>
//       <td>{item.change}</td>
//       <td>{item.marketCap}</td>
//       <td><button>Trade</button></td>
//     </tr>
//   ))}