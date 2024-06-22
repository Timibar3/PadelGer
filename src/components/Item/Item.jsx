import React, { useContext } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'
import Context from '../../context/CartContext'
import DiscountMark from '../DiscountMark/DiscountMark'
import Swal from 'sweetalert2'




const Item = ({img, nombre, precio, stock, id, venta}) => {
    
    const onAdd = (quantity) => {
        const item = {
            id,
            nombre,
            precio
        }
        addItem(item, quantity)
        Swal.fire(`Agregaste ${quantity} productos a tu carrito`)
    }
    const { addItem } = useContext(Context)

    return (
        <div className="card" style={{width: '18rem', height:'410px', marginBottom: '15px', marginTop: '5px', boxShadow:'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px'}}>
            <img src={`../img/${img}`} style={{height:'15rem', objectFit: 'cover'}} className="card-img-top" alt="No Sale" />
                <div className="card-body" style={{alignItems:'center'}}>
                    <Link className="card-title fs-6 fw-semibold" style={{textAlign: 'center'}} to={`/detalle/${id}`}>{nombre}</Link>
                    <p className="text-xxl-center fs-5 fw-semibold">$ {new Intl.NumberFormat('de-DE').format(precio)}</p>
                    <ItemCount stock={stock} onAdd={onAdd} />
                    {venta === 'Outlet' &&  <DiscountMark></DiscountMark>}
                </div>
        </div>
    )
}

export default Item
