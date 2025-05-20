import { ArrowRight, Mail, MapPin, Phone, Linkedin, Github } from "lucide-react"
import { useState } from "react"

const Button = ({
    label = "",
    info = "",
    icon = "mail",
    link = "",
    type = "",
    small = false
}) => {
    const [hover, setHover] = useState(false)

    const getIcon = () => {
        const iconColor = hover ? "#232946" : "#eebbc3"
        const iconColorSocial = "#232946"
        
        switch(icon) {
            case "mail":
                return <Mail color={iconColor} />
            case "localisation":
                return <MapPin color={iconColor} />
            case "phone":
                return <Phone color={iconColor} />
            case "linkedin": 
                return <Linkedin color={iconColorSocial}/>
            case "github":
                return <Github color={iconColorSocial}/>
            default:
                return <Mail color={iconColor} />
        }
    }

    const handleClick = () => {
        if (link != ""){
            switch(type) {
                case "mail":
                    window.location.href = `mailto:${link}`
                    break
                default:
                    window.location.href = link
                    break
            }
        }
    }
    if(small) {
        return <div 
            className={hover ? "button small hover" : "button small"} 
            onMouseOver={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            onClick={handleClick}
        >
            {getIcon()}
        </div>
    }
    return <div 
        className={hover ? "button hover" : "button"} 
        onMouseOver={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onClick={handleClick}
    >
        <div className="button__content">
            {getIcon()}
            <div className="button__infos">
                <p className="button__infos--label">{label}</p>
                <p className="button__infos--info">{info}</p>
            </div>
        </div>
        <ArrowRight size={24} strokeWidth={1} className={hover ? "button__icon hover" : "button__icon"} />
    </div>
}

export default Button