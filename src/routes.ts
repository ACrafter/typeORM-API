import {ItemController} from "./controller/UserController";

export const Routes = [{
    method: "get",
    route: "/items",
    controller: ItemController,
    action: "all"
}, {
    method: "get",
    route: "/items/:id",
    controller: ItemController,
    action: "one"
}, {
    method: "post",
    route: "/items",
    controller: ItemController,
    action: "save"
}, {
    method: "delete",
    route: "/items/:id",
    controller: ItemController,
    action: "remove"
}];