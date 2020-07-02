import React from 'react';
import Particles from 'react-particles-js';
import Header from './Header';
import Navbar from './Navbar';
import {makeStyles} from '@material-ui/core/styles';

const useStyles=makeStyles({
    particlesCanva:{
        position:'absolute',
        marginTop:'60px',
        height:'100%',
        width:'100%',
        opacity:'0.3'
    }
})

const Home = () => {
    const classes=useStyles();
    return (
        <>
            <Navbar/>
            <Header/>
            <Particles
             className={classes.particlesCanva}
            params={{
                particles:{
                    number:{
                        value:55,
                        density:{
                            enable:true,
                            value_area:900
                        }
                    },
                    shape:{
                        type:'triangle',
                        strole:{
                            width:1,
                            color:'tomato'
                        }
                    },
                    size:{
                        value:8,
                        random:true,
                        anim:{
                            enable:true,
                            speed:10,
                            size_min:1.1,
                            sync:true
                        }
                    }
                }
            }}
            />
        </>
    )
}

export default Home
