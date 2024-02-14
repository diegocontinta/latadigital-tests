"use client"
import {env} from '@/../next.config.mjs'
import BtnDelete from '@/app/components/partials/btnDelete'
import { useRouter } from 'next/navigation'


function ListUser({ user, onDelete, index }) {
    const router = useRouter();
    const ID = user.id;

    return (
        <div className="list__content-description  align-center border-bottom pt-3 pb-3 " >

            <div className="content">
                <h3 className="text-lg py-1">{user.first_name} {user.last_name}</h3>
                <div className="details flex gap-5">
                    <div className="text-sm text-slate-500"><b>Email:</b> {user.email}</div>
                    <div className="text-sm text-slate-500"><b>Edad:</b> {user.age}</div>
                </div>

            </div>

            <div className="actions flex gap-4">
                <BtnDelete
                    title="borrar"
                    id={user.id}
                    fetchUrl={env.API.users.delete}
                    index={index}
                    onDelete={onDelete}
                />

              <button className="text-sm font-bold" onClick={ async () => { await router.push(`/users/edit/${ID}`) }} >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 hover:text-indigo-500">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                  </svg>

              </button>
            </div>
        </div>
    );
}

export default ListUser;