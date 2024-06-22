import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';

const FormEmailProvider = ({ children }) => {
  const methods = useForm({
    mode: 'onChange',
    defaultValues: {
      email: '',
      hasPhoneNumber: false,
      phoneNumber: '',
    },
  });
  return <FormProvider {...methods}>{children}</FormProvider>;
};

export default FormEmailProvider;
