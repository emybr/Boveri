import React from 'react'
// import { useState } from 'react';



function Cart() {
    const [cart, setCart] = useState([]);

    // function addToCart(item) {
    //     setCart([...cart, item]);
    // }
    
    function removeFromCart(itemId) {
        setCart(cart.filter(item => item.id !== itemId));
    }

    return (
        <div>
            {cart.map(item => (
                <div key={item.id}>
                    <p>{item.name}</p>
                    <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
                </div>
            ))}
        </div>
    );
}

export default Cart
