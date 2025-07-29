<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
    <HeaderComponent />

    <section class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <!-- Project Image -->
      <img
        :src="project.image"
        alt="Gambar Project"
        class="w-full h-[240px] sm:h-[360px] md:h-[420px] object-cover rounded-2xl shadow-lg mb-10"
      />

      <!-- Project Title -->
      <h1 class="text-3xl sm:text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-4">
        {{ project.title }}
      </h1>

      <!-- Project Description -->
      <p class="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
        {{ project.description }}
      </p>

      <!-- Struktur Folder Android Studio -->
      <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md">
        <h2 class="text-2xl font-semibold text-indigo-500 dark:text-indigo-400 mb-4">
          📁 Struktur Folder Penting Android Studio
        </h2>
        <ul class="list-disc list-inside space-y-3 text-gray-700 dark:text-gray-300">
          <li>
            <strong>📂 <code>app/</code></strong> – Folder utama project Android. Di dalamnya terdapat struktur inti seperti `java/`, `res/`, dan `manifests/`.
          </li>
          <li>
            <strong>📂 <code>java/</code></strong> – Menyimpan semua file Java/Kotlin, termasuk `Activity`, `Fragment`, dan `helper class` lainnya.
          </li>
          <li>
            <strong>📂 <code>res/</code></strong> – Resource visual seperti:
            <ul class="list-disc ml-6 mt-1 space-y-1">
              <li><code>layout/</code> – XML untuk tampilan UI</li>
              <li><code>drawable/</code> – Gambar & ikon</li>
              <li><code>values/</code> – String, warna, dimensi, dsb</li>
            </ul>
          </li>
          <li>
            <strong>📂 <code>manifests/</code></strong> – Tempat file <code>AndroidManifest.xml</code>, yang mendefinisikan permission, komponen app, dan metadata lainnya.
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script setup>
const project = {
  title: 'Penjelasan Ringkas Android Studio',
  description: `Android Studio adalah Integrated Development Environment (IDE) resmi untuk sistem operasi Android. 
  IDE ini dibangun di atas JetBrains IntelliJ IDEA, dirancang khusus untuk pengembangan aplikasi Android. 
  Android Studio menggantikan Eclipse ADT yang sebelumnya digunakan sebagai tool utama.`,
  image: '/Astu.jpg', // Rasio ideal: 2:1, contoh ukuran: 1200x600px
}
</script>
 