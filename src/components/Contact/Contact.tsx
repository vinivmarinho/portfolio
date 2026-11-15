import { Mail } from "lucide-react";
import { FaLinkedinIn, FaGithub, FaWhatsapp } from "react-icons/fa";
import "./contact.css";

export default function Contact() {
    return(
        <div className="contact-container" id="contact">
            <h1 className="contact-title">Contato</h1>

            <div className="contact-items">
                <div className="contact-item">
                    <a href="mailto:vini.marinho2004@gmail.com" target="_blank" rel="noopener noreferrer">
                        <Mail className="contact-icon"/>
                        <span>Email</span>
                    </a>
                </div>

                <div className="contact-item">
                    <a href="https://www.linkedin.com/in/vin%C3%ADcius-marinho-376a8a365/" target="_blank" rel="noopener noreferrer"> 
                        <FaLinkedinIn className="contact-icon"/>
                        <span>Linkedin</span>
                    </a>
                </div>

                <div className="contact-item">
                    <a href="https://github.com/vinivmarinho" target="_blank" rel="noopener noreferrer">
                        <FaGithub className="contact-icon"/>
                        <span>GitHub</span>
                    </a>
                </div>

                <div className="contact-item">
                    <a href="https://wa.me/5592984035972" target="_blank" rel="noopener noreferrer">
                        <FaWhatsapp className="contact-icon"/>
                        <span>Whatsapp</span>
                    </a>
                </div>
            </div>
        </div>
    )
}

{/* https://www.linkedin.com/in/vin%C3%ADcius-marinho-376a8a365/
    https://github.com/vinivmarinho
    
    */}