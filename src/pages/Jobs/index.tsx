import Link from 'next/link';
import Style from './jobs.module.scss';

export default function Jobs(){
    return(
        <>
        <div id="Jobs" className={ Style.jobs }>
            <p className="jobsTitle">Experiências Profissionais</p>
            <div className={ Style.jobsContent }>
                <div className={ Style.jobsPics }>
                    <div>
                        <p>10/2005 - 02/2008</p>
                        <img src="jobsBHS.png" alt="Imagem de Exemplo"/>
                        <p>BSH Continental</p>
                        <p>Assistente Administrativo</p>
                        <p><Link href="Jobs/Experiences/BSH"><a>Ver mais</a></Link></p>
                    </div>
                    <div>
                        <p>02/2008 - 02/2010</p>
                        <img src="jobsMabe.png" alt="Imagem de Exemplo"/>
                        <p>Mabe Brasil Eletrodomésticos</p>
                        <p>Analista Pleno Serviço RH</p>
                        <p><Link href="Jobs/Experiences/Mabe1"><a>Ver mais</a></Link></p>
                    </div>
                    <div>
                        <p>02/2010 - 08/2013</p>
                        <img src="jobsMabe.png" alt="Imagem de Exemplo"/>
                        <p>Mabe Brasil Eletrodomésticos</p>
                        <p>Gestão de Frota / Administração de Serviços RH</p>
                        <p><Link href="Jobs/Experiences/Mabe2"><a>Ver mais</a></Link></p>
                    </div>
                    <div>
                        <p>09/2014 - 05/2015</p>
                        <img src="jobsBrSor.png" alt="Imagem de Exemplo"/>
                        <p>BR Sorvetes Ltda</p>
                        <p>Gerente Administrativo</p>
                        <p><Link href="Jobs/Experiences/BR"><a>Ver mais</a></Link></p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}