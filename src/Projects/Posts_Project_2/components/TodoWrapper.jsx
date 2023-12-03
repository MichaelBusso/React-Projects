import React, { useState, useEffect } from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo';
import EditTodoForm from './EditTodoForm';
import apiRequest from './apiRequest';
import Buttons from './Buttons';
import SearchTodo from './SearchTodo';
import './components style/TodoWrapper.css'

const TodoWrapper = () => {

    const [todos, setTodos] = useState([]);
    const [allTodos, setAllTodos] = useState([]);

    const userId = (JSON.parse(localStorage.getItem('activeUser')))[0].id;

    useEffect(() => {
        const fetchTodos = async () => {
            const response = await fetch(`http://localhost:3500/todos?userId=${userId}`);
            const savedTodos = await response.json();
            setTodos(savedTodos);
            setAllTodos(savedTodos);
        }
        (async () => await fetchTodos())();
    }, [])

    const searchHandler = (inputValue, selected) => {
        if (selected === '' || selected === 'title' || selected === 'searchForAll') {
            setTodos(allTodos.filter((item) => item.title.includes(inputValue)));
        }
        if (selected === 'done') {
            setTodos(allTodos.filter((item) => item.title.includes(inputValue) && item.completed));
        }
        if (selected === 'notDone') {
            setTodos(allTodos.filter((item) => item.title.includes(inputValue) && !item.completed));
        }
        if (selected === 'idNumber') {
            setTodos(allTodos.filter((item) => String(item.id).startsWith(inputValue)));
        }
    }

    const addTodo = async (todo) => {
        const newTodo = { userId: (JSON.parse(localStorage.getItem('activeUser')))[0].id, title: todo, completed: false };
        console.log(newTodo.userId);
        const newTodos = [...todos, newTodo];
        setTodos(newTodos);

        const postOption = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newTodo)
        }
        await apiRequest(`http://localhost:3500/todos?userId=${userId}`, postOption)
    }

    const toggleComplete = async (id) => {
        const newTodos = todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo);
        setTodos(newTodos);

        const myItem = newTodos.filter((item) => item.id === id);
        const updateOptions = {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ completed: myItem[0].completed })
        };
        const reqUrl = `http://localhost:3500/todos/${id}`;
        await apiRequest(reqUrl, updateOptions);
    }

    const deleteTodo = async (id) => {
        const newTodos = todos.filter(todo => todo.id !== id);
        setTodos(newTodos);

        const deleteOptions = { method: 'DELETE' };
        const reqUrl = `http://localhost:3500/todos/${id}`;
        await apiRequest(reqUrl, deleteOptions);
    }

    const editTodo = (id) => {
        setTodos(todos.map(todo => todo.id === id ? { ...todo, isEditing: true } : todo));
    }

    const editTask = async (task, id) => {
        let newTodos = todos.map(todo => todo.id === id ? { ...todo, title: task } : todo);
        newTodos = removeFieldFromObjects(newTodos, 'isEditing');
        setTodos(newTodos);

        const updateOptions = {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title: task })
        };
        const reqUrl = `http://localhost:3500/todos/${id}`;
        await apiRequest(reqUrl, updateOptions);
    }

    const removeFieldFromObjects = (array, fieldToRemove) => {
        return array.map((obj) => {
            const { [fieldToRemove]: removedField, ...newObj } = obj;
            return newObj;
        });
    }

    return (
        <div className='TodoWrapper'>
            <h1>Todos!</h1>
            <TodoForm
                addTodo={addTodo}
            />
            <div className='btns'>
                <Buttons setTodos={setTodos} allTodos={allTodos} />
            </div>
            <SearchTodo searchHandler={searchHandler} />
            {todos.map((todo, index) => (
                todo.isEditing ? (
                    <EditTodoForm
                        editTodo={editTask}
                        task={todo}
                        key={index}
                    />
                ) : (
                    <Todo
                        task={todo}
                        key={index}
                        toggleComplete={toggleComplete}
                        deleteTodo={deleteTodo}
                        editTodo={editTodo}
                    />
                )

            ))}
        </div>
    )
}

export default TodoWrapper;