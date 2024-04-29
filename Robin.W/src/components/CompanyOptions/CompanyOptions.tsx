const CompanyOptions:React.FC<ICompanyOptions> = ({options}) => {
    return (
        <>
            {options.map((option, index) => {
                return (
                    <div key={index} className={option.classContainer}>
                        <img className={option.img.classImg} src={option.img.src} alt={option.img.alt}/>
                    </div>
                )
            })}
        </>
    )
};

export interface ICompanyOptions{
    options:Array<ICompanyOption>,
}
export interface ICompanyOption{
    classContainer:string
    img:{
        classImg:string
        src:string
        alt:string
    }
}
export default CompanyOptions;