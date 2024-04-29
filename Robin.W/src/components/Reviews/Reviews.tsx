import React from "react";
import styles from "./_Reviews.module.scss"
const Reviews:React.FC<IReviews> = ({reviews}) => {
    return (
        reviews.map((review, index)=>{
          return (
              <div className={`${styles["review"]}`} key={index}>
                  <img className={`${styles.review__img}`} src={review.img.src} alt={review.img.alt}/>
                  <div className={`${styles["review__text"]}`}>
                      <h3 className={`${styles.review__title}`}>{review.title}</h3>
                      <p className={`${styles.review__subtitle} ${styles["dark-grey"]}`}>{review.subtitle}</p>
                      <p className={`${styles.review__author} ${styles["dark-grey"]}`}>{review.author}</p>
                  </div>
              </div>
          )
        })
    );
};

export interface IReviews {
    reviews: Array<IReview>
}
export interface IReview{
    img:{
        src:string
        alt:string
    }
    title:string
    subtitle:string
    author:string
}
export default Reviews;