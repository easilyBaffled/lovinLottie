import Box from '@mui/material/Box';
import './style.css';
import { SandpackExample } from '../../components/Sandbox';
import exampleCode from './example/lottie.js?raw';
import exampleStyles from './example/index.css?raw';

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
            }}
        >
            <SandpackExample
                files={{
                    'src/index.css': exampleStyles,
                    'src/index.js': exampleCode,
                }}
            />
        </Box>
    );
};
