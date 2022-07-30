import React, { useEffect } from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './login.module.css';
import { useNavigate } from "react-router-dom";


const Login = ({ loginService }) => {
    const navigate = useNavigate();

    // useEffect(() => {
    //     goTo();
    // });


    const click = (event) => {
        event.preventDefault();
        loginService.login().then(result => goTo(result.user.uid));
    };

    const goTo = (user) => {
        const userId = user;
      if(userId){
        navigate('/maker',{state: {id: userId}});
      }else{
        return;
      }
    };

    return(
        <div className={styles.login}>
            <Header/>
            <div className={styles.container}>
                <h1 className={styles.h1}>Login</h1>
                <button onClick={click}>Google</button>
                <button onClick={click}>Github</button>
            </div>
            <Footer/>
        </div>
    );
};

export default Login;