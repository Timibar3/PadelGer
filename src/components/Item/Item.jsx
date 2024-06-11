import React, { useContext } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'
import Context from '../../context/CartContext'


const Item = ({img, nombre, precio, stock, id}) => {
    
    const { addItem } = useContext(Context)

    return (
        <div className="card" style={{width: '18rem', height:'410px', marginBottom: '15px', marginTop: '5px'}}>
            <img src={`../img/${img}`} style={{height:'15rem', objectFit: 'cover'}} className="card-img-top" alt="No Sale" />
                <div className="card-body" style={{alignItems:'center'}}>
                    <Link className="card-title fs-6 fw-semibold" style={{textAlign: 'center'}} to={`/detalle/${id}`}>{nombre}</Link>
                    <p className="text-xxl-center fs-5 fw-semibold">$ {new Intl.NumberFormat('de-DE').format(precio)}</p>
                    <ItemCount stock={stock}/>
                    <button className="btn btn-outline-primary" onClick={addItem}>Comprar</button>
                </div>
        </div>
    )
}

export default Item
