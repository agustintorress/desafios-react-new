import React, { useState, useEffect } from 'react'
import ItemDetail from './ItemDetail'

const objeto = { id: 1, pictureUrl: "https://cdn-amdgk.nitrocdn.com/leNGTWZgXPSVSbgccNgBwOvPbPUrxtAA/assets/static/optimized/rev-f02a627/wp-content/uploads/2021/12/suscripcion.png", title: "Pablo Facherito" };

const ItemDetailContainer = () => {
    const [data, setData] = useState({});

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(objeto);
            }, 3000);
        });

        getData.then(res => setData(res))
    }, [])

    return (
        <ItemDetail data={data} />
    )
}

export default ItemDetailContainer