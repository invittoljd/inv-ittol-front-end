/**Imports */
import { CollectionModel } from "@models/mongo/collection.model";

/**
 * Equipment Model, extend of CollectionModel for add information of Mongo.
 */
export interface ItemModel extends CollectionModel {
    name: string,
    type: number, // 1 para equipos, 2 para reactivos
    brand?: string,
    model?: string,
    serial?: string,
    inventory?: string,
    nui?: string,
    location?: string,
    manager?: string,
    formula?: string,
    presentation?: string,
    lot?: string,
    expirationDate?: Date,
    stock?: number,
    quantity?: number,
    created?: boolean
}