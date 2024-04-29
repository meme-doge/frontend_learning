import {ReactNode} from "react";


const Skill: React.FC<ISkills> = ({skills}) => {
    return (
        <>
            {skills.map((skill, index: number) => {
                return (
                    <div key={index} className={skill.container}>
                        {skill.svg}
                        <h3 className={skill.title.className}>{skill.title.value}</h3>
                        <p className={skill.subtitle.className}>{skill.subtitle.value}</p>
                    </div>
                )
            })}
        </>
    )
}

export interface ISkills {
    skills: Array<ISkill>
}

export interface ISkill {
    container: string,
    svg: ReactNode,
    title: {
        className: string
        value: string
    },
    subtitle: {
        className: string
        value: string
    }
}

export default Skill;
