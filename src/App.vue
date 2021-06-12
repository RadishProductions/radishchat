<template>
  <div>
    <div  class="h-12 flex bg-radish-400" id="nav">
      <Popover v-slot="{ open }" class="relative ml-auto my-auto mr-5">
        <PopoverButton
            :class="open ? '' : 'text-opacity-90'"
            class="inline-flex items-center px-3 py-2 text-base font-medium text-white bg-orange-700 rounded-md group hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          <MenuIcon
              :class="open ? '' : 'text-opacity-70'"
              class="w-6 h-6 ml-2 text-orange-300 transition duration-150 ease-in-out group-hover:text-opacity-80"
              aria-hidden="true"
          />
        </PopoverButton>

        <transition
            enter-active-class="transition duration-200 ease-out"
            enter-from-class="translate-y-1 opacity-0"
            enter-to-class="translate-y-0 opacity-100"
            leave-active-class="transition duration-150 ease-in"
            leave-from-class="translate-y-0 opacity-100"
            leave-to-class="translate-y-1 opacity-0"
        >
          <PopoverPanel
              class="absolute z-10 w-56 max-w-sm px-4 mt-3 transform  right-0 sm:px-0 lg:max-w-3xl"
          >
            <div
                class="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5"
            >
              <div class="relative  grid gap-8 bg-white p-7 lg:grid-cols-1">
                <a
                    v-for="item in items"
                    :key="item.name"
                    :href="item.href"
                    class="flex items-center p-2 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                >
                  <div
                      class="flex items-center justify-center flex-shrink-0 w-10 h-10 text-white sm:h-12 sm:w-12"
                  >
                    <div v-html="item.icon"></div>
                  </div>
                  <div class="ml-4">
                    <p class="text-sm font-medium text-gray-900">
                      {{ item.name }}
                    </p>
                    <p class="text-sm text-gray-500">
                      {{ item.description }}
                    </p>
                  </div>
                </a>
              </div>
              <div class="p-4 bg-gray-50">
                <a
                    href="##"
                    class="flow-root px-2 py-2 transition duration-150 ease-in-out rounded-md hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                >
                <span class="flex items-center">
                  <span class="text-sm font-medium text-gray-900">
                    Documentation
                  </span>
                </span>
                  <span class="block text-sm text-gray-500">
                  Start integrating products and tools
                </span>
                </a>
              </div>
            </div>
          </PopoverPanel>
        </transition>
      </Popover>
    </div>
    <router-view/>
  </div>
</template>
<script>
import {MenuIcon} from '@heroicons/vue/outline';
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
import { ChevronDownIcon } from '@heroicons/vue/solid'
export default {
  components:{
     MenuIcon,
    Popover, PopoverButton, PopoverPanel, ChevronDownIcon
  },
  data:()=>({
    items:[{
      name:'Sign in',
      icon:'<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">\n' +
          '  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />\n' +
          '</svg>'
    }]
  })
}
</script>
<style lang="scss">


</style>
