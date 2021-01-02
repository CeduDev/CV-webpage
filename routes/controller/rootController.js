import * as services from "../../services/rootService.js"

//renders the root page with correct data
const rootPage = async({render, session}) => {
    render('root.ejs')
}

export { rootPage }