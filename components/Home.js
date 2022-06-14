import React from 'react';
import { Link } from 'react-router-dom';

function Home() {

    return(
        <div>
            <h2>Welcome to MyStore</h2>

            <Link to="/countertwo">display counter</Link> <br></br>

            <Link to="/test/all">Display All Test</Link> <br></br>

            <Link to="/test/save">Add Test Details</Link>

        </div>
    )
}

export default Home;