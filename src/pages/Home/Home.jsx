import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import PageAnimations from '../../styles/PageAnimations/PageAnimations'
import './_home.scss'
import SearchBar from '../../components/SearchBar/SearchBar'
import { Info } from 'lucide-react'
import useDeviceType from '../../hooks/useDeviceType'

const Home = () => {
    const [blur, setBlur] = useState(false)
    const { isMobile } = useDeviceType()

    return <PageAnimations close={true}>
        <section className="hero">
            <AnimatePresence>
                {blur && 
                    <motion.div 
                        className='blurred'
                        initial={{ opacity: 0 }}
                        exit={{ opacity: 0 }}
                        animate={{ 
                            opacity: 1,
                            transition: { duration: 0.2 } 
                        }}
                    />
                }
            </AnimatePresence>
            <h2 className='hero__title'>Adam Zamouri</h2>
            <p className='hero__paragraph'>
                Développeur front-end React
            </p>
            { !isMobile && <SearchBar changeFocus={setBlur} />}
            <div className='hero__info'><Info size={isMobile ? 24 : 16}/> <p>Disponible — stage, alternance ou CDI (embauche souhaitée)</p></div>
        </section>
    </PageAnimations>
}
export default Home