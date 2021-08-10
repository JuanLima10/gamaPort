import Link from 'next/link';
import Footer from '../../../Footer';
import Style from './bsh.module.scss';

export default function BSH(){
    return(
        <>
        <div className={ Style.bsh }>
            <div className={ Style.bshContent }>
                <div className={ Style.bshNav }>
                    <p>BSH Continental</p>
                    <p><Link href="/#Jobs"><i className="fas fa-arrow-left"></i></Link></p>
                </div>
                    <img src="/JobEx1.png" />
                <div className={ Style.bshText }>
                    <p>Assistente Administrativo</p>
                    <li>Preposto de audiências trabalhista;</li>
                    <li>Representante da CIPA;</li>
                    <li>Responsável pela organização da brigada 
                    de incêndio na lapa e meio Ambiente na unidade da Lapa;</li>
                    <li>Administração e controle da frota de automóveis (Executiva);</li>
                    <li>Negociação de compra e venda dos veículos;</li>
                    <li>Gestão de contratos de transportes (Fretado) Rápido Luxo, Dominio e Exclusiva.</li>
                </div>
            </div>
            <Footer/>
        </div>
        </>
    )
}