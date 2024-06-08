import React, { useState } from 'react'
import { BsDisplay } from 'react-icons/bs'

const ItemCount = ({stock}) => {

    const [contador, setContador] = useState(1)
    

    const incrementar = () => {
        contador < stock && setContador(contador + 1)
    }
    const decrementar = () => {
        contador > 1 && setContador(contador - 1)
    }


    return (
        <>
            <button className='btn btn-primary' onClick={ () => incrementar()}>+1</button>
            <span style={{margin:'5px'}} >{contador}</span>
            <button className='btn btn-primary' style={{marginRight:'15px'}} onClick={ () => decrementar(1)}>-1</button>
        </>
    )
}

export default ItemCount
