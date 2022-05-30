import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
    return ( 
        <>
            <h1 className="text-3xl font-light mb-4">Menu</h1>
            <Link to="/nuevo-platillo" className="bg-blue-800 hover:bg-blue-500 incline-block mb-5 p-2 text-white uppercase font-bold">
                Agregar platillo
            </Link>
        </>
     );
}
 
export default Menu;
