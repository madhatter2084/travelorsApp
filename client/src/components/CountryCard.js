import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';

function CountryCard(props) {
    console.log(props.userInfo)
  return (
   
    <div>
        <h1>
            {props.userInfo.country}
        </h1>

        {props.userInfo.id}

    </div>

    // <div className="row" id="header" >
  
    //    <div className="col-sm-2 col-md-2 col-lg-2" id="img-container" >
    //       <img alt={props.name} src={props.image} />
    //        </div>

    // <div className="col-sm-2 col-md-2 col-lg-2" id ="content">
    //        {props.name}
    //         </div>
    //         <div className="col-sm-2 col-md-2 col-lg-1" id ="content1">
    //        {props.age}
    //         </div>
    //         <div className="col-sm-2 col-md-2 col-lg-3" id ="content2">
    //       {props.phone}
    //         </div>
    //         <div className="col-sm-2 col-md-2 col-lg-3" id ="content3">
    //       {props.email}
    //         </div>
               
       
    //   <span onClick={() => props.removeEmployee(props.id)} className="remove">
    //     𝘅
    //   </span>
    // </div>


  );
}

export default CountryCard;
