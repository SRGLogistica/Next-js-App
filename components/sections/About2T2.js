import Link from "next/link"
const About2T2 = () => {
    return (
        <>
        <section className="about-section-four">
          <div className="icon-map-2"></div>
          <div className="icon-plane-4"></div>
          <div className="icon-bus bounce-x"></div>
          <div className="auto-container">
            <div className="row">
              <div className="content-column col-lg-6 col-md-12 col-sm-12 order-lg-2 wow fadeIRight">
                <div className="inner-column">
                  <div className="sec-title">
                    <span className="sub-title">Bem-vindo Aqui!</span>
                    <h2 className="scrub-each-word text-split">Cobertura total & <br />Flexibilidade no Transporte</h2>
                  </div>
                  <div className="icon-box">
                    <i className="icon flaticon-delivery-courier"></i>
                    <h5 className="title">O melhor serviço para empresários <br />que valorizam o tempo</h5>
                  </div>
                  <div className="text">Existem muitas variações de passagens de texto simplesmente livres disponíveis, mas a maioria sofreu alguma alteração de alguma forma dolor sit amet, simplesmente texto livre disponível em consec</div>
                  <ul className="list-style-two">
                    <li><i className="fa fa-plane"></i> Soluções de transporte urgentes</li>
                    <li><i className="fa fa-plane"></i> Serviços de qualidade preço razoável</li>
                  </ul>
                  <div className="btn-box">
                    <Link href="#" className="theme-btn btn-style-one"><span className="btn-title">Descubra mais</span></Link>
                    <div className="author-box">
                      <div className="image"><img src="images/resource/about4-thumb1.jpg" alt="Image"/></div>
                      <div className="author-info">
                        <h5 className="name">Sérgio Machel</h5>
                        <span className="designation">CEO & Founder</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="image-column col-lg-6 col-md-12 col-sm-12">
                <div className="inner-column">
                  <figure className="image overlay-anim"><img src="images/resource/about4-1.jpg" alt="Image"/></figure>
                  <figure className="image-2 overlay-anim"><img src="images/resource/about4-2.jpg" alt="Image"/></figure>
                  <div className="exp-box">
                    <span className="count">15</span>
                    <div className="text">Years of <br />Experience</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        </>
    );
};
export default About2T2