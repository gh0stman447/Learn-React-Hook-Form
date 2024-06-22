import { Button } from '@mui/material';

// eslint-disable-next-line react/prop-types
const PrimaryButton = ({ children, ...props }) => {
  return (
    <Button
      {...props}
      fullWidth
      variant='contained'
      color='primary'
      style={{ margin: '3px 0 2px' }}
    >
      {children}
    </Button>
  );
};

export default PrimaryButton;
