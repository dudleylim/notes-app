import React from 'react';
import { Link } from "react-router-dom";

const NotesListItem = ({body, id}) => {
    let title = body.split('\n')[0];
    if (title.length > 20) {
        title = title.slice(0, 20) + "...";
    }
    return (
        <Link to={`/note/${id}`}>
            <li className='main-list-item'>
                <p>{title}</p>
            </li>
        </Link>
    )
}

export default NotesListItem