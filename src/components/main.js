import React from "react";
import Profile from "./profile";
import Skill from "./skill";
import Contact from "./contact";
import skill_List from "../skillsList";
console.log(skill_List[0].name)

function Main(){
    return <div className="middle-container">
    <Profile/>
    <hr/>
    <div className="skills">
      <h2>My Skills.</h2>
      
    
    {skill_List.map(skill=>{return <Skill key={skill.id} id={skill.id} skillname={skill.name} desc={skill.desc} img={skill.img}/>})}


    </div>
    <hr/>
    <Contact/>
    </div>
}
export default Main;