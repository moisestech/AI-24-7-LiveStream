import {createClient} from '@sanity/client'


export const cmsClient = createClient({
    projectId: "eru6i5l8",
    dataset: "production",
    apiVersion: "2022-03-25",
    useCdn: false
})


export default cmsClient
