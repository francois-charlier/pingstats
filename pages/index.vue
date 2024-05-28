<script setup lang="ts">
const { $toast } = useNuxtApp();

async function test() {
  const mat = document.getElementById("matricule")?.value
  const count  = await $fetch('api/getdata',{
    method: 'POST',
    body: {
      matricule: mat
    }
  })
  if(count != "error"){
    const donnee = JSON.parse(count.data)
    console.log(count.matricule,donnee.test)
  }else{
    document.getElementById("matricule").value = ""
    $toast.error('Le matricule est incorrect');
  }

  //localStorage.setItem("test",JSON.stringify(count))
  
}

</script>

<template>
  <div class="flex flex-col justify-center items-center">
    <img src="public/imgs/home_logo.svg" alt="home image" class="w-2/3 mt-16 mb-16">
    <div class="relative mt-2 rounded-md shadow-sm">
      <label for="price" class="block text-sm font-medium leading-6 text-gray-900">Matricule</label>
      <input type="text" name="matricule" id="matricule" class="block w-75% rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6" placeholder="573..." />
    </div>
    <div class="w-3/6">
        <button class="my-12 p-2 bg-blue-600 rounded w-full text-white" v-on:click="test">Login</button>
    </div>
  </div>
  <nuxt-link to="/home">Home</nuxt-link>
</template>