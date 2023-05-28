import "./body.css"
import cupski from "./images/cup.png"
import iroh from "./images/irohclip1.mp4"




export default function body() {
  return( 
     <>
  
   {/*} <div class="mainbody">
          <img src="../src/images/lotus.jpg"></img>
      </div>
  */}
  <div className="main">
  <video src= {iroh} className="IrohVideo" autoPlay loop muted />
      <div class="button">
      <img class="cupski" src={cupski} ></img>
          
            POETRY IN MOTION
      </div>
      </div>
      
     
          </>
  )

}

