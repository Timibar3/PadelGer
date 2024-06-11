export const productos = [
    {
        id: 1,
        nombre: "Paleta de Padel Nox ML10 Pro Cup Luxury",
        precio: 448500,
        categoria: "Paleta",
        estilo: "Control",
        origen: "Importada",
        venta: "Regular",
        stock: 5,
        descripcion:"Sistema antivibración lateral, Smartstrap, Redonda, Fiberglass 3K Silver",
        img: "PaletaPadelNoxML10ProCupLuxury.webp",
    },
    {
        id: 2,
        nombre: "Paleta De Padel Coast Cross Wind Eva",
        precio: 118500,
        categoria: "Paleta",
        estilo: "Hibrida",
        origen: "Nacional",
        venta: "Outlet",
        stock: 7,
        descripcion:"Eva soft, Fiberglass, Lagrima",
        img: "PaletaPadelCoastCrossWindEva.webp",
    },
    {
        id: 3,
        nombre: "Paleta de Padel Grow Padel Blaze",
        precio: 250400,
        categoria: "Paleta",
        estilo: "Pegada",
        origen: "Nacional",
        venta: "Regular",
        stock: 9,
        descripcion:"Diamante, Carbono 12K, Black eva",
        img: "PaletaPadelGrowPadelBlaze.webp",
    },
    {
        id: 4,
        nombre: "Paleta de Padel Siux Snake",
        precio: 360000,
        categoria: "Paleta",
        estilo: "Control",
        origen: "Importada",
        venta: "Regular",
        stock: 12,
        descripcion:"Eva soft, Fibra de vidrio con refuerzos de carbono en tubulares, Forma Hibrida, Balance medio alto",
        img: "PaletadePadelSiuxSnake.webp",
    },
    {
        id: 5,
        nombre: "Paleta De Padel Vince Imperium Roja",
        precio: 560000,
        categoria: "Paleta",
        estilo: "Híbrida",
        origen: "Importada",
        venta: "Outlet",
        stock: 12,
        descripcion:"Diamante Oversize, Balance medio alto, Carbono 12k Rugosas, Eva Soft Black densidad media",
        img: "PaletaPadelVinceImperiumRoja.webp",
    },
    {
        id: 6,
        nombre: "Pelotas Odea Tubo x 3",
        precio: 10000,
        categoria: "Pelotas",
        estilo: "",
        origen: "Nacional",
        venta: "Regular",
        stock: 42,
        descripcion:"Tubo de pelotas Odea x 3",
        img: "PelotasOdeaTubox3.webp",
    },
    {
        id: 7,
        nombre: "Pelotas Odea Tubo x 6",
        precio: 20000,
        categoria: "Pelotas",
        estilo: "",
        origen: "Importada",
        venta: "Regular",
        stock: 36,
        descripcion:"Tubo de pelotas Odea x 6",
        img: "PelotasOdeaTubox6.webp",
    },
    {
        id: 8,
        nombre: "Paleta de Padel FG Edición Carbono 12K",
        precio: 250000,
        categoria: "Paleta",
        estilo: "Pegada",
        origen: "Importada",
        venta: "Regular",
        stock: 16,
        descripcion:"Full Carbono Importado 12k - Potencia y Durabilidad Inigualables",
        img: "PaletaPadelFGEdiciónCarbono.webp",
    },
    {
        id: 9,
        nombre: "Bolso Roland Garros",
        precio: 87000,
        categoria: "Accesorios",
        estilo: "",
        origen: "Importada",
        venta: "Regular",
        stock: 6,
        descripcion:"Bolso Deportivo con amplio compartimiento Principal - Confeccionado en Tela altamente Resistente - Modelo Ultra Liviano y fácil de transportar - Tira Regulable y Desmontable ¡Ideal para tus días de deportes, viajes o paseos! Lleva tus cosas protegidas ¡El bolso más Seguro!",
        img: "BolsoRolandGarros.webp",
    },
    {
        id: 10,
        nombre: "Caramelera Sixty Overgrips lisos x 100",
        precio: 264000,
        categoria: "Accesorios",
        estilo: "",
        origen: "Nacional",
        venta: "Regular",
        stock: 6,
        descripcion:"Caramelera x 100 unidades",
        img: "Caramelerax100unidades.webp",
    },
    {
        id: 11,
        nombre: "Protector Para Paletas De Padel Dos Paredes",
        precio: 6000,
        categoria: "Accesorios",
        estilo: "",
        origen: "Nacional",
        venta: "Regular",
        stock: 76,
        descripcion:"Protector Para Paletas De Padel Dos Paredes Transparente",
        img: "ProtectorPaletasDePadelDosParedesTransparente.webp",
    },
    {
        id: 12,
        nombre: "Spray Antideslizante Shif",
        precio: 13000,
        categoria: "Accesorios",
        estilo: "",
        origen: "Nacional",
        venta: "Outlet",
        stock: 26,
        descripcion:"Maximiza el agarre y fricción en condiciones de calor, sudor y humedad",
        img: "SprayAntideslizanteShif.webp",
    },
    {
        id: 13,
        nombre: "Paleta de Padel Vince Conqueror",
        precio: 326500,
        categoria: "Paleta",
        estilo: "Hibrida",
        origen: "Importada",
        venta: "Regular",
        stock: 6,
        descripcion:"Carbono 3k Rugosas, Lagrima, Balance medio, Eva Soft Black densidad media",
        img: "PaletaPadelVinceConqueror.webp",
    },
    {
        id: 14,
        nombre: "Paleta de Padel Snauwaert Melbourne",
        precio: 326500,
        categoria: "Paleta",
        estilo: "Control",
        origen: "Importada",
        venta: "Outlet",
        stock: 11,
        descripcion:"Fibra de vidrio, Eva soft, Redonda",
        img: "PaletaPadelSnauwaertMelbourne.webp",
    },
]

export const getProductos = () => {
    return new Promise((res) => {
        setTimeout(() => {
            res(productos);
        }, 1500)
    })
}

export const getProductosCategoria = (category) => {
    return new Promise((res) => {
        const productosFiltrados = productos.filter((prod) => prod.categoria === category)
        setTimeout(() => {
            res(productosFiltrados)
        }, 1500)
    })
}

export const getPaletaEstilos = (estilo) => {
    return new Promise((res) => {
        const paletasFiltradas = productos.filter((prod) => prod.categoria === 'Paleta')
        const estilosFiltrados = paletasFiltradas.filter((pal) => pal.estilo === estilo)
        setTimeout(() => {
            res(estilosFiltrados)
        }, 1500)
    })
}

export const getPelotasOrigen = (origen) => {
    return new Promise((res) => {
        const pelotasFiltradas = productos.filter((prod) => prod.categoria === 'Pelotas')
        const origenFiltrados = pelotasFiltradas.filter((pal) => pal.origen === origen)
        setTimeout(() => {
            res(origenFiltrados)
        }, 1500)
    })
}

export const getProductosOutlet = (venta) => {
    return new Promise((res) => {
        const productosPorVenta = productos.filter((prod) => prod.venta === venta)
        setTimeout(() => {
            res(productosPorVenta)
        }, 1500)
    })
}

export const getProductoId = (id) => {
    return new Promise((res) => {
        const productosDetalle = productos.find((prod) => prod.id === parseInt(id))
        setTimeout(() => {
            res(productosDetalle)
        }, 1500)
    })
}