import { CloudUpload, InsertDriveFile } from '@mui/icons-material';
import { List, ListItem, ListItemIcon, ListItemText, Paper } from '@mui/material';
import React from 'react';
import Dropzone from 'react-dropzone';
import { Controller, useFormContext } from 'react-hook-form';

const FileInput = ({ name }) => {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      defaultValue={[]}
      render={({ field: { onChange, onBlur, value } }) => (
        <>
          <Dropzone onDrop={onChange}>
            {({ getRootProps, getInputProps }) => (
              <Paper
                style={{
                  cursor: 'pointer',
                  textAlign: 'center',
                  backgroundColor: '#eee',
                  color: '#333',
                  padding: '10px',
                  marginTop: '20px',
                }}
                variant='outlined'
                {...getRootProps()}
              >
                <CloudUpload style={{ fontSize: '42px', marginTop: '16px', color: '#888' }} />
                <input name={name} {...getInputProps()} onBlur={onBlur} />
                <p>Drag 'n' drop some files here, or click to select files</p>
              </Paper>
            )}
          </Dropzone>
          <List>
            {value.map((file, index) => (
              <ListItem key={index}>
                <ListItemIcon>
                  <InsertDriveFile />
                </ListItemIcon>
                <ListItemText primary={file.name} secondary={file.size} />
              </ListItem>
            ))}
          </List>
        </>
      )}
    />
  );
};

export default FileInput;
