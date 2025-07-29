<template>
  <header class="bg-white dark:bg-gray-900 shadow-md">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
      <!-- Logo -->
      <NuxtLink to="/" class="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
        T.Pak Rohman
      </NuxtLink>

      <!-- Desktop Navigation -->
      <nav class="hidden md:flex space-x-6">
        <NuxtLink
          to="/"
          class="text-gray-700 dark:text-gray-200 hover:text-indigo-600 transition duration-200"
          active-class="text-indigo-600 font-semibold"
        >
          Home
        </NuxtLink>
        <NuxtLink
          to="/project"
          class="text-gray-700 dark:text-gray-200 hover:text-indigo-600 transition duration-200"
          active-class="text-indigo-600 font-semibold"
        >
          Project
        </NuxtLink>
      </nav>

      <!-- Mobile Menu Button -->
      <button @click="toggleMenu" class="md:hidden p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-800 dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>

    <!-- Mobile Navigation Menu -->
    <transition name="fade">
      <nav v-if="isOpen" class="md:hidden px-4 pb-4 space-y-2">
        <NuxtLink
          to="/"
          class="block text-gray-700 dark:text-gray-200 hover:text-indigo-600 transition duration-200"
          active-class="text-indigo-600 font-semibold"
          @click="closeMenu"
        >
          Home
        </NuxtLink>
        <NuxtLink
          to="/project"
          class="block text-gray-700 dark:text-gray-200 hover:text-indigo-600 transition duration-200"
          active-class="text-indigo-600 font-semibold"
          @click="closeMenu"
        >
          Project
        </NuxtLink>
      </nav>
    </transition>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const isOpen = ref(false)
const toggleMenu = () => (isOpen.value = !isOpen.value)
const closeMenu = () => (isOpen.value = false)
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-5px);
}
</style>
