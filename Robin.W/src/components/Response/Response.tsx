import style from "./_Response.module.scss"
import Reviews, {IReviews} from "../Reviews/Reviews.tsx"
import First from "/image/First.png"
import Twenty from "/image/Twenty.png"
import Third from "/image/Third.png"
const Response = () => {
    const reviews:IReviews= {
        reviews:[
            {
                img:{ src:First, alt:"first"},
                title:"‘’Robin is one of the best designers I have worked with in my entire life. He is a designer who is very capable of taking up complex projects and delivers impeccable design.’’",
                subtitle:"Richard Owens",
                author:"CEO, Company 1"
            },
            {
                img:{ src:Twenty, alt:"twenty"},
                title:"‘’I think Robin has an incredible gift. It has been an absolute pleasure to work with a designer of this caliber.’’",
                subtitle:"Emily Parker",
                author:"CEO, Company 2"
            },
            {
                img:{ src:Third, alt:"third"},
                title:"‘’All I can say that, Robin is a phenomenal designer. The wavelength at which he thinks is astoundaing. I love the focus, passion and attention to detial in the design.’’",
                subtitle:"Vincent Rudd",
                author:"CEO, Company 3"
            }
        ]
    };
    return (
        <section className={`${style["response"]}`}>
            <div className={`${style["response__inner"]} ${style["container"]}`}>
                <div className={`${style["response__text"]}`}>
                    <h2 className={`${style["response__text-title"]} ${style["mobile-heading"]}`}>This is what people say about me</h2>
                    <p className={`${style["response__text-subtitle"]} ${style["dark-grey"]}`}>Here are a few lines from people who I have worked with over the past 8+ years in my design career.</p>
                    <a href="#" className={`${style["response__text-button"]} ${style["underline-link"]}`}>See all testimonials</a>
                </div>
                <div className={`${style["response__reviews"]}`}>
                    <Reviews {...reviews}></Reviews>
                </div>
            </div>
        </section>
    );
};

export default Response;