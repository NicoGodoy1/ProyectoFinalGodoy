import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

const Message = ({ purchaseID }) => {
  return (
    <Stack sx={{ width: '100%' }} spacing={2}>
      <Alert severity="success">
            ¡Su compra se ha procesado con éxito! 
            El  ID  de su pedido es: {purchaseID} 
      </Alert>
    </Stack>
  );
}

export default Message;