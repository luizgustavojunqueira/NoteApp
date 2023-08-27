import { defineStore } from 'pinia'
import { marked } from 'marked'

export const useNoteStore = defineStore('note', {
    state: () => {
        return {
            noteId: 0,
            currentNote: -1,
            notes: []
        }
    },
    getters: {
        output(state) {
            if(this.currentNote >= 0){
                return state.notes[state.currentNote].output
            }
            return ''
        },
        input(state){
            if(this.currentNote >= 0){
                return state.notes[state.currentNote].markdown
            }
            return ''
        },
        currentNoteIndex(state){
            return state.currentNote
        }
    },
    actions: {
        updateNote(noteInput,) {
            this.notes[this.currentNote].markdown = noteInput
            this.generateOutput()
        },
        generateOutput() {
            this.notes[this.currentNote].output = marked(this.notes[this.currentNote].markdown)
        },
        newNote(title) {
            let note = { id: this.noteId++, title: title, markdown: '', output: '' }
            this.notes.push(note)
            this.currentNote = this.notes.length-1
        },
        changeCurrentNote(newIndex){
            this.currentNote = newIndex
        },
        removeNote(index){
            this.notes.splice(index, 1)
            this.currentNote = -1
        }
    }
})