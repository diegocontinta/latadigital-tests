"use client"

import {useEffect, useState} from "react";
import {env, _token} from "@/../next.config.mjs";
import ListUser  from "@/app/components/partials/listUser";
import { useRouter } from 'next/navigation'
export default function Page() {

    const [users, setUsers] = useState(null);
    const router = useRouter();

    const openRegisterForm =  () => {
            router.push('/users/create');
    }

    useEffect( () => {
        const fetchData = async () => {

            try {
                const response = await fetch(env.API.users.getAll, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `${_token.getToken()}`
                    }
                })



                if(response.ok) {
                    await response.json().then((r) => {
                        setUsers(r)
                    });
                }

            } catch (e) {
                console.log(e)
            }
        }

        fetchData();
    }, [])

    const deleteUser = (indexToDelete) => {
        const updatedItems = users.filter( (user, index) => index !== indexToDelete);
        setUsers(updatedItems);
    }



    return (
        <main className="container users__list">
            <section className="list__container px-6">
                <header className="list__header py-3 flex ml-auto justify-between align-center border-b-blue-500 mb-10">
                   <div className="header__title">
                       <h1 className="text-lg">Usuarios</h1>
                   </div>
                    <div className="header__actions justify-self-end">
                        <button className="button p-2 px-5 bg-indigo-500 border-radius-s text-white hover:bg-indigo-800" onClick={openRegisterForm}>Agregar Usuario</button>
                    </div>
                </header>


                    {users ? (
                        users.map((user, index) => (
                            <ListUser index={index} user={user} onDelete={deleteUser} key={index} />
                        ))
                    ) : (
                        <div>Cargando usuarios...</div>
                    )}
            </section>
        </main>
    )


}