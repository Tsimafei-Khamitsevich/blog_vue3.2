import { defineStore } from 'pinia'

export const usePostStore = defineStore({
    id: 'post',
    state: () => ({
        posts: [],
        photos: [],
        post: null,
        photo: null,
    }),

    actions: {
        async fetchPosts(search='') {
            this.posts = []
            let api_url = 'https://jsonplaceholder.typicode.com/posts'
            if(search){
                api_url = api_url.concat('?title=', search)
            }
            try {
                this.posts = await fetch(api_url)
                    .then((response) => response.json(api_url))
            } catch (error) {
                alert(error)
            }
        },
        async fetchPhotos() {
            try {
                this.photos = await fetch('https://jsonplaceholder.typicode.com/photos')
                    .then((response) => response.json())
            } catch (error) {
                alert(error)
            }
        },
        async getPost(id) {
            try {
                this.post = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
                    .then((response) => response.json())
            } catch (error) {
                alert(error)
            }
        },
        async getPhoto(id) {
            try {
                this.photo = await fetch(`https://jsonplaceholder.typicode.com/photos/${id}`)
                    .then((response) => response.json())
            } catch (error) {
                alert(error)
            }
        },
    }
})