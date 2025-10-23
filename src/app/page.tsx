import React from 'react';
import { Grid, Typography, Button, TextField, Box } from '@mui/material';

export default function TwoColumnLayout() {
  return (
    <Box
      sx={{ backgroundImage: 'url(https://img.freepik.com/premium-photo/futuristic-electonical-technology-ai-concept-art_784842-1020.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            minHeight: '100vh',
            p: { xs: 1, md: 20 },
            display: 'flex',
            alignItems: 'center',
         }} >
      <Grid container spacing={8}>

        {/* Left Column */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{ display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: '100%',
                  px: { xs: 4, md: 2 },
               }} >
            <Box sx={{ maxWidth: 600, width: '100%' }}>
              <Typography variant="h4"
                sx={{ color: '#F5F7FA',
                      mt: { xs: 14, md: 10 },
                      mb: { xs: 3.5, md: 4 },
                      fontFamily: 'Impact, sans-serif',
                      fontSize: { xs: '33px', md: '60px' },
                      textAlign: { xs: 'center', md: 'left' },
                      lineHeight: { xs: 1.3, md: 1 },
                   }} >
                Learn to code by watching others
              </Typography>

              <Typography variant="body1"
                sx={{ color: '#FFFFFF',
                      fontSize: { xs: '19.5px', md: '21.9px' },
                      lineHeight: 1.4,
                      fontWeight: 500,
                      fontFamily: 'Poppins, sans-serif',
                      textAlign: { xs: 'center', md: 'left' },
                      mb: { xs: 8, md: 15 },
                   }} >
                See how experienced developers solve problems in real-time.
                Watching scripted tutorials is great, but understanding how
                developers think is invaluable.
              </Typography>
            </Box>
          </Box>
        </Grid>

        {/* Right Column */}
        <Grid item xs={12} md={6}>
          <Box display="flex" flexDirection="column" gap={2} alignItems="center">
            <Button fullWidth
              sx={{ maxWidth: { xs: '90%', md: 600 },
                    width: '100%',
                    height: { xs: 85, md: 60 },
                    backgroundColor: '#C98E6A',
                    color: 'white',
                    py: { xs: 1.5, md: 2 },
                    borderRadius: 1,
                    fontWeight: 500,
                    fontSize: { xs: '15px', md: '17px' },
                    textAlign: 'center',
                    fontFamily: 'Poppins, sans-serif',
                    mb: 1,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    lineHeight: 1.5,
                    '&:hover': { backgroundColor: '#EADDC4' },
                 }} >
              <Box component="span">
                <Box component="span" sx={{ fontWeight: 800 }}>
                  Try it free 7 days
                </Box>{' '}
                then
                <Box
                  component="span"
                  sx={{ display: { xs: 'block', md: 'inline' } }}
                >
                  {' '}
                  $20/mo. thereafter
                </Box>
              </Box>
            </Button>

            {/* Contact Form */}
            <Box component="form" display="flex" flexDirection="column" gap={2.5}
              sx={{ backgroundColor: '#E0E1E6',
                    borderRadius: 2,
                    p: { xs: 3.5, md: 4.5 },
                    boxShadow: 24,
                    maxWidth: { xs: '90%', md: 600 },
                    height: { xs: 490, md: 500 },
                    width: '100%',
                    mb: { xs: 8, md: 3 },
                 }} >
              <TextField label="First Name" variant="outlined" fullWidth
                InputLabelProps={{ sx: { fontWeight: 700 } }} />
              <TextField label="Last Name" variant="outlined" fullWidth
                InputLabelProps={{ sx: { fontWeight: 700 } }} />
              <TextField label="Email Address" variant="outlined" fullWidth
                InputLabelProps={{ sx: { fontWeight: 700 } }} />
              <TextField label="Password" type="password" variant="outlined" fullWidth
                InputLabelProps={{ sx: { fontWeight: 700 } }} />
              <Button type="submit" variant="contained" fullWidth
                sx={{ backgroundColor: '#C98E6A',
                      color: 'white',
                      fontWeight: 600,
                      fontFamily: `'Montserrat', sans-serif`,
                      py: { xs: 1.5, md: 1.8 },
                      fontSize: { xs: '16px', sm: '18px' },
                      mt: 1,
                      '&:hover': { backgroundColor: '#EADDC4' },
                   }} >
                CLAIM YOUR FREE TRIAL
              </Button>
              <Typography variant="caption" align="center"
                sx={{ fontSize: { xs: '12px', md: '14.4px' },
                      fontWeight: 400,
                      fontFamily: `'Poppins', sans-serif`,
                      color: '#505050',
                      display: 'block',
                     lineHeight: 1.7,
                   }} >
                <Box component="span" sx={{ display: { xs: 'block', sm: 'inline' } }}>
                  By clicking the button, you are agreeing to
                </Box>{' '}
                <Box component="span" sx={{ color: '#505050' }}>
                  our{' '}
                </Box>
                <Box component="span" sx={{ color: 'red' }}>
                  Terms and Services
                </Box>
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
