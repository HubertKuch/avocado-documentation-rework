import { createBrowserRouter } from "react-router-dom";
import Main from "./views/Main";
import DocsView from "./views/DocsView";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />
    },
    {
        path: "/docs/:folder/:file",
        element: <DocsView />
    }
]);

export default router;