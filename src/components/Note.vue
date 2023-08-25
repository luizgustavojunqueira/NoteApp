<script setup>
import { useMarkdownStore } from '../stores/markdown.js'

const markdown = useMarkdownStore()

</script>

<template>
    <section id="markdown" v-html="markdown.output">
    </section>
</template>