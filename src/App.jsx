import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.jsx'
import NavBoot from './components/NavBoot/NavBoot.jsx'
import { CartContextProvider } from './context/CartContext.jsx'
import Cart from './components/Cart/Cart.jsx'


function App() {
    return (
        <CartContextProvider>
            <BrowserRouter>
                <NavBoot></NavBoot>

                <Routes>
                    <Route path='/' element={<ItemListContainer greetings={'GerPAdel lo mejor en el mundo del padel'} />} />
                    <Route path='*' element={<h1>404</h1>} />
                    <Route path='/categorias/:categoryId' element={<ItemListContainer greetings={'GerPAdel lo mejor en el mundo del padel'} />} />
                    <Route path='/Paleta/:estiloId' element={<ItemListContainer greetings={'GerPAdel lo mejor en el mundo del padel'} />} />
                    <Route path='/Pelotas/:origenId' element={<ItemListContainer greetings={'GerPAdel lo mejor en el mundo del padel'} />} />
                    <Route path='/descuento/:outlet' element={<ItemListContainer greetings={'Productos en descuento'} />} />
                    <Route path='/detalle/:Id' element={<ItemDetailContainer />} />
                    <Route path='/cart' element={<Cart/>} />
                </Routes>

            </BrowserRouter>
        </CartContextProvider>
    )
}

export default App