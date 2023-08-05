import React from "react";
import { Routes, Route } from "react-router-dom";
import routes from "./baseNav";

const Page404 = React.lazy(() => import('../views/Page404'))
const Page500 = React.lazy(() => import('../views/Page500'))

const BaseRoutes = () => {
    return (
        <Routes>
            {routes.map(nav => {
                return <Route path={nav.path} element={nav.element} key={nav.name} />
            })}
            <Route path="/404" element={<Page404 />} />
            <Route path="/500" element={<Page500 />} />
        </Routes>
    )
}

export default BaseRoutes