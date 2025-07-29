<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
    <!-- HeaderComponent -->
    <HeaderComponent />

    <!-- Hero Section -->
    <section class="max-w-7xl mt-20 mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
      <h1 class="text-4xl md:text-5xl font-bold mb-6">
        Selamat Datang di <span class="text-indigo-600 dark:text-indigo-400">CMSku</span>
      </h1>
      <p class="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8">
        Kelola konten dengan mudah dan cepat, dibuat pakai Nuxt 3 + Tailwind ✨
      </p>
      <NuxtLink
        to="/project"
        class="inline-block px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow hover:bg-indigo-700 transition"
      >
        Lihat Project
      </NuxtLink>
    </section>
  </div>
</template>


