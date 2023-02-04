import lottie from 'lottie-web';
import './index.css';

const animation = lottie.loadAnimation({
    container: document.getElementById('app'), // Required
    path: 'https://assets6.lottiefiles.com/packages/lf20_FISfBK.json',
    renderer: 'svg', // Required
    loop: true, // Optional
    autoplay: true, // Optional
    name: 'Hello World', // Name for future reference. Optional.
});
