<template>
  <Responsive class="w-full text-tertiary-400">
    <template #main="{ width }">
      <Chart :size="{ width, height: 420 }" :data="data" :axis="axis" :margin="margin">
        <template #layers>
            <Grid strokeDasharray="100,0" hideY stroke-opacity="1" />
            <Line :dataKeys="['name', 'pl']" :lineStyle="{stroke: '#19cb58', strokeWidth: '3'}" />
        </template>
      </Chart>
    </template>
  </Responsive>
</template>

<script lang="ts">
    import { defineComponent, ref } from 'vue'
    import { Responsive, Chart, Grid, Line } from 'vue3-charts'

    const plByMonth = [
        { name: 'Jan', pl: 1000, avg: 500, inc: 300 },
        { name: 'Feb', pl: 2000, avg: 900, inc: 400 },
        { name: 'Apr', pl: 400, avg: 400, inc: 500 },
        { name: 'Mar', pl: 3100, avg: 1300, inc: 700 },
        { name: 'May', pl: 200, avg: 100, inc: 200 },
        { name: 'Jun', pl: 600, avg: 400, inc: 300 },
        { name: 'Jul', pl: 500, avg: 90, inc: 100 }
    ]

    export default defineComponent({
        name: 'LineChart',
        components: { Responsive, Chart, Grid, Line },
        setup() {
            const data = ref(plByMonth)
            const direction = ref('horizontal')
            const margin = ref({
                left: 10,
                top: 20,
                right: 20,
                bottom: 10
            })

            const axis = ref({
                primary: {
                    type: 'band',
                    format: (val: string) => {
                        // if (val === 'Feb') {
                        //     return '😜'
                        // }
                        return val
                    }
                },
                secondary: {
                    domain: ['dataMin', 'dataMax + 100'],
                    type: 'linear',
                }
            })

            return { data, direction, margin, axis }
        }
    })
</script>