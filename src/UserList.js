import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './UserList.css'

export const UserList = () => {

  const [listOfUsers,setListOfUsers] = useState([])
  
  const fetchData = async () =>{
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/users")
      setListOfUsers(res.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className='UserList'>
        <ul>
            {listOfUsers.map(user => <li key={user.id}>{user.username}<br/>{user.email}<br/>{user.phone}<br/><br/></li>)}
        </ul>
    </div>
  )
}
