import { createContext, useState } from "react";

export const ThemeContext = createContext()

export const ThemeProvider = ({ children, videos }) => {

    const [currentVideoIndex, setCurrentVideoIndex] = useState(0)
    const [stageStatus, setStageStatus] = useState("hide")
    const currentVideo = videos[currentVideoIndex]

    const handleVideoEnded = () => {
        setCurrentVideoIndex((currentVideoIndex + 1) % videos.length);
        console.log("END")
    }

    return (
    <ThemeContext.Provider value={{ currentVideo, handleVideoEnded, stageStatus, setStageStatus }}>
        {children}
    </ThemeContext.Provider>
    )
}