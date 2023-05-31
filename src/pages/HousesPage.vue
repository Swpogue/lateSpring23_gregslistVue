<template>
  <div class="container-fluid">

      <section class="row p-3 justify-content-end">
          <button class="col-3 btn btn-warning" data-bs-toggle="modal" data-bs-target="#create-house">Create House
              🚘</button>
      </section>

      <section class="row">
          <div class="col-md-3 my-3" v-for="house in housesInAppState" :key="house.id">
              <HouseCard :houseProp="house" />
          </div>
      </section>

  </div>
</template>

<script>
import { computed, onMounted } from 'vue';
import { logger } from '../utils/Logger.js';
import { housesService } from '../services/HousesService.js'
import Pop from '../utils/Pop.js';
import { AppState } from '../AppState.js';
import HouseCard from '../components/HouseCard.vue';
export default {
  components: { HouseCard },
  setup() {

      async function getHouses() {
          try {
              await housesService.getHouses()
          } catch (error) {
              Pop.error(error.message)
              logger.log(error)
          }
      }

      onMounted(() => {
          getHouses()
      })

      return {
          placeholderImg: 'http://thiscatdoesnotexist.com',
          housesInAppState: computed(() => AppState.houses)
      };
  },
};
</script>

<style>
.creator-img {
  height: 5vh;
  width: 5vh;
  border-radius: 50%;
}
</style>