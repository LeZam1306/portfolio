import { AnimatePresence, motion } from "motion/react"
import { Computer, TabletSmartphone} from "lucide-react"
import { useState } from "react"

const Card = ({
    img = "",
    alt= "",
    title = "",
    description = "",
    tags = [],
    links = []
}) => {
    const [isHover, setIsHover] = useState(false)
    return <article 
        className="card"
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
    >   <AnimatePresence>
            {isHover && 
                <motion.div 
                    className="card__overlay"
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}
                > 
                    <div className="card__overlay--links">
                        <a href={links[0]}><Computer />Github</a> 
                        {links.length > 1 &&  <a href={links[1]}><TabletSmartphone />Demo</a>}
                    </div>
                </motion.div>
            }
        </AnimatePresence>
        <img 
            src={img}
            className="card__img" 
            alt={alt}
        />
        <div className="card__content">
            <h3 className="card__title">{title}</h3>
            <p className="card__desc">
                {description}
            </p>
            <ul className="card__tags">
                {tags.map((tag, index) => (
                    <li key={index} className="card__tags--tag">{tag}</li>
                ))}
            </ul>
        </div>
    </article>
    
}
export default Card