import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Cart } from 'react-bootstrap-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const CartModal = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Abrir carrito</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography className='bg-warning.bg-gradient' id="modal-modal-title" variant="h6" component="h2">
            Carrito <Cart/>
          </Typography>
          <div>
            <li className='fs-6'>Producto 1</li>
            <li className='fs-6'>Producto 2</li>
            <li className='fs-6'>Producto 3</li>
            <li className='fs-6'>Producto 4</li>
          </div>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Acá vas a ver los productos que agregues al carrito
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}

export default CartModal;