import Style from './header.module.scss';

export default function Header(){
    return(
        <>
        <div className={ Style.header }>
            <div className={ Style.headerContent }>
                <div className={ Style.headerHero1 }>
                    <img src="/logo.svg" />
                </div>
                <div className={ Style.headerHero2 }>
                    <p>Vanderley Gama</p>
                    <p>Gestor de Facilities e Frota Sênior.</p>
                    <a href="#Jobs">Ver Trabalhos</a>
                </div>
            </div>
            <div className={Style.headerFooter}>
                <div className={Style.icons}>
                    <a target="blank_" href="https://www.linkedin.com/in/vanderley-gama-345021b9/"><i className="fab fa-linkedin"></i></a>
                    <a target="blank_" href="mailto:gamavanderley@gmail.com"><i className="fas fa-envelope"></i></a>
                </div>
            </div>
        </div>
        </>
    )
}