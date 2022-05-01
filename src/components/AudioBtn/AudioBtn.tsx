import React from 'react';
import styles from './AudioBtn.module.scss';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';

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
      <VolumeUpIcon sx={{ width: '30px' }} />
    </button>
  );
};
