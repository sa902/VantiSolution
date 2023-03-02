import {defineStore} from 'pinia';
import {ref, computed} from 'vue';

export const useRecords = defineStore('records', () => {
  // todo: get this information from the server

  const capacity = ref(120)
  const selectedFloor = ref('All')
  const floors = computed(() => {
    return [
        "Penthouse",
        "Floor 2",
        "Floor 1",
        "Ground",
        "Basement"
    ]
  })

  // I could have applied a filter here but decided to leave this
  // function as a single source of truth
  // when the api functionality is added we can filter on the response.
  // unless you pass a parameter into the api for each specific floor
  // in which case we can use the selectedFloor reactive variable for the req
  const history = computed(() => {
    const out = [];
    const then = new Date("2023-02-04T12:34:56");
    for (let i = 0; i < 200; i++) {
      for (let floor of floors.value) {
        out.push({
          time: new Date(then.getTime() + (30*60*1000*i)),
          peopleCount: Math.round(Math.random() * capacity.value),
          floor
        })
      }
    }
    return out;
  })

  const calculatedResponse = computed(()=>{
    if (selectedFloor.value === "All"){
      return history.value
    }
    else {
      return history.value.filter(x => x.floor === selectedFloor.value)
    }
  })

  return {
    capacity,
    floors,
    history,
    selectedFloor,
    calculatedResponse
  }
})
