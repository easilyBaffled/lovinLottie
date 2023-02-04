import Box from '@mui/material/Box';

import { useRef } from 'react';
import disney from './assets/disney-settings.json';
import headspace from './assets/headspace.json';
import instacart from './assets/instacart.json';
import spotify from './assets/spotify.json';
import twitter from './assets/twitter.json';
import './style.css';

import { ReactComponent as HeadspaceLogo } from './assets/headspace-logo.svg';
import { ReactComponent as DisneyNowLogo } from './assets/icons8-disney-now.svg';
import { ReactComponent as InstacartLogo } from './assets/icons8-instacart.svg';
import { ReactComponent as SpotifyLogo } from './assets/icons8-spotify.svg';
import { ReactComponent as TwitterLogo } from './assets/icons8-twitter.svg';

import { LabeledLottieCard } from '../../components/LabeledLottieCard';

const useOrcestration = (length) => {
  const refs = Array.from({ length }, () => useRef());

  return refs.map((ref, i) => ({
    lottieRef: ref,
    onComplete: () => {
      const next = refs[length === i + 1 ? 0 : i + 1].current;

      next.setSpeed(next.getDuration() / 2);
      next.goToAndPlay(0);
    },
    loop: false,
  }));
};

const examples = { twitter, instacart, headspace, spotify, disney };

const logoDict = {
  twitter: <TwitterLogo className="logo" />,
  instacart: <InstacartLogo className="logo" />,
  headspace: <HeadspaceLogo viewBox="0 0 40 40" className="logo" />,
  spotify: <SpotifyLogo className="logo" />,
  disney: <DisneyNowLogo className="logo" />,
};

export const Slide = () => {
  const refs = useOrcestration(Object.keys(examples).length);

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
      {Object.entries(examples).map(([name, json], i) => (
        <LabeledLottieCard
          key={name}
          lottieProps={{
            id: name,
            animationData: json,
            ...refs[i],
            onDOMLoaded: () => {
              if (i === 0) {
                refs[0].lottieRef.current.play();
              }
            },
          }}
          label={
            <>
              {logoDict[name]} {name.toUpperCase()}
            </>
          }
        />
      ))}
    </Box>
  );
};
