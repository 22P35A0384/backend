import { useEffect } from "react";

function Logout(){
    useEffect(()=>{
        localStorage.removeItem('user')
        localStorage.removeItem('id')
        localStorage.removeItem('fname')
        localStorage.removeItem('lname')
        localStorage.removeItem('profile')
        localStorage.removeItem('email')
        window.location.href='/'
    })
    return(
        <></>
    )
}

export default Logout;