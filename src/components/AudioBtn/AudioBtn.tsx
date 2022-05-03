import React from 'react';
import styles from './AudioBtn.module.scss';
import soundIcon from '../../assets/svg/sound.svg';

interface AudioSrs {
  audio: string;
}

export const AudioBtn = (props: AudioSrs) => {
  const audio = new Audio(props.audio);

  const playAudio = () => {
    audio.play();
  };
  return (
    <button className={styles.audio} onClick={playAudio}>
      <img src={soundIcon} alt="sound" />
    </button>
  );
};
