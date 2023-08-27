<script setup>

import MarkdownInput from './MarkdownInput.vue';
import NoteOutput from './NoteOutput.vue';

import { useNoteStore } from '../stores/notes';

const notes = useNoteStore()

</script>

<template> 

    <section id="editor">
        <MarkdownInput v-if="notes.currentNoteIndex >= 0"/>
        <NoteOutput v-if="notes.currentNoteIndex >= 0"/>
    </section>

</template>