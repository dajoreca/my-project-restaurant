import React, {useState, useEffect, useContext} from "react";
import { Link } from "react-router-dom";
import { FirebaseContext } from '../../firebase'

import Platillo from '../ui/Platillo';

const Menu = () => {
    //definir el state para los platillos
    const [ platillos, guardarPlatillos] = useState([]);


    const { firebase } = useContext(FirebaseContext);
    //consultar la base de datos al cargar

    useEffect(() => {
        const obtenerPlatillos = async () => {
            firebase.db.collection('productos').onSnapshot(handleSnapshot);

        }
        obtenerPlatillos();
    }, []);

    //Snapshot nos permite ultilizaar la base de datos en tiempo real de firestore

    function handleSnapshot(snapshot) {
        const platillos = snapshot.docs.map(doc => {
            return{
                id: doc.id,
                ...doc.data()
            }
        });

        //almacenar resultados en el state
        guardarPlatillos(platillos);

    }

    return ( 
        <>
            <h1 className="text-3xl font-light mb-4">Menu</h1>
            <Link to="/nuevo-platillo" className="bg-blue-800 hover:bg-blue-500 incline-block mb-5 p-2 text-white uppercase font-bold">
                Agregar platillo
            </Link>
            
            {platillos.map( platillo => (
                <Platillo 
                key={platillo.id}
                platillo={platillo}
                />
            ) )}
        </>
     );
}
 
export default Menu;
