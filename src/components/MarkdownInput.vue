<script setup>

import { useNoteStore } from '../stores/notes.js'
import { debounce } from 'lodash-es'

const notes = useNoteStore()

const update = debounce((e) => {
    notes.updateNote(e.target.value)
}, 100)


</script>

<template>

    <textarea id="markdownInput" :value="notes.input" @input="update">
    </textarea>

</template>