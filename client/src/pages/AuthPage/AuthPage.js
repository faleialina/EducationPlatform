import { useState } from "react";
import Footer from "../../companents/Footer/Footer";
import Header from "../../companents/Header/Header";
import Inputs from "../../companents/Inputs/Inputs";
import style from './style.module.css';
import axios from 'axios';

function AuthPage() {
    const [inp, setInp] = useState({});
    const array = ["email", "pwd"];

    async function authUser() {
        const result = await axios.post('http://localhost:3001/api/auth', inp)
        console.log(result.data);
    }
    return (
        <div>
            <Header />

            <div className={style.authpage}>
                <div className={style.info}>
                    <h1>Login</h1>
                    <Inputs array={array} setInp={setInp} inp={inp} />
                    <div className={style.btn} onClick={authUser}>Login</div>
                </div>
                <div className={style.img}></div>
            </div>

            <Footer />
        </div>
    )
}

export default AuthPage;