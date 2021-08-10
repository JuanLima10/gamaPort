import Style from './footer.module.scss';

export default function Footer(){
    return(
        <>
        <div className={ Style.footer }>
            <div className={ Style.footerContent }>
                <div className={ Style.footerLogo }>
                    <img src="/logo.svg" />
                    <p>Vanderley Gama</p>
                </div>
                <div className={ Style.footerIcons }>
                    <div className={Style.icons}>
                    <a target="blank_" href="https://www.linkedin.com/in/vanderley-gama-345021b9/"><i className="fab fa-linkedin"></i></a>
                    <a target="blank_" href="mailto:gamavanderley@gmail.com"><i className="fas fa-envelope"></i></a>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}