import React, { useEffect, useState } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useNavigate, useParams } from 'react-router-dom'
import { getProductoId } from '../../data/asyncData'
import { PuffLoader } from 'react-spinners'

const ItemDetailContainer = () => {

    const [producto, setProducto] = useState([])
    const [loading, setLoading] = useState(true)

    const { Id } = useParams()
    const navigate = useNavigate()

    useEffect (() => {
        setLoading(true)
        getProductoId(Id)
            .then((res) => {
                if(!res) {
                    navigate('/*')
                }else{
                    setProducto(res)
                }
            })
            .catch((error) => console.log(error))
            .finally(() => setLoading(false))
    },[Id])

    return (
        <>
            <span className="d-block p-2 text-bg-primary" style={{textAlign: 'center'}}>Detalle de Producto</span>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
                {
                    loading
                    ? <PuffLoader color="#0d6efd" />
                    : <ItemDetail producto={producto}/>
                }
                
                
                

            </div>
        </>
    )
}

export default ItemDetailContainer
