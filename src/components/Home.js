import React from 'react'
import ImageSlider from './ImageSlider'
import Product from './Product'
import Burn from '../assets/Burn.png'
import Eaa from '../assets/eaa.png'
import Pump from '../assets/pump.png'
import Sleep from '../assets/sleep.png'

function Home() {
    return (
        <div>
            <ImageSlider />
            <hr class="max-w-6xl mx-auto border border-b-zinc-600"></hr>

            <div class="max-w-6xl mx-auto my-6">
                <p class="mx-auto font-serif font-bold text-2xl">Top Sellers</p>
                <div class="max-w-6xl grid grid-cols-4 gap-1 my-6">
                    <Product
                        id="12321341"
                        title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
                        price={11.96}
                        rating={5}
                        image={Burn}
                    />

                    <Product
                        id="12321341"
                        title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
                        price={11.96}
                        rating={5}
                        image={Eaa}
                    />

                    <Product
                        id="12321341"
                        title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
                        price={11.96}
                        rating={5}
                        image={Pump}
                    />

                    <Product
                        id="12321341"
                        title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
                        price={11.96}
                        rating={5}
                        image={Sleep}
                    />

                </div>
            </div>
        </div>
    )
}

export default Home
