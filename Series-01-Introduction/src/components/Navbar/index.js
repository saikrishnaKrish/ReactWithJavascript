import React from 'react'

const Navbar = () => {
    return (
        <div>
            <ul style={{
                listStyle: 'none',
                display: 'inline-flex'
            }}>
                <li>Home</li>
                <li>All Books</li>
                <li>Contact</li>
            </ul>
        </div>
    )
}

export default Navbar