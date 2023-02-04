import { Card } from './Card';
import Lottie from 'lottie-react';

export const LottieCard = ({ cardStyle, lottieProps, ...props }) => (
  <Card {...props}>
    <Lottie autoplay={false} {...lottieProps} />
  </Card>
);
