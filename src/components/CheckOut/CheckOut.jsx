import React, { useContext, useState } from 'react'
import Context from '../../context/CartContext'
import { collection, addDoc, Timestamp } from 'firebase/firestore'
import { db } from '../../firebase/config'
import { useNavigate } from 'react-router-dom'



const CheckOut = () => {

    const { cart, getTotal, clearCart } = useContext(Context)
    const navigate = useNavigate()

    const [user, setUser] = useState({
        nombre: '',
        apellido: '',
        edad: '',
        email: '',
        repetirEmail: '',
        check1: ''
    })

    const updateUser = (e) => {
        setUser((user) => ({
            ...user,
            [e.target.name]: e.target.value,
        }))
    }

    const comprar = (e) => {
        e.preventDefault()
        if(!validatorForm()){
            return
        }
        const ordenCompra = {
            cliente: user,
            productos: cart,
            total: getTotal(),
            fecha: Timestamp.now()
        }

        const pedidosRef = collection(db, 'pedidos')

        addDoc(pedidosRef, ordenCompra)
            .then((doc) => {
                clearCart()
                navigate(`/checkout/${doc.id}`)
            })
            .catch((error) => console.error(error))
    }

    const [ error, setError ] = useState()

    const validatorForm = () => {

        const errors = {}

        if(!user.nombre){
            errors.nombre = 'Tienes que agregar un nombre'
        }else if(user.nombre.length < 4){
            errors.nombre = 'El nombre debe tener al menos 4 caracteres'
        }       
        if(!user.apellido){
            errors.apellido = 'Tienes que agregar un apellido'
        }else if(user.apellido.length < 4){
            errors.apellido = 'El apellido debe tener al menos 4 caracteres'
        }
        if(user.edad < 18){
            errors.edad = 'Debes tener al menos 18 años para poder comprar en la tienda'
        }
        if(user.check1 != 'on'){
            errors.check1 = 'Debes aceptar nuestro términos y condiciones'
        }
        if(!user.email){
            errors.email = 'Tienes que agregar un Email'
        }else if(!/\S+@\S+\.\S+/.test(user.email)) // Templates Literals
            {
            errors.email = ' Debes colocar un Email válido'
        }
        if(user.email != user.repetirEmail){
            errors.repetirEmail = 'El campo repetir Email no coincide'
        }

        setError(errors)
        return Object.keys(errors).length === 0
    }

    return (
        <div className='container' style={{ marginTop: '15px', width: '40%', minWidth: '400px' }}>
                <form onSubmit={comprar} className='needs-validation'>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" name="nombre" placeholder="Nombre" onChange={updateUser} />
                        <label htmlFor="floatingInput">Nombre</label>
                        <span className="form-text text-danger">{error?.nombre}</span>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" name="apellido" placeholder="Apellido" onChange={updateUser} />
                        <label htmlFor="floatingInput">Apellido</label>
                        <span className="form-text text-danger">{error?.apellido}</span>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="number" className="form-control" name="edad" placeholder="edad" onChange={updateUser} />
                        <label htmlFor="floatingInput">Edad</label>
                        <span className="form-text text-danger">{error?.edad}</span>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" name="email" placeholder="Email" onChange={updateUser} />
                        <label htmlFor="floatingInput">Email</label>
                        <span className="form-text text-danger">{error?.email}</span>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" name="repetirEmail" placeholder="Repetir Email" onChange={updateUser} />
                        <label htmlFor="floatingInput">Repetir Email</label>
                        <span className="form-text text-danger">{error?.repetirEmail}</span>
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" name="check1" onChange={updateUser} />
                        <label className="form-check-label" htmlFor="check1">Acepta términos y condiciones</label>
                        <br />
                        <span className="form-text text-danger">{error?.check1}</span>
                    </div>
                    <button type="submit" className="btn btn-primary">Finalizar compra</button>
                </form>
            </div>
    )
}

export default CheckOut
