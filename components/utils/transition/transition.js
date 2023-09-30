import { AnimatePresence, motion } from 'framer-motion';

let easing = [0.175, 0.85, 0.42, 0.96]

const TransitionSetting = {
    initial: { y: -200, opacity: 0 },
    exit: {
        y: 200,
        opacity: 0,
        transition: {
            duration: 0.5,
            ease: easing,
        },
    },
    enter: {
        y: 0,
        opacity: 1,
        transition: {
            staggeringChildren: 2,
            duration: 0.5,
            ease: easing,
        },
    },
}


const Transition = ({ children }) => {

    return (
        <motion.div initial="initial" animate="enter" exit="exit" variants={TransitionSetting}>
            {children}
        </motion.div>
    )
}
  
export default Transition

