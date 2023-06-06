<script setup>
import { useRoute } from 'vue-router'
import { storeToRefs } from 'pinia'

import { usePostStore } from '@/stores/post'
import TheSinglePost from '@/components/TheSinglePost.vue'

import { useCommentStore } from '@/stores/comment'
import SingleComment from '@/components/SingleComment.vue'

const route = useRoute()
const { post, photo } = storeToRefs(usePostStore())
const { getPost, getPhoto } = usePostStore()
const { fetchCommentsData, fetchAvatars } = useCommentStore()
const { getCommentsData, getAvatars } = storeToRefs(useCommentStore())


getPost(route.params.id)
getPhoto(route.params.id)
fetchCommentsData(route.params.id)
fetchAvatars()
</script>

<template>
  <div>
    
    <div v-if="post">
      <br>
      <div class="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">

        <div class="bg-slate-100 bg-opacity-50 rounded mx-auto">

          <br>

          <TheSinglePost :post="post" :photo_url="photo.url" :comments_number="getCommentsData.length"></TheSinglePost>

          <div v-for="comment in getCommentsData" :key="comment.id">
            <SingleComment :comment="comment" :avatar="getAvatars[comment.id].thumbnailUrl"></SingleComment>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>