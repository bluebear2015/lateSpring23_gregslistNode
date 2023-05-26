import { dbContext } from "../db/DbContext.js"
import { BadRequest, Forbidden } from "../utils/Errors.js"

class HouseService{

async getHouses(query){

    const houses = await dbContext.House.find(query)
        return houses
}

async createHouse(houseData) {
    const newHouse = await dbContext.House.create(houseData)
    return newHouse
}



async getHouseById(houseId) {
    const house = await dbContext.House.findById(houseId)

    if (!house) {
        throw new BadRequest("Unable to find house id")
    }
    return house
}

async editHouse(houseData, houseId, userId) {
    
    const originalHouse = await this.getHouseById(houseId)

    if (originalHouse.creatorId != userId) {
        throw new Forbidden("")
    
    



}
await originalHouse.save()
        return originalHouse

}


async deleteHouse(houseId, userId) {

    const house = await this.getHouseById(houseId)
 if (house.creatorId != userId) {
        throw new Forbidden("Unauthorized ")
    }

    await house.remove()
    return
}


}


export const houseService = new HouseService()