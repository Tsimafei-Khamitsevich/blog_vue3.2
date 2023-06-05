import { defineStore } from 'pinia'

export const useCommentStore = defineStore({
  id: 'comment',
  state: () => ({
    comments: [],
    photos: [],
  }),
  getters: {
    getPostComments: (state) => {
      state.mergeCommentPhoto()
      return state.comments
    }
  },
  actions: {
    async fetchComments(id) {
      this.fetchCommentContent(id)
      this.fetchPhotos()
    },
    async fetchCommentContent(id) {
      this.comments = await fetch(`https://jsonplaceholder.typicode.com/post/${id}/comments`)
      .then((response) => response.json())
    },
    async fetchPhotos() {
      this.photos = await fetch('https://jsonplaceholder.typicode.com/photos')
      .then((response) => response.json())
    },
    async mergeCommentPhoto(){
      let i = 0;
          while (i < this.comments.length) {
              this.comments[i] = Object.assign({}, this.comments[i], this.photos[i]);
              i++;
          }
    },
  //   async onCreateComment(id, body) {
  //     let data = await fetch('https://jsonplaceholder.typicode.com/comments', {
  //       method: 'POST',
  //       body: JSON.stringify({
  //       email: 'Анонимный',
  //       body: body,
  //       postId: id,
  //     }),
  //       headers: {
  //     'Content-type': 'application/json; charset=UTF-8',
  //     },
  //     })
  //     .then((response) => response.json());
     
  //     this.comments.push(data)
  //     alert('Ваш комментарий успешно добавлен!')
  //     }
  },
})