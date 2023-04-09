import React from "react";
import styles from "./header.module.scss";
import logo from "../../../App/assets/header/logo.svg";
import logoText from "../../../App/assets/header/logo text.svg";
import telegram from "../../../App/assets/header/telegram.svg";
import phone from "../../../App/assets/header/phone.svg";
import viber from "../../../App/assets/header/viber.svg";

const Header = () => {
    return (
        <>
            <header className={styles.headerWrapper}>
                <div className={styles.header}>
                    <div className={styles.headerLogo}>
                        <a className={styles.headerLogoLink} href="#">
                            <img src={logo} alt="Logo" />
                            <img src={logoText} alt="LogoText" />
                        </a>
                        <div className={styles.headerLogoText} href="#">
                            <span>крупный интегратор CRM </span>{" "}
                            <span>в Росcии и ещё 8 странах</span>
                        </div>
                    </div>
                    <div className={styles.headerNavBar}>
                        <a href="#">Услуги</a>
                        <a href="#">Виджеты</a>
                        <a href="#">Интеграции</a>
                        <a href="#">Кейсы</a>
                        <a className={styles.headerNav} href="#">
                            Сертификаты
                        </a>
                    </div>
                    <div className={styles.headerTel}>
                        <span>+7 555 555-55-55</span>
                    </div>
                    <div className={styles.headerSocial}>
                        <a href="#">
                            <img src={telegram} alt="telegram" />
                        </a>
                        <a href="#">
                            <img src={phone} alt="phone" />
                        </a>
                        <a href="#">
                            <img src={viber} alt="viber" />
                        </a>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
