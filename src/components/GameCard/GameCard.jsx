import { useEffect, useState } from "react"
import {easeInOut, motion } from "motion/react"

const GameCard = ({ 
    icon= "",
    altIcon = "",
    title = "",
    desc = "",
    skills = [],
    returned = false
}) => {
    const [isReturned, setIsReturned] = useState(false)

    useEffect(() => {
        if (returned){
            setIsReturned(true)
        }
    },[])

    return <div 
        className="gameCard"
        onClick={() => setIsReturned(!isReturned)}
    >
        <motion.div 
            className="gameCard__container"
            initial={{rotateY: 0}}
            animate={{
                rotateY: isReturned ? 180 : 0,
                transition: {
                    duration: 0.3,
                    ease: easeInOut
                }
            }}
            whileHover={{y: -10}}
        >
            <div className="gameCard__face gameCard__face--back">
            </div>
            <div className="gameCard__face gameCard__face--front">
                <div className="gameCard__header">
                    <div className="gameCard__header--icon">
                        <img src={icon} alt={altIcon} />
                    </div>
                    <h3 className="gameCard__header--title">
                        {title}
                    </h3>
                </div>
                <div className="gameCard__content">
                    <p className="gameCard__content--description">
                        {desc}
                    </p>
                    <div className="gameCard__content--skills">
                        {skills.map((skill, index) => {
                            return <span 
                                key={index}
                                className="gameCard__skill"
                            >
                                {skill}
                            </span>
                        })}
                    </div>
                </div>
            </div>
        </motion.div>
    </div>
}

export default GameCard