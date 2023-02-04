import Box from '@mui/material/Box';
import loader from './assets/loader.json';
import { LabeledCard } from '../../components/LabeledCard';
import './style.css';

import { LabeledLottieCard } from '../../components/LabeledLottieCard';

// source: https://codepen.io/mhotovec/pen/egrWVL?editors=0110

export const Slide = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: '100vh',
        width: '100vw',

        flexWrap: 'wrap',
        background: 'tomato',
        p: '10vw',
      }}
    >
      <LabeledCard label="GIF 43.7 kB">
        <img
          src="https://www.michalhotovec.com/extra/loader/loader.gif"
          alt=""
        />
      </LabeledCard>

      <LabeledLottieCard
        lottieProps={{
          animationData: loader,
          autoplay: true,
          loop: true,
        }}
        label="Lottie 12.5kB*"
      />
    </Box>
  );
};
