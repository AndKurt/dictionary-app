import clsx from 'clsx';
import React, { useState } from 'react';
import styles from './CollapseList.module.scss';

interface ICollapseList {
  title: string;
  values: string[];
}

export const CollapseList = ({ title, values }: ICollapseList) => {
  const [open, setOpen] = useState<boolean>(false);

  const toggle = () => {
    setOpen((prev) => !prev);
  };

  return (
    <>
      <div
        onClick={toggle}
        className={open ? clsx(styles.titleContainer, styles.active) : styles.titleContainer}
      >
        <h3>{title}</h3>
        <span>{open ? '-' : '+'}</span>
      </div>
      <ol className={styles.collapse}>
        {values.map((value) => (
          <li className={open ? clsx(styles.content, styles.show) : styles.content} key={value}>
            {value}
          </li>
        ))}
      </ol>
    </>
  );
};
