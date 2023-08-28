import Footer from "../../companents/Footer/Footer";
import Header from "../../companents/Header/Header";
import Inputs from "../../companents/Inputs/Inputs";
import style from "./style.module.css"

function RegPage() {
    const array = ["Name", "Surname", "email", "pwd"];
    return (
        <div>
            <Header />

            <div className={style.regpage}>
                <div className={style.info}>
                    <h1>Sign Up</h1>
                   <Inputs array={array}/>
                    <div className={style.btn}>Sign Up</div>
                </div>
                <div className={style.img}></div>
            </div>


            <Footer />
        </div>
    )
}

export default RegPage;