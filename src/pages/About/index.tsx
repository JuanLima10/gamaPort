import Style from './about.module.scss';

export default function About(){
    return(
        <>
        <div className={ Style.about }>
            <div className={ Style.aboutContent }>
                <div className={ Style.aboutHero1 }>
                    <img src="/perfil.png" alt="Imagem de Perfil"/>
                    <a href="/VanderleyGama.pdf" download="Vanderley Gama Currículo">
                        <i className="fas fa-download"></i>
                    </a>
                    <p>Baixar Curriculo</p>
                </div>
                <div className={ Style.aboutHero2 }>
                    <p>Vanderley Gama</p>
                    <p>+16 anos de experiência</p>
                    <div className={ Style.aboutInfos }>
                        <div className={ Style.info1 }>
                            <img src="/aboutImg1.png" alt="Imagem de Exemplo"/>
                            <li>Administração</li>
                            <li>Gestão de frota</li>
                        </div>
                        <div className={ Style.info2 }>
                            <img src="/aboutImg2.png" alt="Imagem de Exemplo"/>
                            <li>Recursos Humanos</li>
                            <li>Facilities nas empresas</li>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}