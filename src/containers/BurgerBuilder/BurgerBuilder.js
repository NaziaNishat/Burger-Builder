import React, {Component} from 'react';
import Auxx from '../../hoc/Auxx';
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component{
    render () {
        return (
            <Auxx>
                <Burger />
                <div>Burger Controls</div>
            </Auxx>
        );
    }
}

export default BurgerBuilder;