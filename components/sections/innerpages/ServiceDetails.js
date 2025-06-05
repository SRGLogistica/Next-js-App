import Link from 'next/link';
import { useState } from 'react';

const ServiceDetails = () => {
  const [isActive, setIsActive] = useState({
      status: false,
      key: 1,
  })

  const handleClick = (key) => {
      if (isActive.key === key) {
          setIsActive({
              status: false,
          })
      } else {
          setIsActive({
              status: true,
              key,
          })
      }
  }
  return (
    <>

  <section className="services-details">
    <div className="container">
      <div className="row">
        {/* Start Services Details Sidebar */}
				<div className="col-xl-4 col-lg-4">
					<div className="service-sidebar">
						<div className="sidebar-widget service-sidebar-single">

							<div className="sidebar-service-list">
								<ul>
									<li><Link href="page-service-details" className="current"><i className="fas fa-angle-right"></i><span>Via Aérea</span></Link></li>
									<li className="current"><Link href="page-service-details"><i className="fas fa-angle-right"></i><span>Via Marítima</span></Link></li>
									<li><Link href="page-service-details"><i className="fas fa-angle-right"></i><span>Via Terrestre</span></Link></li>
									<li><Link href="page-service-details"><i className="fas fa-angle-right"></i><span>Outra solução</span></Link></li>
									<li><Link href="page-service-details"><i className="fas fa-angle-right"></i><span>Ferroviario</span></Link></li>
									<li><Link href="page-service-details"><i className="fas fa-angle-right"></i><span> personalizado</span></Link></li>
								</ul>
							</div>

							<div className="service-details-help">
								<div className="help-shape-1"></div>
								<div className="help-shape-2"></div>
								<h2 className="help-title">Entre em contato<br/> conosco para  <br/> qualquer conselho</h2>
								<div className="help-icon">
									<span className=" lnr-icon-phone-handset"></span>
								</div>
								<div className="help-contact">
									<p>Precisa de ajuda? Fale com um especialista</p>
									<Link href="tel:+21 083 657">+21 083 657</Link>
								</div>
							</div>

							<div className="sidebar-widget service-sidebar-single mt-4">
								<div className="service-sidebar-single-btn wow fadeInUp" data-wow-delay="0.5s" data-wow-duration="1200m">
									<Link href="#" className="theme-btn btn-style-one d-grid"><span className="btn-title"><span className="fas fa-file-pdf"></span> baixar arquivo pdf</span></Link>
								</div>
							</div>
						</div>
					</div>
				</div>
        {/* End Services Details Sidebar */}

        {/* Start Services Details Content */}
        <div className="col-xl-8 col-lg-8">
          <div className="services-details__content">
            <img src="/images/resource/service-details.jpg" alt="" />
            <h2 className="mt-4">Visão Geral do Serviço</h2>
            <p>Oferecemos soluções logísticas completas, desenvolvidas para atender às demandas de empresas que buscam agilidade, segurança e eficiência em seus processos de transporte e distribuição. Atuamos em todas as etapas da cadeia logística, com presença global e suporte personalizado.</p>
            <p>Nossa estrutura é pensada para entregar resultados consistentes, com equipes capacitadas, tecnologias de ponta e um compromisso inabalável com a qualidade. Cada operação é planejada com precisão, garantindo a máxima performance em tempo, custo e segurança. Mais do que transportar, conectamos negócios, encurtamos distâncias e abrimos caminhos para o crescimento sustentável. </p>
            <div className="content">
              <div className="text">
                <h3>Centro de serviços</h3>
                <p>Nosso Centro de Serviços é o núcleo operacional onde tecnologia, equipe especializada e excelência em atendimento se unem para garantir o bom funcionamento de cada etapa da cadeia logística. Atuamos com foco total no cliente, oferecendo suporte rápido, soluções personalizadas e monitoramento contínuo das operações.</p>
              </div>
              <div className="feature-list">
                <div className="row clearfix">
                  <div className="col-lg-6 col-md-6 col-sm-12 column">
                    <div className="single-item">
                      <div className="icon-box"><i className="fas fa-check-circle"></i></div>
                      <h6 className="title">Entrega rápida em domicílio</h6>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 column">
                    <div className="single-item">
                      <div className="icon-box"><i className="fas fa-check-circle"></i></div>
                      <h6 className="title">Pagamentos Seguros</h6>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 column">
                    <div className="single-item">
                      <div className="icon-box"><i className="fas fa-check-circle"></i></div>
                      <h6 className="title">Entregando os melhores produtos</h6>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 column">
                    <div className="single-item">
                      <div className="icon-box"><i className="fas fa-check-circle"></i></div>
                      <h6 className="title">Inspeções Alimentares</h6>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 column">
                    <div className="single-item">
                      <div className="icon-box"><i className="fas fa-check-circle"></i></div>
                      <h6 className="title">Sistemas Geradores</h6>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 column">
                    <div className="single-item">
                      <div className="icon-box"><i className="fas fa-check-circle"></i></div>
                      <h6 className="title">Avaliações</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              <h3>Perguntas frequentes</h3>
             {/* removi um paragrafo */}
             < br></br>
              <ul className="accordion-box wow fadeInRight">
                {/* Block */}
                <li className="accordion block">
                  <div className={isActive.key == 1 ? "acc-btn active" : "acc-btn"} onClick={() => handleClick(1)}>Quais tipos de transporte vocês oferecem?
                    <div className="icon fa fa-plus"></div>
                  </div>
                  <div className={isActive.key == 1 ? "acc-content current" : "acc-content"}>
                    <div className="content">
                      <div className="text">Oferecemos transporte nacional e internacional, incluindo cargas rodoviárias, marítimas e aéreas, com soluções personalizadas para cada necessidade.</div>
                    </div>
                  </div>
                </li>
                {/* Block */}
                <li className="accordion block active-block">
                  <div className={isActive.key == 2 ? "acc-btn active" : "acc-btn"} onClick={() => handleClick(2)}>Vocês cuidam da documentação aduaneira?
                    <div className="icon fa fa-plus"></div>
                  </div>
                  <div className={isActive.key == 2 ? "acc-content current" : "acc-content"}>
                    <div className="content">
                      <div className="text">Sim. Nossa equipe especializada cuida de todo o processo de desembaraço aduaneiro, garantindo conformidade e agilidade nas operações internacionais.</div>
                    </div>
                  </div>
                </li>
                {/* Block */}
                <li className="accordion block">
                  <div className={isActive.key == 3 ? "acc-btn active" : "acc-btn"} onClick={() => handleClick(3)}>Trabalham com logística integrada?
                    <div className="icon fa fa-plus"></div>
                  </div>
                  <div className={isActive.key == 3 ? "acc-content current" : "acc-content"}>
                    <div className="content">
                      <div className="text">Sim, oferecemos soluções completas de logística integrada, incluindo armazenagem, controle de estoque, distribuição e transporte.</div>
                    </div>
                  </div>
                </li>
                {/* Block */}
                <li className="accordion block">
                  <div className={isActive.key == 4 ? "acc-btn active" : "acc-btn"} onClick={() => handleClick(4)}>Como solicito um orçamento?
                    <div className="icon fa fa-plus"></div>
                  </div>
                  <div className={isActive.key == 4 ? "acc-content current" : "acc-content"}>
                    <div className="content">
                      <div className="text">Você pode solicitar um orçamento diretamente pelo nosso site, na aba Solicitar Cotação, ou entrar em contato com nosso time comercial por telefone ou e-mail.</div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* End Services Details Content */}
      </div>
    </div>
  </section>

    </>
  );
};
export default ServiceDetails
