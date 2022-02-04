import React, { useState } from 'react'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase'

function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')

    const register = e => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) =>{
                console.log(userCredential.providerId)
            })
            .catch((error) => {
                //const errorCode = error.code;
                const errorMessage = error.message;
                console.log(password)
                console.log(errorMessage)
              });
    }

    return (
        <div class="py-52">
            <div class="grid justify-items-center items-center grid-rows-4 max-w-screen-sm h-96 mx-auto">
                <p class='text-4xl fount-bold text-black'>Create Account</p>

                <input type="text" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" class="block w-96 h-2/3 px-3 py-2 bg-white border border-amber-800 rounded-3xl text-sm shadow-sm placeholder-slate-400
        focus:outline-none focus:border-amber-700 focus:ring-1 focus:ring-amber-700 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"/>

                <input type="text" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" class="block w-96 h-2/3 px-3 py-2 bg-white border border-amber-800 rounded-3xl text-sm shadow-sm placeholder-slate-400
        focus:outline-none focus:border-amber-700 focus:ring-1 focus:ring-amber-700 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"/>

                <button type='submit' onClick={register} class="w-96 h-2/3 bg-black hover:bg-gray-800 text-white rounded-3xl">
                    Create</button>
            </div>
        </div>
    )
}

export default Register
