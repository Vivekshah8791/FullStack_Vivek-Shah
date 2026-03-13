import { useState } from "react";

function List() {

    const [items, setItems] = useState([]);
    const [text, setText] = useState("");

    function addItem() {
        setItems([...items, text]);
        setText("");
    }

    function removeItem() {
        setItems(items.slice(0, -1));
    }

    return (
        <>
            <input 
                type="text" 
                value={text} 
                onChange={(e) => setText(e.target.value)} 
            />

            <button onClick={addItem}>Add Item</button>
            <button onClick={removeItem}>Remove Last Item</button>

            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </>
    );
}

export default List;