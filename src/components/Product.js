import React from 'react'

function Product({ id, title, image, price, rating }) {
    return (
        <div class="w-72 h-72 border border-red-500">
            <img src={image} alt="Burn"/>
        </div>
    )
}

export default Product
