<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from '../src/components/navbar/index.vue'
import Footer from '../src/components/footer/index.vue'
</script>

<template>
  <div>

      <header>
        <navbar></navbar>
      </header>
    
    <main>
      <!-- Page content goes here -->
      <router-view></router-view>
    </main>
    <footer>
      <!-- Footer content goes here -->
      <Footer></Footer>
    </footer>
  </div>
</template>

<style scoped>

</style>
