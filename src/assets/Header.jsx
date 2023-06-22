import React from "react";


export default  function Header(props) {



  return ( 
    <div className="head">
      <h1>
        {props.curSeason} {props.curYear}
      </h1>
      
    </div>
  );

  
}