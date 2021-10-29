import React, { useState } from 'react'
import CartItem from '../componentes/CartItem'
import ProductItem from '../componentes/productItem'
import { items } from '../constantes'
import { Card } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

 const Cart = ({cart,setCart,total, setTotal}) => {
   /*  const [data, setData] = useState({
        name:"",
        tel:"",
        email:"",
        pass:""
    }) */
   
    const [nombreProducto, setNombreProducto] = useState(null)
    const [cantidad, setCantidad] = useState(1)
    const [productoEncontrado, setProductoEncontrado] = useState(null)
    const ingresar = (evento) => {
        setProductoEncontrado(null)
        evento.preventDefault()
        for (let i = 0; i < items.length; i++) {
            const item = items[i]
            
            if(item.nombre === nombreProducto) {
                setTotal(total + (cantidad*item.precio))
                setCart([
                    ...cart,
                    {
                        nombre: item.nombre,
                        cantidad:cantidad,
                        precio:item.precio,
                        color:item.color
                    }

                ])
            }

        }

    }

/*     const manejadorDeEntrada = (evento) => {
        console.log(evento.target.name);
        console.log({
            ...data,
            [evento.target.name] :evento.target.value
        });
        setData({
            ...data,
            [evento.target.name] : evento.target.value
        })
    }
 */

   
    return (
        <div className="container-fluid mx-auto">
            <h1>
                Carrito de compras
            </h1>
            <div className="row">
                <div className="col-6">
                <form onSubmit={ingresar}>
                    <div className = "row">
                        <div className = "col-3">
                        <h2> Producto </h2>
                        </div>
                        <div className = "col-3">
                            <input onChange={(evento)=>setNombreProducto(evento.target.value)} type="text" />
                        </div>  
                    </div>
                    <div className = "row">
                        <div className = "col-3">
                            <h2> Cantidad </h2>
                        </div>
                        <div className = "col-3">
                        <input onChange={(evento)=>setCantidad(evento.target.value)} type="number" />
                        </div>  
                    </div>
                    
                   
                <button>Ingresar</button>
                </form>
                    <div className = "py-2 text-light">
                        <Card.Body>
                            <Card border = "dark" bg = "warning">
                            <footer className = "row">
                                <div className = "col-6">
                                    <h1> Total: ${total} </h1>
                                </div>
                            </footer>
                                
                            </Card>
                        </Card.Body>
                    </div>
                </div>

                <div className="col-6 ">
                    {cart.map((item, index)=>(
                        <CartItem item={item} key={index} />
                    ))}
                </div>
            </div>
        </div>
    )
}
 export default Cart;