import Department from "../../features/admin module/department/ui/pages/Department";
import Document from "../../features/admin module/documents/ui/pages/Document";
import Employment from "../../features/admin module/employees/ui/pages/Employment";
import Task from "../../features/admin module/task/ui/pages/Task";

export let adminRoutes=[
    {
        path:"/home/employee",
        element:<Employment/>
    },
    {
        path:"/home/department",
        element:<Department/>
    },
    {
        path:"/home/task",
        element:<Task/>
    },
    {
        path:"/home/document",
        element:<Document/>
    }
]