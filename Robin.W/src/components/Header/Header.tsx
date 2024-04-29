import NavigateNav from "../NavigateNav/NavigateNav.tsx";
import styles from "./_header.module.scss"
import Logo from "/image/logo.svg"
import {useState} from "react";
const Header = () => {
    const [activeDialog, setActiveDialog] = useState("")
    const _OpenButtonClick = () => {
        if (!activeDialog) {
            setActiveDialog(styles["header__dialog--active"])
            document.body.style.overflow = "hidden"
        } else{
            setActiveDialog("")
            document.body.style.overflow = "auto"
        }
    }
    const ClickLink=()=>{
        setActiveDialog("")
        document.body.style.overflow = "auto"
    }

    const NavigateLinksProps = {
        classNav:`${styles["header__nav"]} ${styles["hidden-mobile"]}`,
        links:[
            {text:"Experience", to:"experience", all:{spy:true, href:"#experience", offset:-88, className:styles["navigate-link"], activeClass:`${styles["navigate-link--active"]}`}},
            {text:"Work", to:"work", all:{spy:true, href:"#work",  offset:-88, className:styles["navigate-link"], activeClass:`${styles["navigate-link--active"]}`}},
            {text:"Photography", to:"photography", all:{spy:true, href:"#photography", offset:-88, className:styles["navigate-link"], activeClass:`${styles["navigate-link--active"]}`}},
            {text:"Contact", to:"contact", all:{spy:true, href:"#contact", offset:-88, className:styles["navigate-link"], activeClass:`${styles["navigate-link--active"]}`}}
        ]
    }
    const NavigateDialogProps = {
        classNav:`${styles["header__dialog"]} ${activeDialog} ${styles["container"]} ${styles["visible-mobile"]}`,
        func:ClickLink,
        links:[
            {text:"Experience", to:"experience", all:{spy:true, href:"#experience", offset:-72, className: `${styles["navigate-link"]} ${styles["header__dialog-link"]}`, activeClass:`${styles["navigate-link--active"]}`}},
            {text:"Work", to:"work", all:{spy:true, href:"#work", offset:-72, className: `${styles["navigate-link"]} ${styles["header__dialog-link"]}`, activeClass:`${styles["navigate-link--active"]}`}},
            {text:"Photography", to:"photography", all:{spy:true, href:"#photography", offset:-72, className: `${styles["navigate-link"]} ${styles["header__dialog-link"]}`, activeClass:`${styles["navigate-link--active"]}`}},
            {text:"Contact", to:"contact", all:{spy:true, href:"#contact", offset:-72, className: `${styles["navigate-link"]} ${styles["header__dialog-link"]}`, activeClass:`${styles["navigate-link--active"]}`}}
        ]
    }

    return(
        <header className={styles["header"]}>
            <div className={`${styles["header__inner"]} ${styles["container"]}`}>
                <img className={styles["header__logo"]} alt={""} src={Logo} loading={"lazy"}/>
                <NavigateNav {...NavigateLinksProps}/>
                <button onClick={_OpenButtonClick} className={`${styles["header__burger"]} ${styles["visible-mobile"]} ${(activeDialog === styles["header__dialog--active"] ? styles["header__burger--open"] : styles["header__burger--close"])}`}></button>
                <NavigateNav {...NavigateDialogProps}/>
            </div>
        </header>
    )
}
export default Header