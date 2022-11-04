import React from "react";
import mountain from "../Image/mountain.png"
import cloud from "../Image/cloud2.png"

function Home(){
    return <div className="top-container">
        <img className="top-cloud" src={cloud} alt="cloud"></img>
        <h1>I'm Apeksha</h1>
        <h2 id="des" >A coder & Developer</h2>
        <img className="bottom-cloud" src={cloud} alt="cloud"></img>
        <img className="mt" src={mountain} alt="mountain"></img>
    </div>
}
export default Home;