import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
    return ( 
            //*<link href="/dist/output.css" rel="stylesheet"></link> */}
            //* NO ES NECESARIO (LO DEJO POR SI ACASO)"link" line fix styles IMPORTANTE  

            <div className="md:w-2/5 xl:w-1/5 bg-gray-800">
                <div className="p-6">
                    <p className="uppercase, text-white text-2xl tracking-wide text-center font-bold" >RestaurantApp</p>
                    <p className="mt-3 text-gray-600">Administra tu restaurant en las siguientes opciones:</p>
                    <nav className="mt-10">
                        <NavLink className={(navData) => (navData.isActive ? "p-1 text-yellow-500 block hover:bg-yellow-300 hover:text-gray-900" : 'p-1 text-gray-400 block hover:bg-yellow-300 hover:text-gray-900') } end to="/">Ordenes</NavLink>
                        <NavLink className={(navData) => (navData.isActive ? "p-1 text-yellow-500 block hover:bg-yellow-300 hover:text-gray-900" : 'p-1 text-gray-400 block hover:bg-yellow-300 hover:text-gray-900') } end to="/menu">Menu</NavLink>
                       
                            {/* Se puede usar Link tambien, pero este tiene la opcion de destacar en un color, cuando estes en la pagina deseada */}
                    </nav>
                </div>
            </div>
       
     );
}

export default Sidebar;