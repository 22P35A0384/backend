import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


const Login = () =>{
    const setBackgroundImage = () => {
        document.querySelector('.backgroundimg').style.backgroundImage = "url('https://space-club.onrender.com/img/earth.jpg')";
        document.querySelector('.backgroundimg').style.backgroundSize = "cover";
    };
    setBackgroundImage();
    // document.getElementsByClassName('backgroundimg').style.backgroundImage="url('http://localhost:5000/img/space.jpg')"
    const [login, getLogin] = useState({
        'user':'',
        'pass':''
    })
    const nav = useNavigate();
    const Getlogin=()=>{
        if(login.user===""){
            alert('Enter User Name')
        }else if(login.pass===""){
            alert('Enter Password')
        }else{
            // alert(login.user+" "+login.pass)
            axios.post(`https://space-club.onrender.com/checkmail`,login).then((response)=>{
                if(response.data.msg==='Invalid User!'){
                    alert('Invalid User! (or) Account Was Not Registered')
                }else if(response.data===false){
                    alert('Invalid Password!')
                }else{
                    localStorage.setItem('user',login.user)
                    nav(`/home`)
                }
            })
        }
    }
    return(
        <div style={{position:'relative',top:'100px'}} id="loginblock">
            <center>
                <input id="loginblock2" type="email" placeholder="Enter Your Email" onChange={(e)=>getLogin({...login,user:e.target.value})}/><br/><br/>
                <input id="loginblock2" type="password" placeholder="Enter Your Password" onChange={(e)=>getLogin({...login,pass:e.target.value})}/><br/><br/>
                <button id="loginbutton1" onClick={Getlogin}>Login</button>
                <hr id="hr"/>
                <Link to={'/NewAccount'}><button id="loginbutton1">Create New Account</button></Link>
                <Link to={'/forgotpassword'}><button id="loginbutton1" style={{marginBottom:'20px'}}>Forgot Password</button></Link>
            </center>
        </div>
    )
}

export default Login;