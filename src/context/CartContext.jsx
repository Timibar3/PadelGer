import React, { createContext, useState } from 'react'

const Context = createContext()

export const CartContextProvider = ({ children }) => {

    const [ cart, setCart] = useState([])

    const isInCart = (id) => {
        return cart.some((prod) => prod.id === id)
    }

    const addItem = (productToAdd, quantity) => {
        const newItem = {
            ...productToAdd,
            quantity
        }
        
        if (isInCart(newItem.id)) {
            const updateQuantity = cart.map((prod) => {
                if(prod.id === newItem.id) {
                    prod.quantity = prod.quantity + newItem.quantity
                }
                return prod
            })
            setCart(updateQuantity)
        }else{
            setCart([...cart, newItem])
        }
    }

    const removeItem = (id) => {
        const updateCart = cart.filter((prod) => prod.id !== id)

        setCart(updateCart)
    }

    const clearCart = () => {
        setCart([])
    }

    const getTotal = () => {
        return cart.reduce((acc, item) => acc + item.precio * item.quantity, 0)
    }
    console.log(cart)
    return (
        <Context.Provider value={{cart, setCart, addItem, removeItem, clearCart, getTotal}}>
            {children}
        </Context.Provider>
    )
}

export default Context
