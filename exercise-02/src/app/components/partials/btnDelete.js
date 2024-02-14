"use Client"

import {_token, env} from '@/../next.config.mjs';
import {useState} from "react";

export default function btnDelete({ fetchUrl, id, title, index, onDelete}) {

    const [showConfirmation, setShowConfirmation] = useState(false);

    const handleDelete = async () => {


        try {

            const response = await fetch(fetchUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `${_token.getToken()}`
                },
                body: JSON.stringify({ id }),
            });

            if(response.ok) {
                onDelete(index);
                setShowConfirmation(false);
            }

        }
        catch (e) {
            console.log(e)
        }
    }
    return (
        <>
            <button className="text-sm " onClick={ () => { setShowConfirmation(true) }}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 hover:text-red-500">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5m6 4.125 2.25 2.25m0 0 2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
                </svg>

            </button>

            { showConfirmation && (
                <div
                    className="flex items-center p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-50 dark:text-red-400"
                    role="alert">
                    <svg className="flex-shrink-0 inline w-4 h-4 me-3 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                         fill="currentColor" viewBox="0 0 20 20">
                        <path
                            d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
                    </svg>
                    <span className="sr-only">Info</span>
                    <div>
                        <span className="font-medium">Aleta!</span> Este es un cambio irreversible.
                    </div>
                    <button
                        className="bg-white hover:bg-red-200 text-gray-800 ml-3 font-semibold py-2 px-4 border border-gray-100 rounded "
                        onClick={handleDelete}
                    >
                        Confirmar
                    </button>
                </div> )
            }

        </>
    )
}