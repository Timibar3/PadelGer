import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { db } from '../../firebase/config'
import { getDoc, doc } from 'firebase/firestore'
import { PuffLoader } from 'react-spinners'

const CheckOutDetail = () => {

    const { compraId } = useParams()
    const [comprado, setComprado] = useState('')
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        const ordenRef = doc(db, 'pedidos', compraId)

        getDoc(ordenRef)
            .then((res) => {
                setComprado({
                    ...res.data(), id: res.id
                })
            })
            .catch((error) => console.error(error))
            .finally(() => setLoading(false))
        console.log(comprado)
    }, [])

    return (
        <>
            {
                loading
                    ? <div class="d-flex justify-content-center"><PuffLoader color="#0d6efd" /></div>
                    : <div className="container d-flex justify-content-center" style={{marginTop:'10px'}}>
                        <div className="card " style={{ width: '30rem' }}>
                            <div className="card-body d-flex flex-column align-items-center">
                                <h5 className="card-title">Felicitaciones realizaste la compra</h5>
                                <h6 className="card-title">El ID de tu compra es:</h6>
                                <p className="card-text">{compraId}</p>
                            </div>
                            <div id="carouselExample" className="carousel carousel-dark slide">
                                <div className="carousel-inner">
                                    {
                                        comprado.productos.map((prod, indice) => {
                                            return (
                                                indice == 0
                                                    ?
                                                    <div key={prod.id} className="carousel-item active">
                                                        <img src={`../img/${prod.img}`} className="d-block w-100" style={{height:'25rem', objectFit: 'cover'}} alt="Imagen no disponible" />
                                                    </div>
                                                    :
                                                    <div key={prod.id} className="carousel-item">
                                                        <img src={`../img/${prod.img}`} className="d-block w-100" style={{height:'25rem', objectFit: 'cover'}} alt="Imagen no disponible" />
                                                    </div>
                                            )
                                        })
                                    }
                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                            <div className="card-body d-flex flex-column align-items-center">
                                <h6 className="card-title">Total de la compra:</h6>
                                <p className="card-text">$ {new Intl.NumberFormat('de-DE').format(comprado.total)}</p>
                                <Link to={'/'} className="btn btn-primary">Vuelve a comprar mas productos</Link>
                            </div>
                        </div>
                    </div>
            }

        </>
    )
}

export default CheckOutDetail
