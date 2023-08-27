<script setup>
import { useNoteStore } from '../stores/notes.js'
import NewNoteInput from './NewNoteInput.vue';

const notes = useNoteStore()

</script>

<template>
    <NewNoteInput />
    <section>
        <p v-for="(note, index) in notes.notes" :key="index" @click="notes.changeCurrentNote(index)" @dblclick="notes.removeNote(index)">
            {{ note.title }}
        </p>
    </section>
</template>