import React from 'react';
import Button from './Button';

const Buttons = ({ setTodos, allTodos }) => {


    const buttons = [
        {
            function: () => setTodos(allTodos.filter((item) => item.completed)),
            value: 'Done'
        },
        {
            function: () => setTodos(allTodos.filter((item) => !item.completed)),
            value: 'Not Done'
        },
        {
            function: () => setTodos(allTodos.slice().sort((itemA, itemB) => itemA.title.localeCompare(itemB.title))),
            value: 'Alphabetical'
        },
        {
            function: () => setTodos(allTodos.slice().sort(() => Math.random() - 0.5)),
            value: 'Randomly'
        },
        {
            function: () => setTodos(allTodos),
            value: 'Show All'
        }
    ]

    return (
        <div>
            {buttons.map((btn, index) => (
                <Button
                    key={index}
                    handler={btn.function}
                    value={btn.value}
                />
            ))}
        </div>
    )
}

export default Buttons