
"use client"
import EditUser from './components/editUser';

import {useEffect, useState} from "react";
import {_token, env} from "@/../next.config.mjs";

export default function Page({ params }) {
    const [user, setUser] = useState(null)

    useEffect( () => {

        const fetchData = async () => {

            try {
                const response = await fetch(env.API.users.getOne( params.id ), {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `${_token.getToken()}`
                    },

                })

                if(response.ok) {
                    await response.json().then((r) => {
                        setUser(r)
                    });
                }

            } catch (e) {
                console.log(e)
            }
        }

        fetchData();
    }, []);

    return (
        <div className="container">
            <div className="">
                <header className="list__header py-3 flex ml-auto justify-between align-center border-b-blue-500 mb-10">
                    <div className="header__title">
                        <h1 className="text-lg">Editar Usuario</h1>
                    </div>

                </header>

                { user !== null ? (
                    <EditUser userIn={user} />
                ) : (
                    <div> Obteniendo los datos...</div>
            )
            }
            </div>
        </div>
    )

}