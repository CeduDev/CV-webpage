import { config } from "../../config/config.js"
import * as services from "../../services/rootService.js"

//renders the root page with correct data
const aboutPage = ({render, session}) => {
    render('about.ejs');
}

export { aboutPage }