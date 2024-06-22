import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { Checkbox as MuiCheckbox } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';

const Checkbox = ({ name, ...props }) => {
  const { control } = useFormContext();
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <FormControlLabel
          label={'Has phone number'}
          control={<MuiCheckbox {...field} checked={field.value} {...props} />}
        />
      )}
    />
  );
};

export default Checkbox;
