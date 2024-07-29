/**Imports */
import { CollectionModel } from "@models/mongo/collection.model";
import { InventoryArrayModel } from "@models/inventory/inventory.array.model";
import { ItemModel } from "@models/inventory/item.model";

/**
 * Category Model, extend of CollectionModel for add information of Mongo.
 */
export interface CategoryModel extends CollectionModel, InventoryArrayModel {
    src: string,
    items: Array<ItemModel>
}