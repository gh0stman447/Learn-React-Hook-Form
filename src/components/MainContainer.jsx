import { Container } from '@mui/material';

// eslint-disable-next-line react/prop-types
const MainContainer = ({ children, ...props }) => {
  return (
    <Container
      container='main'
      maxWidth='xs'
      style={{ marginTop: '4', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
      {...props}
    >
      {children}
    </Container>
  );
};

export default MainContainer;
