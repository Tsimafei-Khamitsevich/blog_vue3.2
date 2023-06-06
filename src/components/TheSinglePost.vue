<script setup>
import { defineProps } from 'vue'
import {ref} from "vue"
import { useRoute } from 'vue-router'
import { useCommentStore } from '@/stores/comment'

defineProps(['post', 'photo_url', 'comments_number'])
const { onCreateComment } = useCommentStore()

const comment_text = ref("")

const onCreateCommentButton = () => {
        onCreateComment(route.params.id, comment_text.value)
        comment_text.value = ""
    }
const route = useRoute() 
</script>

<template>
  <img :src="photo_url">
  <h1 class="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">{{ post.title
  }}</h1>

  {{ post.body }}
  <br>
  <section class="not-format">
    <div class="flex justify-between items-center mb-6">
      <h2 class="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">Обсуждение: <span> {{ comments_number
      }}</span></h2>
    </div>

    <form class="mb-6" @submit.prevent="onCreateCommentButton()">
      <div
        class="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <textarea v-model="comment_text" id="comment" rows="6"
          class="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
          placeholder="Напиши комментарий ... " required></textarea>
      </div>
      <div class="buttons flex">
        <div class="btn border border-indigo-500 p-1 px-4 font-semibold cursor-pointer text-gray-200 ml-2 bg-indigo-500">
          <button type="submit">Отправить</button>
        </div>
      </div>
    </form>
  </section>
</template>