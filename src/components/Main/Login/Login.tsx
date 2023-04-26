import React, { FormEvent, useState } from "react";
import { loginUser } from "../../../api/auth/actionCreators";
import { useAppDispatch } from "../../../api/store";


const Login = () => {
   const [login,setLogin] = useState("")
   const [password,setPassword] = useState("");
   const dispatch = useAppDispatch();
    const handleClick = (e:FormEvent) => {
    e.preventDefault();
    dispatch(loginUser({login,password}))
    }

    return <div>
        <form onSubmit={handleClick}>
        <div>
        <label>
            Login:
        </label>
        <input value={login} onChange={(e)=>setLogin(e.target.value)} name="login" type="text"/>
        </div>

        <div>
        <label>
            Password:
        </label>
        <input value={password} onChange={(e)=>setPassword(e.target.value)} name="password" type="password"/>
        </div>
        <button>Submit</button>
        </form>
    </div>
}
export default Login