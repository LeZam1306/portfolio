import { Search } from 'lucide-react';
import './_searchBar.scss'
import { useEffect, useState } from 'react';

const SearchBar = ({
    children,
    changeFocus = () => {}
}) => {
    const [focus, setFocus] = useState(false)

    useEffect(() => {
        changeFocus(focus)
    }, [focus])

    const handleFocus = () => {
        setFocus(!focus)
    }

    return <form className='search'>
        <input 
            type='text' 
            name='search' 
            className='search__input'
            onFocus={handleFocus}
            onBlur={handleFocus}
        />
        <button type='submit' className='search__button'><Search/></button>
    </form>
}

export default SearchBar