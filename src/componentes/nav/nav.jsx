import React from "react";
import carrito from "../../assets/carrito.png"
import hamburguesa from "../../assets/hamburguesa.webp"
import "./nav.css";
 const Navegador = ()=>{
    return(
        <div>

 <section className="borde">
 <ul class="nav justify-content-center">
 
 <li>
 <img className="hamburguesa" src={hamburguesa} alt="wepb" />
</li>
  <li class="nav-item">
    <a class="nav-link" href="#">INICIO</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">CARTA</a>
  </li>
  <li class="nav-item">
  <a class="nav-link" href="#">CONTACTOS</a>
  </li>
  <a href=""> <li><img className="carrito" src={carrito} alt="png" /></li> </a>

</ul>
</section>

        </div>
    )
 }

export default Navegador;