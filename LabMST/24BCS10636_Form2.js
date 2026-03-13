import { useState } from "react";

function Form() {

    var data = { name: "", email: "", age: "" };
    const [InputData, setInputData] = useState(data);
    function handleData(e) {
        setInputData({ ...InputData, [e.target.name]: e.target.value });
    }

    function submitData(e) {
        e.preventDefault();
        console.log("Data Saved Successfully");
    }

    return (
        <>
            <form onSubmit={submitData}>
                <label>Name:</label>
                <input type="text" name="name" value={InputData.name} onChange={handleData} /><br/>

                <label>Email:</label>
                <input type="email" name="email" value={InputData.email} onChange={handleData} /><br/>

                <label>Age:</label>
                <input type="number" name="age" value={InputData.age} onChange={handleData} /><br/>

                <button type="submit">Submit</button>
            </form>
        </>
    );
}

export default Form;