import React, { useState, useEffect } from 'react'
import ItemList from './ItemList';
import ItemCount from '../components/ItemCount'

const productos = [
    {
        id: 1,
        name: "Microondas",
        description: "Cansado de tener hambre a las 6 am, y nada mas hay guiso frio? Tranquilo, con el nuevo microondas 5890 podras calentar ese guiso de lentejas en segundos!!!WOOOOOOOW",
        price: 20000,
        pictureUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVE_mHzHkd1npxmQvoIANf5FvwUY0-McJMRQ&usqp=CAU"
    },
    {
        id: 2,
        name: "Esponja",
        description: "Quién vive en una piña debajo del mar. ¡¡Bob Esponja!! Su cuerpo amarillo absorbe sin más. ¡¡Bob Esponja!!",
        price: 350,
        pictureUrl: "https://pbs.twimg.com/media/Evpd5BdXcAUsVRe.jpg"
    },
    {
        id: 3,
        name: "Pistola de agua",
        description: "Con esta sale agua, la bala se la trago el brazuca que esta en cana!",
        price: 15000,
        pictureUrl: "https://m.media-amazon.com/images/I/41IBO-zSTDL.jpg"
    },
];


const ItemListContainer = ({ greeting }) => {
    const [data, setData] = useState([]);
    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(productos);
            }, 3000);
        });
        getData.then(res => setData(res))


    }, [])

    const onAdd = (cantidad) => {
        console.log(`Se agrego ${cantidad} al carrito`)
    }

    return (
        <>
            <h1>¡{greeting}!</h1>
            <ItemCount stock={5} initial={1} onAdd={onAdd} />
            <ItemList data={data} />
        </>

    )
}

export default ItemListContainer