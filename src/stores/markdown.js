import { defineStore } from 'pinia'
import { marked } from 'marked'

export const useMarkdownStore = defineStore('markdown', {
    state: () => {
        return {
            input: '',
        }
    },
    getters: {
        output(state){
            return marked(state.input)
        }
    },  
    actions: {
        update(mdInput) {
            this.input = mdInput
        }
    }
})