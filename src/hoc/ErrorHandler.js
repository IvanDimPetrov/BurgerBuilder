import React, { useEffect, useState } from 'react';
import Modal from '../components/UI/Modal/Modal.js';
import Aux from './Auxiliary.js';

const ErrorHandler = (WrappedComponent, axios) => {
    return function ErrorHandlerComponent (props) {

        const [show, setShow] = useState(false);

        let responceInteceptors = axios.interceptors.response.use(response => {
            return response;
        }, error => {
            setShow(true)
        });

        let requestInterceptors = axios.interceptors.request.use(response => {
            return response;
        }, error => {
            setShow(true)
        });

        useEffect(() => {

           return () => {
                axios.interceptors.response.eject(responceInteceptors);
                axios.interceptors.request.eject(requestInterceptors);
           }

        }, [responceInteceptors, requestInterceptors]);

        return (
            <Aux>
                <Modal show={show} modalClosed={() => setShow(false)}>
                    <div>Ooops!!! Something went wrong.</div>
                </Modal>
                <WrappedComponent {...props} /> 
            </Aux>
        )
    }
};

export default ErrorHandler;