import React from "react"
import styles from "../../styles/Footer.module.css"
import { Link, Routes } from "react-router-dom";
import logo from "../../images/logo.svg"

const Footer = (props) => {
    return (
        <section className={styles.footer}>
            <div className={styles.logo}>
                <Link to={Routes.HOME}>
                    <img src={logo} alt="Stuff" />
                </Link>
            </div>

            <div className={styles.rights}>
                Developed by Danicho01
            </div>
            <div className={styles.socials}>
                <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noreferrer"
                >
                    <svg className={styles["icon-cart"]}>
                        <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#instagram`} />
                    </svg>
                </a>

                <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noreferrer"
                >
                    <svg className={styles["icon-cart"]}>
                        <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#facebook`} />
                    </svg>
                </a>

                <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noreferrer"
                >
                    <svg className={styles["icon-cart"]}>
                        <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#youtube`} />
                    </svg>
                </a>
            </div>
        </section>
    )
};

export default Footer;
