import preloader from "./../../assets/images/preloader.svg";
import styles from "./Preloader.module.css";

export const Preloader = () => {
    return (
        <div className={styles.preloaderBlock}>
            <img src={preloader} alt="loading..."/>
        </div>
    )
}