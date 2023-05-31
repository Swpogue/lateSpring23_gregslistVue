import { Profile } from "./Account.js"

export class House {
    constructor(data) {
        this.id = data.id
        this.bedrooms = data.bedrooms
        this.bathrooms = data.bathrooms
        this.levels = data.levels
        this.year = data.year
        this.price = data.price
        this.description = data.description
        this.imgUrl = data.imgUrl
        this.createdAt = new Date(data.createdAt)
        this.creatorId = data.creatorId
        // NOTE this is unnecessary but provides more intellisense when accessing properties on the 'creator' because it has been mapped to a class
        this.creator = new Profile(data.creator)
    }
}
