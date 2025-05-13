import { motion, AnimatePresence} from "framer-motion"
import { useSearch } from "../../hooks/useSearch"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
const filters = ["Compétences", "Projets", "À propos", "Contact"] //static filters

const FilterSearchBar = ({
    visible = true
}) => {
    const { startSearch, search } = useSearch()
    const navigate = useNavigate()

    useEffect(() => {
        if(search != undefined){
            navigate(`/${search}`)
        }
    }, [search])

    const handleClick = (e) => {
        startSearch(e.target.id)
    }

    return <>
        <ul className='filter'> 
            <AnimatePresence>
                {visible &&
                    filters.map((filter, index) => {
                        return <motion.li 
                            key={index}
                            id={filter}
                            className='filter__item' 
                            onMouseDown={handleClick}
                            initial={{
                                y: 35,
                                opacity: 0
                            }} 
                            animate={{
                                y: -20,
                                opacity: 1
                            }}
                            transition={{ 
                                duration: 0.1,
                                delay: 0.035 * (index + 1),
                                ease: [0.33, 0.54, 0.76, 1.27]
                            }}
                            whileHover={{ filter: 'brightness(0.8)' }} 
                            exit={{
                                y: 35,
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