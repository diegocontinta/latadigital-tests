import {useState} from "react";

export default function formUser({ onSubmit, userModel, showConfirm, handleParentConfirm, notify}) {

    const [user, setUser ] = useState(userModel);

    const handleUpdate = (e) => {
        e.preventDefault()

        onSubmit(user);

    }

    const parentConfirm = () => {
        handleParentConfirm(false)
    }


    return (
        <form className="form form-edit" onSubmit={handleUpdate}>
            <div>
                <label htmlFor="first_name" className="label block">Nombre</label>
                <input
                    type="text"
                    name="first_name"
                    id="fist_name"
                    placeholder="Nombre"
                    onChange={(e) => setUser({...user, first_name: e.target.value})}
                    value={user.first_name}
                    className="input p-2 w-[23rem] mb-6"
                />
            </div>
            <div>
                <label htmlFor="last_name" className="label block">Apellido</label>
                <input
                    type="text"
                    name="last_name"
                    id="last_name"
                    placeholder="Apellido"
                    onChange={(e) => setUser({...user, last_name: e.target.value})}
                    value={user.last_name}
                    className="input p-2 w-[23rem] mb-6"

                />
            </div>

            <div>
                <label htmlFor="age" className="label block">Edad</label>
                <input
                    type="text"
                    name="age"
                    id="age"
                    placeholder="Edad"
                    onChange={(e) => setUser({...user, age: e.target.value})}
                    value={user.age}
                    className="input p-2 w-[23rem] mb-6"
                />
            </div>


            <div>
                <label htmlFor="email" className="label block">Email</label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    onChange={(e) => setUser({...user, email: e.target.value})}
                    value={user.email}
                    className="input p-2 w-[23rem] mb-6"
                />
            </div>

            <div>
                <label htmlFor="password" className="label block">Password</label>
                <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                    onChange={(e) => setUser({...user, password: e.target.value})}
                    value={user.password}
                    className="input p-2 w-[23rem] mb-6"
                />
            </div>

            <div className="label">
                <button className="p-3 bg-indigo-500 text-white border-radius-m w-[23rem] hover:bg-indigo-800 "> Actualizar Usuario</button>
            </div>

            {showConfirm && (
                <div id="alert-border-3"
                     className="flex items-center p-4 mb-4 text-green-800 border-t-4 border-green-300 bg-green-50 dark:text-green-400 dark:bg-gray-600 dark:border-green-800"
                     role="alert">
                    <svg className="flex-shrink-0 w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                         fill="currentColor" viewBox="0 0 20 20">
                        <path
                            d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
                    </svg>
                    <div className="ms-3 text-sm font-medium">
                        {notify}
                    </div>
                    <button type="button" onClick={ () => parentConfirm(false)}
                            className="ms-auto -mx-1.5 -my-1.5 bg-green-50 text-green-500 rounded-lg focus:ring-2 focus:ring-green-400 p-1.5 hover:bg-green-200 inline-flex items-center justify-center h-8 w-8 dark:bg-gray-50 dark:text-green-400 dark:hover:bg-gray-700"
                            data-dismiss-target="#alert-border-3" aria-label="Close">
                        <span className="sr-only">Dismiss</span>
                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                             viewBox="0 0 14 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                        </svg>
                    </button>
                </div>
            )}
        </form>

    )

}