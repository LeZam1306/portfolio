import { motion } from "motion/react";

const sectionOpen = {
    initial: { y: "100%"},
    animate: { y: 0},
    exit: { y: "100%"}
}

const sectionClose = {
    initial: { y: "-100%"},
    animate: { y: 0},
    exit: { y: "-100%"}
}
const transition = {
    duration: 0.3,
    ease: "easeInOut"  
}

const PageAnimations = ({ children, key, close }) => {
    return (    
        <motion.div
            key={key}
            style={{ position: "relative" }}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={close ? sectionClose : sectionOpen}
            transition={transition}
        >
            {children}
        </motion.div>
    )
}

export default PageAnimations;