

import {useState} from "react";
import {env, _token} from "@/../next.config.mjs";
import FormUser from "@/app/components/partials/formUser";

export default function editUser({ userIn }) {

    const [user, setUser] = useState(userIn);
    let [showConfirm, setShowConfirm] = useState(false);

    const handleShowConfirm = () => {
        setShowConfirm(false)
    }


    const handleUpdate = async (user) => {

        try {
            const response = await  fetch(env.API.users.update, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization' : `${_token.getToken()}`
                },
                body: JSON.stringify(user)
            }).then((r) => {
                if(r.ok)
                    setShowConfirm(true)

            })


        } catch (e) {
            console.log(e);
        }



    }


    return (

        <FormUser onSubmit={handleUpdate}
                  userModel={userIn}
                  showConfirm={showConfirm}
                  handleParentConfirm={handleShowConfirm}
                  notify={`Usuario se ha actualizado`}
        />

    )
}
