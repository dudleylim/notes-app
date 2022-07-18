import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';
import { BsChevronLeft } from 'react-icons/bs';

const NotesItem = () => {
    const [note, setNote] = useState({});
    const {noteId} = useParams();

    useEffect(() => {
        getNote();
    }, [noteId])

    const getNote = async () => {
        if (noteId === 'new') {
            return
        }
        let response = await fetch(`http://localhost:8000/notes/${noteId}`);
        let datum = await response.json();
        setNote(datum);
    }

    const createNote = async () => {
        await fetch(`http://localhost:8000/notes/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                ...note,
                'updated': new Date()
            })
        })
    }

    const updateNote = async () => {
        await fetch(`http://localhost:8000/notes/${noteId}`, {
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
        await fetch(`http://localhost:8000/notes/${noteId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({...note})
        })
    }

    const handleSubmit = () => {
        console.log(note.body);
        if (noteId === 'new' && note.body !== undefined) {
            createNote();
        } else if (noteId !== 'new') {
            updateNote();
        }
    }

    return (
        <article className='main-item-details'>
            <div className='main-item-buttons'>
            <Link to='/'><button onClick={handleSubmit}><BsChevronLeft size='1.5rem' /></button></Link>
            {noteId === 'new' ? <></> : <Link to='/'><button onClick={() => {deleteNote()}} className='delete-button'>Delete</button></Link>}
            </div>
            <textarea value={note.body} className='item-text' onChange={(e) => {setNote({...note, 'body': e.target.value})}}></textarea>
            
        </article>
    )
}

export default NotesItem