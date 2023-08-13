import Footer from "../../companents/Footer/Footer";
import Header from "../../companents/Header/Header";
import style from "./style.module.css"

function RegPage() {
    return (
        <div>
            <Header />

            <div className={style.regpage}>
                <div className={style.info}>
                    <h1>Sign Up</h1>
                    <div > <input type="text" placeholder="Name" /></div>
                    <div > <input type="text" placeholder="Surname" /></div>
                    <div > <input type="text" placeholder="email" /></div>
                    <div> <input type="text" placeholder="pwd" /></div>
                    <div className={style.btn}>Sign Up</div>
                </div>
                <div className={style.img}></div>
            </div>


            <Footer />
        </div>
    )
}

export default RegPage;