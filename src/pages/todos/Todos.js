import React, {useEffect, useState} from 'react';
import {getToDos} from "../../services/Json.placeholder";

const Todos = () => {

    const [todos,setTodos] = useState([]);

    useEffect(() => {
        getToDos().then(value => setTodos(value.data))
    }, [])

    return (
        <div>
            <h2>Todos</h2>
            {
                todos.map(value => <p>{JSON.stringify(value)}</p> )
            }
        </div>
    );
};

export default Todos;