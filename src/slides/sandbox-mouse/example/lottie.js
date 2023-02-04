import lottie from 'lottie-web';
import { create } from '@lottiefiles/lottie-interactivity';

import './index.css';

const animation = lottie.loadAnimation({
    container: document.getElementById('app'), // Required
    path: 'https://assets6.lottiefiles.com/packages/lf20_FISfBK.json',
    renderer: 'svg', // Required
    loop: true, // Optional
    autoplay: true, // Optional
    name: 'Hello World', // Name for future reference. Optional.
});

create({
    player: animation,
    mode: 'cursor',
    actions: [
        {
            position: { x: [0, 1], y: [-1, 2] },
            type: 'seek',
            frames: [0, 300],
        },
        {
            position: { x: -1, y: -1 },
            type: 'stop',
            frames: [0],
        },
    ],
});
