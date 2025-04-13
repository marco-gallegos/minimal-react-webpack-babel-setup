import React, {useState} from 'react';

const App = ({ title }) => {

    const [count, setCount] = useState(0)

    const add = (e) => {
        const newCount = count + 1
        setCount(newCount);
        console.debug(newCount)
    }

    return (
        <div>
            <div>
                {title} {count}
            </div>
            <button onClick={() => add()} >Add</button>
        </div>
    );
}
export default App;
