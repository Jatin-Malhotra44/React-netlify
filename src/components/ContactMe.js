import React from 'react';
import {Grid,Paper,Typography,List,ListItem,ListItemIcon} from '@material-ui/core';
import './style.css';
import avatar from '../assets/avatar.png';
import{Call,}from '@material-ui/icons';
import Navbar from './Navbar';
import { makeStyles } from '@material-ui/core/styles';
import EmailIcon from '@material-ui/icons/Email';

const useStyles=makeStyles(theme=>({
    listItem:{
        fontSize:'150px',
        color:'tomato'
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        marginTop:'3rem',
        height:'100%',
        background:'cyan'
      },
    root:{
        display:'inline',
        "& .MuiBottomNavigationAction-root":{
            minWidth:0,
            maxWidth:250,
            margin:'0 10px'
        },
        "& .MuiSvgIcon-root":{
            fill:'tan',
            fontSize:'4.8rem',
            "&:hover":{
                fill:'tomato',
                fontSize:'5.8rem'
            }
        }
    }
}))
const ContactMe = () => {
    const classes=useStyles()
    return (
        <div className='contact-body'>
            <Navbar/>
        <Grid container spacing={3}>
            <Grid item xs={6}>
                <Paper className={classes.paper}>
                    <Typography variant='h2' style={{fontStyle:'bold',fontFamily:'Anton'}} className='contact'>
                        Jatin Malhotra
                        <hr/>
                    </Typography>
                    <img src={avatar} alt='Avatar' style={{height:'250px'}}/>
                    <p style={{width:'75%',margin:'auto',paddingTop:'1rem',fontFamily:'Oxygen Mono',fontStyle:'bold'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </Paper>
            </Grid>
            
            <Grid item xs={6}>
                <Paper className={classes.paper}>
                            <Typography variant='h2' style={{fontStyle:'bold',fontFamily:'Anton'}} className='contact'>
                                Contact Me
                                <hr/>
                            </Typography>
                        <List style={{marginLeft:'60px',marginTop:'20px'}}>
                            <ListItem>
                                <ListItemIcon class={classes.root} ><Call/></ListItemIcon>
                                <Typography style={{fontSize:'40px',fontFamily:'Anton'}} className='contact'>
                                    (+91)9315845907
                                </Typography>
                            </ListItem>
                            <ListItem>
                                <ListItemIcon class={classes.root} ><EmailIcon/></ListItemIcon>
                                <Typography style={{fontSize:'40px',fontFamily:'Anton'}} className='contact'>
                                    malhotra.jatin21@gmail.com
                                </Typography>
                            </ListItem>
                        </List>
                </Paper>
            </Grid>
      </Grid> 
        </div>
    )
}
/*<Grid container spacing={3}>
          <Grid item xs={6} style={{margin:'3rem'}} className='contact-grid'>
            <Box component='div'>
                <Typography variant='h2' style={{fontStyle:'bold'}} className='contact'>
                    Contact Me
                    <hr/>
                </Typography>
            </Box>
            <Box component='div'>
            <List>
                <ListItem>
                    <ListItemIcon class={classes.root} ><Call/></ListItemIcon>
                    <Typography style={{fontSize:'30px',fontFamily:'Anton'}} className='contact'>
                        (+91)9315845907
                    </Typography>
                </ListItem>
                <ListItem>
                    <ListItemIcon class={classes.root} ><EmailIcon/></ListItemIcon>
                    <Typography style={{fontSize:'30px',fontFamily:'Anton'}} className='contact'>
                        malhotra.jatin21@gmail.com
                    </Typography>
                </ListItem>
            </List>
            </Box>
          </Grid>
          
        </Grid> */
export default ContactMe
