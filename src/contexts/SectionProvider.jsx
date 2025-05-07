import { useState } from "react";
import { SectionContext } from "./SectionContext";

export const SectionProvider = ({
    children
}) => {
    const [section, setSection] = useState('')

    return <SectionContext.Provider value={{
        section,
        setSection
    }}>
        {children}
    </SectionContext.Provider>
}