import dotenv from "dotenv"
dotenv.config()

const config={
    mongouri:process.env.MONGOURI,
    accesstokens:process.env.ACCESSTOKENS,
    refreshtokens:process.env.REFRESHTOKENS,
    igprivatekey:process.env.IGPRIVATEKEY,
}
export default config;