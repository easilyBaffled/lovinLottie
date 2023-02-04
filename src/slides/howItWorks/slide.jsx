import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import { useRef } from 'react';
import js from './assets/js.json';
import adobe from './assets/adobe-after-effects.json';
import arrowRight from './assets/arrow-right.json';
import lottieLogo2 from './assets/lottie-logo2.json';
import Lottie from 'lottie-react';
import './style.css';

const cardStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flex: '0 0 200px',
  width: '200px',
  height: '200px',
};

const useOrcestration = (length) => {
  const refs = Array.from({ length }, () => useRef());

  return refs.map((ref, i) => ({
    lottieRef: ref,
    onComplete: () => {
      const next = refs[length === i + 1 ? 0 : i + 1].current;
      next.setSpeed(next.getDuration() / 2);
      next.play();
    },
    loop: false,
  }));
};

export const Slide = () => {
  const refs = useOrcestration(5);

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
      <Card sx={cardStyle}>
        <Lottie
          animationData={adobe}
          autoplay={false}
          {...refs[0]}
          onDOMLoaded={() => {
            refs[0].lottieRef.current.play();
          }}
        />
      </Card>
      <Box sx={cardStyle}>
        <Lottie animationData={arrowRight} autoplay={false} {...refs[1]} />
      </Box>
      <Card sx={cardStyle}>
        <Lottie
          id="lottie-logo"
          animationData={lottieLogo2}
          autoplay={false}
          {...refs[2]}
        />
      </Card>
      <Box sx={cardStyle}>
        <Lottie animationData={arrowRight} autoplay={false} {...refs[3]} />
      </Box>
      <Card sx={cardStyle}>
        <Lottie animationData={js} autoplay={false} {...refs[4]} />
      </Card>
    </Box>
  );
};
