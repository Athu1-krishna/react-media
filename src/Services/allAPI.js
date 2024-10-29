// saveVideoAPI - called Add Component

import commonAPI from "./commonAPI"
import SERVERURL from "./serverURL"

export const saveVideoAPI = async (videoDetails)=>{
    return await commonAPI("POST", `${SERVERURL}/uploadVideos`, videoDetails)
}