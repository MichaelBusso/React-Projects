import styles from './components style/key.module.css';

const Key = (props) => {
    return (
        <button
            className={props.value.length > 1 ? `${styles.button} ${styles.key}` : styles.key}
            onClick={() => props.func()}
        >
            {props.value}
        </button>
    )
}

export default Key;