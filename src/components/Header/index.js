import React from "react";
import styles from "./Header.module.scss";
import {Link} from 'react-router-dom'

function Header(props) {
  return (
    <header>
      <div className={styles.header_left}>
        <Link to="/Home">
        <img src="/img/logo.svg" alt="Логотип" />
        </Link>
      </div>

      <ul className={styles.header_right}>
        <li>
        <Link to="/Catalog">
          <span>Каталог</span>
          </Link>
        </li>
        <li>
          <span>О нас</span>
        </li>
        <li>
          <span>Контакты</span>
        </li>
        <li>
          <button onClick={props.onClickLogIn}>
            <img src="/img/account.svg" alt="Вход в личный кабинет" />
          </button>
        </li>
      </ul>
    </header>
  );
}

export default Header;
