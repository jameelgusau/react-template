import React from 'react'
import { Link } from 'react-router-dom';

import './layout.scss';


const Layout = ({ children }) => {
    return (
        <div >
            {children}
            <h1 className="h1">This is a header</h1>
           <p className="pullRight">this is a paragraph</p> 
        </div>
    )
}

export default Layout
