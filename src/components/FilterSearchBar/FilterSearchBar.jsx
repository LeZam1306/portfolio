import { motion, AnimatePresence} from "motion/react"
const filters = ["Compétences", "Contact", "Projets", "Linkdin"] //static filters

const FilterSearchBar = ({
    visible = true
}) => {

    return <>
        <ul className='filter'> 
            <AnimatePresence>
                {visible &&
                    filters.map((filter, index) => {
                        setTimeout(() => {}, 500)
                        return <motion.li 
                            key={index}
                            className='filter__item' 
                            initial={{
                                transform: 'translateY(35px)',
                                opacity: 0
                            }} 
                            animate={{
                                transform: 'translateY(-20px)',
                                opacity: 1
                            }}
                            transition={{ 
                                duration: 0.1,
                                delay: 0.035*(index+1),
                                ease: [0.33, 0.54, 0.76, 1.27]
                            }}
                            whileHover={{ filter: 'brightness(0.8)' }} 
                            exit={{
                                transform: 'translateY(35px)',
                                opacity: 0
                            }}
                        >
                        {filter}
                    </motion.li> 
                    })
                }
            </AnimatePresence>
        </ul>
    </>
}

export default FilterSearchBar