import Link from 'next/link';
import Footer from '../../../Footer';
import Style from './mabe2.module.scss';

export default function Mabe2(){
    return(
        <>
        <div className={ Style.mabe2 }>
            <div className={ Style.mabe2Content }>
                <div className={ Style.mabe2Nav }>
                    <p>Mabe Brasil Eletrodoméstico</p>
                    <p><Link href="/#Jobs"><i className="fas fa-arrow-left"></i></Link></p>
                </div>
                    <img src="/JobEx3.png" />
                <div className={ Style.mabe2Text }>
                    <p>Gestão de Frota / Administração de Serviços RH</p>
                    <li>Gestão de frota de veículos: executiva e operacionais; 
                    (manutenção preventiva e corretiva, contratos de
                    locação terceirização de frota, compra e vendas de veículos, 
                    seguros, sinistros, implantação de novas politica de autos);</li>
                    <li>Implantação do sistema de gestão de controle de combustível 
                    (Ticket Car) nas unidades de São Paulo, Campinas, Itu, Maringá e Hortolândia;</li>
                    <li>Administração geral do escritório com gestão de infraestrutura Facilities (portaria, segurança, limpeza e
                    conservação, mudança de layout, compra e venda de moveis, locação de imóveis), gestão de contratos, gestão
                    de manutenção predial, analise de custos, análise e levantamento de necessidades, gestão de prestadores de
                    serviço, orçamentos, acompanhamento de execução dos serviços;</li>
                    <li>Negociação e reestruturação de linhas de fretamento das unidades Hortolândia, Campinas e Itu,
                    Implantação de projetos de redução de gastos e otimização de custos (projeto maquinas de café e bebidas
                    quentes, redução do aluguel etc..);</li>
                    <li>Responsável pela administração do fluxo de correspondências internas/ externas das unidades de São Paulo,
                    campinas, Maringá, Hortolândia e Itu;</li>
                    <li>Gerenciamento de serviços de terceiros como, motoboy, limpeza, correios e manutenção predial;</li>
                    <li>Coordenador do projeto de responsabilidade social para unidades de São Paulo, Campinas, Itu, Maringá e
                    Hortolândia;</li>
                    <li>Responsável pelo projeto piloto de Implantação do 5S na Unidade Lapa. Organização da brigada de incêndio
                    na Lapa;</li>
                    <li>Responsável pelos pagamentos dos funcionários particulares do executivo, responsável pela administração
                    das despesas familiares.</li>
                </div>
            </div>
            <Footer/>
        </div>
        </>
    )
}