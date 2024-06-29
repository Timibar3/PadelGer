import React, { useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList'
import { useNavigate, useParams } from 'react-router-dom'
import { PuffLoader } from 'react-spinners'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../../firebase/config'



const ItemListContainer = ({greetings}) => {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()

    const { categoryId } = useParams()
    const { estiloId } = useParams()
    const { origenId } = useParams()
    const { outlet } = useParams()
    const { resultadoId } = useParams()

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
                const listado = res.docs.filter((doc) => doc.data().nombre.toLowerCase().includes(resultadoId != undefined ? resultadoId.toLowerCase() : ''))
                listado.length != 0 
                    ? setProductos(
                        listado.map((doc) => {
                            return { ...doc.data(), id: doc.id}
                        }))
                    : navigate('/notfound')              
            })
            .catch((error) => console.log(error))
            .finally(() => setLoading(false))

    },[categoryId, estiloId, origenId, outlet, resultadoId])

    return (
        <>
            <span className="d-block p-2 text-bg-primary" style={{textAlign: 'center'}}>{greetings} {resultadoId}</span>
            {
                loading
                ? <div class="d-flex justify-content-center"><PuffLoader color="#0d6efd" /></div>
                : <ItemList productos={productos}></ItemList>
            }
        </>
    )
}

export default ItemListContainer
