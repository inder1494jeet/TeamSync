import axios from "axios"
export let axiosInstance=axios.create(

    //https://team-sync-backend-n78w.onrender.com/api
    {
        baseURL:'https://team-sync-backend-n78w.onrender.com/api',
        withCredentials:true,
    }
)
axiosInstance.interceptors.response.use(
    (response)=> response,
    async(error)=>{
        error.response.status
        let originalreq=error.config ;
        if(error.response.status===401 && !originalreq._retry)
        {
            originalreq._retry=true;
            try {
                await axiosInstance.get("/auth/get-accessToken");
                return axiosInstance(originalreq);
            } catch (error) {
                window.location.href="/";
                return Promise.reject(error)
            }
        }
    }
)