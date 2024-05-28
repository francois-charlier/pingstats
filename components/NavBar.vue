<script lang="ts" setup>
import { getCurrentInstance } from 'vue';

const instance = getCurrentInstance();
</script>

<template>
<div class="fixed bottom-0 left-0 w-full bg-white text-black-800 border-t-2 border-grey-800">
  <div class="container mx-auto pt-4 pb-6 flex justify-center items-center">
    <nav>
      <ul class="flex space-x-14">
        <li>
          <div>
            <NuxtLink  to="/home" class="flex flex-col justify-center items-center opacity-60">
            <img src="public/imgs/home_icon.png" alt="home logo" class="w-6">
            <p class="text-xs">Acceuil</p>
            </NuxtLink>
          </div>
        </li>
        <li>
          <div>
            <NuxtLink  to="/club" class="flex flex-col justify-center items-center opacity-60">
            <img src="public/imgs/club_icon.png" alt="club logo" class="w-6">
            <p class="text-xs">Club</p>
            </NuxtLink>
          </div>
        </li>
        <li>
          <div>
            <NuxtLink to="/agenda" class="flex flex-col justify-center items-center opacity-60">
            <img src="public/imgs/calendrier_icon.png" alt="calendrier" class="w-6">
            <p class="text-xs">Agenda</p>
            </NuxtLink>
          </div>
        </li>
        <li>
          <div>
            <NuxtLink to="/settings" class="flex flex-col justify-center items-center opacity-60">
            <img src="public/imgs/settings_icon.png" alt="settings logo" class="w-6">
            <p class="text-xs">Paramètre</p>
            </NuxtLink>
          </div>
        </li>
      </ul>
    </nav>
  </div>
</div>
</template>

<style scoped>
.router-link-active {
  @apply opacity-100;
}
</style>
