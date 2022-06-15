import Link from 'next/link';
import React from 'react';
import styles from '../styles/Header.module.css';

const Header = () => {
  return (
    <div>
      <Link className={styles.logo} href="/">Quizlet</Link>
    </div>
  )
}

export default Header