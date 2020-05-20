import React, { Component } from "react";
import { Route, Redirect } from 'react-router-dom';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from '../../containers/Checkout/ContactData/ContactData';
import { connect } from 'react-redux';
// import * as actionCreators from '../../store/actions/index'
class Checkout extends Component {

    // Too late next time clicked checkout redirects to home page
    //renders with old prop
    // constructor(props) {
    //     super(props);
    //     this.props.onInitPurchase()
    // }

    checkoutCancelledHandler = () => {
        this.props.history.goBack();
    }
    checkoutContinuedHandler = () => {
        this.props.history.replace('/checkout/contact-data');
    }
    render() {
        let summary = <Redirect to='/' />
        const purchaseRedirect = this.props.purchased ? <Redirect to='/' /> : null
        console.log(this.props.purchased);
        if (this.props.ings) {
            summary = (
                <div>
                    {purchaseRedirect}
                    <CheckoutSummary
                        ingredients={this.props.ings}
                        checkoutCancelled={this.checkoutCancelledHandler}
                        checkoutContinued={this.checkoutContinuedHandler}
                    />
                    <Route path={this.props.match.path + '/contact-data'}
                        component={ContactData} />
                </div>
            );
        }
        return summary;
    }
}
const mapStateToProps = state => {
    return {
        ings: state.burgerBuilder.ingredients,
        purchased: state.order.purchased
    };
}
// const mapDispatchToProps = dispatch => {
//     return {
//         onInitPurchase: () => dispatch(actionCreators.purchaseInit())
//     }
// }
export default connect(mapStateToProps)(Checkout);