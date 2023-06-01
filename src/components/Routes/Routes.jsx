import React from "react"
import { Route, Routes } from "react-router-dom";
import Home from "../Home/Home";

const AppRoutes = (props) => (
    <Routes>
        <Route index element={<Home />} />
    </Routes>
);

export default AppRoutes;