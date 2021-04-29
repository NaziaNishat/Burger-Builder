import React from 'react';
import classes from './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggl from '../Sidedrawer/DrawerToggl/DrawerToggl';

const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <DrawerToggl clicked={props.drawerTogglClicked}/>
        <div className={classes.Logo}>
            <Logo />
        </div>
        <nav className={classes.DesktopOnly}>
            <NavigationItems />
        </nav>
    </header>
);

export default toolbar;