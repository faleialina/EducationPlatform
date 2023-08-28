import Footer from "../../companents/Footer/Footer";
import Header from "../../companents/Header/Header";
import Inputs from "../../companents/Inputs/Inputs";
import style from './style.module.css';

function AuthPage() {
    const array = ["email", "pwd"];

    return (
        <div>
            <Header />

            <div className={style.authpage}>
                <div className={style.info}>
                    <h1>Login</h1>
                    <Inputs array={array} />
                    <div className={style.btn}>Login</div>
                </div>
                <div className={style.img}></div>
            </div>

            <Footer />
        </div>
    )
}

export default AuthPage;