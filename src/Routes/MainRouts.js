import React from "react";
import AuthPage from "../pages/AuthPage";
import { Route, Routes } from "react-router-dom";
import MainPage from "../components/MainPage/Main";
const MainRouts = () => {
    let userRoutes = [
        { link: "/user", element: <MainPage />, id: 1 },
        { link: "/", element: <AuthPage />, id: 2 },
    ];
    return (
        <>
            <Routes>
                {userRoutes.map((item) => (
                    <Route
                        path={item.link}
                        element={item.element}
                        key={item.id}
                    />
                ))}
            </Routes>
        </>
    );
};

export default MainRouts;
