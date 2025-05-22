import PageAnimations from '../../styles/PageAnimations/PageAnimations'
import Carousel from '../../components/Carousel/Carousel'
import aboutContent from '../../data/aboutContent.json'
import useDeviceType from '../../hooks/useDeviceType'
import "./_about.scss"

const About = () => {
    const paragraphs = aboutContent.paragraphs.map(paragraph => (
        <p className='about__me--paragraph' key={paragraph.id}>
            {paragraph.text}
        </p>
    ));
    const {isMobile} = useDeviceType()

    return <PageAnimations close={false}>
        <div className="page">
            <section className="about">
                <h1 className="about__title">À Propos</h1>
                {isMobile && <h2 className="about__subtitle">Un regard honnête sur ce qui m'a amené ici.</h2>}
                <article className='about__me'>
                    {!isMobile && <h2 className="about__subtitle">Un regard honnête sur ce qui m'a amené ici.</h2>}
                    <Carousel items={paragraphs} />
                </article>
            </section>
        </div>
    </PageAnimations>
}

export default About