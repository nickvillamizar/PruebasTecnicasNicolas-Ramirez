import React from 'react';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { nextStyle } from '../store/styleSlice';
import styles from './StyleSwitcher.module.css';

const StyleSwitcher: React.FC = () => {
  const dispatch = useAppDispatch();
  const currentStyle = useAppSelector((state) => state.style.currentStyle);

  const handleClick = () => {
    dispatch(nextStyle());
  };

  return (
    <div className={styles[`containerStyle${currentStyle}`]}>
      <div className={styles[`textStyle${currentStyle}`]}>
        Texto con estilo {currentStyle + 1}
      </div>
      <button
        onClick={handleClick}
        className={styles[`buttonStyle${currentStyle}`]}
        aria-label="Cambiar estilo"
      >
        Cambiar Estilo
      </button>
    </div>
  );
};

export default StyleSwitcher;
