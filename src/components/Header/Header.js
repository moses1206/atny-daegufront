import React from "react";
import styles from "./Header.module.css";
import xicon from "../../assets/xicon.png";
import atny from "../../assets/atny.png";
import useIcon from "../../assets/userIcon.png";
import cart from "../../assets/cart.png";

function Header() {
  return (
    <div className={styles.container}>
      {/* Header Sale */}
      <div className={styles.headerContainer}>
        <div className={styles.adText}>오늘 딱하루 폭탄 세일 50%</div>
        <div className='xIcon'>
          <img src={xicon} alt='' />
        </div>
      </div>
      {/* Header Login Menu */}
      <div className={styles.logoBarContainer}>
        <div className={styles.loginItem}>로그인</div>
        <div className={styles.loginItem}>회원가입</div>
        <div className={styles.loginItem}>고객센터</div>
      </div>
      <div className={styles.logoBarContainer}>
        <div>
          <img src={atny} alt='' />
        </div>
        <div>
          <div>
            <input className={styles.input} />
          </div>
          <div>
            <img src={useIcon} alt='' />
          </div>
          <div>
            <img src={cart} alt='' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
