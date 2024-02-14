"use client";

import {env, _token} from "@/../next.config.mjs";
import { useRouter } from 'next/navigation'
import { useState } from "react";



const Login = () => {


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();



    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            const response = await fetch(env.API.auth.login, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            if (response.ok) {
                    await response.json().then((r) => {
                                _token.setToken( r.token )
                                router.push('/users');
                            });


            } else {
                console.error('Login failed');
            }
        } catch (error) {
            console.error('Error during login:', error);
        }
    };

    return (

            <div className="container justify-center">
                <div className="form__container h-100 flex flex-col justify-center">
                <div>
                    <h2 className="font-black font-bold text-lg">Ingresar al stark industries</h2>
                </div>
                <form className="" onSubmit={handleSubmit}>
                    <input type="hidden" name="remember" defaultValue="true" />
                    <div className="flex flex-col text-left mt-10">

                            <label htmlFor="email" className="label">Email</label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="username"
                                required
                                className="input text-black p-2 "
                                placeholder="Email"
                                value={email}
                                onChange={ (e) => setEmail(e.target.value) }
                            />
                        </div>
                        <div className="flex flex-col text-left mt-10">
                            <label htmlFor="password" className="label">Password</label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                required
                                className="text-black p-2 input"
                                placeholder="Password"
                                value={password}
                                onChange={ (e) => setPassword(e.target.value) }
                            />
                        </div>



                    <div>
                        <button
                            type="submit"
                            className="bg-indigo-500 mt-10 w-[100%] block p-2 border-radius-s text-white hover:bg-indigo-800"
                        >
                            Ingresar
                        </button>
                    </div>
                </form>
                </div>
            </div>
    );
};

export default Login;
