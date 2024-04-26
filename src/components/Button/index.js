import React from 'react'

function Button({ onClick }) {
    return (
        <button className="bg-gray-100 border border-gray-100 rounded-lg h-62 w-80 mx-20 hover:bg-opacity-40 cursor-pointer text-black" onClick={onClick}>
            buscar
        </button>
    )
}

export default Button; 
