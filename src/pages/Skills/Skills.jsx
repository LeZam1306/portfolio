import PageAnimations from "../../styles/PageAnimations/PageAnimations"
import GameCard from "../../components/GameCard/GameCard"
import cardsInfo from '../../data/skills.json'

const Skills = () => {
    return <PageAnimations close={false}>
        <div className="page">
            <section className="skills">
                <h1 className="skills__title">Mes compétences</h1>
                <h2 className="skills__subtitle">
                    Chaque carte permet de débloqué une compétence
                </h2>
                <div className="skills__cards">
                    {cardsInfo.cards.map((card, index) => {
                        return <GameCard 
                            key={index}
                            returned={index == 0 && true}
                            icon={card.icon}
                            altIcon={card.altIcon}
                            title={card.title}
                            desc={card.descrition}
                            skills={card.skills}
                        />
                    })}
                </div>
            </section>
        </div>
    </PageAnimations>
}

export default Skills