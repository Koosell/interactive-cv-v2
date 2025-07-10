<script setup>
import SectionTitle from './SectionTitle.vue';

const projects = [
  {
    title: 'Website Toko TopUp',
    image: 'https://cloud.jpnn.com/photo/arsip/normal/2024/03/01/sukses-dengan-layanan-top-up-game-uc-store-kini-menghadirkan-tuht.jpg',
    description: 'Platform e-commerce dengan fitur keranjang belanja dan pembayaran.',
    tech: ['React', 'Laravel', 'Vite'],
    link: '#'
  },
  {
    title: 'Logo Pegasus',
    image: 'https://i.imgur.com/UHeXxFl.png',
    description: 'Logo untuk perusahaan kopi.',
    tech: ['Ilustrator', 'Photoshop'],
    link: '#'
  },
];
</script>

<template>
  <section id="proyek" class="py-20 bg-white">
    <div class="container mx-auto px-6">
      <SectionTitle title="Proyek Unggulan" />
      <div class="grid md:grid-cols-2 gap-12">
        <div v-for="project in projects" :key="project.title" class="bg-gray-50 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
          <img :src="project.image" alt="Gambar Proyek" class="w-full h-56 object-cover">
          <div class="p-6">
            <h3 class="text-2xl font-bold text-gray-800 mb-2">{{ project.title }}</h3>
            <p class="text-gray-600 mb-4">{{ project.description }}</p>
            <div class="mb-4">
              <span v-for="t in project.tech" :key="t" class="inline-block bg-blue-100 text-blue-800 text-sm font-semibold mr-2 mb-2 px-2.5 py-0.5 rounded-full">{{ t }}</span>
            </div>
            <a :href="project.link" target="_blank" rel="noopener noreferrer" class="text-blue-600 font-semibold hover:underline">
              Lihat Detail &rarr;
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
