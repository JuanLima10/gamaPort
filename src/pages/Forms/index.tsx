import Style from './forms.module.scss';

export default function Forms(){
    return(
        <>
        <div className={ Style.forms }>
            <p className="formsTitle">Formações</p>
            <div className={ Style.formsContent }>
                <div className={ Style.formsPics }>
                    <div>
                        <img src="formsPic1.png" alt="Imagem de Exemplo"/>
                        <p>Graduação em Administração</p>
                        <p>Faculdade Adventista de Hortolândia</p>
                    </div>
                    <div>
                        <img src="formsPic2.png" alt="Imagem de Exemplo"/>
                        <p>MBA em Gestão Estratégica de Negócios</p>
                        <p>Faculdade Adventista de Hortolândia</p>
                    </div>
                    <div>
                        <img src="formsPic3.png" alt="Imagem de Exemplo"/>
                        <p>Fundamento e Processos de Gestão de RH</p>
                        <p>Universidade Brasília</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}