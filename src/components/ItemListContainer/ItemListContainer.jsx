import React, { useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { PuffLoader } from 'react-spinners'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../../firebase/config'

const ItemListContainer = ({greetings}) => {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()
    const { estiloId } = useParams()
    const { origenId } = useParams()
    const { outlet } = useParams()

    useEffect(() => {
        const productosRef = collection(db, 'productos')
        const q = categoryId ? query(productosRef, where('categoria', '==', categoryId)) 
                    : estiloId
                    ? query(productosRef, where('categoria', '==', 'Paleta'), where('estilo', '==', estiloId))
                    : origenId
                    ? query(productosRef, where('categoria', '==', 'Pelotas'), where('origen', '==', origenId))
                    : outlet
                    ? query(productosRef, where('venta', '==', 'Outlet'))
                    : productosRef
        setLoading(true)

        getDocs(q)
            .then((res) => {
                setProductos(
                    res.docs.map((doc) => {
                        return { ...doc.data(), id: doc.id}
                    })
                )
            })
            .catch((error) => console.log(error))
            .finally(() => setLoading(false))

    },[categoryId, estiloId, origenId, outlet])

/*
    useEffect(() => {
        setLoading(true)
        const dataProductos = categoryId 
                                ? getProductosCategoria(categoryId) 
                                : estiloId 
                                ? getPaletaEstilos(estiloId)
                                : origenId
                                ? getPelotasOrigen(origenId) 
                                : outlet
                                ? getProductosOutlet('Outlet')
                                : getProductos()
        dataProductos
            .then((res) => setProductos(res))
            .catch((error) => console.log(error))
            .finally(() => setLoading(false))
    },[categoryId, estiloId, origenId, outlet])
*/

    return (
        <>
            <span className="d-block p-2 text-bg-primary" style={{textAlign: 'center'}}>{greetings}</span>
            {
                loading
                ? <PuffLoader color="#0d6efd" />
                : <ItemList productos={productos}></ItemList>
            }
            
            
        </>
    )
}

export default ItemListContainer
