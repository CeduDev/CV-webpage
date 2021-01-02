import { Router } from "../deps.js";
import * as rootController from "./controller/rootController.js"


const router = new Router();

//all the routes the program uses

router.get('/', rootController.rootPage);


export { router };