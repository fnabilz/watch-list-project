import { defineStore } from "pinia";
import { computed, ref } from "vue";


export const useWatchListStore = defineStore('watch-list', () => {

  const items = ref([])

  const getTotalItems = computed(() => items.value.length)

  function addItem(item) {
    items.value.push(item)
  }

  function removeItem(id) {
    items.value = items.value.filter(item => item.id !== id)
  }

  function getById(id) {
    return items.value.filter(item => item.id === Number(id))
  }


  return { items, getTotalItems, addItem, removeItem, getById }

})
