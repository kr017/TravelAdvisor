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
      <h1>Travel Advisor</h1>
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
            <>
            <div className="inner-div" key={item.name}>
            <div className="main_div">
            <img src={item.image} 
                 className="img_style"
                 alt="Image"  
            /><span>{item.name}</span> 
            </div>  
            
            
            </div>
            </>
          )
        })

      }


      </div>
    
    
    </div>
  );
}
