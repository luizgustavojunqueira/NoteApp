<script setup>
import { useNoteStore } from '../stores/notes.js'

const notes = useNoteStore()

</script>

<template>
    <section id="markdown" v-html="notes.output">
    </section>
</template>