import React from 'react'
import Navbar from './Navbar'
import {Box,Grid,Card,CardActionArea,CardActions,
        CardContent,CardMedia,Button,Typography} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import project1 from '../assets/Profile12.png';
import project2 from '../assets/Project2.png';

const useStyles=makeStyles({
    mainContainer:{
        background:'#233',
        height:'100%'
    },
    cardContainer:{
        maxWidth:345,
        margin:'7rem auto'
    }
})

const Portfolio = () => {
    const classes=useStyles();
    return (
        <>
            <Box component='div' className={classes.mainContainer}>
                <Navbar/>
                <Grid container justify='center'>
                    {/* Project 1 */}
                    <Grid item xs={12} sm={8} md={6}>
                    <Card className={classes.cardContainer}>
                        <CardActionArea>
                            <CardMedia
                            component='img' alt='project 1'
                            height='140' image={project1}
                            />
                            <CardContent>
                                <Typography gutterBottom variant='h5'>
                                    Project 1
                                </Typography>
                                <Typography variant='body2' color='textSecondary' component='p'>
                                    Loremaaaaaaaaaaaaa,aaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                </Typography>
                            </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size='small' color='primary'>
                                    Share
                                </Button>
                                <Button size='small' color='primary'>
                                    Live Demo
                                </Button>
                            </CardActions>
                    </Card>
                    </Grid>
                    {/* Project 2 */}
                    <Grid item xs={12} sm={8} md={6}>
                    <Card className={classes.cardContainer}>
                        <CardActionArea>
                            <CardMedia
                            component='img' alt='project 2'
                            height='140' image={project2}
                            />
                            <CardContent>
                                <Typography gutterBottom variant='h5'>
                                    Project 2
                                </Typography>
                                <Typography variant='body2' color='textSecondary' component='p'>
                                    Loremaaaaaaaaaaaaa,aaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                </Typography>
                            </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size='small' color='primary'>
                                    Share
                                </Button>
                                <Button size='small' color='primary'>
                                    Live Demo
                                </Button>
                            </CardActions>
                    </Card>
                    </Grid>
                    {/* Project 2 */}
                    <Grid item xs={12} sm={8} md={6}>
                    <Card className={classes.cardContainer}>
                        <CardActionArea>
                            <CardMedia
                            component='img' alt='project 2'
                            height='140' image={project2}
                            />
                            <CardContent>
                                <Typography gutterBottom variant='h5'>
                                    Project 2
                                </Typography>
                                <Typography variant='body2' color='textSecondary' component='p'>
                                    Loremaaaaaaaaaaaaa,aaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                </Typography>
                            </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size='small' color='primary'>
                                    Share
                                </Button>
                                <Button size='small' color='primary'>
                                    Live Demo
                                </Button>
                            </CardActions>
                    </Card>
                    </Grid>
                    {/* Project 2 */}
                    <Grid item xs={12} sm={8} md={6}>
                    <Card className={classes.cardContainer}>
                        <CardActionArea>
                            <CardMedia
                            component='img' alt='project 2'
                            height='140' image={project2}
                            />
                            <CardContent>
                                <Typography gutterBottom variant='h5'>
                                    Project 2
                                </Typography>
                                <Typography variant='body2' color='textSecondary' component='p'>
                                    Loremaaaaaaaaaaaaa,aaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                </Typography>
                            </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size='small' color='primary'>
                                    Share
                                </Button>
                                <Button size='small' color='primary'>
                                    Live Demo
                                </Button>
                            </CardActions>
                    </Card>
                    </Grid>
                    
                </Grid>
            </Box>
        </>
    )
}

export default Portfolio
