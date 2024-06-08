import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'


const ItemDetail = ({producto}) => {
    

    return (
        <div className="card" style={{width: '35rem', height:'530px', marginBottom: '15px', marginTop: '5px'}}>
            <img src={`../img/${producto.img}`} style={{height:'20rem', objectFit: 'cover'}} className="card-img-top" alt="No Sale" />
                <div className="card-body">
                    <Link className="card-title fs-6 fw-semibold" style={{textAlign: 'center'}}>{producto.nombre}</Link>
                    <p className="text-xxl-center fs-5 fw-semibold">$ {new Intl.NumberFormat('de-DE').format(producto.precio)}</p>
                    <p>{producto.descripcion}</p>
                    <ItemCount stock={producto.stock}/>
                    <a href="#" className="btn btn-outline-primary">Comprar</a>
                </div>
        </div>
    )
}

export default ItemDetail