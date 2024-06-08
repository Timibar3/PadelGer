import React from 'react'
import Item from '../Item/Item'

const ItemList = ({ productos }) => {
    return (
        <div className="container" style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
            {productos.map((el) => {
                return (
                    <span key={el.id}>
                        <Item {...el}/>
                    </span>
                )
                
            })}
        </div>
    )
}

export default ItemList
