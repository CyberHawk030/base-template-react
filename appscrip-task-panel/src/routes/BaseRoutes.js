import { useRoutes } from "react-router-dom";
import routes from "./baseNav";

const BaseRoutes = () => {
    return useRoutes(routes)
}

export default BaseRoutes