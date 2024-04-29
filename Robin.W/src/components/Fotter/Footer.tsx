import style from "./_Footer.module.scss"
import Logo from "/image/logo.svg"
import IconNet from "../Svg/IconNet/IconNet.tsx";
import IconTwitter from "../Svg/IconTwitter/IconTwitter.tsx";
import IconLinked from "../Svg/IconLinked/IconLinked.tsx";
function Footer (){
    return(
        <footer className={`${style["footer"]}`}>
            <div className={`${style["footer__inner"]} ${style["container"]}`}>
                <div className={`${style["footer__wrapper"]}`}>
                    <div className={`${style["footer__top"]}`}>
                        <img className={`${style["footer__logo"]}`} alt={"Logo"} src={Logo} loading={"lazy"}/>
                        <ul className={`${style["footer__social"]}`}>
                            <li className={`${style["footer__social-net"]}`}><a className={`${style["footer__social-net-link"]}`} href={"#"}><IconNet/></a></li>
                            <li className={`${style["footer__social-twitter"]}`}><a className={`${style["footer__social-twitter-link"]}`} href={"#"}><IconTwitter/></a></li>
                            <li className={`${style["footer__social-linked"]}`}><a className={`${style["footer__social-linked-link"]}`} href={"#"}><IconLinked/></a></li>
                        </ul>
                    </div>
                    <ul className={`${style["footer__links"]} ${style["links-list-first"]}`}>
                        <li><a href="#!" className={`${style["footer__links-link"]}`}>Home</a></li>
                        <li><a href="#!" className={`${style["footer__links-link"]}`}>About</a></li>
                        <li><a href="#!" className={`${style["footer__links-link"]}`}>Work</a></li>
                        <li><a href="#!" className={`${style["footer__links-link"]}`}>Process</a></li>
                    </ul>
                    <ul className={`${style["footer__links"]} ${style["links-list-twenty"]}`}>
                        <li><a href="#!" className={`${style["footer__links-link"]}`}>Store</a></li>
                        <li><a href="#!" className={`${style["footer__links-link"]}`}>Blog</a></li>
                        <li><a href="#!" className={`${style["footer__links-link"]}`}>Reading List</a></li>
                    </ul>
                </div>
                <p className={`${style["footer__copyright"]} ${style["dark-grey"]}`}> Not Copyright 2020 • Robin Williams. Webflow cloneable</p>

            </div>
        </footer>
    )
}

export default Footer