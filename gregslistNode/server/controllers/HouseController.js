import { Auth0Provider } from "@bcwdev/auth0provider";
import { houseService } from "../services/HouseService.js";
import BaseController from "../utils/BaseController.js";


export class HouseController extends BaseController{
constructor(){
super('api/houses')
this.router
.get('', this.getHouses)
.post('',this.createHouse)
.put('/:houseId', this.editHouse)
.delete('/:houseId', this.deleteHouse)

}
    async getHouses(req, res, next) {
        
        try {
            
            const query = req.query
            const house = await houseService.getHouses(query)
            return res.send(house)
        } catch (error) {
            next(error)
        }


    }


    async createHouse(req, res, next) {
        try {
            const houseData = req.body
            // houseData.creatorId = req.userInfo.id //NOTE grab the id from the user making the request and assign it to the car being created
            const newHouse = await houseService.createHouse(houseData)
            res.send(newHouse)
        } catch (error) {
            next(error)
        }
    }


    async getHouseById(req, res, next) {
        try {
            const houseId = req.params.houseId
            const house = await houseService.getHouseById(houseId)
            
            return res.send(house)
        } catch (error) {
            next(error)
        }
    }

    async editHouse(req, res, next) {
        try {
            const houseData = req.body
            const houseId = req.params.houseId
            const userId = req.userInfo.id //NOTE grab the id of the user making the request
            const editedHouse = await houseService.editHouse(houseData, houseId, userId)
            res.send(editedHouse)
        } catch (error) {
            next(error)
        }
    }


    async deleteHouse(req, res, next) {
        try {
            const houseId = req.params.houseId
            const userId = req.userInfo.id
            await houseService.deleteHouse(houseId, userId)
            return res.send(`house at ${houseId} was deleted!`)
        } catch (error) {
            next(error)
        }
    }


} 