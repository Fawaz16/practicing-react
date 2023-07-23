
import React from 'react'
import styled from "styled-components"

export const Services = ({title,text,banner}) => {
  return (
    <Third >
      
        <img src={banner} alt="" />
        <h3>{title}</h3>
        <p>{text}</p>
       
    </Third>
  )

}

let Third = styled.section`

`


