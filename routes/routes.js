import { Router } from "../deps.js";
import * as rootController from "./controller/rootController.js"
import * as aboutController from "./controller/aboutController.js"
import * as workController from "./controller/workController.js"
import * as contactController from "./controller/contactController.js"


const router = new Router();

//all the routes the program uses
router.get('/', rootController.rootPage);
router.get('/about', aboutController.aboutPage);
router.get('/work', workController.workPage);
router.get('/contact', contactController.contactPage);


export { router };