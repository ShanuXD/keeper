import React from 'react'
import Header from './Heading'
import Note from './Note'
import Footer from './Footer'
import notes from '../notes'
/*
function createNote(item){
    return <Note 
    key={item.key}
    title={item.title}
    discription={item.content}
    />
}
*/
function App(){
    return (
    <div>
    <Header />
    {notes.map((item)=> <Note 
    key={item.key}
    title={item.title}
    discription={item.content}
    />
    )}
    <Footer />
    </div>)
}

export default App