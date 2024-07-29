import { CollectionModel } from "@models/mongo/collection.model";

export interface UserModel extends CollectionModel {
    username: string,
    password?: string,
    type: number
}  