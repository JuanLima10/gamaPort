import Link from 'next/link';
import Footer from '../../../Footer';
import Style from './br.module.scss';

export default function BR(){
    return(
        <>
        <div className={ Style.br }>
            <div className={ Style.brContent }>
                <div className={ Style.brNav }>
                    <p>BR Sorvertes Ltda</p>
                    <p><Link href="/#Jobs"><i className="fas fa-arrow-left"></i></Link></p>
                </div>
                    <img src="/JobEx4.png" />
                <div className={ Style.brText }>
                    <p>Gerente Administrativo</p>
                    <li>Responsável pelo RH, financeiro, compras e produção;</li>
                    <li>Gestão e Implantação do processo de contratação e registro dos colaboradores;</li>
                    <li>Responsável pelo contrato de Clínicas Medica do Trabalho 
                    para realização de exames ocupacional, PCMSO, PPRA;</li>
                    <li>Gestão financeira, controle de custo, planilha gerenciamento de custo;</li>
                    <li>Gestão de manutenção (de maquinas, TI e infraestrutura, frota);</li>
                    <li>Responsável pela Administração de três lojas e da fabrica.</li>
                </div>
            </div>
            <Footer/>
        </div>
        </>
    )
}