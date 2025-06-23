import Link from "next/link"
import dynamic from 'next/dynamic'
const CounterUp = dynamic(() => import('@/components/elements/CounterUp'), {
    ssr: false,
})
const About2 = () => {
    return (
        <>
            <section className="about-section-three">
                <div className="icon-plane-2 bounce-y"></div>
                <div className="auto-container">
                <div className="row">
                    
                    <div className="content-column col-xl-4 col-lg-6 col-md-12 col-sm-12 wow fadeInLeft">
                    <div className="inner-column">
                        <div className="sec-title">
                        <span className="sub-title">Conheça-nos</span>
                        <h2 className="scrub-each-word text-split">Transporte de produtos através de fronteiras</h2>
                        </div>
                        <h5 className="title">Criamos oportunidades para alcançar o potencial máximo dos seus envios.</h5>
         <div className="text">Com sólida experiência em logística internacional, asseguramos o transporte eficiente, seguro e em total conformidade com as exigências legais de cada país.</div>
                        <div className="icon-box">
                        <i className="icon flaticon-delivery-courier"></i>
                        <h5 className="title">Oferecemos uma gama completa de transporte logístico em todo o mundo.</h5>
                        </div>
                        <Link href="page-about" className="theme-btn btn-style-one"><span className="btn-title">Descubra mais</span></Link>
                    </div>
                    </div>

                    <div className="image-column col-xl-4 col-lg-6 col-md-12 col-sm-12">
                    <div className="inner-column">
                        <figure className="image overlay-anim"><img src="images/resource/about3-1.png" alt="Image"/></figure>

                        <div className="exp-box">
                        <div className="icon-building-2"></div>
                        <i className="icon flaticon-logistics-2"></i>
                        <span className="count">5</span>
                     <div className="text">Anos de Experiência  <br />em Logistica</div>
                        </div>
                    </div>
                    </div>

                    <div className="funfact-column col-xl-4 col-lg-12 col-md-12 col-sm-12">
                    <div className="inner-column">
                        <div className="fact-counter">
                        <div className="counter-block-two wow fadeInUp">
                            <div className="inner-box">
                            <i className="icon flaticon-order"></i>
                            <div className="content">
                                <div className="counter-one"><CounterUp count={478} time={3} /></div>
                                <div className="counter-text">Projetos concluídos</div>
                            </div>
                            </div>
                        </div>
                        
                        <div className="counter-block-two wow fadeInUp">
                            <div className="inner-box">
                            <i className="icon flaticon-delivery-man"></i>
                            <div className="content">
                                <div className="counter-one"><CounterUp count={650} time={3} /></div>
                                <div className="counter-text">Clientes satisfeitos</div>
                            </div>
                            </div>
                        </div>
                        
                        <div className="counter-block-two wow fadeInUp">
                            <div className="inner-box">
                            <i className="icon flaticon-logistic"></i>
                            <div className="content">
                                <div className="counter-one"><CounterUp count={900} time={3} /></div>
                                <div className="counter-text">Entregas no prazo</div>
                            </div>
                            </div>
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
export default About2
