import React, { Component } from 'react';
import Auxx from '../../hoc/Auxx';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/Sidedrawer/SideDrawer';

class Layout extends Component {

    state = {
        showSideDrawer: true
    }

    SideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false});
    }

    render() {
        return (
            <Auxx>
                <Toolbar />
                <SideDrawer open={this.state.showSideDrawer} closed={this.SideDrawerClosedHandler}/>
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Auxx>
        );
    }
}

export default Layout;