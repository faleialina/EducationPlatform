import Footer from "../../companents/Footer/Footer";
import Header from "../../companents/Header/Header";
import style from './style.module.css';

function AuthPage() {
    return (
        <div>
            <Header />

            <div className={style.authpage}>
                <div className={style.info}>
                    <h1>Login</h1>
                    <div > <input type="text" placeholder="email" /></div>
                    <div> <input type="text" placeholder="pwd" /></div>
                    <div className={style.btn}>Login</div>
                </div>
                <div className={style.img}></div>
            </div>

            <Footer />
        </div>
    )
}

export default AuthPage;