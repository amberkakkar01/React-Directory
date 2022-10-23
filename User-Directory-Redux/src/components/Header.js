import React from "react";
import {AppBar,Toolbar,Typography} from '@mui/material'
import FolderSharedIcon from '@mui/icons-material/FolderShared';


const Header = () => {

    const displayTitle = () => {
        return <>
        <FolderSharedIcon/>
        <Typography variant="h6" component="h1" style={{paddingLeft: 10,fontStyle: 'bold'}}>
            User - Directory App
        </Typography>
        </>
        
    };
  const displayHeader = () => {
    return <Toolbar> { displayTitle() }</Toolbar>;
  };
  return (
    <header>
      <AppBar>{displayHeader()}</AppBar>
    </header>
  );
};

export default Header;
