import React, {useState} from 'react';

const UseStateBasics = () => {

    // console.log(useState("hello world"));
    // const value = useState(1)[0];
    // const handler = useState(1)[1];
    // console.log(value, handler)
    const handleClick = () => {
        if (title === 'Random Title') {
            setTitle('Hello World');
        }
        else {
            setTitle('Random Title')
        }
    }

    const [title, setTitle] = useState('Random Title');
    
    return (
        <>
            <h2>useState Basic Example</h2>
            <h2>{ title }</h2>
            <button type="button" className="btn" onClick={handleClick}>
                Change Title
            </button>
            
        </>
    )
}

export default UseStateBasics
