import React, { useEffect, useState } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useNavigate, useParams } from 'react-router-dom'
import { PuffLoader } from 'react-spinners'
import { getDoc, doc } from 'firebase/firestore'
import { db } from '../../firebase/config'

const ItemDetailContainer = () => {

    const [producto, setProducto] = useState([])
    const [loading, setLoading] = useState(true)

    const { Id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {

        const docRef = doc(db, 'productos', Id)
        setLoading(true)

        getDoc(docRef)
            .then((res) => {
                if(!res.data()){
                    navigate('/*')
                }else{
                    setProducto(
                        {...res.data(), id: res.id}
                )}
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
                    ? <div className="d-flex justify-content-center"><PuffLoader color="#0d6efd" /></div>
                    : <ItemDetail {...producto}/>
                }
                
                
                

            </div>
        </>
    )
}

export default ItemDetailContainer
