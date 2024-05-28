<script setup>
import Chart from 'chart.js/auto'
import { PolarArea, Doughnut, Line } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

definePageMeta({
  layout: 'custom',
})

const winLoseRank = {
  "E1": [0,2],
  "E2": [0,3],
  "E3": [0,1],
  "E4": [0,2],
  "E5": [5,4],
  "E6": [11,2],
  "F1": [12,1],
  "F2": [12,0],
}

const lastMatch = [
  "557 P.P.C. Drogenbos",
  [
  ["Joueur 1", "3/2", true],
  ["Joueur 2", "3/2", false],
  ["Joueur 3", "3/2", true],
  ["Joueur 4", "WO", true],
  ]
]

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
        borderRadius: 100,
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
      },
    }
  },
}
</script>

<template>
<div class="flex flex-col justify-center items-center space-y-8 pb-32 pt-8">
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
    <div class="flex flex-row space-x-40">
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
  <div class="min-h-60 px-2 py-4 w-11/12 rounded-3xl shadow-xl bg-gray-100 flex flex-col justify-center items-center">
    <div class="w-full max-h-56 min-h-56">
      <Line 
        id="victory"
        :data="chartDataLine"
        :options="chartOptionsLine"
      />
    </div>
  </div>
    <div class="min-h-32 px-2 py-4 w-11/12 rounded-3xl shadow-xl bg-gray-100 flex flex-col justify-center items-center">
    <div class="w-full max-h-32">
      <table class="table-auto border-spacing-px w-full">
        <thead>
          <tr class="border border-slate-300">
            <th></th>
            <th class="border border-slate-300 text-center" v-for="item in Object.keys(winLoseRank)">{{item}}</th>
          </tr>
        </thead>
        <tbody>
          <tr class="border border-slate-300 text-blue-400">
            <th class="p-0 m-0 w-20 text-black">Victoire</th>
            <td v-for="item in winLoseRank" class="border border-slate-300 text-center">{{item[0]}}</td>
          </tr>
          <tr class="border border-slate-300 text-red-500">
            <th class="p-0 m-0  text-black">Defaite</th>
            <td v-for="item in winLoseRank" class="border border-slate-300 text-center">{{item[1]}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
    <div class="min-h-56 px-2 pb-10 pt-2 w-11/12 rounded-3xl shadow-xl bg-gray-100 flex flex-col justify-center items-center">
      <div class="pb-2 text-center">
        <h1 class="text-lg font-bold">Dernier Match joué</h1>
        <p class="text-sm">{{ lastMatch[0] }}</p>
      </div>
    <div class="w-11/12 max-h-32 min-h-32">
      <table class="w-full border-separate border-spacing-3">
        <tbody>
          <tr v-for="item in lastMatch[1]">
            <td>{{ item[0] }}</td>
            <td :class="[item[2] ? 'text-blue-400' : 'text-red-500', 'text-end' ]">{{ item[1] }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>
</template>