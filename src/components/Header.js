import React from 'react'

function Header() {
    return (
        <div class="h-24">
            <div class="mx-auto h-24 fixed inset-x-0 bg-white border border-b-grey-700">
                
                <div class="flex justify-between mx-auto max-w-screen-xl">
                    
                    <div class="flex space-x-4">
                        <div>
                            <a href="http://youtube.com" class="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-24 w-14 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span class="font-mono text-4xl text-gray-700">Shop</span>
                            </a>
                        </div>

                        <div class="flex justify-between space-x-5 items-center pl-3">
                            <a class="flex justify-between items-center text-l text-gray-700 hover:text-gray-400" href="http://youtube.com">Products
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 pl-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                                </svg></a>

                            <a class="text-l text-gray-700 hover:text-gray-400" href="http://youtube.com">Stacks</a>
                            <a class="text-l text-gray-700 hover:text-gray-400" href="http://youtube.com">Apparel</a>
                            <a class="text-l text-gray-700 hover:text-gray-400" href="http://youtube.com">The e-Book</a>
                            <a class="text-l text-gray-700 hover:text-gray-400" href="http://youtube.com">About Us</a>
                            <a class="text-l text-gray-700 hover:text-gray-400" href="http://youtube.com">Contact</a>
                        </div>
                    </div>

                    <div class="flex justify-between space-x-6 items-center">
                        <a class="text-gray-700 hover:text-gray-400" href="http://youtube.com">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </a>
                        <a class="text-gray-700 hover:text-gray-400" href="http://youtube.com">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                        </a>
                        <a class="text-gray-700 hover:text-gray-400" href="http://youtube.com">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                        </a>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Header
