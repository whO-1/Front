"use client"
import styles from './CardsGallerySkeleton.module.css';

export default function CardsGallerySkeleton(){
    return (
        <section id="gallery" className="bg-light">
            <div className="container">
                <div className="row d-flex flex-row justify-content-center">
                    {Array.from({ length: 3 }).map((_, index) => (
                        <div className={"col-lg-4 col-md-6 "} key={index}>
                            <div className={styles.card}>
                                <div className={`${styles['card-img']} ${styles.skeleton} ${styles['skeleton-img']}`} />
                                <div className={`${styles.skeleton} ${styles['skeleton-text']} ${styles['skeleton-title']}`} />
                                <div className={`${styles.skeleton} ${styles['skeleton-text']} ${styles['skeleton-paragraph']}`} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

