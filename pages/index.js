import { cmsClient, ModulesFields } from "../utils/sanity"
import React, { useState } from 'react';

const Index = ({ pageData }) => {
    

    return (
        <main className="main">

        </main>
    )
}

export default Index




// Get Data
export async function getStaticProps({ params, preview = null }) {
    const pageData = (await cmsClient.fetch(queryVideos)) || {}
    const videos = (await cmsClient.fetch(queryVideos)) || {}
    return {
        props: { pageData, preview, videos },
    }
}

// Query
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

const query = () => {
    return `*[_id == "frontpage"]`
}
