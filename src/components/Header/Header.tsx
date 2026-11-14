import "./header.css";
import logo from "../../assets/logo.png";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { PersonalIntroduction } from "../PersonalIntroduction/PersonalIntroduction";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    function toggleMenu() {
        setIsMenuOpen(!isMenuOpen)
    };

    return (
        <div className="main-header" id="beginning">

            <div className="header-top">
                <div className="logo-container">
                    <img className="logo" src={logo} alt="" />
                </div>

                <nav className="menu-container">
                    
                    <button
                    className="menu-button"
                    onClick={toggleMenu}
                    >
                        {isMenuOpen ? <X /> : <Menu />}
                    </button>

                    <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
                        <li><a href="#beginning">Início</a></li>
                        <li><a href="#about">Sobre</a></li>
                        <li><a href="#projects">Projetos</a></li>
                        <li>Habilidades</li>
                        <li>Contato</li>
                    </ul>
                </nav>

            </div>
            <PersonalIntroduction />
        </div>
    )
}
