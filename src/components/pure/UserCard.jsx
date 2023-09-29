import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import { format } from 'date-fns';

const UserCard = ({ user, onDeleteUser, onEdit }) => {
  const handleDelete = () => {
    onDeleteUser(user._id);
  };

  const handleEdit = () => {
    onEdit(user._id);
  };

  const formatDate = (date) => {
    return format(new Date(date), 'yyyy-MM-dd');
  };

  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardContent sx={{ flexGrow: 1 }}>
        <AccountCircleIcon />
        <Typography gutterBottom variant="h5" component="h2">
          <span>{user.name} {user.lastname}</span>
        </Typography>
        <Typography gutterBottom variant="body1" component="p">
          <span><strong>Fecha de Nacimiento</strong>: {formatDate(user.birthdate)}</span>
        </Typography>
        <Typography gutterBottom variant="body1" component="p">
          <span><strong>Socio desde</strong>: {formatDate(user.createdAt)}</span>
        </Typography>
        <Typography gutterBottom variant="body1" component="p">
          <span><strong>Reside en GBA</strong>: {user.gbalocation ? 'Sí' : 'No'}</span>
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" color="tertiary" size="small">
          <EditIcon color="secondary" onClick={handleEdit} />
        </Button>
        <Button variant="contained" size="small" onClick={handleDelete}>
          <DeleteForeverIcon />
        </Button>
      </CardActions>
    </Card>
  );
};

export default UserCard;