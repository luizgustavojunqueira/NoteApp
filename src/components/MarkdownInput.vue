<script setup>

import { useMarkdownStore } from '../stores/markdown.js'
import { debounce } from 'lodash-es'

const markdown = useMarkdownStore()

const update = debounce((e) => {
    markdown.update(e.target.value)
}, 100)

</script>

<template>
    <section id="editor">

        <textarea id="markdownInput" :value="input" @input="update">
        </textarea>

    </section>
</template>