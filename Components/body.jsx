import "./body.css"
import cupski from "../src/images/cup.png"
import iroh from "../src/images/irohclip1.mp4"
import Nav from "./navbar"
import { Link } from 'react-router-dom'

export default function body() {
  return( 
     <>
     <Nav/>
    
   {/*} <div class="mainbody">
          <img src="../src/images/lotus.jpg"></img>
      </div>
  */}
  <div className="main">
  <video src= {iroh} className="IrohVideo" autoPlay loop muted />
      <div class="button">
      <img class="cupski" src={cupski}></img>
          
            POETRY IN MOTION
      </div>
      <div> 
          <Link to="/">Home</Link>
        </div>
     
      </div>
      
      
   
          </>
  )

}
