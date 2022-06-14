import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

function FetchTest() {

    const [test, setTest] = useState(null);

    const {id} = useParams();

    const fetchTestById = () => {
       axios.get("http://localhost:8080/test/find/"+id).then(resp=>setTest(resp.data));
    }

    useEffect(fetchTestById,[id]);

    return(
        <div>
            <h2> Test Details</h2>
            {
                test !== null &&
                <div> 
                    <p>TestId : {test.testId}</p>
                    <p>Name : {test.testName}</p>
                    <p>Type : {test.testType}</p>
                    <p>maxMarks: {test.maxMarks}</p>
                    
                </div>
            }
            <div>
                <Link to="/test/all">Back</Link>
            </div>
        </div>
    )
}

export default FetchTest;