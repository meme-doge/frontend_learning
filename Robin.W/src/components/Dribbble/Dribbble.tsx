import style from "./_Dribbble.module.scss"
import Img from "/image/Dribbble.png"
const Dribbble = () => {
    return (
        <section className={`${style["dribbble"]}`}>
            <div className={`${style["dribbble__inner"]} ${style["container"]} `}>
                <div className={`${style["dribbble__wrapper"]}`}>
                    <div className={`${style["dribbble__text"]}`}>
                        <h2 className={`${style["dribbble__title"]}`}>Dribbble</h2>
                        <p className={`${style["body-one"]} ${style["dark-grey"]} ${style["dribbble__subtitle"]}`}>Each dribbble shot is made with love and care. Do check out my work on Dribbble. Likes and comments are appreciated.</p>
                        <a href="#" className={`${style["underline-link"]} ${style["dribbble__link"]}`}>Follow me on Dribbble</a>
                    </div>
                    <div className={style["dribbble__picture"]}>
                        <img src={Img} loading={"lazy"} className={`${style["dribbble__img"]}`} alt="Dribbble"/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Dribbble;