import { useState, useCallback } from "react";

import "../../styles/shoppingcart.css"

const Shoppingcart = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [cart, setCart] = useState([]);

    const deleteCartItems = useCallback((id) => {
        setCart((prevCart) => prevCart.filter((product) => product.id !== id));
    }, []);

    const totalPrice = cart.reduce((total, product) => total + product.price, 0);

    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {cart.map((product) => (
                    <tr key={product.id}>
                        <td>{product.name}</td>
                        <td>${product.price}</td>
                        <td>
                            <button className='button2' onClick={() => deleteCartItems(product.id)}>delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
            <tfoot>
                <tr>
                    <td>Total</td>
                    <td>${totalPrice}</td>
                </tr>
            </tfoot>
        </table>
    )
}

export default Shoppingcart;
