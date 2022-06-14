import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function DeleteTest() {

    const [test, setTest] = useState(null);

    const {id} = useParams();
   
    const fetchTestById = () => {
       axios.get("http://localhost:8080/test/find/"+id).then(resp=>setTest(resp.data));
    }

    useEffect(fetchTestById,[id]);

    const DeleteTest = () => {
        axios.delete("http://localhost:8080/test/delete/"+id).then(resp=>alert("Test deleted."));
                
    }

    return(
        <div>
             <h2>Test Details</h2>
            {
                test !== null &&
                <div> 
                    <p>TestId : {test.testId}</p>
                    <p>Name : {test.testName}</p>
                    <p>Type : {test.testType}</p>
                    <p>maxMarks: {test.maxMarks}</p>
                </div>
            }

            <button onClick={DeleteTest}>Delete</button>
        </div>
    )
}

export default DeleteTest;