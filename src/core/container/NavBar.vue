<script setup>
import { computed, ref } from 'vue'
import { useStore } from 'vuex'
import NavBarItem from '@/core/components/NavBarItem.vue'
import TopBar from '@/core/components/TopBar.vue';
import Icon from '@/core/components/Icon.vue'
import { mdiThumbUp, mdiHelpCircle } from '@mdi/js'
import NftmxTooltip from '@/core/components/NftmxTooltip.vue';
// import Sidebar from '@/core/components/Sidebar.vue';
import Sidebar from '@/views/sidebar/Sidebar.vue'
import NftmxWalletAddress from '@/core/components/NftmxWalletAddress.vue';

const sidebar = ref(false);
const store = useStore();
const walletAddress = computed(() => store.getters['auth/getWalletAddress'])

function onClickOutside(params) {
  store.commit('app/TOGGLE_SIDEBAR', false)
}
function toggleSidebar(params) {
  store.commit('app/TOGGLE_SIDEBAR', !store.state.app.sidebarOpened)
}

</script>

<template>
  <top-bar class="px-2">
    <div class="flex-1 items-stretch flex h-70px font-ibm">
      <nav-bar-item>
        <router-link to="/">
          <img src="/images/nftmx-logo.png" alt="NFT mx" />
        </router-link>
      </nav-bar-item>
    </div>
    <div
      class="top-14 left-0 w-auto items-stretch flex grow static border-b-0 overflow-visible shadow-none dark:bg-gray-900"
    >
      <div class="max-h-screen-menu overflow-visible flex items-stretch justify-end ml-auto">
        <nav-bar-item>
          <div class="hidden lg:block">
            <span class="text-sm font-ibm-bold hover:text-primary-900">Seller</span>
            <nftmx-tooltip
              class="-top-2"
              text="If you are a seller, NFT.mx allows you to increase your success rate by offering buyers downside protection all while gaining profits from the APY in leveraging other people's money."
            >
              <font-awesome-icon :icon="['fas', 'question-circle']" class="text-xxs" />
            </nftmx-tooltip>
          </div>
        </nav-bar-item>
        <nav-bar-item>
          <div class="hidden lg:block">
            <span class="text-sm font-ibm-bold hover:text-primary-900">Buyer</span>
            <nftmx-tooltip
              class="-top-2"
              text="If you are a buyer, think of NFT.mx as a new strategic staking program with upside from selling the NFT, while also providing the option to cancel your investment and get a 100% refund with your original tokens."
            >
              <font-awesome-icon :icon="['fas', 'question-circle']" class="text-xxs" />
            </nftmx-tooltip>
          </div>
        </nav-bar-item>
        <nav-bar-item @click="toggleSidebar" class="hover:text-primary-900">
          <nftmx-wallet-address
            class="text-sm font-ibm-bold pt-1 hidden sm:block"
            :address="walletAddress"
          />
          <div class="w-2.5 h-2.5 bg-primary-900 rounded-md mt-0.5 ml-6"></div>
        </nav-bar-item>
      </div>
    </div>
  </top-bar>
  <sidebar v-if="store.state.app.sidebarOpened" v-click-outside="onClickOutside" />
</template>

<style scoped>
.h-70px {
  height: 70px;
}
</style>