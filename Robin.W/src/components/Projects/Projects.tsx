import style from "./_Projects.module.scss"
const Projects:React.FC<IProjects> = ({projects}) => {
    return (
        projects.map((project, index)=>{
            return(
                <a href={project.link} className={`${style["project"]}`} key={index} >
                    <img  className={`${style["project__img"]}`} src={project.img.src} alt={project.img.alt}/>
                    <div className={`${style["project__text"]}`}>
                        <h3 className={`${style["project__text-title"]}`}>{project.title}</h3>
                        <p className={`${style["project__text-subtitle"]} ${style["dark-grey"]} ${style["body-one"]}`}>{project.subtitle}</p>
                    </div>
                </a>
            )
        })
    );
};

export interface IProjects {
    projects: Array<IProject>
}
export interface IProject {
    link:string
    img: {
        src:string
        alt:string
    }
    title:string
    subtitle:string
}
export default Projects;