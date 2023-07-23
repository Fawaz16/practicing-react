import React from "react";
import styled from "styled-components";
import { Services } from "./Services";

export const Content = () => {
  return (
    <Container>

  {flags.map((country)=>{
    return(
      <p>{country.name}</p>
    )
  })}


      <h2>Anything delivered</h2>
      <div className="Flex-item">
      <Services title="Your city's top restaurants" text="With a great variety of restaurants you can order your favourite food or explore new restaurants nearby!" banner="https://res.cloudinary.com/glovoapp/image/fetch/f_svg,q_auto:low,h_136,w_170/https://glovoapp.com/images/why-glovo/restaurants.svg"/>
      <Services title="Fast delivery" text="Like a flash! Order or send anything in your city and receive it in minutes" banner="https://res.cloudinary.com/glovoapp/image/fetch/f_svg,q_auto:low,h_136,w_170/https://glovoapp.com/images/why-glovo/delivery.svg" />
      <Services title="Groceries delivery and more" text="Find anything you need! From supermarkets to shops, pharmacies to florists — if it's in your city order it and receive it." banner="https://res.cloudinary.com/glovoapp/image/fetch/f_svg,q_auto:low,h_136,w_170/https://glovoapp.com/images/why-glovo/groceries.svg"/>
      </div>
      <button>Get started</button>
    </Container>
  );
};



const flags = [
  { name: "United States", population: 331002651, capital: "Washington, D.C." },
  { name: "Canada", population: 37742154, capital: "Ottawa" },
  { name: "Brazil", population: 213993437, capital: "Brasília" },
  { name: "Australia", population: 25499884, capital: "Canberra" },
  { name: "Germany", population: 83783942, capital: "Berlin" },
  { name: "India", population: 1393409038, capital: "New Delhi" },
  { name: "China", population: 1444216107, capital: "Beijing" },

]




let Container = styled.section`
  h2 {
    text-align: center;
    margin-bottom:50px;
  }

  .Flex-item{
    display:flex;
    
    text-align:center;
    max-width:1200px;
    margin:0 auto;
  }
`;
