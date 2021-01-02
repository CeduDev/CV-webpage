import { config } from "../../config/config.js"
import * as services from "../../services/rootService.js"

//renders the root page with correct data
const contactPage = ({render, session}) => {
    render('contact.ejs');
}

export { contactPage }