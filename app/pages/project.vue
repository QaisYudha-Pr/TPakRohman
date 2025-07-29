<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
    <!-- Header -->
    <HeaderComponent />

    <!-- Project List -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h2 class="text-3xl font-bold text-center mb-10">Daftar Project</h2>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="(project, index) in projects"
          :key="index"
          class="bg-white dark:bg-gray-800 rounded-2xl shadow-md overflow-hidden transition hover:shadow-lg"
        >
          <img
            :src="project.image"
            :alt="project.title"
            class="w-full h-48 object-cover"
          />
          <div class="p-6">
            <h3 class="text-xl font-semibold text-indigo-600 dark:text-indigo-400 mb-2">
              {{ project.title }}
            </h3>
            <p class="text-gray-600 dark:text-gray-300 mb-4">{{ project.description }}</p>
            <NuxtLink
              :to="project.link"
              class="inline-block text-sm text-white bg-indigo-600 hover:bg-indigo-700 font-medium px-4 py-2 rounded-lg transition"
            >
              Lihat Detail
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const projects = [
  {
    title: 'Tugas Android Studio',
    description: 'Penjelasan Android Studio',
    link: '/detail/1',
    image: '/Astu.jpg',
  },
  
]
</script>
