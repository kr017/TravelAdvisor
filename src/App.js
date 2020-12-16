import React from "react";
import { useState } from "react";
import "./styles.css";
import { travelList } from "./data";

export default function App() {
  const travelCategory = Object.keys(travelList);
  const [selectedCategory,setSelectedCategory]=useState("historic");  

  function handleCategoryClick(params) {
    //debugger
    setSelectedCategory(params);
  }
  //const completeList = data.travelList;

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <div className="category-container">
      {travelCategory.map((cat) => {
        return (
          <div className="item-container" onClick={()=>{handleCategoryClick(cat)}}>
            <span key={cat} >{cat}</span>
            
          </div>
        );
        
      })}
      </div>
    
      <div className="list-item">
      {travelList[selectedCategory].map((item) => {
          return (
            <div className="" key={item.name}>
              {item.name}

            </div>
          )
        })

      }


      </div>
    
    
    </div>
  );
}
