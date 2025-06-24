const Features1 = () => {
    return (
        <>
        <section className="features-section">
          <div className="bg bg-pattern-1"></div>
          <div className="auto-container">
            <div className="row">
      
              <div className="blocks-column col-lg-9 col-md-12 col-sm-12 order-lg-2">
                <div className="inner-column">
                  <h3 className="heading">O nosso objetivo é apenas contribuir para <br /> o bem dos seus negócios</h3>
                  <div className="row">
      
                    <div className="feature-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
                      <div className="inner-box">
                        <i className="icon flaticon-checklist"></i>
                        <span className="count">01</span>
                        <h5 className="title">Otimização <br />de custos</h5>
                      </div>
                    </div>
      
                    <div className="feature-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="300ms">
                      <div className="inner-box">
                        <i className="icon flaticon-order"></i>
                        <span className="count">02</span>
                        <h5 className="title">Redução <br />o tempo de trânsito</h5>
                      </div>
                    </div>
      
                    <div className="feature-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="600ms">
                      <div className="inner-box">
                        <i className="icon flaticon-import"></i>
                        <span className="count">03</span>
                        <h5 className="title">Operação <br />de armazém</h5>
                      </div>
                    </div>
                  </div>
      
                  <div className="exp-box">
                    <div className="images-box">
                      <img src="images/resource/avatar-1.jpg" alt="Image"/>
                      <img src="images/resource/avatar-2.jpg" alt="Image"/>
                    </div>
                    <h5 className="title">Confiado por centenas. Movendo seu produto pelo mundo </h5>    
                  </div>
                </div>
              </div>
      
              <div className="image-column col-lg-3 col-md-12 col-sm-12">
                <div className="inner-column">
                  <figure className="image"><img src="images/resource/feature1-1.png" alt="Image"/></figure>
                  <div className="icon-feature zoom-one"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
        </>
    );
};
export default Features1