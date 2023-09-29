import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';


export const Footer = () => {
  return (
    <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
        SportClub
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          cuidamos tu salud!
        </Typography>
        <Typography variant="body2" color="text.secondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://www.sportclub.com.ar/" target="_blank">
                wwww.sportclub.com.ar
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    </Box>
  )
}
