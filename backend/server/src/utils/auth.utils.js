import jwt from "jsonwebtoken"
import config from "../config/config.js"
import dotenv from "dotenv"
dotenv.config()
export function createacesstoken({userid})
{
    const accesstoken=jwt.sign({
        userid
    },process.env.ACCESSTOKENS,{expiresIn:"15M"})
    return accesstoken;
}
export function createrefreshtoken({userid})
{
    const refreshtoken=jwt.sign({
        userid
    },process.env.REFRESHTOKENS,{expiresIn:"7Days"})
    return refreshtoken;
}

export function readrefreshtoken(refreshtoken)
{
    return jwt.verify(refreshtoken,config.refreshtokens);
}
export function readaccesstoken(accesstoken)
{
    return jwt.verify(accesstoken,config.accesstokens)
}