import React from 'react'
import { useState, useEffect } from 'react'

const Todos = () => {

    const [todos, setTodos] = useState([]);
    const [allTodos, setAllTodos] = useState([]);

    useEffect(() => {
        const fetchTodos = async (userId) => {
            const response = await fetch(`http://localhost:3500/todos?userId=1`);
            const todos = await response.json();
            setTodos(todos);
            setAllTodos(todos);
        }
        (async () => await fetchTodos())()
    }, [])

    const searchHandler = (e) => {
        setTodos(allTodos.filter((item) => item.title.includes(e.target.value)));
    }

    const sortByDoneHandler = () => {
        setTodos(allTodos.filter((item) => item.completed));
    }

    const sortByNotDoneHandler = () => {
        setTodos(allTodos.filter((item) => !item.completed));
    }

    const sortByAlphabeticalHandler = () => {
        setTodos(allTodos.slice().sort((itemA, itemB) => itemA.title.localeCompare(itemB.title)));
    }

    const sortRandomlyHandler = () => {
        setTodos(allTodos.slice().sort(() => Math.random() - 0.5));
    }

    return (
        <>
            <div>Todos</div>
            <div>
                <input type="radio" id="title" name="search" value="title" />
                <label for="title">Search by title</label>
            </div>
            <div>
                <input type="radio" id="id" name="search" value="id" />
                <label for="id">Search by id</label>
            </div>
            <div>
                <input type="radio" id="done" name="search" value="done" />
                <label for="done">Search by done</label>
            </div>
            <input type='text' placeholder='Search' onChange={searchHandler} />
            <button onClick={sortByDoneHandler}>Done</button>
            <button onClick={sortByNotDoneHandler}>Not Done</button>
            <button onClick={sortByAlphabeticalHandler}>Alphabetical</button>
            <button onClick={sortRandomlyHandler}>Randomly</button>

            <ul>
                {todos.map((item) => (
                    <li>{item.id}: {item.title} <input type="checkbox" /></li>
                ))}
            </ul>
        </>

    )
}

export default Todos