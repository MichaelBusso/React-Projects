import React, { useEffect, useState } from 'react'

const SearchTodo = ({ searchHandler }) => {

    const [selected, setSelected] = useState('');
    const [inputValue, setInputValue] = useState('');

    const selectChangeHandler = (e) => {
        setSelected(e.target.value);
    }

    const inputValueChangeHandler = (e) => {
        setInputValue(e.target.value);
     }

    useEffect(() => {
        searchHandler(inputValue, selected);
    }, [selected, inputValue])

    return (
        <div className='search_contauner'>
            <input className='search' placeholder='Type here for search...' onChange={inputValueChangeHandler} />
            <select id='dropDown' value={selected} onChange={selectChangeHandler}>
                <option value='' disabled>Search by:</option>
                <option value='done'>Done</option>
                <option value='notDone'>Not Done</option>
                <option value='title'>Title</option>
                <option value='idNumber'>Id Number</option>
                <option value='searchForAll'>Search for all</option>
            </select>
        </div>
    )
}

export default SearchTodo;