import React from 'react';
import { Button } from '@material-ui/core';
import './Login.css';
import whatsappbackground from '../../image/backgroundwa.png';
import { auth, provider } from '../../firebase';
import { actionTypes } from '../../reducer';
import { useStateValue } from '../../StateProvider';

function Login() {

    const [{}, dispatch] = useStateValue();

    const signIn = () => {
        auth
            .signInWithPopup(provider)
            .then((result) => {
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user,
                })
            })
            .catch((error) => alert(error.message));
    };

    return (

        <section className="login" alt="Whatsapp Background" style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `url(${whatsappbackground})`

        }}>

            <div className="login_container">            

                <div className="login_text">
                    <h1>Whatsapp Web Clone</h1>
                    <p>This app is not commercialized or monetized. It was created only to study the technology React.
                    <br /><br /> All rights reserved for WhatsApp LLC © 2021</p>
                </div>

                <Button onClick={signIn}>
                    Sign in with Google
                </Button>
            </div>

        </section>

    )
}

export default Login;