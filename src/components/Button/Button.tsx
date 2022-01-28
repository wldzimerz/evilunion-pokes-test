import Chip from '@mui/material/Chip';
import { memo, useCallback } from 'react';

type Props = {
  name: string;
  url: string;
  onChipClick: (url: string) => void;
};

const chipStyle = {
  boxSizing: 'border-box',
  fontSize: '20px',
  fontFamily: '"Raleway", sans-serif',
  margin: '3px 5px',
  padding: '20px',
};

const Button = memo(({ name, url, onChipClick }: Props) => {
  const handleClick = useCallback(() => {
    onChipClick(url);
  }, [onChipClick, url]);

  return <Chip clickable label={name} color='primary' onClick={handleClick} key={url} sx={chipStyle} />;
});

export default Button;
