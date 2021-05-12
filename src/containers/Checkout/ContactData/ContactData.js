import React, { Component } from "react";
import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.css';
import axios from '../../../axios-orders';
import Spinner from "../../../components/UI/Spinner/Spinner";


class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            zipCode: ''
        },
        loading: false
    }

    orderHandler = (event) => {
        event.preventDefault();

        this.setState({ loading: true });
        const order = {
            ingredients: this.props.ingredients,
            // price is normally set up on the SERVER so that a customer cannot alter it!!!
            price: this.props.totalPrice,
            customer: {
                name: 'Nishat',
                address: {
                    street: '123 Gorgeous View Road',
                    zipCode: '84043',
                    country: 'BD'
                },
                email: 'test@test.com'
            },
            deliveryMethod: 'fastest'
        }
        axios.post('/orders.json', order)
            .then(response => {
                this.setState({ loading: false });
                this.props.history.push('/');
            })
            .catch(error => {
                this.setState({ loading: false });
            });
        console.log();
    }

    render() {
        let form = (
            <form>
                <input className={classes.Input}
                    type='text' name='name' placeholder='Your Name' />
                <input className={classes.Input}
                    type='text' name='email' placeholder='Your Email' />
                <input className={classes.Input}
                    type='text' name='street' placeholder='Street' />
                <input className={classes.Input}
                    type='text' name='zip' placeholder='Zip Code' />
                <Button btnType='Success' clicked={this.orderHandler}>ORDER</Button>
            </form>
        );
        if (this.state.loading) {
            form = <Spinner />
        }
        return (
            <div className={classes.ContactData}>
                <h4>Enter your Contact Data</h4>
                {form}
            </div>
        );
    }

}

export default ContactData;