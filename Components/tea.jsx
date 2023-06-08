import React from "react";
import Body from "./body"
import Sokka from "../src/images/sokka.mp4"
import "./tea.css"
import Nav from "./navbar"

export default function Tea() {
  return (
    <>
    <Nav/>
    <div class="all">
    <div class="sokka"> 
    <video src= {Sokka} className="SokkaVid" autoPlay loop muted />

    </div>
  
    </div>
    <div className="After">
    <h1>That's Right, I'm Sokka, It's Pronounced With An 'Okka,' 
      Young Ladies, I Rocked Ya!"
      That's Right, I'm Sokka, It's Pronounced With An 'Okka,' Young Ladies, I Rocked Ya!"
      That's Right, I'm Sokka, It's Pronounced With An 'Okka,' Young Ladies, I Rocked Ya!"</h1>
    </div>
 
    </>
  )
}
