import React from "react";

const ExpDescription:React.FC<IExpDesriptions> = ({options}) => {
    return(
        <>
            {options.map((option, index:number)=> {
                return(
                    <div className={option.option_className} key={index}>
                        <span className={option.title.className}>{option.title.Value}</span>
                        <h3 className={option.subtitle_className}>
                            <span className={option.offer_1.className}>{option.offer_1.Value}</span>
                            <span className={option.offer_2.className}>{option.offer_2.Value}</span>
                        </h3>
                        <p className={option.description.className}>{option.description.Value}</p>
                    </div>
                )
            })}
        </>
    )
}

export interface IExpDesriptions{
    options: Array<IExpDesription>
}
export interface IExpDesription{
    option_className:string
    title:{
        className:string
        Value:string
    }
    subtitle_className:string
    offer_1:{
        className:string
        Value:string
    }
    offer_2:{
        className:string
        Value:string
    }
    description:{
        className:string
        Value:string
    }
}

export default ExpDescription