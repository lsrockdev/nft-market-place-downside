<script setup>
import Ribbon from '@/core/components/Ribbon.vue';
import DetailButton from '@/core/components/DetailButton.vue';


defineProps({
    img_url: String,
    percent: {
        type: Number,
        default: 100
    },
    period: {
        type: Number,
        default: 365
    },
})


</script>

<template>
    <div
        class="relative overflow-hidden p-6 w-full"
        :style="{ background: 'url(' + img_url + ')', backgroundRepeat: 'no-repeat', backgroundSize: 'contain', backgroundPosition: 'center', backgroundColor: '#222222', paddingTop: '100%' }"
    >
        <ribbon :percent="percent" :period="period" />
    </div>
    <div class="overflow-hidden overflow-x-auto mt-4 mb-8 items-center">
        <div class="flex w-full items-center text-sm font-ibm-bold">
            <detail-button>Details</detail-button>
            <detail-button class="min-w-fit">About the creator</detail-button>
            <detail-button class="min-w-fit">Chain info</detail-button>
            <detail-button class="min-w-fit">Downside Protection</detail-button>
            <div class="grow"></div>
            <div
                class="border border-black w-8 h-8 px-2 pt-0.75 hover:bg-primary-900 bg-tertiary-800"
            >
                <font-awesome-icon :icon="['fas', 'undo']" />
            </div>
            <div
                class="border-y border-r border-black w-8 h-8 px-2 pt-0.75 hover:bg-primary-900 bg-tertiary-800"
            >
                <font-awesome-icon :icon="['fas', 'external-link-alt']" />
            </div>
            <div
                class="border-y border-black w-8 h-8 px-2 pt-0.75 hover:bg-primary-900 bg-tertiary-800"
            >
                <font-awesome-icon :icon="['fas', 'share-alt']" />
            </div>
            <div
                class="border border-black w-8 h-8 px-2 pt-0.75 hover:bg-primary-900 bg-tertiary-800"
            >
                <font-awesome-icon :icon="['fas', 'bars']" />
            </div>
        </div>
    </div>
</template>
