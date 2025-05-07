import { useRef, useState } from "react"
import keywords from '../data/keywords.json'

export const useSearch = () => {
    const searchRef = useRef(undefined)
    const [, forceUpdate] = useState(0)
    const pages = keywords.pages

    const startSearch = (searchRequest) => {
        searchRequest = searchRequest.toLowerCase().split(' ')

        let keys = Object.keys(pages)
        let wordFind = searchRequest.find(word => keys.includes(word))

        if(wordFind == undefined){
            keys = Object.entries(pages)
            for(const keyword of keys){
                wordFind = searchRequest.find(word => keyword[1].includes(word)) ? keyword[0] : undefined
                if(wordFind != undefined){break}
            } 
        }
        searchRef.current = wordFind
        if(searchRef.current != undefined){
            forceUpdate(n => n+1)
        }
    }

    return({
        search: searchRef.current,
        startSearch
    })
}