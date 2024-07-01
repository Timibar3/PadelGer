import React, { useContext } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'
import DiscountMark from '../DiscountMark/DiscountMark'
import Context from '../../context/CartContext'
import Swal from 'sweetalert2'


const ItemDetail = ({img, nombre, precio, stock, venta, id, descripcion}) => {
    
    const onAdd = (quantity) => {
        const item = {
            id,
            nombre,
            precio
        }
        addItem(item, quantity)
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: `Agregaste ${quantity} productos a tu carrito`,
            showConfirmButton: false,
            timer: 1500
        })
    }
    const { addItem } = useContext(Context)
    
    return (
        <div className="card" style={{width: '35rem', height:'auto', marginBottom: '15px', marginTop: '5px', boxShadow:'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px'}}>
            <img src={`../img/${img}`} style={{height:'20rem', objectFit: 'contain'}} className="card-img-top" alt="No Sale" />
                <div className="card-body d-flex flex-column align-items-center">
                    <Link className="card-title fs-6 fw-semibold" style={{textAlign: 'center'}}>{nombre}</Link>
                    <p className="text-xxl-center fs-5 fw-semibold">$ {new Intl.NumberFormat('de-DE').format(precio)}</p>
                    <p>{descripcion}</p>
                    <ItemCount stock={stock} onAdd={onAdd} />
                </div>
                {venta === 'Outlet' &&  <DiscountMark></DiscountMark>}
        </div>
    )
}

export default ItemDetail