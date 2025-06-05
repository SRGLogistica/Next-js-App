import Link from 'next/link';
import dynamic from 'next/dynamic';
const CounterUp = dynamic(() => import('@/components/elements/CounterUp'), {
  ssr: false,
})

const TeamGrid = () => {
  return (
    <>
    <section className="team-details">
      <div className="container pb-100">
        <div className="team-details__top pb-70">
          <div className="row">
            <div className="col-xl-6 col-lg-6">
              <div className="team-details__top-left">
                <div className="team-details__top-img"> <img src="/images/resource/team-details.jpg" alt=""/>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="team-details__top-right">
                <div className="team-details__top-content">
                  <h3 className="team-details__top-name">Sérgio Machel</h3>
                  <p className="team-details__top-title">CEO</p>
                  <div className="team-details__social"><Link href="#"><i className="fab fa-facebook"></i></Link> <Link href="#"><i className="fab fa-pinterest-p"></i></Link> <Link href="#"><i className="fab fa-instagram"></i></Link> </div>
                  <p className="team-details__top-text-1">Eu ajudo meus clientes a se destacarem e <br/> eles me ajudam a crescer.</p>
                  <p className="team-details__top-text-3">Meu compromisso é transformar a logística em uma vantagem competitiva para nossos clientes, reduzindo custos, prazos e impactos ambientais, sem abrir mão da qualidade e da confiança. </p>
                  <p className="team-details__top-text-2">Com ampla experiência em gestão logística, lidero com foco em eficiência, inovação e uso estratégico da tecnologia. Utilizamos dados em tempo real, automação e inteligência logística para garantir operações ágeis, seguras e sustentáveis — conectando empresas, pessoas e mercados com excelência.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="team-details__bottom pt-100">
          <div className="row">
            <div className="col-xl-6 col-lg-6">
              <div className="team-details__bottom-left">
                <h4 className="team-details__bottom-left-title">Experiência Pessoal</h4>
                <p className="team-details__bottom-left-text">Tenho mais de 10 anos de experiência no setor de logística, atuando desde a operação até a gestão estratégica. Ao longo da minha trajetória, implementei soluções que aumentaram a eficiência, reduziram custos e otimizaram processos para diversos clientes. Acredito que a logística vai além de mover produtos.</p>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="team-details__bottom-right">
                <div className="team-details__progress">
                  <div className="team-details__progress-single">
                    <h4 className="team-details__progress-title">Marketing</h4>
                    <div className="bar">
                      <div className="bar-inner count-bar" data-percent="90%" style={{width:"90%"}}>
                        <div className="count-text"><CounterUp count={90} time={3} />%</div>
                      </div>
                    </div>
                  </div>
                  <div className="team-details__progress-single">
                    <h4 className="team-details__progress-title">I.T</h4>
                    <div className="bar">
                      <div className="bar-inner count-bar" data-percent="76%" style={{width:"76%"}}>
                        <div className="count-text"><CounterUp count={76} time={3} />%</div>
                      </div>
                    </div>
                  </div>
                  <div className="team-details__progress-single">
                    <h4 className="team-details__progress-title">Negócios</h4>
                    <div className="bar marb-0">
                      <div className="bar-inner count-bar" data-percent="60%" style={{width:"60%"}}>
                        <div className="count-text"><CounterUp count={60} time={3} />%</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="team-contact-form">
    <div className="container pb-100">
      <div className="sec-title text-center mb-50">
        <span className="sub-title">Entre em Contato Conosco Agora</span>
        <h2 className="section-title__title">Sinta-se à vontade para escrever</h2>
      </div>
      <div className="row justify-content-center">
        <div className="col-lg-8">
          {/* Contact Form */}
          <form id="contact_form" name="contact_form" className="" action="#" method="post">
            <div className="row">
              <div className="col-sm-6">
                <div className="mb-3">
                  <input name="form_name" className="form-control" type="text" placeholder="Digite o nome"/>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="mb-3">
                  <input name="form_email" className="form-control required email" type="email" placeholder="Digite o Email"/>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6">
                <div className="mb-3">
                  <input name="form_subject" className="form-control required" type="text" placeholder="Digite o assunto"/>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="mb-3">
                  <input name="form_phone" className="form-control" type="text" placeholder="Digite o telefone"/>
                </div>
              </div>
            </div>
            <div className="mb-3">
              <textarea name="form_message" className="form-control required" rows="5" placeholder="Digite a mensagem"></textarea>
            </div>
            <div className="mb-3 text-center">
              <input name="form_botcheck" className="form-control" type="hidden" value="" />
              <button type="submit" className="theme-btn btn-style-one me-2" data-loading-text="Please wait..."><span className="btn-title">Enviar mensagem</span></button>
              <button type="reset" className="theme-btn btn-style-one"><span className="btn-title">Reiniciar</span></button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>

    </>
  );
};
export default TeamGrid
