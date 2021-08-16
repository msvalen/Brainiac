import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return(
        <div className='NotFound'>
            <h1>Sorry: Page not found</h1>
            <Link to={'/'}>Go back to home page</Link>
        </div>
    )
}

export default NotFound;