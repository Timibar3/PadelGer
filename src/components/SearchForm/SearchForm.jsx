import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const SearchForm = () => {

    const [formState, setFormState] = useState('')
    const navigate = useNavigate()

    const onInputChange = ({ target }) => {
        const { name, value } = target
        setFormState({
            ...formState,
            [name]: value
        })
    }

    const onSubmit = (e) => {
        e.preventDefault()
        if (formState.buscador != undefined && formState.buscador != '') {
            navigate(`/resultado/${formState.buscador}`)
        }
    }

    return (
        <>
            <form className="d-flex" role="search" onSubmit={onSubmit} style={{ marginLeft: '90px' }}>
                <input className="form-control me-2" type="search" placeholder="Buscador" aria-label="Search" name='buscador' onChange={onInputChange} />
                <button className="btn btn-outline-success" type="submit">Buscar</button>
            </form>
        </>
    )
}

export default SearchForm
