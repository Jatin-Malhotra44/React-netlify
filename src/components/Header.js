import React from 'react'
import {Typography,Avatar,Grid,Box} from '@material-ui/core';
import avatar from '../assets/avatar.png';
import Typed from 'react-typed';
import {makeStyles} from '@material-ui/core/styles';
import FacebookIcon from '@material-ui/icons/Facebook'; 
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';


const useStyle=makeStyles(theme=>({
    avatar:{
        width:theme.spacing(15),
        height:theme.spacing(15),
        margin:theme.spacing(1)
    },
    root:{
        display:'inline',
        "& .MuiBottomNavigationAction-root":{
            minWidth:0,
            maxWidth:250
        },
        "& .MuiSvgIcon-root":{
            fill:'tan',
            fontSize:'2.8rem',
            "&:hover":{
                fill:'tomato',
                fontSize:'3.8rem'
            }
        }
    },
    title:{
        color:'tomato'
    },
    subTitle:{
        color:'tan',
        marginBottom:'3rem'
    },
    typedContainer:{
        position:'absolute',
        top:'50%',
        left:'50%',
        transform:'translate(-50%,-50%)',
        width:'100vw',
        textAlign:'center',
        zIndex:1
    }
}))

const Header = () => {
    const classes=useStyle();
    return (
        <Box className={classes.typedContainer} >
            <Grid container justify='center'>
                <Avatar className={classes.avatar} src={avatar} alt="jatin Malhotra"/>
            </Grid>
            <Typography className={classes.title} variant='h4'>
                <Typed strings={['Jatin Malhotra']} typeSpeed={40}/>
            </Typography>
            <br/>
            <Typography className={classes.subTitle} variant='h5'>
                <Typed strings={['Web Development','Web Design','Data Science']} 
                typeSpeed={40}
                backSpeed={60}
                loop
                />
            </Typography>
            <Box component='div' >
                <div style={{margin:'0 10px'}} className={classes.root}>
                    <FacebookIcon/>
                </div>
                <div style={{margin:'0 10px'}} className={classes.root}>
                    <LinkedInIcon/>
                </div>
                <div style={{margin:'0 10px'}} className={classes.root}>
                    <GitHubIcon/>
                </div>
            </Box>
        </Box>
    )
}
export default Header
