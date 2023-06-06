<script setup>
import PostCard from '../../components/PostCard.vue';
import { storeToRefs } from 'pinia'
import TheSearchInput from '@/components/TheSearchInput.vue';
import { usePostStore } from '@/stores/post'


const { posts, photos } = storeToRefs(usePostStore())
const { fetchPosts, fetchPhotos } = usePostStore()

fetchPosts()
fetchPhotos()
</script>

<template>
  <main>
    <section>
      <div class="text-center">
        <h2 class="text-3xl font-extrabold text-gray-900">Блог</h2>
      </div>

      <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <TheSearchInput></TheSearchInput>

        <br>
        <div v-for="post in posts" :key="post.id">
          <PostCard :post="post" :photo="photos[post.id - 1].thumbnailUrl"></PostCard>
        </div>
      </div>
    </section>
  </main>
</template>