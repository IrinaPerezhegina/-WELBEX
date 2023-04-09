import React from "react";
import styles from "./main.module.scss";

const Main = () => {
    return (
        <section className={styles.mainWrapper}>
            <div className={styles.mainContentLeft}>
                <h2>
                    Зарабатывайте <br />
                    больше{" "}
                </h2>
                <h2>c WELBEX</h2>
                <span>
                    Развиваем и контролируем
                    <br /> продажи за вас
                </span>
            </div>
            <div className={styles.mainContentRight}>
                <h2>
                    Вместе c{" "}
                    <span>
                        бесплатной <br /> консультацией{" "}
                    </span>
                    мы дарим:
                </h2>
                <div className={styles.mobile}>
                    <div className={styles.mobileText}>
                        <h2 className={styles.mobileText}> Skype аудит</h2>
                        {"   "}
                        <h2>30 виджетов</h2>
                    </div>
                    <div className={styles.mobileDash}>
                        <h2 className={styles.mobileDash}> Dashboard</h2>
                        {"   "}
                        <h2>Месяц аmoCRM</h2>
                    </div>
                </div>
                <div className={styles.consultation}>
                    <div className={styles.consultationWidget}>
                        <h2>Виджеты</h2>
                        <h3>
                            30 готовых <br />
                            решений
                        </h3>
                    </div>

                    <div className={styles.consultationDashboard}>
                        <h2>Dashboard</h2>
                        <h3>
                            c показателями <br />
                            вашего бизнеса
                        </h3>
                    </div>
                    <div className={styles.consultationSkype}>
                        <h2>Skype Аудит</h2>
                        <h3>
                            отдела продаж
                            <br /> и CRM системы
                        </h3>
                    </div>
                    <div className={styles.consultationDays}>
                        <h2>35 дней</h2>
                        <h3>
                            использования <br /> CRM
                        </h3>
                    </div>
                </div>
                <button>Получить консультацию </button>
            </div>
        </section>
    );
};

export default Main;
