
import { useState } from "react"
import "./itemcount.css"

 const Itemcount = ({initial, stock, onAdd})=>{

const [click, setClick] = useState(1)


const sumar = ()=>{setClick(click + 1) } 

const restar = ()=>{setClick(click - 1) } 

return(
    
    <div>
<section className="cajita">
 <button disabled ={click > stock} className="mas" onClick={sumar}>+</button>

 <p className="contador">{click}</p> 

 <button disabled ={click < 1} className="menos" onClick={restar}>-</button>
 </section>

    </div>
)
 }

export default Itemcount; 