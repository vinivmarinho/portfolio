import "./header.css";
import logo from "../../assets/logo.png";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    function toggleMenu() {
        setIsMenuOpen(!isMenuOpen)
    };

    return (
        <div className="header">
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
                    <li>Início</li>
                    <li>Sobre</li>
                    <li>Projetos</li>
                    <li>Habilidades</li>
                    <li>Contato</li>
                </ul>
            </nav>
        </div>
    )
}
