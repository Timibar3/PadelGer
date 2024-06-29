import React, { useState } from 'react'



const ItemCount = ({stock, onAdd}) => {

    const [contador, setContador] = useState(1)
    

    const incrementar = () => {
        contador < stock && setContador(contador + 1)
    }
    const decrementar = () => {
        contador > 1 && setContador(contador - 1)
    }


    return (
        <div>
            <button className='btn btn-primary' onClick={ () => incrementar()}>+1</button>
            <span style={{margin:'5px'}} >{contador}</span>
            <button className='btn btn-primary' style={{marginRight:'15px'}} onClick={ () => decrementar(1)}>-1</button>
            <button className="btn btn-outline-primary" onClick={() => onAdd(contador)}>Comprar</button>
        </div>
    )
}

export default ItemCount
