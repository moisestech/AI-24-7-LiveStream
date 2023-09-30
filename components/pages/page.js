import React, { useEffect, useRef } from "react"
import Modules from "../modules/modules"

const Page = ({ pageData }) => {

    return (
    <main className="main page">
        <Modules modules={pageData[0]?.modules} />
    </main>
    )
}

export default Page