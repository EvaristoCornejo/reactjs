import Itemcount from "../itemcount/itemcount";
import React from "react";


export const itemilistcointainer = ()=>{

const onAdd = (valor)=>{

console.log('compraste ${valor} unidades');
}


return(
    
     <Itemcount initial={1} stock={5} onAdd={onAdd}/>
    
);


}

export default itemilistcointainer;