import PhilosophyImg from "/image/Rectangle 39.png"
import style from "./_Philosophy.module.scss"
const Philosophy = () =>{
    return (
        <section className={style["philosophy"]}>
            <div className={`${style["philosophy__inner"]} ${style["container"]}`}>
                <div className={style["philosophy__text"]}>
                    <h2 className={`${style["philosophy__text-title"]} ${style["mobile-heading"]}`}>Philosophy & values</h2>
                    <p className={`${style["philosophy__text-subtitle"]} ${style["body-one"]}`}>I think everyone wants the same thing -
                        relationship with humanity, peace with the metaphysical, and experience with the universe. I try
                        to grasp these things with my values: authenticity, creativity, & hospitality.</p>
                    <a href={"#about"} className={`${style["philosophy__text-link"]} ${style["body-two"]} ${style["underline-link"]}`}>More about me</a>
                </div>
                <img className={style["philosophy__img"]} src={PhilosophyImg} alt={"philosophy"}></img>
            </div>
        </section>
    )
}
export default Philosophy