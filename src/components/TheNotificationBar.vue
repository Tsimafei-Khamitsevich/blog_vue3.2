<script setup>
import { defineProps } from 'vue'

defineProps(['loading', 'error'])
</script>
<template>
    <p v-if="loading">Loading post...</p>
    <p v-if="error">{{ error.message }}</p>
</template>