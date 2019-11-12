import React from 'react';

import classes from './Modal.css';

import Aux from '../../../hoc/Auxiliary.js';
import Backdrop from '../Backdrop/Backdrop.js'


const modal = (props) => {
    return (
        <Aux>
            <Backdrop show={ props.show } clicked={ props.modalClosed }/>
            <div className={ classes.Modal } 
                style={{ 
                    transform: props.show ? 'translateY(0)' : 'translateY(-300vh)',
                    opacity: props.show ? '1' : '0'
                }}>
                { props.children }
            </div>
        </Aux>
    )
};


const comparisonFn = function(prevProps, nextProps) {

    if (prevProps.show !== nextProps.show) {
        return false;
    }

    if (nextProps.children === prevProps.children) {
        return true;
    }
    else if (nextProps.children !== prevProps.children) {
        return false;
    }

    return true;
};

export default React.memo(modal, comparisonFn);