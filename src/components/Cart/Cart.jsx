import React, { useContext } from 'react'
import Context from '../../context/CartContext'
import { BsTrash3Fill } from "react-icons/bs";
import { Link } from 'react-router-dom';

const Cart = () => {

    const { cart, removeItem, clearCart, getTotal } = useContext(Context)
    console.log(cart)

    return (
        <>
            <span className="d-block p-2 text-bg-primary" style={{ textAlign: 'center' }}>Carrito de compra</span>
            <div className='container'>
                {
                    cart.length === 0
                        ? <Link to={'/'}>
                            <figure className="figure" style={{ marginLeft: '400px' }}>
                                <img src="../img/CarritoVacio.jpg" className="figure-img img-fluid rounded" alt="..." style={{ height: '400px' }} />
                                <figcaption className="figure-caption text-end">Tu carrito aún esta vacio</figcaption>
                            </figure>
                        </Link>
                        : <table className="table table-hover ">
                            <thead className='table-group-divider table-primary'>
                                <tr>
                                    <th scope="col">Nombre</th>
                                    <th scope="col">Cantidad</th>
                                    <th scope="col">Precio</th>
                                    <th scope="col">SubTotal</th>
                                    <th scope="col"></th>
                                </tr>
                            </thead>
                            <tbody className="table-group-divider table-hover">
                                {
                                    cart.map((prod) => (
                                        <tr key={prod.id}>
                                            <td>{prod.nombre}</td>
                                            <td>{prod.quantity}</td>
                                            <td>$ {new Intl.NumberFormat('de-DE').format(prod.precio)}</td>
                                            <td>$ {new Intl.NumberFormat('de-DE').format(prod.precio * prod.quantity)}</td>
                                            <td><button className="btn btn-primary" onClick={() => removeItem(prod.id)}><BsTrash3Fill /></button></td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                            <tfoot className="table-group-divider table-primary">
                                <tr>

                                    <th><button className="btn btn-outline-primary" onClick={() => clearCart()}>Vaciar Carrito</button></th>
                                    <th></th>
                                    <th></th>
                                    <th>$ {new Intl.NumberFormat('de-DE').format(getTotal())}</th>
                                    <th></th>

                                </tr>
                            </tfoot>

                        </table >
                }
            </div>
        </>
    )
}

export default Cart
