import "./home.css";
import NavBar from "../../components/navbar/NavBar";
import Feature from "../../components/feature/Feature";

import React from 'react'
import List from "../../components/list/List";

const Home = () => {
  return (
    <div className="home">
        <NavBar /> 
        <Feature type="movies"/>
        <List />
        <List />
        <List />
        <List />
        <List />
       
        
    </div>
  )
}

export default Home