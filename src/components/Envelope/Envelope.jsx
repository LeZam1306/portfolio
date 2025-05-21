import { easeInOut, motion } from "motion/react"
import { useState, useEffect } from "react"
import { delay } from '../../utils/delay'

const Envelope = ({
    children
}) => {
    const [isHover, setIsHover] = useState(false)
    const [zIndexValue, setZIndexValue] = useState(1);

    useEffect(() => {
        if (!isHover) {
            const delayZ = async () => {
            await delay(400);
            setZIndexValue(4);
            };
            delayZ();
        } else {
            setZIndexValue(1);
        }
    }, [isHover]);


    return (
        <div 
            className="envelope"
            onMouseOver={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
        >
            <div className="envelope__wrapper">
                <motion.div 
                    className="envelope__closing"
                    initial={{
                        rotateX: 0,
                    }}
                    animate={{
                        rotateX: isHover ? 180 : 0,
                        filter: isHover ? 'drop-shadow(0px 0px 0px)' : 'drop-shadow(2px 3px 2px rgba(0, 0, 0, 0.1))',
                        zIndex: zIndexValue,
                        transition: {
                            delay: !isHover ? 0.4 : 0,
                            duration: 0.4,
                            ease: easeInOut
                        }
                    }}
                ></motion.div>
                <div className="envelope__inside"></div>
                <div className="envelope__body">
                    <div className="envelope__body--texture envelope__body--texture-left"></div>
                    <div className="envelope__body--texture envelope__body--texture-right"></div>
                </div>
                <motion.div 
                    className="envelope__paper"
                    initial={{
                        y: 0
                    }}
                    animate={{
                        y: isHover ? -100 : 10,
                        x: "-50%",
                        height: !isHover ? 70 : 150,
                        transition: {
                            delay: isHover ? 0.4 : 0,
                            duration: 0.4,
                            ease: easeInOut
                        }
                    }}
                >
                    <p>{children}</p>
                </motion.div>
            </div>
        </div>
    )
}

export default Envelope