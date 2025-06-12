import Link from "next/link"
const News1 = () => {
    return (
        <>
        <section className="news-section">
          <div className="icon-plane-3 bounce-y"></div>
          <div className="auto-container">
            <div className="sec-title text-center">
              <span className="sub-title">De postagens de blog</span>
              <h2 className="scrub-each-word text-split">Notícias e artigos</h2>
            </div>
            <div className="row">

              <div className="news-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
                <div className="inner-box">
                  <div className="image-box">
                    <figure className="image">
                      <Link href="news-details">
                        <img src="images/resource/news1-1.jpg" alt="Image"/>
                        <img src="images/resource/news1-1.jpg" alt="Image"/>
                      </Link>
                    </figure>
                  </div>
                  <div className="content-box">
                    <div className="date">26<span>Abril</span></div>
                    <ul className="post-meta">
                      <li><i className="fa fa-user-circle"></i></li>
                      <li><i className="fa fa-comment"></i>2 Comentários</li>
                    </ul>
                    <h5 className="title">Comprometemo-nos com a excelência em cada etapa, garantindo segurança, discrição e integridade no manuseio de bens valiosos</h5>
                    <Link className="read-more" href="">Saiba mais <i className="icon fa fa-angle-right"></i></Link>
                  </div>
                </div>
              </div>

              <div className="news-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="300ms">
                <div className="inner-box">
                  <div className="image-box">
                    <figure className="image">
                   
                        <img src="images/resource/news1-2.jpg" alt="Image"/>
                        <img src="images/resource/news1-2.jpg" alt="Image"/>
            
                    </figure>
                  </div>
                  <div className="content-box">
                    <div className="date">28<span>Maio</span></div>
                    <ul className="post-meta">
                      <li><i className="fa fa-user-circle"></i></li>
                      <li><i className="fa fa-comment"></i>2 Comentários</li>
                    </ul>
                    <h5 className="title">Tratamos cada bem com o máximo cuidado, respeito e responsabilidade, cientes de seu valor único para cada cliente</h5>
                    <Link className="read-more" href="">Saiba mais<i className="icon fa fa-angle-right"></i></Link>
                  </div>
                </div>
              </div>

              <div className="news-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="600ms">
                <div className="inner-box">
                  <div className="image-box">
                    <figure className="image">
                      <Link href="news-details">
                        <img src="images/resource/news1-3.jpg" alt="Image"/>
                        <img src="images/resource/news1-3.jpg" alt="Image"/>
                      </Link>
                    </figure>
                  </div>
                  <div className="content-box">
                    <div className="date">12<span>Junho</span></div>
                    <ul className="post-meta">
                      <li><i className="fa fa-user-circle"></i></li>
                      <li><i className="fa fa-comment"></i>2 Comentários</li>
                    </ul>
                    <h5 className="title">Cada item que recebemos é tratado com atenção minuciosa e profissionalismo refletindo nosso compromisso</h5>
                    <Link className="read-more" href="">Saiba mais<i className="icon fa fa-angle-right"></i></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        </>
    );
};
export default News1