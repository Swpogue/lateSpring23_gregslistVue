import { AppState } from "../AppState.js"
import { House } from "../models/House.js"
import { logger } from "../utils/Logger.js"
import Pop from "../utils/Pop.js"
import { api } from "./AxiosService.js"

class HousesService {

    async getHouses() {
        const res = await api.get('api/houses')
        logger.log('[GETTING Houses]', res.data)
        AppState.houses = res.data.map(h => new House(h))
        // logger.log(AppState.cars)
    }

    async getHouseById(houseId) {
        const res = await api.get(`api/houses/${houseId}`)
        logger.log('[GETTING House BY ID]', res.data)
        AppState.activeHouse = new House(res.data)
    }


    async createHouse(formData) {
        const res = await api.post('api/houses', formData)
        logger.log('[CREATING House]', res.data)
        AppState.houses.unshift(new House(res.data))
    }

    async deleteHouse(houseId) {
        
        const res = await api.delete(`api/houses/${houseId}`)
        logger.log('[DELETING house]', res.data)
        AppState.houses = AppState.houses.filter(h => h.id != houseId)
    }
}

export const housesService = new HousesService()