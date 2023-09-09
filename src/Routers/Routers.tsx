import {
    createBrowserRouter,
} from "react-router-dom";
import { Main } from "../layout/Main";
import { Home } from "../Pages/Home/Home";
import { Store } from "../Pages/Store/Store";
import { About } from "../Pages/About/About";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/store',
                element: <Store />
            },
            {
                path: '/about',
                element: <About />
            }
        ]

    }
])