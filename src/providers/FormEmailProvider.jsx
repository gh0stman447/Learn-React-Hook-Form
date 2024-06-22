import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useData } from '../context/DataContext';

const FormEmailProvider = ({ children }) => {
  const { data } = useData();

  const methods = useForm({
    mode: 'onChange',
    defaultValues: {
      email: data.email,
      hasPhoneNumber: data.hasPhoneNumber,
      phoneNumber: data.phoneNumber,
    },
  });
  return <FormProvider {...methods}>{children}</FormProvider>;
};

export default FormEmailProvider;
