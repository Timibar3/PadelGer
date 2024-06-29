import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.jsx'
import NavBoot from './components/NavBoot/NavBoot.jsx'
import { CartContextProvider } from './context/CartContext.jsx'
import Cart from './components/Cart/Cart.jsx'
import Footer from './components/Footer/Footer.jsx'
import CheckOut from './components/CheckOut/CheckOut.jsx'
import CheckOutDetail from './components/CheckOutDetail/CheckOutDetail.jsx'



function App() {
    return (
        <CartContextProvider>
            <BrowserRouter>
                <NavBoot></NavBoot>
                <Routes>
                    <Route path='/' element={<ItemListContainer greetings={'GerPadel lo mejor en el mundo del padel'} />} />
                    <Route path='*' element={<h1>404</h1>} />
                    <Route path='/notfound' element={<h1>Producto no encontrado</h1>} />
                    <Route path='/categorias/:categoryId' element={<ItemListContainer greetings={'GerPadel lo mejor en el mundo del padel'} />} />
                    <Route path='/Paleta/:estiloId' element={<ItemListContainer greetings={'GerPadel lo mejor en el mundo del padel'} />} />
                    <Route path='/Pelotas/:origenId' element={<ItemListContainer greetings={'GerPadel lo mejor en el mundo del padel'} />} />
                    <Route path='/descuento/:outlet' element={<ItemListContainer greetings={'Productos en descuento'} />} />
                    <Route path='/detalle/:Id' element={<ItemDetailContainer />} />
                    <Route path='/resultado/:resultadoId' element={<ItemListContainer greetings={'Resultados de la búsqueda: '}/>}/>
                    <Route path='/cart' element={<Cart/>} />
                    <Route path='/checkout' element={<CheckOut/>} />
                    <Route path='/checkout/:compraId' element={<CheckOutDetail/>} />
                </Routes>
                <Footer></Footer>
            </BrowserRouter>
        </CartContextProvider>
    )
}

export default App