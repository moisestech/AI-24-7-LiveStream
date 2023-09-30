import Header from '../header/header'
import { useState, useEffect, useContext } from "react"
import { ThemeContext } from "../theme/theme"
import Stage from "../stage/stage"

const Layout = ({ data, children, videos }) => {

    const { currentVideo, stageStatus } = useContext(ThemeContext)

    return (
        <>
        <Header />
        {children}
        <Stage />
        <div className={["bar", stageStatus].join(" ")}>
            <div className={["bar__video"].join(" ")}>
                <div className="bar__video__title">Video</div>
                <h3>{currentVideo?.title}</h3>
                <h3>{currentVideo?.subtitle}</h3>
            </div>
        </div>
        </>
    )
}

export default Layout
