import { Typography } from '@mui/material';
import MainContainer from './MainContainer';
import Input from '../ui/Input';
import PrimaryButton from '../ui/PrimaryButton';
import { useFormContext } from 'react-hook-form';
import Form from '../ui/Form';
import Checkbox from '../ui/Checkbox';
import { useNavigate } from 'react-router-dom';

const rules = {
  email: {
    required: 'Email is required',
    pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      message: 'Invalid email address',
    },
  },
  phoneNumber: {
    required: 'Phone number is required',
    pattern: {
      value: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im,
      message: 'Invalid phone number',
    },
  },
};
const Step2 = () => {
  const navigate = useNavigate();

  const {
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useFormContext();

  const hasPhoneNumber = watch('hasPhoneNumber');

  const onSubmit = (data) => {
    console.log(data);
    navigate('/step3');
  };

  return (
    <MainContainer>
      <Typography component={'h2'} variant='h5'>
        🦄 Step 2
      </Typography>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <div className='flex flex-col gap-2'>
          <Input
            name={'email'}
            type={'email'}
            label={'Email'}
            rules={rules.email}
            error={!!errors?.email}
          />
          {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
        </div>
        <div className='flex flex-col gap-2'>
          <Checkbox control={control} name={'hasPhoneNumber'} rules={rules.phoneNumber} />
          {errors.phoneNumber && <p className='text-red-500'>{errors.phoneNumber.message}</p>}
        </div>
        {hasPhoneNumber && (
          <Input
            name={'phoneNumber'}
            type={'tel'}
            label={'Phone number'}
            // required={hasPhoneNumber}
          />
        )}
        <PrimaryButton type={'submit'}>Next</PrimaryButton>
      </Form>
    </MainContainer>
  );
};

export default Step2;
