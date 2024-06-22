import { Typography } from '@mui/material';
import MainContainer from './MainContainer';
import Form from '../ui/Form';
import Input from '../ui/Input';
import { useForm, useFormContext } from 'react-hook-form';
import PrimaryButton from '../ui/PrimaryButton';
import { useNavigate } from 'react-router-dom';
import { useData } from '../context/DataContext';

const rules = {
  firstName: {
    required: 'First name is required',
    minLength: {
      value: 2,
      message: 'First name must be at least 2 characters',
    },
    pattern: {
      value: /^[a-zA-Zа-яА-Я]+$/,
      message: 'First name must only contain letters',
    },
  },
  lastName: {
    required: 'Last name is required',
    minLength: {
      value: 3,
      message: 'Last name must be at least 3 characters',
    },
    pattern: {
      value: /^[a-zA-Zа-яА-Я]+$/,
      message: 'Last name must only contain letters',
    },
  },
};
const Step1 = () => {
  const { data, setValues } = useData();

  const {
    handleSubmit,
    formState: { errors },
  } = useFormContext();

  const navigate = useNavigate();
  const onSubmit = (data) => {
    navigate('/step2');
    setValues(data);
  };

  return (
    <MainContainer>
      <Typography component={'h2'} variant='h5'>
        🦄 Step 1
      </Typography>
      <Form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-4'>
        <div className='flex flex-col gap-2'>
          <Input
            rules={rules.firstName}
            label='First Name'
            type='text'
            name={'firstName'}
            error={!!errors?.firstName}
          />
          {errors.firstName && <p className='text-red-500'>{errors.firstName.message}</p>}
        </div>
        <div className='flex flex-col gap-2'>
          <Input
            rules={rules.lastName}
            label='Last Name'
            type='text'
            name={'lastName'}
            error={!!errors?.lastName}
          />
          {errors.lastName && <p className='text-red-500'>{errors.lastName.message}</p>}
        </div>
        <PrimaryButton type='submit'>Next</PrimaryButton>
      </Form>
    </MainContainer>
  );
};

export default Step1;
