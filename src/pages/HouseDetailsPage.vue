<template>
  <div class="container-fluid">
      <section class="row justify-content-center">

          <div class="col-8">
              <HouseCard :houseProp="activeHouse" />
              <h1>Bedrooms:{{ activeHouse?.bedrooms }}</h1>
              <h2>{{ activeHouse?.description }}</h2>
          </div>


      </section>
  </div>
</template>

<script>
import { computed, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import Pop from '../utils/Pop.js';
import { logger } from '../utils/Logger.js';
import { housesService } from '../services/HousesService.js';
import { AppState } from '../AppState.js';
import HouseCard from '../components/HouseCard.vue';
export default {
  setup() {
      const route = useRoute(); // NOTE: gives me access to the current route or URL I am on
      const router = useRouter(); // NOTE gives me access to the entire VUE router (this router.js here)
      async function getHouseById() {
          try {
              // NOTE grab the carId from the route parameters
              const houseId = route.params.houseId;
              await housesService.getHouseById(houseId);
          }
          catch (error) {
              Pop.error(error.message);
              logger.log(error);
          }
      }
      onMounted(() => {
          getHouseById();
      });
      return {
          activeHouse: computed(() => AppState.activeHouse)
      };
  },
  components: { HouseCard }
};
</script>

<style></style>