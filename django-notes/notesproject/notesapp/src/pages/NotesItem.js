import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { Link, useNavigate } from 'react-router-dom';
import { BsChevronLeft } from 'react-icons/bs';

const NotesItem = () => {
    const [note, setNote] = useState({});
    const {noteId} = useParams();
    let navigate = useNavigate();

    useEffect(() => {
        getNote();
    }, [noteId])

    const getNote = async () => {
        if (noteId === 'new') {
            return
        }
        let response = await fetch(`/api/notes/${noteId}`);
        let datum = await response.json();
        setNote(datum);
    }

    const createNote = async () => {
        await fetch('/api/notes/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(note)
        })
    }

    const updateNote = async () => {
        await fetch(`/api/notes/${noteId}/`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                ...note,
                'updated': new Date()
            })
        })
    }

    const deleteNote = async () => {
        await fetch(`/api/notes/${noteId}/`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({...note})
        })
        setTimeout(() => {navigate("/")}, 1);
    }

    const handleSubmit = () => {
        console.log(note.body);
        if (noteId === 'new' && note.body !== undefined) {
            createNote();
        } else if (noteId !== 'new' && (note.body === undefined || note.body  === '')) {
            deleteNote();
        } else if (noteId !== 'new' && note.body !== undefined) {
            updateNote();
        }
        setTimeout(() => {navigate("/")}, 1);
    }

    return (
        <article className='main-item-details'>
            <div className='main-item-buttons'>
            <button onClick={handleSubmit}><BsChevronLeft size='1.5rem' /></button>
            {noteId === 'new' ? <></> : <Link to='/'><button onClick={() => {deleteNote()}} className='delete-button'>Delete</button></Link>}
            </div>
            <textarea value={note.body} className='item-text' onChange={(e) => {setNote({...note, 'body': e.target.value})}}></textarea>
        </article>
    )
}

export default NotesItem