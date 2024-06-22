import { Typography } from '@mui/material';
import MainContainer from './MainContainer';
import Input from '../ui/Input';
import PrimaryButton from '../ui/PrimaryButton';
import { useFormContext } from 'react-hook-form';
import Form from '../ui/Form';
import Checkbox from '../ui/Checkbox';
import { useNavigate } from 'react-router-dom';
import parsePhoneNumberFromString from 'libphonenumber-js';
import { useData } from '../context/DataContext';

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
      value: /^((\+7|7|8){1}(\ {0,1}[0-9]{3}){2}(\ {0,1}[0-9]{2}){2})|((\+7|7|8)+(\d){10})$/,
      message: 'Invalid phone number',
    },
  },
};
const Step2 = () => {
  const navigate = useNavigate();
  const { setValues } = useData();

  const {
    handleSubmit,
    watch,
    formState: { errors },
    getValues,
    setValue,
  } = useFormContext();

  const hasPhoneNumber = watch('hasPhoneNumber');

  const onSubmit = (data) => {
    navigate('/step3');
    setValues(data);
  };

  const normalizePhoneNumber = (value) => {
    const phoneNumber = parsePhoneNumberFromString(value);
    if (phoneNumber) {
      return phoneNumber.formatInternational();
    }
    return value;
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
        <Checkbox name={'hasPhoneNumber'} color='success' />
        <div className='flex flex-col gap-2'>
          {hasPhoneNumber && (
            <Input
              name={'phoneNumber'}
              type={'text'}
              label={'Phone number'}
              rules={rules.phoneNumber}
              onChange={(event) => {
                setValue('phoneNumber', normalizePhoneNumber(event.target.value));
              }}
              error={!!errors?.phoneNumber}
            />
          )}
          {errors.phoneNumber && <p className='text-red-500'>{errors.phoneNumber.message}</p>}
        </div>
        <PrimaryButton type={'submit'}>Next</PrimaryButton>
      </Form>
    </MainContainer>
  );
};

export default Step2;
