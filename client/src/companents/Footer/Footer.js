import Options from '../Options/Options';
import style from './style.module.css';
function Footer() {
    const array1 = ['Home', 'Textbook', 'Statistics', 'Sprint'];

    const array2 = ['Alex', 'Gabriel', 'Marcus']

    return (
        <div className={style.wrapper}>
            <div className={style.nav}>
                <div className={style.transition}>
                    <Options array={array1} />
                </div>
                <div className={style.name}>
                    <Options array={array2} />
                </div>
            </div>
            <div className={style.line}></div>
            <div className={style.end}>
                <div className={style.img}></div>
                <div className={style.signature}>©2021 Hschool. Project for Hschool.</div>
            </div>
        </div>
    )
};

export default Footer;