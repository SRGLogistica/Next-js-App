import Link from "next/link"
const Services2 = () => {
    return (
        <>
          <section className="service-section-two">
            <div className="bg bg-pattern-4"></div>
            <div className="auto-container">
              <div className="sec-title light text-center">
                <span className="sub-title">Todos nossos serviços</span>
                <h2 className="scrub-each-word text-split">Oferecemos os melhores  <br />serviços de logistica</h2>
              </div>
              <div className="row">
                <div className="service-block-two col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
                  <div className="inner-box">
                    <figure className="image"><img src="images/resource/service2-1.png" alt="Image"/></figure>
                    <div className="content">
                      <h4 className="title"><Link href="page-service-details">Via Aérea</Link></h4>
                      <div className="text">Entrega até 7 dias </div>
                    </div>
                  </div>
                </div>
                <div className="service-block-two col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="300ms">
                  <div className="inner-box">
                    <figure className="image"><img src="images/resource/service2-2.png" alt="Image"/></figure>
                    <div className="content">
                      <h4 className="title"><Link href="page-service-details">Via Marítima</Link></h4>
                      <div className="text">Entrega até 30 dias </div>
                    </div>
                  </div>
                </div>
                <div className="service-block-two col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="600ms">
                  <div className="inner-box">
                    <figure className="image"><img src="images/resource/service2-3.png" alt="Image"/></figure>
                    <div className="content">
                      <h4 className="title"><Link href="page-service-details">Via Terrestre</Link></h4>
                      <div className="text">Entrega imediata</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
    );
};
export default Services2