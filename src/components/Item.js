import React from 'react'

const Item = ({ info }) => {
    return (
        <div className="row">
            <div className="col">
                <div className="card bg-dark mt-5" style={{ width: "18rem" }}>
                    <img className='card-img-top' src={info.pictureUrl} alt="" />
                    <div className="card-body">
                        <h5 className='card-title'>{info.name}</h5>
                        <hr />
                        <p className='card-text'>{info.description}</p>
                        <p>${info.price}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Item

    // < div className = 'productos card bg-dark' >
    //         <img src={info.pictureUrl} alt="" />
    //         <h5 className='card-title'>{info.name}</h5>
    //         <p>{info.description}</p>
    //         <p>${info.price}</p>
    //     </ div>