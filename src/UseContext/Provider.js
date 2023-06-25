import { Context } from "./ThemeContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Provider({children}) {
    const navigate = useNavigate()
    const handle = {
        checkLogged : () =>{
            const currentUser = JSON.parse(localStorage.getItem('current-user'))
            if (currentUser == null) {
                setTimeout(() => {
                    navigate('/')
                }, 0); 
            } else {
                axios.get('https://uwd-node-js.vercel.app/v1/auth/check-token?token='+ currentUser.token)
                    .then (res => {
                        if (!res.data.message) {
                            navigate('/')
                        }
                    })
            }
        },
        getCurrentUser : async () => {
            const currentUser = JSON.parse(localStorage.getItem('current-user'))
            const res = await axios.get('https://uwd-node-js.vercel.app/v1/user/current-user', {headers : {token : `Bearer ${currentUser.token}`}})
            if (res.data.code == 200) {
                return res.data.currentUser._doc
            } else {
                return 'Not Found'
            }
        }
    }

    return ( 
        <Context.Provider value={[handle]}>
            {children}
        </Context.Provider>
     );
}

export default Provider;