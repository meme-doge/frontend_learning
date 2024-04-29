import {Link} from "react-scroll";
import React from "react";

const NavigateNav:React.FC<ILinks> =  ({links, classNav, func}) => {
    const LinkClick = (event:any)=>{
        window.location.hash = event.target.hash
    }

    return(
        <nav  className={classNav}>
            {links.map((link, index:number)=>{
                const {text,to, all } = link;
                return(
                    <Link onClick={()=>{
                        LinkClick(event)
                        if (typeof func==="function"){
                            func()
                        }
                    }} {...all} key={index} to={to}>{text}</Link>
                )
            })}
        </nav>
    )
}

export interface ILinks{
    classNav:string
    func?: () => void,
    links:Array<ILink>
}
export interface ILink{
    text: string,
    to:string,
    all: object,
}
export default NavigateNav
