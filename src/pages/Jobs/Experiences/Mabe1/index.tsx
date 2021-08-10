import Link from 'next/link';
import Footer from '../../../Footer';
import Style from './mabe1.module.scss';

export default function Mabe1(){
    return(
        <>
        <div className={ Style.mabe1 }>
            <div className={ Style.mabe1Content }>
                <div className={ Style.mabe1Nav }>
                    <p>Mabe Brasil Eletrodoméstico</p>
                    <p><Link href="/#Jobs"><i className="fas fa-arrow-left"></i></Link></p>
                </div>
                    <img src="/JobEx2.png" />
                <div className={ Style.mabe1Text }>
                    <p>Analista Pleno de Serviço de RH</p>
                    <li>Administração e controle da frota de automóveis (Executiva)
                     - Gestor do Contrato Hertz (Frota Comum);</li>
                    <li>compra e venda dos veículos executivos, elaboração e 
                    gestão contratos de transporte (fretado) Rápido Luxo;</li>
                    <li>Domínio e Exclusiva;</li>
                    <li>Responsável pelas correspondências internas/ externas das 
                    unidades lapa, campinas, Maringá, Hortolândia e Itu;</li>
                    <li>Gestão de fornecedores: Localiza Hertz, serviço de taxi,
                    doações de produtos e serviços;</li>
                    <li>Coordenador do projeto de responsabilidade social.</li>
                </div>
            </div>
            <Footer/>
        </div>
        </>
    )
}     