import React, {useState, useEffect} from 'react';
// import notes from '../assets/data';
import NotesListItem from '../components/NotesListItem';
import { Link } from 'react-router-dom';
import {AiOutlinePlusCircle} from 'react-icons/ai';

const NotesList = () => {
    const [notes, setNotes] = useState([]);
    const url = '/api/notes/';

    const AddButton = () => {
        return (
            <div className='add-button-container'>
                <Link to='/note/new' className='add-button'>
                <AiOutlinePlusCircle size ='2rem' />
                </Link>
            </div>
            
        )
    }

    // because we want to fetch data first, we use useEffect
    useEffect(() => {
        getNotes();
    }, [])


    const getNotes = async () => {
        let response = await fetch(url);
        let data = await response.json();
        setNotes(data);
        console.log(data);
    }

    return (
        <>
        <ul className='main-list'>
            {notes.map(({id, body}) => {
                return <NotesListItem key={id} body={body} id={id} />;
            })}
        </ul>
        <AddButton />
        </>
    )
}

export default NotesList;