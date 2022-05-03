import React from 'react';
import styles from './License.module.scss';
import { ILicense } from '../../interfaces';

export const License = ({ url, name }: ILicense) => {
  return (
    <div className={styles.licenseContainer}>
      <h3>License:</h3>
      <a className={styles.licenseLink} href={url}>
        {name}
      </a>
    </div>
  );
};
