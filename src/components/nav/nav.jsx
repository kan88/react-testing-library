import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
    return (
        <div>
            <Link to='/' data-testid="start__link">start</Link>
            <Link to='/about' data-testid="about__link">about</Link>
            <Link to='/main' data-testid="main__link">main</Link>
            <Link to='/users' data-testid="main__link">users</Link>
        </div>
    )
}
