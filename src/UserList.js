import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './UserList.css'

export const UserList = () => {

  const [listOfUsers,setListOfUsers] = useState([])
  
  const fetchData = async () =>{
    const res = await axios.get("https://jsonplaceholder.typicode.com/users")
    setListOfUsers(res.data)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className='UserList'>
        <ul>
            {listOfUsers.map(user => <li key={user.id}>{user.username}</li>)}
        </ul>
    </div>
  )
}
