import style from "./_Contact.module.scss"
import {Element} from "react-scroll";
const Contact = () => {
    return (
        <section className={`${style["contact"]}`}>
            <Element name="contact">
            <div className={`${style["contact__inner"]} ${style["container"]}`}>
                <div className={`${style["contact__wrapper"]}`}>
                    <div className={`${style["contact__text"]}`}>
                        <h2 className={`${style["contact__text-title"]} ${style["mobile-heading"]}`}>Let’s get started</h2>
                        <p className={`${style["contact__text-subtitle"]} ${style["dark-grey"]}`}>Now that you know a lot about me, let me know if you are interested to work with me.</p>
                    </div>
                    <form className={`${style["contact__form"]}`} action="" method="post">
                        <div className={`${style["contact__form-name"]}`}>
                            <label htmlFor="name">Name</label>
                            <input className={`${style["contact__form-name-input"]}`} id="name" type="text"/>
                        </div>
                        <div className={`${style["contact__form-email"]}`}>
                            <label htmlFor="email">Email</label>
                            <input className={`${style["contact__form-email-input"]}`} id="email" type="email"/>
                        </div>
                        <div className={`${style["contact__form-message"]}`}>
                            <label htmlFor="message">Message</label>
                            <textarea className={`${style["contact__form-message-input"]}`} id="message" typeof="text"/>
                        </div>
                        <input className={`${style["contact__form-button"]} ${style["button"]}`} type="submit" value="Let’s get started"/>
                    </form>
                </div>

            </div>
            </Element>
        </section>
    );
};

export default Contact;