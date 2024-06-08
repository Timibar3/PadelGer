import { BrowserRouter, Routes, Route } from 'react-router-dom'

import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.jsx'
import NavBoot from './components/NavBoot/NavBoot.jsx'




function App() {
    return (
        <BrowserRouter>
            <NavBoot></NavBoot>

            <Routes>
                <Route path='/' element={<ItemListContainer greetings={'Hola Mundo!!'} />} />
                <Route path='*' element={<h1>404</h1>} />
                <Route path='/categorias/:categoryId' element={<ItemListContainer greetings={'Hola Mundo!!'}/>}/>
                <Route path='/Paleta/:estiloId' element={<ItemListContainer greetings={'Hola Mundo!!'}/>}/>
                <Route path='/Pelotas/:origenId' element={<ItemListContainer greetings={'Hola Mundo!!'}/>}/>
                <Route path='/descuento/:outlet' element={<ItemListContainer greetings={'Productos en descuento'}/>}/>
                <Route path='/detalle/:Id' element={<ItemDetailContainer/>}/>
            </Routes>
            
        </BrowserRouter>
    )
}

export default App