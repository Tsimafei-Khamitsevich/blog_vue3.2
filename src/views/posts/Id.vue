<script setup>
import { useRoute } from 'vue-router'
import { storeToRefs } from 'pinia'

import { usePostStore } from '@/stores/post'
import SinglePost from '@/components/SinglePost.vue'

import { useCommentStore } from '@/stores/comment'
import SingleComment from '@/components/SingleComment.vue'
import TheNotificationBar from "../../components/TheNotificationBar.vue";

const route = useRoute()
const { post, loading, error, photo } = storeToRefs(usePostStore())
const { fetchPost } = usePostStore()
const { fetchComments } = useCommentStore()
const { getPostComments } = storeToRefs(useCommentStore())

fetchPost(route.params.id)
fetchComments(route.params.id)
</script>

<template>
  <div>
    <TheNotificationBar :loading="loading" :error="error"></TheNotificationBar>

    <div v-if="post">
      <br>
      <div class="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">

        <div class="bg-slate-100 bg-opacity-50 rounded mx-auto">

          <br>

          <SinglePost :post="post" :photo_url="photo.url" :comments_number="getPostComments.length"></SinglePost>

          <div v-for="comment in getPostComments" :key="comment.id">
            <SingleComment :comment="comment"></SingleComment>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>