import Link from "next/link"
const Team2 = () => {
    return (
        <>
          <section className="team-section">
            <div className="icon-plane-3 bounce-y"></div>
            <div className="auto-container">
              <div className="sec-title text-center">
                <span className="sub-title">membros da nossa equipe</span>
                <h2 className="scrub-each-word text-split">Conheça os profissionais</h2>
              </div>
              <div className="row">
                
                <div className="team-block col-lg-3 col-md-6 col-sm-12 wow fadeInUp">
                  <div className="inner-box">
                    <figure className="image"><Link href="page-team-details"><img src="images/resource/team1-1.jpg" alt="image"/></Link></figure>
                    <div className="info-box">
                      <span className="designation">Eng.Software</span>
                      <h5 className="name"><Link href="page-team-details">Vasta Abel</Link></h5>
                      <span className="share-icon fa fa-share-alt"></span>
                      <div className="social-links">
                        <Link href="#"><i className="fab fa-facebook"></i></Link>
                        <Link href="#"><i className="fab fa-twitter"></i></Link>
                        <Link href="#"><i className="fab fa-instagram"></i></Link>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="team-block col-lg-3 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="300ms">
                  <div className="inner-box">
                    <figure className="image"><Link href="page-team-details"><img src="images/resource/team1-2.jpg" alt="image"/></Link></figure>
                    <div className="info-box">
                      <span className="designation">Design Grafico</span>
                      <h5 className="name"><Link href="page-team-details">Mamudo Ismael</Link></h5>
                      <span className="share-icon fa fa-share-alt"></span>
                      <div className="social-links">
                        <Link href="#"><i className="fab fa-facebook"></i></Link>
                        <Link href="#"><i className="fab fa-twitter"></i></Link>
                        <Link href="#"><i className="fab fa-instagram"></i></Link>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="team-block col-lg-3 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="600ms">
                  <div className="inner-box">
                    <figure className="image"><Link href="page-team-details"><img src="images/resource/team1-3.jpg" alt="image"/></Link></figure>
                    <div className="info-box">
                      <span className="designation">Gestor</span>
                      <h5 className="name"><Link href="page-team-details">Felisberto Fanequiço</Link></h5>
                      <span className="share-icon fa fa-share-alt"></span>
                      <div className="social-links">
                        <Link href="#"><i className="fab fa-facebook"></i></Link>
                        <Link href="#"><i className="fab fa-twitter"></i></Link>
                        <Link href="#"><i className="fab fa-instagram"></i></Link>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="team-block col-lg-3 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="900ms">
                  <div className="inner-box">
                    <figure className="image"><Link href="page-team-details"><img src="images/resource/team1-4.jpg" alt="image"/></Link></figure>
                    <div className="info-box">
                      <span className="designation">Consultor</span>
                      <h5 className="name"><Link href="page-team-details">Sergio Machel</Link></h5>
                      <span className="share-icon fa fa-share-alt"></span>
                      <div className="social-links">
                        <Link href="#"><i className="fab fa-facebook"></i></Link>
                        <Link href="#"><i className="fab fa-twitter"></i></Link>
                        <Link href="#"><i className="fab fa-instagram"></i></Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
    );
};
export default Team2