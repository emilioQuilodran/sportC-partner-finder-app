import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export const ModalContent = ({ open, onClose, onSubmit, title, children }) => {
    const handleClose = () => {
        onClose();
    };
    
    const handleSubmit = () => {
        onSubmit();
        onClose();
    };

  return (
    <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>{children}</DialogContent>
        <DialogActions>
            <Button onClick={handleClose} variant="outlined" color="error">
                Cancelar
            </Button>
            <Button onClick={handleSubmit} type="submit" variant="contained"  color="tertiary">
                <Typography variant="span" color="primary">
                    Aceptar
                </Typography>
            </Button>
        </DialogActions>
    </Dialog>
  )
}
