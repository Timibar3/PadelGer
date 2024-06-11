import React, { useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList'
import { getProductos, getProductosCategoria, getPaletaEstilos, getPelotasOrigen, getProductosOutlet } from '../../data/asyncData'
import { useParams } from 'react-router-dom'
import { PuffLoader } from 'react-spinners'

const ItemListContainer = ({greetings}) => {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()
    const { estiloId } = useParams()
    const { origenId } = useParams()
    const { outlet } = useParams()

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
