import React, { useState } from 'react'

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')

    const signIn = e => {
        e.preventDefault()

        //firebase login
    }


    return (
        <div class="py-52">
            <div class="grid justify-items-center items-center grid-rows-4 max-w-screen-sm h-96 mx-auto">
                <p class='text-4xl fount-bold text-black'>Login</p>

                <input type="text" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" class="block w-96 h-2/3 px-3 py-2 bg-white border border-amber-800 rounded-3xl text-sm shadow-sm placeholder-slate-400
        focus:outline-none focus:border-amber-700 focus:ring-1 focus:ring-amber-700 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"/>

                <input type="text" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" class="block w-96 h-2/3 px-3 py-2 bg-white border border-amber-800 rounded-3xl text-sm shadow-sm placeholder-slate-400
        focus:outline-none focus:border-amber-700 focus:ring-1 focus:ring-amber-700 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"/>
                
                <button type='submit' onClick={signIn} class="w-96 h-2/3 bg-black hover:bg-gray-800 text-white rounded-3xl">
                    Sign In</button>
            </div>

            <div class="container max-w-prose mx-auto">
                <div class="flex justify-center">
                    <button class="px-2 text-amber-800 underline underline-offset-1 hover:text-amber-700">Forgot your Password?</button>
                    <p class="px-2">/</p>
                    <a href="/register" class="px-2 text-amber-800 underline underline-offset-1 hover:text-amber-700">Create account</a>
                </div>
            </div>
        </div>
    )
}

export default Login
