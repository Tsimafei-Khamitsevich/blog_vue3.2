<script setup>
import { defineProps } from 'vue'
import { RouterLink } from 'vue-router'

defineProps(['post', 'photo'])
</script>
<template>
    <div class="grid gap-8">
        <article
            class="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 mb-4">
            <img class="rounded" v-bind:src="photo" alt="" />
            <h2 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <RouterLink :to="`/post/${post.id}`">{{ post.title }}</RouterLink>
            </h2>

            <p class="mb-5 font-light text-gray-500 dark:text-gray-400">{{ post.body }}</p>
        </article>
    </div>
</template>