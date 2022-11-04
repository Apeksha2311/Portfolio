import React from "react";



function Skill(props){
   
    return <div className="skill-row">
          <img className={props.id %2 !== 0 ? "skill-logo":"skill-logor"} src={props.img} alt=""></img> 
        <h3>{props.skillname}</h3>
        <p>{props.desc}</p>
             </div>
      
    
}
export default Skill;