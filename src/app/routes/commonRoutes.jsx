
import Home from '../../features/dashboard/ui/pages/home';
import Setting from "../../features/settings/ui/pages/Setting";
import Chat from "../../features/chat/ui/pages/Chat";

export let  commonRoutes=[
    {
        path:"",
        element:<Home/>
    },
    {
        path:"setting",
        element:<Setting/>
    },
    {
        path:"chat",
        element:<Chat/>,
    },

]