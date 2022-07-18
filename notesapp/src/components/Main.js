import React from 'react'
import {Routes, Route} from 'react-router-dom';
import NotesList from '../pages/NotesList';
import NotesItem from '../pages/NotesItem';

const Main = () => {
    return (
        <main>
            <section className='main-content'>
                <div className="main-heading">
                    <h1>Notes</h1>
                </div>
                <Routes>
                    <Route path='/' exact element={<NotesList />}/>
                    <Route path='/note/:noteId' element={<NotesItem />} />
                </Routes>
            </section>
        </main>
    )
}

export default Main