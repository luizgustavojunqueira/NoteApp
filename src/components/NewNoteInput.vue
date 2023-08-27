<script setup>
import { useNoteStore } from '../stores/notes'
import { ref } from 'vue'

const notes = useNoteStore()

const title = ref('')

function addNote(t){
    notes.newNote(t)
    this.title = ''
}

</script>

<template>
    <section id="newNoteInput">
        <input v-model="title" @keyup.enter="addNote(title)">
        <button @click="addNote(title)"> Nova Nota </button>
    </section>
</template>