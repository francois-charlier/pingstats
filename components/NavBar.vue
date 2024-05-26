<template>
<div class="fixed bottom-0 left-0 w-full bg-white text-black-800 border-t-2 border-grey-800">
  <div class="container mx-auto py-4 flex justify-center items-center">
    <nav>
      <ul class="flex space-x-14">
        <li>
          <div class="flex flex-col opacity-60 justify-center items-center">
            <img src="public/imgs/home_icon.png" alt="">
            <nuxt-link to="/">Home</nuxt-link>
          </div>
        </li>
        <li>
          <div class="flex flex-col opacity-60 justify-center items-center">
            <img src="public/imgs/club_icon.png" alt="">
            <nuxt-link to="/club">Club</nuxt-link>
          </div>
        </li>
        <li>
          <div class="flex flex-col opacity-60 justify-center items-center">
            <img src="public/imgs/calendrier_icon.png" alt="">
            <nuxt-link to="/test">Test</nuxt-link>
          </div>
        </li>
        <li>
          <div class="flex flex-col opacity-60 justify-center items-center">
            <img src="public/imgs/settings_icon.png" alt="">
            <nuxt-link to="/settings">Settings</nuxt-link>
          </div>
        </li>
      </ul>
    </nav>
  </div>
</div>
</template>
