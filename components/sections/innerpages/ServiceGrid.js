import Link from 'next/link';

const ServiceGrid = () => {
  return (
    <>

    <section className="service-section">
      <div className="auto-container">
        <div className="row">
          <div className="service-block col-lg-4 col-md-6 wow fadeInUp">
            <div className="inner-box">
              <figure className="image">
                <img src="images/resource/service1-1.jpg" alt="Image"/>
                <img src="images/resource/service1-1.jpg" alt="Image"/>
              </figure>
                  
              <div className="content">
                <div className="bg-color"></div>
                <i className="icon flaticon-air"></i>
                <h4 className="title"><Link href="page-service-details">Via Aérea</Link></h4>
                <div className="text">Entrega até 7 dias</div>
              </div>
            </div>
          </div>
          <div className="service-block col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="200ms">
            <div className="inner-box">
              <figure className="image">
                <img src="images/resource/service1-2.jpg" alt="Image"/>
                <img src="images/resource/service1-2.jpg" alt="Image"/>
              </figure>
              <div className="content">
                <div className="bg-color"></div>
                <i className="icon flaticon-cargo-boat"></i>
                <h4 className="title"><Link href="page-service-details">Via Marítima</Link></h4>
                <div className="text">Entrega até 30 dias</div>
              </div>
            </div>
          </div>
          
          <div className="service-block col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="300ms">
            <div className="inner-box">
              <figure className="image">
                <img src="images/resource/service1-3.jpg" alt="Image"/>
                <img src="images/resource/service1-3.jpg" alt="Image"/>
              </figure>

                  
              <div className="content">
                <div className="bg-color"></div>
                <i className="icon flaticon-truck"></i>
                <h4 className="title"><Link href="page-service-details">Via Terrestre</Link></h4>
                <div className="text">Entrega imediata</div>
              </div>
              
            </div>
          </div>
          <div className="service-block col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="400ms">
            <div className="inner-box">
              <figure className="image">
                <img src="images/resource/service1-2.jpg" alt="Image"/>
                <img src="images/resource/service1-2.jpg" alt="Image"/>
              </figure>
              <div className="content">
                <div className="bg-color"></div>
                <i className="icon flaticon-cargo-boat"></i>
                <h4 className="title"><Link href="page-service-details">Via Marítima</Link></h4>
                <div className="text">Ideal para grandes volumes e envios internacionais, com excelente custo-benefício.</div>
              </div>
            </div>
          </div>
          <div className="service-block col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="500ms">
            <div className="inner-box">
              <figure className="image">
                <img src="images/resource/service1-3.jpg" alt="Image"/>
                <img src="images/resource/service1-3.jpg" alt="Image"/>
              </figure>
              <div className="content">
                <div className="bg-color"></div>
                <i className="icon flaticon-truck"></i>
                <h4 className="title"><Link href="page-service-details">Transporte Terrestre</Link></h4>
                <div className="text">Solução econômica para entregas em todo o país, com segurança e rastreamento completo.</div>
              </div>
            </div>
          </div>
          <div className="service-block col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="600ms">
            <div className="inner-box">
              <figure className="image">
                <img src="images/resource/service1-1.jpg" alt="Image"/>
                <img src="images/resource/service1-1.jpg" alt="Image"/>
              </figure>
              <div className="content">
                <div className="bg-color"></div>
                <i className="icon flaticon-air"></i>
                <h4 className="title"><Link href="page-service-details">Via Aérea</Link></h4>
                <div className="text">A opção mais rápida para entregas urgentes. Ideal para quem precisa de agilidade e segurança no transporte.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
      
    </>
  );
};
export default ServiceGrid
