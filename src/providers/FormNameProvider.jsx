import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';

const FormNameProvider = ({ children }) => {
  const methods = useForm({
    mode: 'onChange',
    defaultValues: {
      firstName: '',
      lastName: '',
    },
  });
  return <FormProvider {...methods}>{children}</FormProvider>;
};

export default FormNameProvider;
