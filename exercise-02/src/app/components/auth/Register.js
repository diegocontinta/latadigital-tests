"use client";

import {env, _token} from "@/../next.config.mjs";
import { useRouter } from 'next/navigation'
import { useState } from "react";



const Register = () => {

    const [email, setEmail]          = useState('');
    const [password, setPassword]    = useState('');
    const [first_name, setFirstName] = useState('');
    const [last_name, setLastName]   = useState('');
    const [age, setAge]              = useState('');



    const router = useRouter();

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            const response = await fetch(env.API.auth.register, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password, age, first_name, last_name}),
            });

            if (response.ok) {
                await response.json().then((r) => {
                    console.log('haz sido registrado')
                });


            } else {
                console.error('Register failed');
            }
        } catch (error) {
            console.error('Error during login:', error);
        }
    };

    return (
        <div className="">
            <div className="">
                <div>
                    <h2 className="">Registra tu cuenta</h2>
                </div>
                <form className="" onSubmit={handleSubmit}>
                    <input type="hidden" name="remember" defaultValue="true" />
                    <div className="">
                        <div>
                            <label htmlFor="username" className="">Email</label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                className="text-black"
                                placeholder="email"
                                value={email}
                                onChange={ (e) => setEmail(e.target.value) }
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="sr-only">Password</label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                required
                                className="text-black"
                                placeholder="Password"
                                value={password}
                                onChange={ (e) => setPassword(e.target.value) }
                            />
                        </div>

                        <div>
                            <label htmlFor="first_name" className="sr-only">Password</label>
                            <input
                                id="first_name"
                                name="first_name"
                                type="text"
                                autoComplete="first_name"
                                required
                                className="text-black"
                                placeholder="Nombre"
                                value={first_name}
                                onChange={ (e) => setFirstName(e.target.value) }
                            />
                        </div>

                        <div>
                            <label htmlFor="last_name" className="sr-only">Password</label>
                            <input
                                id="last_name"
                                name="last_name"
                                type="text"
                                autoComplete="last_name"
                                required
                                className="text-black"
                                placeholder="Apellido"
                                value={last_name}
                                onChange={ (e) => setLastName(e.target.value) }
                            />
                        </div>

                        <div>
                            <label htmlFor="age" className="sr-only">Password</label>
                            <input
                                id="age"
                                name="age"
                                type="number"
                                autoComplete="age"
                                required
                                className="text-black"
                                placeholder="Edad"
                                value={last_name}
                                onChange={ (e) => setLastName(e.target.value) }
                            />
                        </div>
                    </div>


                    <div>
                        <button
                            type="submit"
                            className=""
                        >
                            Registrarme
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
