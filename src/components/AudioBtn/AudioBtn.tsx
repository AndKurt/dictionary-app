import React from 'react';
import styles from './AudioBtn.module.scss';
import soundIcon from '../../assets/svg/sound.svg';

interface IAudioSrs {
  audio: string;
}

export const AudioBtn = ({ audio }: IAudioSrs) => {
  const audioObj = new Audio(audio);

  const playAudio = () => {
    audioObj.play();
  };
  return (
    <button className={styles.audio} onClick={playAudio}>
      <img src={soundIcon} alt="sound" />
    </button>
  );
};
