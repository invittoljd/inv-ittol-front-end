/**Imports */
import { CollectionModel } from "@models/mongo/collection.model";

/**
 * Message Model, extend of CollectionModel for add information of Mongo.
 */
export interface MessageModel extends CollectionModel {
    author: string,
    message: string
}