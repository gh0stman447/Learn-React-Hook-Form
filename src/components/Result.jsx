import { Link } from 'react-router-dom';
import MainContainer from './MainContainer';
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import { useData } from '../context/DataContext';
import PrimaryButton from '../ui/PrimaryButton';
import { InsertDriveFile } from '@mui/icons-material';
import Swal from 'sweetalert2';
import { useState } from 'react';
import Confetti from 'react-confetti';

const Result = () => {
  const [success, setSuccess] = useState(false);

  const { data } = useData();
  const entries = Object.entries(data).filter((entry) => entry[0] !== 'files');
  const { files } = data;
  if (success) return <Confetti />;

  return (
    <>
      <MainContainer>
        <Typography component={'h2'} variant='h5' className='mt-4 mb-2'>
          📎 Form Values
        </Typography>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Field</TableCell>
                <TableCell align='right'>Value</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {entries.map(([key, value]) => (
                <TableRow key={key}>
                  <TableCell>{key}</TableCell>
                  <TableCell align='right'>{value?.toString()}</TableCell>
                </TableRow>
              ))}
              {files && (
                <TableRow>
                  <TableCell>Files</TableCell>
                  <TableCell align='right'>{files.length} files</TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        {files && (
          <>
            <Typography component={'h2'} variant='h5' className='mt-4'>
              📦 Files
            </Typography>
            <List>
              {files.map((file) => (
                <ListItem key={file.name}>
                  <ListItemIcon>
                    <InsertDriveFile />
                  </ListItemIcon>
                  <ListItemText primary={file.name} secondary={file.size} />
                </ListItem>
              ))}
            </List>
          </>
        )}

        <PrimaryButton
          onClick={() => {
            Swal.fire('Good job! You`ve passed the challenge!', 'success');
            setSuccess(true);
          }}
        >
          Submit
        </PrimaryButton>

        <Link to='/' className='mt-2 w-full'>
          <PrimaryButton>Start over</PrimaryButton>
        </Link>
      </MainContainer>
    </>
  );
};

export default Result;
