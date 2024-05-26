<script setup>
import Chart from 'chart.js/auto'
import { Bar, Doughnut, Line } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

definePageMeta({
  layout: 'custom',
})
</script>

<script>
export default {
  data() {
    return {
      chartData: {
        datasets: [ { 
          data: [40, 20],
        } ]
      },
      chartOptions: {
        responsive: true,
        cutout: "80%",
      },
      chartDataLine: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [ {
          label: "victoire", 
          data: [40, 39, 10, 40, 39, 80, 40],
        } ]
      },
      chartOptionsLine: {
        responsive: true,
        maintainAspectRatio: false
      }
    }
  },
}
</script>

<template>
  <div class="flex flex-col justify-center items-center space-y-8 py-16 ">
   <div class="w-3/4 flex flex-col justify-center items-center">
    <h1 class="text-4xl font-bold">Francois Charlier</h1>
    <h1 class="text-xl">E6</h1>
   </div>
   <div class="min-h-50 pb-8 pt-2 w-11/12 rounded-3xl shadow-xl bg-gray-100 flex flex-col justify-center items-center">
    <div class="w-1/2 flex justify-center items-center">
      <Doughnut
        id="winrate"
        :options="chartOptions"
        :data="chartData"
        class="relative"
      />
    </div>
    <div class="absolute mb-10 text-center">
       <h1 class="font-bold text-2xl">96</h1>
       <p class="text-sm">matchs joués</p>
    </div>
    <div class="flex flex-row space-x-28">
      <div class="text-center">
        <h1>Défaites</h1>
        <h1>32</h1>
      </div>
      <div class="text-center">
        <h1>Victoires</h1>
        <h1>64</h1>
      </div>
    </div>
   </div>
   <div class="min-h-60 w-3/4 px-2 py-4 w-11/12 rounded-3xl shadow-xl bg-gray-100 flex flex-col justify-center items-center">
    <div class="w-full max-h-56 min-h-56">
      <Line 
        id="victory"
        :data="chartDataLine"
        :options="chartOptionsLine"
      />
    </div>
   </div>
  </div>
</template>