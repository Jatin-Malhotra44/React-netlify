import React from 'react'
import {Box,Grid,Paper,Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Navbar from './Navbar';
import avatar from '../assets/avatar.png';
import LinearProgress from '@material-ui/core/LinearProgress';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
    }
  }));
const Resume = () => {
    const classes = useStyles();
    return (
        <>
            <Navbar/>
            <Grid style={{margin:'4rem 0'}} container spacing={5}>
                <Grid item xs={4}>
                    <Paper 
                        style={{margin:'0 30px',width:'100%'}} 
                        className={classes.paper}>
                        <img src={avatar} alt='Avatar' style={{height:'250px'}}/>
                        <Typography variant='h2' style={{fontStyle:'bold',fontFamily:'Anton'}} className='contact'>
                            Jatin Malhotra
                        </Typography>
                        <Typography variant='h4' style={{color:'grey',fontStyle:'bold',fontFamily:'Anton'}} className='contact'>
                            Programmer
                        </Typography>
                        <hr style={{borderWidth:'thick', borderTop:'3px solid #83fb2',width:'100%'}}/>
                        <p style={{width:'75%',margin:'auto',paddingTop:'1rem',fontFamily:'Oxygen Mono',fontStyle:'bold'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        <Typography variant='h5' style={{color:'grey',fontStyle:'bold',fontFamily:'Anton'}} className='contact'>
                            Address
                        </Typography>
                        <p>Lu-67,Pitampura</p>
                        <Typography variant='h5' style={{color:'grey',fontStyle:'bold',fontFamily:'Anton'}} className='contact'>
                            Contact No.
                        </Typography>
                        <p>(+91)9315845907</p>
                        <Typography variant='h5' style={{color:'grey',fontStyle:'bold',fontFamily:'Anton'}} className='contact'>
                            Email
                        </Typography>
                        <p>malhotra.jatin21@gmail.com</p>
                        <hr style={{borderWidth:'thick', borderTop:'3px solid #83fb2',width:'100%'}}/>
                        
                    </Paper>
                </Grid>
                
                <Grid item xs={6}>
                    <Paper 
                        style={{margin:'0 10px',width:'130%',background:'#27221F',color:'white'}} 
                        className={classes.paper}>
                        <Typography variant='h2' style={{fontStyle:'bold',fontFamily:'Anton'}} className='contact'>
                            Education
                        </Typography>
                        <hr style={{border: '5px dotted'}} />
                        <Typography variant='h5' style={{fontFamily:'Anton',textAlign:'left'}} className='contact'>
                            2002-2004
                            <span><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p></span>
                        </Typography>
                        <hr/>
                        <Typography variant='h5' style={{fontFamily:'Anton',textAlign:'left'}} className='contact'>
                            2002-2004
                            <span><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p></span>
                        </Typography>
                        <hr/>
                        <Typography variant='h5' style={{fontFamily:'Anton',textAlign:'left'}} className='contact'>
                            2002-2004
                            <span><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p></span>
                        </Typography>
                        <hr style={{border:'3px solid'}} />
                        <Typography variant='h2' style={{fontStyle:'bold',fontFamily:'Anton'}} className='contact'>
                            Skills
                        </Typography>
                        <hr style={{border: '5px dotted'}} />
                        <Box marginTop='20px' display="flex" alignItems="center">
                            {/*Python*/}
                            <Box minWidth={80}>
                                <Typography style={{fontSize:'20px'}} variant="body2" color='white'>Python</Typography>
                            </Box>
                            <Box width="50%" mr={1}>
                                <LinearProgress variant="determinate"  />
                            </Box>
                            <Box minWidth={80}>
                                <Typography variant="body2" color='white'>100</Typography>
                            </Box>
                        </Box>
                        
                        <Box marginTop='20px' display="flex" alignItems="center">
                            {/*React*/}
                            <Box minWidth={80}>
                                <Typography style={{fontSize:'20px'}} variant="body2" color='white'>
                                React</Typography>
                            </Box>
                            <Box width="50%" mr={1}>
                                <LinearProgress variant="determinate"  />
                            </Box>
                            <Box minWidth={80}>
                                <Typography variant="body2" color='white'>100</Typography>
                            </Box>
                        </Box>

                        <Box marginTop='20px' display="flex" alignItems="center">
                            {/*Javascript*/}
                            <Box minWidth={80}>
                                <Typography style={{fontSize:'20px'}} variant="body2" color='white'>
                                Javascript</Typography>
                            </Box>
                            <Box width="50%" mr={1}>
                                <LinearProgress variant="determinate" />
                            </Box>
                            <Box minWidth={80}>
                                <Typography variant="body2" color='white'>100</Typography>
                            </Box>
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
            
        </>
    )
}

export default Resume
