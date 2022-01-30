import React from 'react'

const featuredProducts = [
    "https://images.unsplash.com/photo-1634318793254-a0a3350bf735?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    "https://images.unsplash.com/photo-1562782558-4435e200fd84?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    "https://images.unsplash.com/photo-1579911098863-2324d6914c01?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
]

function imageSlider() {
    return (
        <div class="container mx-auto grid grid-cols-2 my-6 max-w-6xl gap-5">
            <img src={featuredProducts[0]} alt="pic1" class="col-span-2 mx-auto rounded-lg shadow-2xl brightness-50">

            </img>
            <img src={featuredProducts[1]} alt="pic2" class="mx-auto object-cover rounded-lg shadow-2xl brightness-50"/>
            <img src={featuredProducts[2]} alt="pic3" class="mx-auto rounded-lg shadow-2xl brightness-50"/>
        </div>
    )
}

export default imageSlider
