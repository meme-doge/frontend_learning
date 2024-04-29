import style from "./_Experience.module.scss"
import ExpDescription, {IExpDesriptions} from "../ExpDescription/ExpDescription.tsx";
import {Element} from "react-scroll";

function Experience(){
    const _options: IExpDesriptions ={
        options:[
            {
                option_className:style["experience__option"],
                title: {
                    className:"label dark-grey",
                    Value: "01",
                },
                subtitle_className:style["experience__option-subtitle"],
                offer_1: {
                    className:style["green"],
                    Value: "Google",
                },
                offer_2: {
                    className:"",
                    Value: ", Interaction Designer",
                },
                description:{
                    className:`${style["experience__option-description"]}, ${style["dark-grey"]}`,
                    Value:"I currently am the lead designer on the interaction design team for Google Play."
                }
            },
            {
                option_className:style["experience__option"],
                title: {
                    className:"label dark-grey",
                    Value: "02",
                },
                subtitle_className:style["experience__option-subtitle"],
                offer_1: {
                    className:style["blue"],
                    Value: "Facebook",
                },
                offer_2: {
                    className:"",
                    Value: ", Product Designer",
                },
                description:{
                    className:`${style["experience__option-description"]}, ${style["dark-grey"]}`,
                    Value:"I’ve worked on a wide variety of internal tools for facebook over the past 6 years."
                }
            },
            {
                option_className:style["experience__option"],
                title: {
                    className:"label dark-grey",
                    Value: "03",
                },
                subtitle_className:style["experience__option-subtitle"],
                offer_1: {
                    className:style["pink"],
                    Value: "Dribbble",
                },
                offer_2: {
                    className:"",
                    Value: ", Graphic Designer",
                },
                description:{
                    className:`${style["experience__option-description"]}, ${style["dark-grey"]}`,
                    Value:"I started my design career with Dribbble. I was incharge of creating illustrations for the platform."
                }
            },
        ]
    }

    return(
        <section className={style["experience"]}>
            <Element name="experience">
                <div className={`${style["experience__inner"]} ${style["container"]}`}>
                    <p className={`${style["experience__title"]} ${style["overline"]} ${style["dark-grey"]}`}>work experience</p>
                    <h2 className={`${style["experience__subtitle"]} ${style["mobile-heading"]}`}>Companies I have worked for in the past</h2>

                    <div className={`${style["experience__options"]}`}>
                        <ExpDescription {..._options}></ExpDescription>
                    </div>
                </div>
            </Element>
        </section>
    )
}

export default Experience