/**Imports */
import { ItemModel } from "@models/inventory/item.model";
import { CollectionModel } from "@models/mongo/collection.model"
import { MessageModel } from "@models/request/message.model";

/**
 * Request Model, extend of CollectionModel for add information of Mongo.
 */
export interface RequestModel extends CollectionModel {
    author: string,
    date?: Date,
    status?: boolean,
    about?: string,
    messages?: Array<MessageModel>
    item?: ItemModel,
    quantity?: number,
    startDate?: Date,
    endDate?: Date,
}