import React from 'react'
import "./Sidebar.css"
import SidebarOption from './SidebarOption'
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import { useDataLayerValue } from './DataLayer';
function Sidebar() {
  const [{playlists},dispatch]=useDataLayerValue();
  return (
    <div className='sidebar'>
       
         
        <img className="sidebar_logo"src='https://storage.googleapis.com/pr-newsroom-wp/1/2023/05/Spotify_Full_Logo_RGB_Green.png' width="80%" padding="10px"></img>

        <SidebarOption  Icon={HomeIcon} title="Home"/>
        <SidebarOption Icon={SearchIcon}  title="Search"/>
        <SidebarOption Icon={LibraryMusicIcon}  title="Your library"/>
        <br/>
        <strong className='sidebar__title'> PLAYLISTS </strong>
        <hr/>
           {playlists?.items?.map(playlist=>(

            <SidebarOption  title={playlist.name}/>
           ))}
         


    </div>
  )
}

export default Sidebar