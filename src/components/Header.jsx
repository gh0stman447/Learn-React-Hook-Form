import { Typography } from '@mui/material';

const Header = () => {
  return (
    <>
      <Typography
        className='text-teal-500'
        style={{
        fontFamily: "Permanent Marker, cursive",
          textAlign: 'center',
          fontSize: '40px',
          color: 'deeppink',
          textShadow: '1px 1px darkmagenta',
          margin: '3px 0 2px',
        }}
        component={'h1'}
        variant={'h5'}
      >
        The Ultimate Form Challenge
      </Typography>
    </>
  );
};

export default Header;
