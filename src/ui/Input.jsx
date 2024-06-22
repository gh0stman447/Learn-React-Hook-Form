import { TextField } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';

const Input = ({ name, ...props }) => {
  const { control } = useFormContext();

  return (
    <>
      <Controller
        control={control}
        name={name}
        rules={props.rules}
        render={({ field }) => (
          <TextField {...field} variant='outlined' margin='normal' fullWidth {...props} />
        )}
      />
    </>
  );
};

export default Input;
