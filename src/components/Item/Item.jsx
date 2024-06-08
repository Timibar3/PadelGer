import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'


const Item = ({img, nombre, precio, stock, id}) => {
    

    return (
        <div className="card" style={{width: '18rem', height:'410px', marginBottom: '15px', marginTop: '5px'}}>
            <img src={`../img/${img}`} style={{height:'15rem', objectFit: 'cover'}} className="card-img-top" alt="No Sale" />
                <div className="card-body" style={{alignItems:'center'}}>
                    <Link className="card-title fs-6 fw-semibold" style={{textAlign: 'center'}} to={`/detalle/${id}`}>{nombre}</Link>
                    <p className="text-xxl-center fs-5 fw-semibold">$ {new Intl.NumberFormat('de-DE').format(precio)}</p>
                    <ItemCount stock={stock}/>
                    <a href="#" className="btn btn-outline-primary">Comprar</a>
                </div>
        </div>
    )
}

export default Item
