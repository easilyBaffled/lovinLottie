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

document.addEventListener('click', (e) => {
    e.target.setAttribute('fill-opacity', 1);
    e.target.style.fill =
        '#' +
        Math.floor(Math.random() * 16777215).toString(16);
    e.target.style.stroke =
        '#' +
        Math.floor(Math.random() * 16777215).toString(16);
});
