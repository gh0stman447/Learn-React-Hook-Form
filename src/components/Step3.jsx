import { Typography } from '@mui/material';
import MainContainer from './MainContainer';
import FileInput from '../ui/FileInput';
import { useFormContext } from 'react-hook-form';
import PrimaryButton from '../ui/PrimaryButton';
import { Form, useNavigate } from 'react-router-dom';
import { useData } from '../context/DataContext';

const Step3 = () => {
  const { control, handleSubmit } = useFormContext();
  const { setValues } = useData();
  const navigate = useNavigate();
  const onSubmit = (data) => {
    navigate('/result');
    setValues(data);
  };

  return (
    <MainContainer>
      <Typography component={'h2'} variant='h5'>
        🦄 Step 3
      </Typography>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FileInput control={control} name='files' />
        <PrimaryButton type='submit'>Next</PrimaryButton>
      </Form>
    </MainContainer>
  );
};

export default Step3;
