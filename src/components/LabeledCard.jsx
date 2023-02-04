import Stack from '@mui/material/Stack';
import MUICard from '@mui/material/Card';
import { Card } from './Card';

export const LabeledCard = ({ label, children, ...props }) => (
  <Stack spacing={2}>
    <Card>{children}</Card>

    <MUICard
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
    </MUICard>
  </Stack>
);
