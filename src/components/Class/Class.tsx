import React, { FC } from 'react';
import styles from './Class.module.scss';

interface ClassProps {}

const Class: FC<ClassProps> = () => (
  <div className={styles.Class} data-testid="Class">
    Class Component
  </div>
);

export default Class;
