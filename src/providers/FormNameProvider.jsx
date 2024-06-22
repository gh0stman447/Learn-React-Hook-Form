import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useData } from '../context/DataContext';

const FormNameProvider = ({ children }) => {
  const { data, setData } = useData();

  const methods = useForm({
    mode: 'onChange',
    defaultValues: {
      firstName: data.firstName,
      lastName: data.lastName,
    },
  });
  return <FormProvider {...methods}>{children}</FormProvider>;
};

export default FormNameProvider;
