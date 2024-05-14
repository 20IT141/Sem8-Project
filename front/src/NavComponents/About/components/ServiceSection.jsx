import React from 'react'
import './ServiceSection.css'
import { Card, Container, Grid, Stack, Typography } from '@mui/material'

const ServiceSection = () => {
  return (
	  <>
		  
		  <Container maxWidth={'xl'} sx={{mt:'2rem'}}>
			  <Grid container spacing={3}>
				  <Grid item md={3} xs={12} sm={6} >
					  <Card sx={{ width: '100%','&:hover': { backgroundColor: '#FFBE30',color:'#fff' } }}>
						  <Container>
						  <Stack justifyContent='center' spacing={2} textAlign={'center'}>
							  {/*<Typography vriant='h6'>2017</Typography>*/}
							  <Typography sx={{textAlign:'start'}} vriant='h6'>Welcome to Event Management, where we specialize in crafting seamless and unforgettable experiences.</Typography>
						  </Stack>
						  </Container>
						 
					  </Card>
				  </Grid>
				  <Grid item md={3} xs={12} sm={6} >
					  <Card sx={{ width: '100%','&:hover': { backgroundColor: '#FFBE30',color:'#fff' } }}>
						  <Container>
						  <Stack justifyContent='center' spacing={2} textAlign={'center'}>
							   {/*<Typography vriant='h6'>Study With us</Typography>*/}
							  <Typography sx={{textAlign:'start'}} vriant='h6'>At Event Management, we are more than event planners; we are architects of moments.</Typography>
						  </Stack>
						  </Container>
						 
					  </Card>
				  </Grid>
				  <Grid item md={3} xs={12} sm={6} >
					  <Card sx={{ width: '100%','&:hover': { backgroundColor: '#FFBE30',color:'#fff' } }}>
						  <Container>
						  <Stack justifyContent='center' spacing={2} textAlign={'center'}>
							  {/*<Typography vriant='h6'>Study With us</Typography>*/}
							  <Typography sx={{textAlign:'start'}} vriant='h6'>Experience the epitome of event excellence with Event Management. From corporate functions to personal celebrations.</Typography>
						  </Stack>
						  </Container>
						 
					  </Card>
				  </Grid>
				  <Grid item md={3} xs={12} sm={6} >
					  <Card sx={{ width: '100%','&:hover': { backgroundColor: '#FFBE30',color:'#fff' } }}>
						  <Container>
						  <Stack justifyContent='center' spacing={2} textAlign={'center'}>
							  {/*<Typography vriant='h6'>Study With us</Typography>*/}
							  <Typography sx={{textAlign:'start'}} vriant='h6'>Discover a new era of event innovation at Event Management. With a keen eye for detail and a pulse on the latest trends.</Typography>
						  </Stack>
						  </Container>
						 
					  </Card>
				  </Grid>
				  <Grid item md={3} xs={12} sm={6} >
					  <Card sx={{ width: '100%','&:hover': { backgroundColor: '#FFBE30',color:'#fff' } }}>
						  <Container>
						  <Stack justifyContent='center' spacing={2} textAlign={'center'}>
							  {/*<Typography vriant='h6'>Study With us</Typography>*/}
							  <Typography sx={{textAlign:'start'}} vriant='h6'>Step into a world where every event is a masterpiece. Event Management combines passion and proficiency to transform your vision into reality.</Typography>
						  </Stack>
						  </Container>
						 
					  </Card>
				  </Grid>
				  <Grid item md={3} xs={12} sm={6} >
					  <Card sx={{ width: '100%','&:hover': { backgroundColor: '#FFBE30',color:'#fff' } }}>
						  <Container>
						  <Stack justifyContent='center' spacing={2} textAlign={'center'}>
							  {/*<Typography vriant='h6'>Study With us</Typography>*/}
							  <Typography sx={{textAlign:'start'}} vriant='h6'>Join us on a journey of celebration and excellence. Event Management is not just a service. </Typography>
						  </Stack>
						  </Container>
						 
					  </Card>
				  </Grid>
				  <Grid item md={3} xs={12} sm={6} >
					  <Card sx={{ width: '100%','&:hover': { backgroundColor: '#FFBE30',color:'#fff' } }}>
						  <Container>
						  <Stack justifyContent='center' spacing={2} textAlign={'center'}>
							  {/*<Typography vriant='h6'>Study With us</Typography>*/}
							  <Typography sx={{textAlign:'start'}} vriant='h6'>Event Management is your trusted partner in turning dreams into reality. With a meticulous approach and a flair for creativity.</Typography>
						  </Stack>
						  </Container>
						 
					  </Card>
				  </Grid>
				  <Grid item md={3} xs={12} sm={6} >
					  <Card sx={{ width: '100%','&:hover': { backgroundColor: '#FFBE30',color:'#fff' } }}>
						  <Container>
						  <Stack justifyContent='center' spacing={2} textAlign={'center'}>
							  {/*<Typography vriant='h6'>Study With us</Typography>*/}
							  <Typography sx={{textAlign:'start'}} vriant='h6'>At Event Management, we understand that every event is a unique story waiting to unfold.</Typography>
						  </Stack>
						  </Container>
						 
					  </Card>
				  </Grid>
			  </Grid>
		  </Container>

   

      </>
  )
}

export default ServiceSection
