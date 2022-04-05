import React, { useContext } from "react";
import { Routes, Route} from "react-router-dom";
import { AuthContext } from "../context";
import About from "../pages/About";
import Error from "../pages/Error";
import Login from "../pages/Login";
import { publicRoutes, privateRoutes } from "../router";
import Loader from "./UI/Loader/Loader";

const AppRouter = () => {
    const {isAuth, isLoading} = useContext(AuthContext);
    console.log(isAuth)

    if(isLoading) {
        return <Loader/>
    }

    return (
        isAuth
            ?
            <Routes>
                {privateRoutes.map(route =>
                    <Route 
                        path={route.path} 
                        element={route.element} 
                        exact={route.exact}
                        key={route.path}
                    />
                )}
                <Route path="*" element={<Error/>}/>
            </Routes>
            :
            <Routes>
                {publicRoutes.map(route =>
                   <Route 
                        path={route.path} 
                        element={route.element} 
                        exact={route.exact}
                        key={route.path}
                    />
                )}
                <Route path="*" element={<Login/>}/>
            </Routes>
    );
};

export default AppRouter;