import { createBrowserRouter } from "react-router-dom";
import Main from "../../Main/Main";
import Category from "../../Page/Category/Category/Category";
import Home from "../../Page/Home/Home";
import News from "../../Page/News/News/News";



const routes = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch("http://localhost:5000/news")
            },
            {
                path: "/category/:id",
                element: <Category></Category>,
                loader: async ({params}) => {
                    return fetch(`http://localhost:5000/category/${params.id}`)
                }
            },
            {
                path: "/news/:id",
                element: <News></News>,
                loader: ({ params }) => fetch(`http://localhost:5000/news${params.id}`)
            }
        ]
    }
])


export default routes;