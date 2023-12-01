import React from 'react'

const SearchTodo = ({ searchHandler }) => {
    return (
        <input className='search' placeholder='Type here for search...' onChange={searchHandler} />
    )
}

export default SearchTodo;