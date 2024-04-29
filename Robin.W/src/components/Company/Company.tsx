import styles from "./_Company.module.scss"

import CompanyOptions, {ICompanyOptions} from "../CompanyOptions/CompanyOptions.tsx";

import company_1 from "/image/Company_1.png"
import company_2 from "/image/Company_2.png"
import company_3 from "/image/Company_3.png"
import company_4 from "/image/Company_4.png"
import company_5 from "/image/Company_5.png"
import company_6 from "/image/Company_6.png"
const Company = () => {

    const options:ICompanyOptions =
        {
            options:[
                {
                    classContainer:`${styles.company__option}`,
                    img:{
                        classImg:"",
                        src:company_1,
                        alt:""
                    }
                },
                {
                    classContainer:`${styles.company__option}`,
                    img:{
                        classImg:"",
                        src:company_2,
                        alt:""
                    }
                },
                {
                    classContainer:`${styles.company__option}`,
                    img:{
                        classImg:"",
                        src:company_3,
                        alt:""
                    }
                },
                {
                    classContainer:`${styles.company__option}`,
                    img:{
                        classImg:"",
                        src:company_4,
                        alt:""
                    }
                },
                {
                    classContainer:`${styles.company__option}`,
                    img:{
                        classImg:"",
                        src:company_5,
                        alt:""
                    }
                },
                {
                    classContainer:`${styles.company__option}`,
                    img:{
                        classImg:"",
                        src:company_6,
                        alt:""
                    }
                }
            ]
        }
    return(
        <section className={`${styles["company"]}`}>
            <div className={`${styles["company__inner"]} ${styles["container"]}`}>
                <div className={`${styles["company__list"]}`}>
                        <CompanyOptions {...options}/>
                </div>
            </div>
        </section>
    )
};


export default Company;