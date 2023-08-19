// components/ProductList.jsx



import product1 from '../../assets/p16.jpeg'
import product2 from '../../assets/p8.jpeg'
import product3 from '../../assets/p18.jpeg'
import product4 from '../../assets/p19.jpeg'
import product5 from '../../assets/p7.jpeg'
import product6 from '../../assets/p4.jpeg'
import product7 from '../../assets/p5.jpeg'
import product8 from '../../assets/p6.jpeg'
import product9 from '../../assets/p20.jpeg'
import product10 from '../../assets/p12.jpeg'
import product11 from '../../assets/p13.jpeg'
import product12 from '../../assets/p13.jpeg'
import product13 from '../../assets/p14.jpeg'
import product14 from '../../assets/p15.jpeg'


import { useState, useCallback } from "react";
import { Link } from 'react-router-dom';
import CountdownTimer from '../product/dommyCountdown'

import "../../styles/dommyCountdown.css"

const products = [

    {
        id: 1,
        name: 'Crewneck t-shirt',
        color: 'Black',
        size: 'M',
        price: 200,
        discout: "50%",
        status: "available",
        image: product1,
    },
    {
        id: 2,
        name: 'V-neck t-shirt',
        color: 'Black',
        size: 'M',
        price: 200,
        discout: "50%",
        status: "available",
        image: product2,
    },
    {
        id: 3,
        name: 'Henley t-shirt',
        color: 'Black',
        size: 'M',
        price: 200,
        discout: "50%",
        status: "available",
        image: product3,
    },
    {
        id: 4,
        name: 'Raglan t-shirt',
        color: 'Black',
        size: 'M',
        price: 200,
        discout: "50%",
        status: "available",
        image: product4,
    },
    {
        id: 5,
        name: 'Pocket t-shirt',
        color: 'Black',
        size: 'M',
        price: 200,
        discout: "50%",
        status: "available",
        image: product5,
    },
    {
        id: 6,
        name: 'Scoop neck t-shirt',
        color: 'Black',
        size: 'M',
        price: 200,
        discout: "50%",
        status: "available",
        image: product6,
    },
    {
        id: 7,
        name: 'Customizable T-Shirt 1',
        color: 'Black',
        size: 'M',
        price: 200,
        discout: "50%",
        status: "available",
        image: product7,
    },
    {
        id: 8,
        name: 'Tank top t-shirt',
        color: 'Black',
        size: 'M',
        price: 200,
        discout: "50%",
        status: "available",
        image: product8,
    },
    {
        id: 9,
        name: 'Graphic t-shirt',
        color: 'Black',
        size: 'M',
        price: 200,
        discout: "50%",
        status: "available",
        image: product9,
    },
    {
        id: 10,
        name: 'Polo t-shirt',
        color: 'Black',
        size: 'M',
        price: 200,
        discout: "50%",
        status: "available",
        image: product10,
    },
    {
        id: 11,
        name: 'Long sleeve t-shirt',
        color: 'Black',
        size: 'M',
        price: 200,
        discout: "50%",
        status: "available",
        image: product11,
    },
    {
        id: 12,
        name: 'Crop top t-shirt',
        color: 'Black',
        size: 'M',
        price: 200,
        discout: "50%",
        status: "available",

        image: product14,
    },
    {
        id: 13,
        name: 'Baseball t-shirt',
        color: 'Black',
        size: 'M',
        price: 200,
        discout: "50%",
        status: "available",
        image: product13,
    },
    {
        id: 14,
        name: 'Muscle t-shirt',
        color: 'Black',
        size: 'M',
        price: 200,
        discout: "50%",
        status: "available",
        image: product14,
    },
    {
        id: 15,
        name: 'Tie-dye t-shirt',
        color: 'Black',
        size: 'M',
        price: 200,
        discout: "50%",
        status: "available",
        image: product1,
    },


];

function ProductList() {
    const [searchTerm, setSearchTerm] = useState('');
    const [cart, setCart] = useState([]);

    const addToCart = useCallback((product) => {
        setCart((precart) => [...precart, product])
    }, [])

    const deleteCartItems = (productId) => {
        setCart(cart.filter((product) => product.id !== productId))
    }
    const totalPrice = cart.reduce((acc, curr) => acc + curr.price, 0);


    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className='product-container'>
            <div className='heading'><h1>Products</h1></div>
            {/*<div><CountdownTimer/></div>*/}
            <div class="search-box">
                <input
                    type="text"
                    value={searchTerm}
                    onChange={handleSearchChange}
                    placeholder="Search products..."

                /><span><button type="submit">Go</button></span>




            </div>


            <div className="product-card">
                {filteredProducts.map((product) => (
                    <li key={product.id}>
                        <div className="product-image">
                            <img classname="image-section" src={product.image} alt={product.name} />
                        </div>
                        <div className="product-details">

                        </div>

                        <h2>{product.name}</h2>
                        <p className="details">color: {product.color}</p>
                        <p>status: {product.status}</p>


                        <div className="flexing">
                            <p>Size: {product.size}</p>
                            <p className="cost">Price: {product.price}</p>
                            <p className="o">{product.discout}</p>
                        </div>


                        <button className='button1'
                            onClick={() => addToCart(product)}>add to cart</button>

                    </li>
                ))}

            </div>
            <h2>Shopping cart</h2>
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

        </div>
    );
}

export default ProductList;