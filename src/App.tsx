import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./Layout";
import { Home } from "./pages/home";
import { Sobre } from "./pages/sobre";
import { HardSkills } from "./pages/hard";
import { SoftSkills } from "./pages/soft";
import { Projetos } from "./pages/projetos";

const router = createBrowserRouter([
    {
        element: <Layout/>,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: '/sobre',
                element: <Sobre />
            },
            {
                path: '/hard',
                element: <HardSkills />
            },
            {
                path: '/soft',
                element: <SoftSkills />
            },
            {
                path: '/projetos',
                element: <Projetos />
            }
            
        ]
    }
])

export {router}