/**Imports */
import { CollectionModel } from "@models/mongo/collection.model";
import { InventoryArrayModel } from "@models/inventory/inventory.array.model";
import { CategoryModel } from "@models/inventory/category.model";

/**
 * Area Model, extend of CollectionModel for add information of Mongo.
 */
export interface AreaModel extends CollectionModel, InventoryArrayModel {
    src: string,
    categories: Array<CategoryModel>,
}