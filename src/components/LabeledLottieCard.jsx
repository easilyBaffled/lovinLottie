import { LottieCard } from './LottieCard';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';

export const LabeledLottieCard = ({ label, ...props }) => (
  <Stack spacing={2}>
    <LottieCard {...props} />

    <Card
      sx={{
        p: 1,
        textAlign: 'center',
        height: '3rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '1rem',
      }}
    >
      {label}
    </Card>
  </Stack>
);
