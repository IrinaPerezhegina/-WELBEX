import React from "react";
import styles from "./scss/libs/wrapper.module.scss";
import Header from "./components/header/header";
import Main from "./components/main/main";
import Footer from "./components/footer/footer";

function App() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.ballOneTwo}></div>
            <div className={styles.ballThreeFour}></div>
            <div className={styles.ballFive}></div>
            <Header />
            <Main />
            <Footer />
        </div>
    );
}

export default App;
