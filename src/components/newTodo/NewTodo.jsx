import React, { useCallback, useState } from "react";

const NewTodo = ({ newText, setNewTodo }) => {
    const [texting, setTexting] = useState('');
    const onChangeText = useCallback((e) => {
        setTexting(e.target.value)
    }, [texting])
    const onEnterSubmitHandler = useCallback((e) => {
        if (e.key === 'Enter' && texting) {
            setNewTodo(texting);
        }
    }, [texting, newText])
    const onButtonSubmitHandler = useCallback(() => {
        setNewTodo(texting);
    }, [texting, newText])
    return (
        <div className="newtodo">
            <input
                type="text"
                value={texting}
                placeholder="What needs to be done?"
                onChange={onChangeText}
                onKeyDown={onEnterSubmitHandler}
            />
            {texting ?
                <button onClick={onButtonSubmitHandler}>ADD</button>
                : <></>}
        </div>
    );
}

export default NewTodo;