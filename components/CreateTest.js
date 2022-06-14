import React, { useState } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';

function CreateTest() {

    const [tName, setTName] = useState("");
    const [tType, setTType] = useState("");
    const [tmaxMarks, setTmaxMarks] = useState("");  
    const [tpassPercentage, setTpassPercentage] = useState("");   

    const handleSubmit = () => {
        const payload = {
            testName: tName,
            testType: tType,
            maxMarks: tmaxMarks,
            passPercentage:tpassPercentage,
        }
        Axios.post("http://localhost:8080/test/save", payload).then(resp =>
            alert("Test saved with id:" + resp.data.testId));
    }

    return (
        <div>
            <div>
                <label>
                    TestName:
                    <input type="text" name="tName" value={tName} onChange={e=> setTName(e.target.value)} />
                </label>
            </div>
            <div>
                <label>
                TestType:
                    <input type="text" name="tType" value={tType} onChange={e=>setTType(e.target.value)} />
                </label>
            </div>
            <div>
                <label>
                maxMarks:
                    <input type="text" name="tmaxMarks" value={tmaxMarks} onChange={e=>setTmaxMarks(e.target.value)} />
                </label>
            </div>
            <div>
                <label>
                passPercentage:
                    <input type="text" name="tpassPercentage" value={tpassPercentage} onChange={e=>setTpassPercentage(e.target.value)} />
                </label>
            </div>
            <button onClick={handleSubmit}>Submit</button>

            <div>
                <Link to="/">Back To Home</Link>
            </div>
        </div>
        
    )
}

export default CreateTest;