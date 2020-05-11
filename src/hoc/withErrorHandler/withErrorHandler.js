import React, { Component } from 'react';
import Modal from '../../components/UI/Modal/Modal';
import Aux from "../Auxiliary/Auxiliary";
const withErrorHandler = (WrappedComponent, axios) => {
    return class extends Component {
        state = {
            error: null
        }

        constructor() {
            super();
            //before request is sent
            this.reqInterceptors = axios.interceptors.request.use(req => {
                this.setState({ error: null });
                return req;
            });
            //before response is displayed
            this.resInterceptors = axios.interceptors.response.use(response => response, error => {
                this.setState({ error: error });
            })
        }


        //Keeps on loading does not show error need to set in constructor 
        //componentdidmount runs after child elements are displayed
        // componentDidMount() {
        //     //before request is sent
        //     axios.interceptors.request.use(req => {
        //         this.setState({ error: null });
        //         return req;
        //     })
        //     //before response is displayed
        //     axios.interceptors.response.use(response => response, error => {
        //         this.setState({ error: error });
        //     })
        // }
        componentWillUnmount() {
            // console.log('will unmount', this.reqInterceptors, this.resInterceptors)
            axios.interceptors.request.eject(this.reqInterceptors);
            axios.interceptors.request.eject(this.resInterceptors);
        }
        errorConfirmedHandler = () => {
            this.setState({ error: null });
        }
        render() {
            return (
                <Aux>
                    <Modal
                        show={this.state.error}
                        modalClosed={this.errorConfirmedHandler}
                        clicked={this.errorConfirmedHandler}
                    >
                        {this.state.error ? this.state.error.message : null}
                    </Modal>
                    <WrappedComponent {...this.props} />
                </Aux>
            );
        }
    }
}
export default withErrorHandler;