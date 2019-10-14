import React from 'react';

import Aux from '../../hoc/Auxiliary.js/index.js';

const Layout = function(props) {
    return (
        <Aux>
            <div>Toolbar, Sidebar, Backdrop</div>
            <main>
                {props.children}
            </main>
        </Aux>  
    )
}

export default Layout;