import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default function Users() {
    const [users, setUsers] = useState([])
    const loadUsers = async () => {
        const resp = await axios.get('https://jsonplaceholder.typicode.com/users')
        setUsers(resp.data)
    }

    useEffect(() => {
        loadUsers()
    }, [])

    return (
        <div>
            {users.map(user => <Link to={`/users/${user.id}`} key={user.id} data-testid='user__item'>{user.name}</Link>)}
        </div>
    )
}
