import myPicture  from "../../assets/me.jpeg";
import "./personalIntroduction.css";

export function PersonalIntroduction() {
    return(
        <div className="personal-introduction">

            <div className="picture-container">
                <img className="picture" src={myPicture} alt="" />
            </div>

            <div className="short-presentation">
                <p className="greeting">Olá, eu sou</p>
                <h1 className="name">Vinícius Marinho</h1>
                <p className="role">Desenvolvedor full Stack</p>
                <button className="linkedin-button">Acessar o Linkedin</button>
            </div>
        </div>
    )
}