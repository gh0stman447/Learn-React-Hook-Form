import React from 'react';
import { Controller } from 'react-hook-form';
import { Checkbox as MuiCheckbox } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';

const Checkbox = ({ name, control }) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <FormControlLabel
          label={'Has phone number'}
          control={<MuiCheckbox {...field} checked={field.value} />}
        />
      )}
    />
  );
};

export default Checkbox;
