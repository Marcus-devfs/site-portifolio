import React from "react";
import "../Main/index.css"

function Main() {
    return (
        <div className='main'>
            <div className='center'>
                <div className='menu'>
                    <div className='logo-name'>
                        <h3>Marcus Silva</h3>
                        <p></p>
                    </div>
                    <div className='menu-list'>
                        <a href='#'>Projetos</a>
                        <a href='#'>Sobre</a>
                        <a href='#'>Contato</a>
                    </div>
                </div>
            </div>

            <div className='resume'>
                <div className='sobre'>
                    <h1>Olá, sou Marcus.</h1>
                    <h3>Desenvolvedor FullStack</h3>
                    <div className="border"></div>
                    <p>Desenvolvedor de aplicações WEB e Mobile com React e React Native, experiência em desenvolvimento e manutenção de API’S, interação com banco de dados, versionamento de codigo com GIT, GIT Hub, desenvolvimento de soluções.</p>
                    <button>Projetos</button>
                </div>
                <div className='image-profile'>
                    <div className='image'></div>
                </div>
            </div>
        </div>
    )
}

export default Main;


