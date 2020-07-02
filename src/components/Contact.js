import React,{useState} from 'react'
import {makeStyles,withStyles} from '@material-ui/core/styles';
import {TextField,Typography,Button,Grid,Box} from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import Navbar from './Navbar';

const useStyles=makeStyles(theme=>({
    form:{
        top:'50%',
        left:'50%',
        transform:'translate(-50%,-50%)',
        position:'absolute'
    },
    button:{
        marginTop:'1rem',
        color:'tomato',
        borderColor:'tomato'
    }
}))

const InputField=withStyles({
    root:{
        "& label.Mui-focused":{
            color:'tomato',
        },
        "& label":{
            color:'tan'
        },
        "& .MuiOutlinedInput-root":{
            "& fieldset":{
                borderColor:'tan',
            },
            "&:hover fieldset":{
                borderColor:"tan"
            }
        },
    },
})(TextField);

const Contact = () => {
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [companyName,setCompanyName]=useState('')

    const onContact=()=>{
        console.log(name,email,companyName)
    }

    const classes=useStyles()
    return (
        <>
            <Navbar/>
            <Box  component='div' className={classes.form}>
                <Grid container justify='center'>
                    <Box component='form'>
                        <Typography 
                        style={{
                            color:'tomato',
                            textAlign:'center',
                            textTransform:'uppercase'
                        }}
                        variant='h5'>
                            Hire or contact me
                        </Typography>
                        <InputField 
                            style={{marginTop:'1rem'}}
                            fullWidth={true} 
                            label='Name'
                            value={name}
                            onChange={event=>{setName(event.target.value)}}
                            inputProps={{style:{color:"white"}}}
                            size='medium' 
                            variant="outlined" />
                        <InputField 
                            style={{marginTop:'1rem'}}
                            fullWidth={true} 
                            label='Email'
                            value={email}
                            onChange={event=>{setEmail(event.target.value)}}
                            inputProps={{style:{color:"white"}}}
                            size='medium' 
                            variant="outlined" />
                        <InputField 
                            style={{marginTop:'1rem'}}
                            fullWidth={true} 
                            label='Company Name'
                            value={companyName}
                            onChange={event=>{setCompanyName(event.target.value)}}
                            inputProps={{style:{color:"white"}}}
                            size='medium' 
                            variant="outlined" />
                        <Button onClick={onContact} className={classes.button}variant='outlined' fullWidth={true} endIcon={<SendIcon/>}>
                            Contact Me
                        </Button>
                    </Box>
                </Grid>
            </Box>
        </>
    )
}

export default Contact
