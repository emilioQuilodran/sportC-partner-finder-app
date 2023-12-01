import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Image from 'next/image';


export const Footer = () => {
  return (
    <Box sx={{ bgcolor: 'background.paper', p: 6, textAlign: "center" }} component="footer">
            <Image
              src="/logo-sport-club.png"
              alt="sport club logo"
              width={150}
              height={60}
              priority
            />
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
