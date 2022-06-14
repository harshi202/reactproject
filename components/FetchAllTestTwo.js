import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';


function FetchAllTestTwo() {

    const [test, setTest] = useState([]);

    const fetchAllTest = () => {
        Axios.get("http://localhost:8080/test/all").then(resp => setTest(resp.data));
    }
    //similar to componentDidMount and componentDidUpdate
    useEffect(fetchAllTest, []);

    return (
        <div>
            <h2>All Test (using Hooks)</h2>
            {
                test.length > 0 ?

                    <table border="1">
                        <tr>

                            <th>Name</th>
                            <th>Type</th>
                            <th>View</th>
                            <th>Edit</th>
                            <th>delete</th>
                        </tr>
                        {
                            test.map((t, index) =>
                                <tr key={index}>

                                    <td>{t.testName}</td>
                                    <td>{t.testType}</td>

                                    <td><Link to={`/test/get/${t.testId}`}>View</Link></td>
                                    <td><Link to="">Edit</Link></td>
                                    <td><Link to={`/test/delete/${t.testId}`}>Delete</Link></td>
                                </tr>
                            )
                        }
                    </table>
                    : <h3>No Test Available</h3>
            }
            <div>
                <Link to="/">Back To Home</Link>
            </div>
        </div>


    )
}

export default FetchAllTestTwo;