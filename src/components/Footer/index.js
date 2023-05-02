import styles from './Footer.module.scss'


function Footer() {
  return (
    <footer className={styles.main_screen_3}>
      <div className={styles.footer_1}>
        <img src="/img/logo.svg" alt="Логотип" />

        <div className={styles.footer_menu}>
          <p>О нас</p>
          <p>Контакты</p>
        </div>

        <div className={styles.footer_social}>
          <img src="/img/facebook.png" alt="Facebook" />
          <img src="/img/instagram.png" alt="Instagram" />
          <img src="/img/twitter.png" alt="Twitter" />
        </div>
      </div>

      <div className={styles.footer_2}>
        <div className={styles.footer_2_copyright}>
          <p>EbLib</p>
          <div className={styles.footer_2_copyright_group}>
            <img
              width={14}
              height={14}
              src="/img/copyright.png"
              alt="copyright"
            />
            <p>2023 Все права защищены</p>
          </div>
        </div>

        <p>Политика конфиденциальности</p>
      </div>
    </footer>
  );
}

export default Footer;
