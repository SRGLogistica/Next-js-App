import Link from "next/link"
const About1 = () => {
    return (
        <>
          <section className="about-section">
            <div className="auto-container">
              <div className="row">

                <div className="content-column col-lg-6 col-md-12 col-sm-12 wow fadeInLeft">
                  <div className="inner-column">
                    <div className="sec-title">
                      <span className="sub-title">Bem-vindo Aqui!</span>
                      <h2 className="scrub-each-word text-split">Nós fornecemos uma gama completa <br />de transporte</h2>
                      <div className="text">Oferecemos uma gama completa de serviços de transporte, pensados para atender às necessidades específicas de cada cliente. Trabalhamos com comprometimento, pontualidade e responsabilidade, garantindo que sua carga chegue ao destino com total segurança.</div>
                    </div>
                    <div className="list-outer-box">
                      <div className="list-box">
                        <ul className="list-style-two">
                          <li><i className="fa fa-plane"></i> Soluções de transporte urgentes</li>
                          <li><i className="fa fa-plane"></i> Serviços de qualidade preço razoável</li>
                          <li><i className="fa fa-plane"></i> Equipe confiável e experiente</li>
                        </ul>
                        <Link href="page-about" className="theme-btn btn-style-one"><span className="btn-title">Descubra mais</span></Link>
                      </div>

                      <div className="exp-box">
                        <i className="icon flaticon-delivery-courier"></i>
                        <h6 className="title">Conheça nossos  <br />Agentes Especialistas</h6>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="image-column col-lg-6 col-md-12 col-sm-12">
                  <div className="inner-column">
                    <div className="icon-shape-2"></div>
                    <figure className="image overlay-anim"><img src="images/resource/about1-1.png" alt="Image"/></figure>
                    <figure className="image-2 overlay-anim"><img src="images/resource/about1-2.png" alt="Image"/></figure>
                    <div className="exp-box">
                      <div className="icon-map"></div>
                      <h1 className="count">17<sup>+</sup></h1>
                      <h6 className="title">Locais em todo o mundo</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
    );
};
export default About1