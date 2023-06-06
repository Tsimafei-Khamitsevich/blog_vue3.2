import { defineStore } from 'pinia'

export const useCommentStore = defineStore({
    id: 'comment',
    state: () => ({
        comments: [],
        avatars: [],
    }),
    getters: {
        getCommentsData: (state) => {
            return state.comments
        },
        getAvatars: (state) => {
            return state.avatars
        },
    },
    actions: {
        async fetchCommentsData(id) {
            this.comments = await fetch(`https://jsonplaceholder.typicode.com/post/${id}/comments`)
                .then((response) => response.json())
        },
        async fetchAvatars() {
            this.avatars = await fetch('https://jsonplaceholder.typicode.com/photos')
                .then((response) => response.json())
        },
        async onCreateComment(id, comment_text) {
            try {
                let data = await fetch('https://jsonplaceholder.typicode.com/comments', {
                        method: 'POST',
                        body: JSON.stringify({
                            email: 'Анонимный',
                            body: comment_text,
                            postId: id,
                        }),
                        headers: {
                            'Content-type': 'application/json; charset=UTF-8',
                        },
                    })
                    .then((response) => response.json());

                this.comments.push(data)
                alert('Ваш комментарий успешно добавлен!')
            } catch (error) {
                alert(error.message)
            }
        }
    },
})