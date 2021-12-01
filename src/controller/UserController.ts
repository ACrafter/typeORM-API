import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {Item} from "../entity/User";

export class ItemController {

    private userRepository = getRepository(Item);

    async all(request: Request, response: Response, next: NextFunction) {
        return this.userRepository.find();
    }

    async one(request: Request, response: Response, next: NextFunction) {
        return this.userRepository.findOne(request.params.id);
    }

    async save(request: Request, response: Response, next: NextFunction) {
        return this.userRepository.save(request.body);
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        let itemToRemove = await this.userRepository.findOne(request.params.id);
        await this.userRepository.remove(itemToRemove);
    }

}