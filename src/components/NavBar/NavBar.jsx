import { Link } from 'react-router-dom'
import * as userService from '../../utilities/users-service' 

export default function NavBar({ user, setUser, setNotes }) {

    function handleLogOut() {
        userService.logOut()
        setUser(null)
        setNotes([])
    }

    return (
        <nav>
            &nbsp;&nbsp; Welcome, {user.name}
            &nbsp;&nbsp;<Link to="" onClick={handleLogOut}>Log Out</Link>
        </nav>
    )
}