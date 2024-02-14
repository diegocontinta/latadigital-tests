"use client";

import {env, _token} from "@/../next.config.mjs";
import { useRouter } from 'next/navigation'
import { useState } from "react";
import FormUser from "@/app/components/partials/formUser";



export default function PageCreate() {

    const [user, setUser] = useState({});
    let [showConfirm, setShowConfirm] = useState(false);

    const router = useRouter();

    const handleShowConfirm = () => {
        setShowConfirm(false);
    }

    const handleSubmit = async (user) => {

        try {
            console.log(user);
            const response = await fetch(env.API.users.register, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `${_token.getToken()}`
                },
                body: JSON.stringify(user),
            });

            if (response.ok) {
                await response.json().then((r) => {
                    setShowConfirm(true)
                });


            } else {
                console.error('Register failed');
            }
        } catch (error) {
            console.error('Error during login:', error);
        }
    };

    return (
        <div className="container">
            <div className="">
                <header className="list__header py-3 flex ml-auto justify-between align-center border-b-blue-500 mb-10">
                    <div className="header__title">
                        <h1 className="text-lg">Usuarios</h1>
                    </div>

                </header>



                <FormUser
                    onSubmit={handleSubmit}
                    userModel={ user }
                    showConfirm={ showConfirm }
                    handleParentConfirm={ handleShowConfirm }
                    notify={`Usuario se ha creado satisfactoriamente.`}
                />
            </div>
        </div>
    );
};


