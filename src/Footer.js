import React from 'react'
import './Footer.css';
import PlayCircleOutlineIcon  from '@material-ui/icons/PlayCircleOutline';
import SkipPreviousIcon  from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import SuffleIcon from '@material-ui/icons/Shuffle';
import RepeatIcon from '@material-ui/icons/Repeat';
import VolumeDownIcon from "@material-ui/icons/VolumeDown";
// import PauseCircleOutlineIcon from "@material-ui/icons/PauseCircleOutline";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import{Grid,Slider} from "@material-ui/core";


function Footer() {
  return (
    <div className='footer'>

        <div className='footer__left'>
        <img  className=" footer__albumLogo"src='https://storage.googleapis.com/pr-newsroom-wp/1/2023/05/Spotify_Full_Logo_RGB_Green.png'></img>
        <div className='footer__songinfo'>
          <h4>YEAH </h4>
          <p>SONG</p>

        </div>
        </div>






        <div className='footer__center'>
        <SuffleIcon className="footer__green"/>
        <SkipPreviousIcon className='footer__icon'/>
        <PlayCircleOutlineIcon fontSize='large' className='footer__icon'/>
        <SkipNextIcon className='footer__icon'/>
        <RepeatIcon className='footer__green'/>
        </div>






        <div className='footer__right'>
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon />
          </Grid>
          <Grid item>
            <VolumeDownIcon />
          </Grid>
          <Grid item xs>
            <Slider  />
          </Grid>
        </Grid>
        </div>
    </div>
  )
}

export default Footer