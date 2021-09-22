const tasks = {
    tasks : [{
        text: 'Grocery Shopping',
        completed : true,
    }, {
        text : 'Clean Yard',
        completed : false,
    } , {
        text : 'Film Course',
        completed : false,
    }] ,
    getTasksToDo() {
        return this.tasks.filter((task) => task.completed === false)
    }
}

console.log(tasks.getTasksToDo());


const { bgGreen } = require('chalk')
const chalk = require('chalk')
const fs =require('fs')
const getNotes = function () {
    return "Your Notes..."
}

const addNote = function(title,body) {
    const notes = loadNotes()
    const duplicateNotes = notes.filter(function(note) {
        return note.title === title
    })
    

    if(duplicateNotes.length === 0){
        notes.push({
            title : title,
            body : body,
        })

        saveNotes(notes)
        console.log('New Note Added');
    }else{
        console.log('Note title Taken');
    }


    
}

const saveNotes = function(notes) {
    const dataJson = JSON.stringify(notes);
    fs.writeFileSync('notes.json',dataJson)
}


const loadNotes = function() {
    try {
        const dataBuffer =fs.readFileSync('notes.json')
        const dataJson = dataBuffer.toString()
        return JSON.parse(dataJson)
    }catch(e) {
        return []
    }
}

const removeNote = function(title) {
    const notes = loadNotes()
    const notesToKeep = notes.filter(function (note) {
        return note.title !== title
    })
    if(notesToKeep.length !== notes.length){
        console.log(chalk.bgGreen.inverse('Note Removed'));
        saveNotes(notesToKeep)
    }else{
        console.log(chalk.bgRed.inverse('No note Found'));
    }
    
}

module.exports ={
    getNotes : getNotes,
    addNote : addNote,
    removeNote : removeNote
}