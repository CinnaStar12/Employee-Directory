import React, { useState, useEffect } from 'react'
import API from '../../utils/API'
import EmployeeTableRow from "../EmployeeTableRow/index"

function Employees() {
    const [users, setUsers] = useState([])
    const [error, setError] = useState("")
    const [search, setSearch] = useState()

    useEffect(() => {
        API.getUsers()
            .then(res => {
                console.log(res)
                setUsers(res.data.results)
            }
            )
            .catch(err => setError(err))
    }, []);

    // useEffect(() => {
    //     setUsers(users.filter(user => {
    //         const name = user.name.last
    //         return (users.map(() => name.indexOf(search) !== -1))
    //     }
    //     ))
    // },[search, users])

    console.log(users)
    const userList = users.map(user => 
        <EmployeeTableRow users={users}>
        </EmployeeTableRow>
    )
        // <tr key={user.login.uuid}>
        //     <td>
        //         <img src={user.picture.large} alt={user.login.username}></img>
        //     </td>
        //     <td>
        //         <span>{user.name.first} {user.name.last}</span>
        //     </td>
        //     <td>
        //         <span>{user.login.username}</span>
        //     </td>
        // </tr>

    return ({userList})
}

export default Employees;