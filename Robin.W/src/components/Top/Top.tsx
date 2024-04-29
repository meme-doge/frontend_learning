import Person from "/image/Rectangle 37.png"
import styles from "./_Top.module.scss"

function Top(){
    return (
        <section className={styles["top"]}>
            <div className={`${styles["top__inner"]} ${styles["container"]}`}>
                <img alt={"person"} className={styles["top__img"]} src={Person}/>
                <div className={styles["top__text"]}>
                    <h1 className={`${styles["top__title"]}, ${styles["mobile-heading"]}`}>
                        I’m Robin Williams. A Product Designer
                        <span className={`${styles["top__title-span"]}, ${styles["dark-grey"]}`}><br/>based in Italy.</span>
                    </h1>
                    <p className={`${styles["top__paragraph"]}, ${styles["body-one"]}`}>
                        I’m probably the most passionate designer you will ever get to work with. If you have a
                        great project that needs some amazing skills, I’m your guy.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Top