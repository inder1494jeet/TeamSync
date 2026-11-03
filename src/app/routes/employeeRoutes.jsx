import Attendance from "../../features/employee module/Attendance/ui/pages/Attendance";
import Mytask from "../../features/employee module/MyTask/ui/pages/Mytask";
import Profile from "../../features/employee module/profile/ui/pages/Profile";

export let employeeRoutes=[
    {
        path:"/home/myTask",
        element:<Mytask/>
    },
    {
        path:"/home/attendance",
        element:<Attendance/>
    },
    {
        path:"/home/profile",
        element:<Profile/>
    },
]