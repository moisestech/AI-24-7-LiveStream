import Transition from "../components/utils/transition/transition"
import { cmsClient } from "../utils/sanity"
import Page from "../components/pages/page"
import {QueryModules} from "../utils/queries"

const PagePage = ({pageData}) => {

    console.log(pageData)

    return (
        <Transition>
            <Page pageData={pageData}/>
        </Transition>
    )
}
export default PagePage

// Get Data
export async function getStaticProps({params, preview = null}) {
    const pageData = (await cmsClient.fetch(getQuery(params.handle))) || {}
    const videos = (await cmsClient.fetch(queryVideos)) || {}
    return {
        props: {pageData, preview, videos},
    }
}

// Get all Paths
export async function getStaticPaths() {

    // const data = await apiCms(queryPages)
    const data = (await cmsClient.fetch(queryPages)) || {}
    const paths = data.map((page) => ({
        params: {
            handle: page.slug.current,
        },
    }))
    return {
        paths: paths,
        fallback: false
    }
}

let queryPages = `*[_type == "page"]`
let queryVideos = `*[_type == "video"] {
    ...,
    file {
        ...,
        _type == "mux.video" => {
            ...,
            asset->{
                ...,
                "url": "https://stream.mux.com/" + playbackId + ".m3u8"
            }
        } 
    }
}`


const getQuery = (slug) => {
    return `*[_type == "page" && slug.current=="${slug}"] {
        ...,
        ${QueryModules}
    }`
}
