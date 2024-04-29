import styles from "./_MyProjects.module.scss"
import Projects, {IProjects} from "../Projects/Projects.tsx";
import {Element} from "react-scroll";


import project_1 from "/image/Rectangle 41.png"
import project_2 from "/image/Rectangle 41 (1).png"
import project_3 from "/image/Rectangle 41 (2).png"
import project_4 from "/image/Rectangle 41 (3).png"

const MyProjects = () => {
    const projects_top:IProjects = {
        projects:[
            {
                link:"#!",
                title:"Restaurant Website Design",
                subtitle:"I worked with the guys at CBRE to redesign their entire website and mobile app fro both Android and iOS. This project lasted for 4 months and was a very challenging one.",
                img:{
                    src:project_1,
                    alt:"image"
                }
            },
            {
                link:"#!",
                title:"Restaurant Website Design",
                subtitle:"I worked with the guys at CBRE to redesign their entire website and mobile app fro both Android and iOS. This project lasted for 4 months and was a very challenging one.",
                img:{
                    src:project_4,
                    alt:"image"
                }
            }
        ]
    }
    const projects_bottom:IProjects = {
        projects:[
            {
                link:"#!",
                title:"Restaurant Website Design",
                subtitle:"I worked with the guys at CBRE to redesign their entire website and mobile app fro both Android and iOS. This project lasted for 4 months and was a very challenging one.",
                img:{
                    src:project_2,
                    alt:"image"
                }
            },
            {
                link:"#!",
                title:"Restaurant Website Design",
                subtitle:"I worked with the guys at CBRE to redesign their entire website and mobile app fro both Android and iOS. This project lasted for 4 months and was a very challenging one.",
                img:{
                    src:project_3,
                    alt:"image"
                }
            }
        ]
    }

    return (
        <section className={`${styles["projects"]}`}>
            <Element name={"work"}>
                <div className={`${styles["projects__inner"]} ${styles["container"]}`}>
                    <div className={`${styles["projects__top"]}`}>
                        <div className="projects__top-text">
                            <p className={styles["overline"]}>my projects</p>
                            <h2 className={`${styles["mobile-heading"]}`}>Work that I’ve done for the past 8 years</h2>
                        </div>
                        <div className={styles["projects__top-list"]}>
                            <Projects {...projects_top}></Projects>
                        </div>
                    </div>
                    <div className={`${styles["projects__bottom"]}`}>
                        <div className={styles["projects__bottom-list"]}>
                            <Projects {...projects_bottom}></Projects>
                        </div>
                        <div className={`${styles["projects__bottom-button"]}`}>
                            <a href={"#"} className={`${styles["projects__bottom-button-link"]} ${styles["button"]}`}>View all projects</a>
                        </div>
                    </div>
                </div>
            </Element>
        </section>
    );
};

export default MyProjects;