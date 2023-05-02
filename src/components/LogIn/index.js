import styles from "./LogIn.module.scss";

function LogIn(props) {
  return (
    <div className={styles.overlay}>
      <div className={styles.wrapper}>
        <img onClick={props.onClose} height={28} widwth={28} src="img/close.svg" alt="Закрыть" />
        <div className={styles.data}>
          <div className={styles.data_info}>
            <p>Логин:</p>
            <input></input>
          </div>

          <div className={styles.data_info}>
            <p>Пароль:</p>
            <input></input>
          </div>
        </div>
        <div className={styles.data_btn}>
        <button>Войти</button>
        </div>

        <div className={styles.registration}>
          <button>Регистрация</button>
        </div>
      </div>
    </div>
  );
}

export default LogIn;
