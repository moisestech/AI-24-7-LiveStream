import { ThemeContext } from "../theme/theme"
import { useState, useEffect, useContext } from "react"
import StageObject from "./stageObject"
import MuxPlayer from '@mux/mux-player-react/lazy';

const Stage = () => {
    const { currentVideo, handleVideoEnded, stageStatus, setStageStatus } = useContext(ThemeContext)

    console.log(currentVideo)

    const toggleStage = () => {
        setStageStatus("show")
    }

    return (
        <section className="stage">
            <div className={["stage__button", stageStatus].join(" ")} onClick={toggleStage}>
                <div className="stage__button__back"></div>
                <StageObject />
            </div>
            <div className={["stage__video", stageStatus].join(" ")}>
                <MuxPlayer 
                    playbackId={currentVideo?.muxid}
                    onEnded={handleVideoEnded} 
                    streamType="on-demand"
                    autoplay="muted"
                />
            </div>
        </section>
    )
}

export default Stage