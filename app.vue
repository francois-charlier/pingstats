<template>
  <div>
    <NuxtNotifications position="bottom left" :speed="500" />
    <VitePwaManifest/>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>