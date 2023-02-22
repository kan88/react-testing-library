import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

export default function User() {
    const {id} = useParams()
    const [user, setUser] = useState(null)
    const loadUser = async () => {
        const resp = await axios.get(`https://jsonplaceholder.typicode.com/users?id=${id}`)
        console.log(resp)
        setUser(resp.data[0])
    }

    useEffect (() => {
        loadUser()
    }, [])
    console.log(id)
  return (
    <div>
        {user && <ul>
                <li>{user.id}</li>
                <li>{user.name}</li>
                <li>{user.username}</li>
                <li>{user.email}</li>
            </ul>}
    </div>
  )
}
