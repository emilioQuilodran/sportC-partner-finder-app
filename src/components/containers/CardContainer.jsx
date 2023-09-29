import React from 'react';
import Grid from '@mui/material/Grid';
import UserCard from '../pure/UserCard';
import Typography from '@mui/material/Typography';
import { motion } from 'framer-motion';

const CardContainer = ({ users, onDeleteUser, onEditUser }) => {
  return (
    <Grid container spacing={4}>
      {users.length > 0 ? (
        users.map((user) => (
          <Grid item key={user._id} xs={12} sm={6} md={4}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <UserCard user={user} onDeleteUser={onDeleteUser} onEdit={onEditUser} />
            </motion.div>
          </Grid>
        ))
      ) : (
        <Grid item xs={12}>
          <Typography gutterBottom variant="h5" component="h2">
            No se encontraron resultados
          </Typography>
        </Grid>
      )}
    </Grid>
  );
};

export default CardContainer;