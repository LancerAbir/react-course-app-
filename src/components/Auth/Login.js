import React, { useContext, useState } from 'react';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
import { createUserWithEmailAndPassword, facebookSignInHandler, googleSingInHandler, googleSingOutHandler, initializeAuthFramework, signInWithEmailAndPassword } from './LoginManager';




const Login = () => {

    //** FireBase Config File  */
    initializeAuthFramework()

    //** Data Come Form Context API  */
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    //** After Authentication is login true ? path='/shipment' : path='/'  */
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } }

    //** useState Hook */
    const [newUser, setNewUser] = useState(false)

    //** useState Hook */
    const [user, setUser] = useState({
        isSignedIN: false,
        name: '',
        email: '',
        password: '',
        photo: '',
        error: '',
        successful: false
    })


    const handleRes = (res, isReplace) => {
        setUser(res)
        setLoggedInUser(res)
        if (isReplace) {
            history.replace(from)
        }
    }

    //** Google Sing In Handler */
    const googleSingIn = () => {
        googleSingInHandler()
            .then(res => {
                handleRes(res, true)
            })
    }


    //** Google Sing Out Handler */
    const googleSingOut = () => {
        googleSingOutHandler()
            .then(res => {
                handleRes(res, false)
            })
    }


    //** Facebook Sing In Handler */
    const facebookSignIn = () => {
        facebookSignInHandler()
            .then(res => {
                handleRes(res, true)
            })
    }


    //** Registration Form Submit Handler */
    const registerSubmitHandler = (e) => {
        if (newUser && user.email && user.password) {
            createUserWithEmailAndPassword(user.name, user.email, user.password)
                .then(res => {
                    handleRes(res, true)
                })
        }
        if (!newUser && user.email && user.password) {
            signInWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    handleRes(res, true)
                })
        }
        e.preventDefault()
    }

    //** Registration OnBlur Handler */
    const blurHandler = (e) => {
        let isFieldValid = true
        if (e.target.name === 'email') {
            isFieldValid = /\S+@\S+\.\S+/.test(e.target.value)
        }
        if (e.target.name === 'password') {
            isFieldValid = e.target.value.length > 8 && /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(e.target.value)
        }
        if (isFieldValid) {
            const newSetUser = { ...user }
            newSetUser[e.target.name] = e.target.value
            setUser(newSetUser)
        }
    }



    return (
        <div style={{ textAlign: 'center' }}>
            <h1> Firebase Auth Simple Project  </h1>
            {user.isSignedIN ? <button onClick={googleSingOut}> Log Out by Google</button> : <button onClick={googleSingIn}> Log In by Google</button>}
            <button onClick={facebookSignIn}>Log In by FaceBook</button>
            {
                user.isSignedIN && <div>
                    <p> Welcome, {user.name} Your Email - {user.email} Your Singed IN - {user.isSignedIN}  </p>
                    <img src={user.photo} alt="" />
                </div>
            }


            <h1> Authentication  </h1>
            <input type="checkbox" onChange={() => setNewUser(!newUser)} name="newUser" id="" />
            <label htmlFor=""> Register a New Account </label>
            <form action="" onSubmit={registerSubmitHandler}>

                {
                    newUser && <input type="text" name="name" onBlur={blurHandler} placeholder="Your Name" required />
                }

                <br />
                <input type="text"
                    name="email" onBlur={blurHandler} placeholder="Your Email Address" required />
                <br />
                <input type="password" name="password" onBlur={blurHandler} id="" required placeholder="type strong password" />
                <br />
                <input type="submit" value={newUser ? 'Created' : 'Logged In'} />
            </form>

            {
                user.successful ? <p style={{ color: 'green' }}>User Successfully {newUser ? 'Created' : 'Logged In'} </p> : <p style={{ color: 'red' }}>Error IS : {user.error}</p>
            }

        </div>
    );
}

export default Login;
