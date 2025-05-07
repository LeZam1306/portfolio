import { Search } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';
import { motion } from 'motion/react';
import FilterSearchBar from '../FilterSearchBar/FilterSearchBar';
import './_searchBar.scss'
import { typeWritter } from './typeWritter';
import { useSearch } from '../../hooks/useSearch';
import { useSection } from '../../hooks/useSection'

const sentences = [
    'recherche développeur react motivé', 
    'développeur autonomne', 
    'profil motivé et curieux',
    'jouer au "simon" ?',
    'dev react bonnes pratiques'
]

const SearchBar = ({
    changeFocus = () => {}
}) => {
    const [focus, setFocus] = useState(false)
    const hasWritten = useRef(false)
    const inputRef = useRef(null)
    const {search, startSearch} = useSearch()
    const { navSection } = useSection()

    useEffect(() => {
        if(!focus && inputRef.current && !hasWritten.current){
            hasWritten.current = true
            typeWritter(sentences, inputRef.current)
        }
        changeFocus(focus)
    }, [focus])

    useEffect(() => {
        if(search != undefined){
            navSection(search)
        }
    }, [search])

    const handleFocus = () => { setFocus(!focus) }

    const handleSubmit = (e) => {
        e.preventDefault()
        startSearch(e.target.search.value)
        e.target.search.blur(false)
        setFocus(false)
    }
        
    return <>
        <FilterSearchBar visible={focus}/>
        <motion.form 
            className='search' 
            onSubmit={handleSubmit}
            initial={false}
            animate={{scale: focus ? 1.1 : 1}}
            whileHover={{y: !focus ? -10 : 0}}
            transition={{ duration: 0.2 }}
        >
            <input 
                ref={inputRef}
                type='text' 
                name='search' 
                className='search__input'
                onFocus={handleFocus}
                onBlur={handleFocus}
            />
            <button type='submit' className='search__button'><Search/></button>
        </motion.form>
    </>
}

export default SearchBar