import PageAnimations from "../../styles/PageAnimations/PageAnimations"
import Button from "../../components/Button/Button"

const Contact = () => {

    return <PageAnimations close={false}>
        <div className="page">
            <section className="contact">
                <h1 className="contact__title">Contact</h1>
                <h2 className="contact__subtitle">Tous les moyens sont bons pour me contacté</h2>
                <div className="contact__articles">
                    <article className="contact__info">
                        <h3 className="contact__info--title">Informations</h3>
                        <div className="contact__info--cards">
                            <Button 
                                link="adamzamouricontact@gmail.com" 
                                label="E-mail" 
                                info="adamzamouricontact@gmail.com" 
                                icon="mail"
                                type="mail"
                            />
                            <Button 
                                label="Numéro de téléphone" 
                                info="+33 7 67 69 40 36" 
                                icon="phone"
                            />
                            <Button 
                                label="Adresse"
                                info="Marseille, France"
                                icon="localisation"
                            />
                        </div>
                    </article>
                    <article className="contact__socials">
                        <Button 
                            link="https://www.linkedin.com/in/adam-zamouri1306/" 
                            label="" 
                            info="LinkedIn" 
                            icon="linkedin"
                            type=""
                            small={true}
                        />
                        <Button 
                            link="https://github.com/LeZam1306" 
                            label="" 
                            info="Github" 
                            icon="github"
                            type=""
                            small={true}
                        />
                    </article>
                </div>
            </section>
        </div>
    </PageAnimations>
}

export default Contact