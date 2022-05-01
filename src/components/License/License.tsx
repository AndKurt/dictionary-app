import React from 'react';
import styles from './License.module.scss';
import { ILicense } from '../../interfaces';

export const License = (props: ILicense) => {
  return (
    <>
      <h5>License:</h5>
      <a className={styles.licenseLink} href={props.url}>
        {props.name}
      </a>
    </>
  );
};
