import React from 'react'
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Hero = () => {
  return (
    <Container maxWidth="sm">
        <Typography
            component="h1"
            variant="h2"
            align="center"
            color="text.primary"
            gutterBottom
        >
            Encuentra y gestiona tus socios
        </Typography>
        <Typography variant="h5" align="center" color="text.secondary" paragraph>
            Explora nuestra aplicación para encontrar datos de socios que se ajusten a tus necesidades. Además, podrás crear nuevos usuarios y gestionarlos de manera eficiente, todo desde una sola plataforma.
        </Typography>
    </Container>
  )
}

export default Hero
