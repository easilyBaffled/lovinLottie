import MUICard from '@mui/material/Card';

const defaultCardStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flex: '0 0 200px',
  width: '200px',
  height: '200px',
  background: '#f2f2f2',
};

export const Card = ({ cardStyle, children, ...props }) => (
  <MUICard sx={{ ...defaultCardStyle, ...cardStyle }} {...props}>
    {children}
  </MUICard>
);
