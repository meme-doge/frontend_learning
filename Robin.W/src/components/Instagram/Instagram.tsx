import style from "./_Instagram.module.scss";
import InstagramImg from "/image/instagram.png";

const Instagram = () => {
    return (
        <section className={style["instagram"]}>
            <div className={`${style["instagram__inner"]} ${style["container"]}`}>
                <div className={style["instagram__text"]}>
                    <h2 className={`${style["instagram__text-title"]} ${style["mobile-heading"]}`}>Instagram</h2>
                    <p className={`${style["instagram__text-subtitle"]} ${style["body-one"]}`}>
                        If you area a person who enjoys photography, then I highly recommend that you check out my Instagram. I’m an avid traveller and I capture the best moments that I would love to cherish with the world
                    </p>
                    <a href={"#about"}
                       className={`${style["instagram__text-link"]} ${style["body-two"]} ${style["underline-link"]}`}>Follow me on IG</a>
                </div>
                <img className={style["instagram__img"]} src={InstagramImg} alt={"instagram"} loading={"lazy"}></img>
            </div>
        </section>
    );
};

export default Instagram;