import { defineStore } from 'pinia'
import axios from 'axios'

export const usePostStore = defineStore({
  id: 'post',
  state: () => ({
    posts: [],
    photos: [],
    post: null,
    photo: null,
    loading: false,
    error: null,
  }),
  
  actions: {
    async searchPosts(title){
      this.posts = await fetch(`https://jsonplaceholder.typicode.com/posts?title=${title}`)
      .then((response) => response.json())

      this.photos = await fetch('https://jsonplaceholder.typicode.com/photos')
      .then((response) => response.json())
    },
    async fetchPosts() {
      this.posts = []
      this.loading = true
      
      this.posts = await fetch(`https://jsonplaceholder.typicode.com/posts`)
      .then((response) => response.json())

      this.photos = await fetch('https://jsonplaceholder.typicode.com/photos')
      .then((response) => response.json())
      
      this.loading = false
    },
    async fetchPost(id) {
      this.post = null
      this.loading = true
      try {
        this.post = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((response) => response.json())
        this.photo = await fetch(`https://jsonplaceholder.typicode.com/photos/${id}`)
        .then((response) => response.json())  
      } catch (error) {
        this.error = error
      } finally {
        this.loading = false
      }
    }, 
  }
})