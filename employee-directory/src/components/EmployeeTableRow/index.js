import React from 'react'

function EmployeeTableRow(props) {
    console.log(props)
    const user = props.user

    return(
        <tr key ={user.login.uuid}>
            <td className="userPic"><img src={user.picture.large}></img></td>
            <td className="userName"><p>{user.name.first} {user.name.last}</p></td>
            <td className="userLogin"><p>{user.login.username}</p></td>
        </tr>
    )
}

export default EmployeeTableRow