import React from 'react';
import styles from './Footer.module.scss';
import githubLogo from '../../assets/githubLogo.svg';

const GITHUB_LINK = 'https://github.com/AndKurt/';
const GITHUB_NAME = 'AndKurt';

export const Footer = () => (
  <div className={styles.footer}>
    <a href={GITHUB_LINK} target="_blank" rel="noreferrer noopener">
      <img className={styles.logo} src={githubLogo} alt="github-logo" />
      {GITHUB_NAME}
    </a>
    <p>Copyright &copy; 2022</p>
  </div>
);
