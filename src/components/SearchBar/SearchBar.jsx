import { Search } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';
import FilterSearchBar from '../FilterSearchBar/FilterSearchBar';
import './_searchBar.scss'
import { typeWritter } from './typeWritter';
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

    useEffect(() => {
        if(!focus && inputRef.current && !hasWritten.current){
            hasWritten.current = true
            typeWritter(sentences, inputRef.current)
        }
        changeFocus(focus)
    }, [focus])

    const handleFocus = () => {
        setFocus(!focus)
    }
        
    return <>
        <FilterSearchBar visible={focus}/>
        <form className='search'>
            <input 
                ref={inputRef}
                type='text' 
                name='search' 
                className='search__input'
                onFocus={handleFocus}
                onBlur={handleFocus}
            />
            <button type='submit' className='search__button'><Search/></button>
            
        </form>
    </>
}

export default SearchBar