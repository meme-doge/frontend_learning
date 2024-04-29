import style from "./_Skillset.module.scss"
import Skill, {ISkills} from "../Skill/Skill.tsx";
import IconProductDesign from "../Svg/IconProductDesign/IconProductDesign.tsx";
import IconVisualDesign from "../Svg/IconVisualDesign/IconVisualDesign.tsx";
import IconMotionDesign from "../Svg/IconMotionDesign/IconMotionDesign.tsx";
import IconPhotography from "../Svg/IconPhotography/IconPhotography.tsx";

// import Logo from  "/image/vector.svg";
const Skillset = () =>{


    const skills_first:ISkills = {
        skills: [
            {
                container: `${style["skillset__skills-skill"]}`,
                title: {
                    className: "",
                    value: "Product Design"
                },
                subtitle: {
                    className: `${style["dark-grey"]}`,
                    value: "Working at Facebook has taught me a lot about how to understand users, solve problems and build great products."
                },
                svg: <IconProductDesign className={`${style["primary"]}`}/>
            },
            {
                container: `${style["skillset__skills-skill"]}`,
                title: {
                    className: "",
                    value: "Visual Design"
                },
                subtitle: {
                    className: `${style["dark-grey"]}`,
                    value: "My experience at dribbble has helped me learn to develop the eye for design. Colors, typography, layout and the whole package."
                },
                svg: <IconVisualDesign className={`${style["primary"]}`}/>
            }
        ]
    }
    const skills_twenty:ISkills = {
        skills: [
            {
                container: `${style["skillset__skills-skill"]}`,
                title: {
                    className: "",
                    value: "Product Design"
                },
                subtitle: {
                    className: `${style["dark-grey"]}`,
                    value: "Working at Facebook has taught me a lot about how to understand users, solve problems and build great products."
                },
                svg: <IconMotionDesign className={`${style["primary"]}`}/>
            },
            {
                container: `${style["skillset__skills-skill"]}`,
                title: {
                    className: "",
                    value: "Visual Design"
                },
                subtitle: {
                    className: `${style["dark-grey"]}`,
                    value: "My experience at dribbble has helped me learn to develop the eye for design. Colors, typography, layout and the whole package."
                },
                svg: <IconPhotography className={`${style["primary"]}`}/>
            }
        ]
    }

    return (
        <section className={`${style["skillset"]}`}>
            <div className={`${style["skillset__inner"]} ${style["container"]}`}>
                <div className={`${style["skillset__text"]}`}>
                    <h2 className={`${style["skillset__text-title"]}`}>Skillset</h2>
                    <p className={`${style["skillset__text-subtitle"]}`}>With skills in over 4 different fields of
                        design, I am the perfect person to hire when it comes to a full fledged project. Whatever your
                        needs are, I can pretty much take on any challenge.</p>
                </div>
                <div className={`${style["skillset__skills"]}`}>
                    <div className={`${style["skillset__skills-first"]}`}>
                        <Skill {...skills_first}></Skill>
                    </div>
                    <div className={`${style["skillset__skills-twenty"]}`}>
                        <Skill {...skills_twenty}></Skill>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Skillset