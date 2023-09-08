import { useState } from "react";
import Footer from "../../companents/Footer/Footer";
import Header from "../../companents/Header/Header";
import Inputs from "../../companents/Inputs/Inputs";
import style from "./style.module.css"
import axios from "axios"

function RegPage() {
    const [inp, setInp] = useState({});

    const array = ["name", "surname", "email", "pwd"];
    async function show() {
        const result = await axios.post('http://localhost:3001/api/reg', inp)
        console.log(result.data);
    }

    return (
        <div>
            <Header />

            <div className={style.regpage}>
                <div className={style.info}>
                    <h1>Sign Up</h1>
                    <Inputs array={array} setInp={setInp} inp={inp} />
                    <div className={style.btn} onClick={show}>Sign Up</div>
                </div>
                <div className={style.img}></div>
            </div>


            <Footer />
        </div>
    )
}

export default RegPage;