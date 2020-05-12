import React, { useState, useEffect } from 'react'
import API from '../../utils/API'

function Employees() {
    const [users, setUsers] = useState([])
    const [error, setError] = useState("")

    useEffect(() => {
        API.getUsers()
            .then(res => {
                console.log(res)
                setUsers(res.data.results)
            }
            )
            .catch(err => setError(err))
    }, []);

    console.log(users)
    const userList = users.map(user =>
        <tr key={user.login.uuid}>
            <td>
                <img src={user.picture.large} alt={user.login.username}></img>
            </td>
            <td>
                <span>{user.name.first} {user.name.last}</span>
            </td>
            <td>
                <span>{user.login.username}</span>
            </td>
        </tr>
    )

    return (
        <div>
            <table>
                <tr>
                    <th>Picture
                    </th>
                    <th>Name</th>
                    <th>Username</th>
                </tr>
                {userList}
            </table>
        </div>
    )
}

export default Employees;