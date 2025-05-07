import { useContext } from "react"
import { SectionContext } from "../contexts/SectionContext"

export const useSection = () => {
    const context = useContext(SectionContext)

    if(!context){
        throw new Error('The context is not within reach')
    }

    const { section, setSection } = context

    const getSection = () => { return section }
    const navSection = (newSection) => { setSection(newSection) }

    return ({
        getSection,
        navSection
    })
}