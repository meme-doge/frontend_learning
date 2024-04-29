import {Element} from "react-scroll";

import styles from "./_Photography.module.scss"
import Italy_1 from "/image/Italy_1.png"
import Italy_2 from "/image/Italy_2.png"
import Italy_3 from "/image/Italy_3.png"
import Italy_4 from "/image/Italy_4.png"

import Australia_1 from "/image/Australia_1.png"
import Australia_2 from "/image/Australia_2.png"
import Australia_3 from "/image/Australia_3.png"
import Australia_4 from "/image/Australia_4.png"

import India_1 from "/image/India_1.png"
import India_2 from "/image/India_2.png"
import India_3 from "/image/India_3.png"

import Brazil_1 from "/image/Brazil_1.png"
import Brazil_2 from "/image/Brazil_2.png"
import Brazil_3 from "/image/Brazil_3.png"

import {useState} from "react";
const Photography = () => {
    const [Active, setActive] = useState("italy")
    const Click = (info:any)=>{
        setActive(info.target.value)
    }
    return (
        <section className={`${styles["photography"]}`}>
            <Element name="photography">
                <div className={`${styles["photography__inner"]} ${styles["container"]}`}>
                    <h2 className={`${styles["photography__title"]} ${styles["mobile-heading"]}`}>Photography</h2>
                    <p className={`${styles["photography__subtitle"]} ${styles["dark-grey"]} ${styles["body-two"]}`}>Here is
                        a collection of my best travel pictures that I took while travelling places all around the
                        world. </p>
                    <div className={`${styles["photography__buttons"]}`}>
                        <button onClick={Click} value={"italy"}
                                className={`${styles[`photography__buttons-button${Active === "italy" ? "--active" : ""}`]} ${styles["button"]}`}>ITALY
                        </button>
                        <button onClick={Click} value={"australia"}
                                className={`${styles[`photography__buttons-button${Active === "australia" ? "--active" : ""}`]} ${styles["button"]}`}>AUSTRALIA
                        </button>
                        <button onClick={Click} value={"india"}
                                className={`${styles[`photography__buttons-button${Active === "india" ? "--active" : ""}`]} ${styles["button"]}`}>INDIA
                        </button>
                        <button onClick={Click} value={"brazil"}
                                className={`${styles[`photography__buttons-button${Active === "brazil" ? "--active" : ""}`]} ${styles["button"]}`}>BRAZIL
                        </button>
                    </div>

                    <div className={`${styles[`photography__gallary${Active === "italy" ? "--active" : ""}`]}`}>
                        <img className={styles["photography__gallary-photo"]} src={Italy_1}/>
                        <img className={styles["photography__gallary-photo"]} src={Italy_2}/>
                        <img className={styles["photography__gallary-photo"]} src={Italy_3}/>
                        <img className={styles["photography__gallary-photo"]} src={Italy_4}/>
                    </div>
                    <div className={`${styles[`photography__gallary${Active === "india" ? "--active" : ""}`]}`}>
                        <img className={styles["photography__gallary-photo"]} src={India_1}/>
                        <img className={styles["photography__gallary-photo"]} src={India_2}/>
                        <img className={styles["photography__gallary-photo"]} src={India_3}/>
                    </div>
                    <div className={`${styles[`photography__gallary${Active === "brazil" ? "--active" : ""}`]}`}>
                        <img className={styles["photography__gallary-photo"]} src={Brazil_1}/>
                        <img className={styles["photography__gallary-photo"]} src={Brazil_2}/>
                        <img className={styles["photography__gallary-photo"]} src={Brazil_3}/>
                    </div>
                    <div className={`${styles[`photography__gallary${Active === "australia" ? "--active" : ""}`]}`}>
                        <img className={styles["photography__gallary-photo"]} src={Australia_1}/>
                        <img className={styles["photography__gallary-photo"]} src={Australia_2}/>
                        <img className={styles["photography__gallary-photo"]} src={Australia_3}/>
                        <img className={styles["photography__gallary-photo"]} src={Australia_4}/>
                    </div>
                </div>
            </Element>
        </section>
    );
};

export default Photography;