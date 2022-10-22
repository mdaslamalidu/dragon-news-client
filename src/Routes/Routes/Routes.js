import { createBrowserRouter } from "react-router-dom";
import Main from "../../Main/Main";
import Category from "../../Page/Category/Category/Category";
import Home from "../../Page/Home/Home";
import Login from "../../Page/Login/Login";
import News from "../../Page/News/News/News";
import Profile from "../../Page/Others/Profile/Profile";
import TermsAndConditions from "../../Page/Others/TermsAndConditions";
import Register from "../../Page/Register/Register";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";



const routes = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch("https://dragon-news-server-sand.vercel.app/news")
            },
            {
                path: "/home",
                element: <Home></Home>,
                loader: () => fetch("https://dragon-news-server-sand.vercel.app/news")
            },
            {
                path: "/category/:id",
                element: <Category></Category>,
                loader: async ({ params }) => {
                    return fetch(`https://dragon-news-server-sand.vercel.app/category/${params.id}`)
                }
            },
            {
                path: "/news/:id",
                element: <PrivateRoutes><News></News></PrivateRoutes>,
                loader: ({ params }) => fetch(`https://dragon-news-server-sand.vercel.app/news/${params.id}`)
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/terms",
                element: <TermsAndConditions></TermsAndConditions>
            },
            {
                path: "/profile",
                element: <PrivateRoutes><Profile></Profile></PrivateRoutes>
            }
        ]
    }
])


export default routes;