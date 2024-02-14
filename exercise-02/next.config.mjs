/** @type {import('next').NextConfig} */
const nextConfig = {};

export default nextConfig;

const API_URL_BASE =   'http://localhost:3002'
export const env = {
                                API :   {
                                    base: API_URL_BASE,
                                    auth: {
                                        login: API_URL_BASE + '/auth/login',
                                    },
                                    users: {
                                        getOne : (id) => API_URL_BASE + '/users/'+ id,
                                        getAll : API_URL_BASE + '/users/all',
                                        update : API_URL_BASE + '/users/update',
                                        delete : API_URL_BASE + '/users/delete',
                                        register: API_URL_BASE + '/users/store'
                                    }
                                }

}


export const _token =  {
    exist : () => localStorage.getItem('token') !== null,
    setToken : (token) => localStorage.setItem('token', token),
    getToken : () => localStorage.getItem('token'),
    destroyToken : () =>localStorage.removeItem('token'),
    userAuthenticated : () => {
        if(!this.exist()  )
             return { redirect : { destination : '/', permanent : false}}

    }
}


