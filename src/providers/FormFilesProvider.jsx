import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useData } from '../context/DataContext';

const FormFilesProvider = ({ children }) => {
  const { data, setValues } = useData();

  const methods = useForm({
    defaultValues: {
      files: data.files,
    },
  });
  return <FormProvider {...methods}>{children}</FormProvider>;
};

export default FormFilesProvider;
