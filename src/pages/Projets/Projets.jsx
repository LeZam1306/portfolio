import Card from "../../components/Card/Cards"
import PageAnimations from "../../styles/PageAnimations/PageAnimations"
import data from "../../data/projects.json"

const Projets = () => {
    return <PageAnimations close={false}>
        <div className="page">
            <section className="projets">
                <h1 className="projets__title">Projets</h1>
                <h2 className="projets__subtitle">
                    Cette page présente les trois projets les plus pertinents de mon 
                    portfolio, sélectionnés pour illustrer au mieux mes compétences 
                    et mon savoir-faire.
                </h2>
                <div className="projets__cards">
                    {data.cards.map((card) => {
                        return <Card 
                            key={card.id}
                            img={card.img}
                            alt={card.alt}
                            title={card.title}
                            description={card.description}
                            tags={card.tags}
                            links={card.link}
                        />
                    })}
                </div>
            </section>
        </div>
    </PageAnimations>
}

export default Projets