<script setup>
import TheNavbar from '@/components/TheNavbar.vue';
import TheHero from '@/components/TheHero.vue';
import TheEducation from '@/components/TheEducation.vue';
import SkillsSection from '@/components/SkillsSection.vue';
import ProjectsSection from '@/components/ProjectsSection.vue';
import ContactSection from '@/components/ContactSection.vue';
</script>

<template>
  <div>
    <TheNavbar />
    <main>
      <TheHero />
      <div v-animate-on-scroll><TheEducation /></div>
      <div v-animate-on-scroll><SkillsSection /></div>
      <div v-animate-on-scroll><ProjectsSection /></div>
      <div v-animate-on-scroll><ContactSection /></div>
    </main>
  </div>
</template>
