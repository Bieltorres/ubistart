import React from 'react';
import s from './style.module.css'; 

export const Loading = () => {
  return (
    <div className={s.loadingContainer}>
      <img src="/logoSmall.png" alt="Loading" className={s.loadingImage} />
    </div>
  );
};