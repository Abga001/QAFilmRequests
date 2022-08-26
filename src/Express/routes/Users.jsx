import { Link, useParams } from 'react-router-dom';

function User() {
    const { id } = useParams();

    return (
        <>
            <h1>Users</h1>
            <strong>Select a user:</strong>
            <ul>
                <li>
                    <Link to="/users/Me">Me</Link>
                </li>
                <li>
                    <Link to="/users/Me 2">Me 2</Link>
                </li>
                <li>
                    <Link to="/users/Me 3">Me 3</Link>
                </li>
                <li>
                    <Link to="/users/Me 4?">Me 4?</Link>
                </li>

            </ul>
            <p>{id}</p>
        </>
    );
}
export default User; 