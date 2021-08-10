import Style from './navBar.module.scss';

export default function NavBar(){
    return(
        <>
        <div className={ Style.navBar }>
            <div className={ Style.navBarContent }>
                <div className={ Style.navBarLogo }>
                    <img src="/logo.svg" />
                    <p>Vanderley Gama</p>
                </div>
                <div className={ Style.navBarBtns }>
                    <a href="#Jobs">Trabalhos</a>
                    <a href="mailto:gamavanderley@gmail.com">Fale Comigo</a>
                </div>
            </div>
        </div>
        </>
    )
}