import s from './terms.module.scss'

export const Terms = () => {
    return <main className="main container">
        <h1 className="h1">política de Privacidade</h1>
        <div className={s.block}>
            <h2 className="h2">Coleta de informações pessoais</h2>
            <h3 className="h3">Coletamos diferentes tipos de informações pessoais sobre você quando você usa nosso site, incluindo:</h3>
            <p className="text">
                <span style={{color: 'white'}}>Informações que você nos fornece:</span> podem incluir seu nome, endereço de e-mail, número de telefone, informações demográficas e outros dados que você nos fornece ao se registrar em nosso site, criar uma conta, jogar ou entrar em contato com o atendimento ao cliente.
            </p>
            <p className="text">
            <span style={{color: 'white'}}>Informações que coletamos automaticamente:</span> Quando você usa nosso site, coletamos automaticamente certas informações sobre seu dispositivo e sua atividade, incluindo seu endereço IP, tipo de navegador, sistema operacional, data e hora de sua visita, páginas que você visualiza e as ações que você realiza. Em nosso site.
            </p>
            <p className="text">
            <span style={{color: 'white'}}>Informações de cookies e outras tecnologias de rastreamento:</span> Usamos cookies e outras tecnologias de rastreamento para coletar informações sobre sua atividade em nosso Site. Usamos cookies para diversos fins, incluindo melhorar sua experiência de usuário, rastrear sua atividade em nosso Site e fornecer-lhe informações direcionadas. anúncio.
            </p>
        </div>
        <div className={s.block}>
            <h2 className="h2">
                Uso de informações pessoais
            </h2>
            <h3 className="h3">
                Usamos suas informações pessoais para os seguintes fins:
            </h3>

            <p className="text">
            <span style={{color: 'white'}}>Fornecimento e melhoria dos nossos serviços:</span> Utilizamos as suas informações pessoais para lhe fornecer os nossos serviços, incluindo acesso aos jogos, processamento das suas apostas e pagamento dos seus ganhos. Também utilizamos suas informações pessoais para melhorar nossos serviços e desenvolver novos recursos e produtos.
            </p>
            <p className="text">
            <span style={{color: 'white'}}>Entrando em contato com você:</span> Poderemos usar suas informações pessoais para contatá-lo sobre sua conta, nossos serviços ou outros fins relacionados ao nosso negócio.
            </p>
            <p className="text">
            <span style={{color: 'white'}}>Personalização da sua experiência:</span> Podemos usar suas informações pessoais para personalizar sua experiência em nosso Site, inclusive para fornecer recomendações e ofertas de jogos direcionadas.
            </p>
            <p className="text">
            <span style={{color: 'white'}}>Publicidade:</span> Podemos usar suas informações pessoais para mostrar publicidade direcionada em nosso site e em outros sites.
            </p>
            <p className="text">
            <span style={{color: 'white'}}>Finalidades de pesquisa:</span> Podemos usar suas informações pessoais para fins de pesquisa para entender melhor nossos usuários e melhorar nossos serviços.
            </p>
        </div>

        <div className={s.block}>
            <h2 className="h2">
                Divulgação de informações pessoais
            </h2>

            <h3 className="h3">
                Poderemos divulgar suas informações pessoais a terceiros nos seguintes casos:
            </h3>
            <p className="text">
            <span style={{color: 'white'}}>Provedores de serviços:</span> podemos divulgar suas informações pessoais a terceiros que nos prestam serviços, como processamento de pagamentos, atendimento ao cliente e marketing.
            </p>
            <p className="text">
            <span style={{color: 'white'}}>Requisitos legais:</span> Poderemos divulgar suas informações pessoais se formos obrigados a fazê-lo por lei ou por um mandado legal ou ação legal.
            </p>
            <p className="text">
            <span style={{color: 'white'}}> Proteção dos nossos direitos:</span> Poderemos divulgar as suas informações pessoais se acreditarmos que é necessário para proteger os nossos direitos ou propriedade.
            </p>

        </div>

        <div className={s.block}>
            <h2 className="h2">
                Armazenamento e proteção de suas informações pessoais

            </h2>
            <p className="text">
                Tomamos medidas para proteger suas informações pessoais contra acesso, uso, divulgação, alteração ou destruição não autorizados. Retemos as suas informações pessoais apenas durante o tempo necessário para cumprir os fins para os quais foram recolhidas ou para cumprir as nossas obrigações legais.
            </p>
        </div>
    </main>
}