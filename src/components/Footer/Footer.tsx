import React from 'react';
import styles from './Footer.module.scss';
import githubLogo from '../../assets/github.svg';

export const Footer = () => {
  return (
    <div className={styles.footer}>
      <a href="https://github.com/AndKurt/" target="_blank" rel="noreferrer noopener">
        <img className={styles.logo} src={githubLogo} alt="github-logo" />
        <p>AndKurt</p>
      </a>
      <div>Copyright &copy; 2022</div>
    </div>
  );
};
