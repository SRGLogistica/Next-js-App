
import Link from 'next/link';

const Contact = () => {
  return (
    <>

  <section className="contact-details">
    <div className="container pt-110 pb-110">
      <div className="row">
        <div className="col-xl-7 col-lg-6">
          <div className="sec-title">
            <span className="sub-title">Envie-nos um e-mail</span>
            <h2>Sinta-se à vontade para escrever

            </h2>
          </div>
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
              <textarea name="form_message" className="form-control required" rows="7" placeholder="Digite a mensagem"></textarea>
            </div>
            <div className="mb-3">
              <input name="form_botcheck" className="form-control" type="hidden" value="" />
              <button type="submit" className="theme-btn btn-style-one me-2" data-loading-text="Please wait..."><span className="btn-title">Enviar mensagem</span></button>
              <button type="reset" className="theme-btn btn-style-one"><span className="btn-title">Reiniciar</span></button>
            </div>
          </form>
          {/* Contact Form Validation */}
        </div>
        <div className="col-xl-5 col-lg-6">
          <div className="contact-details__right">
            <div className="sec-title mb-30">
              <span className="sub-title">Precisa de ajuda?</span>
              <h2>Entre em contato conosco</h2>
              <div className="text">Nossa equipe está pronta para tirar suas dúvidas e oferecer o suporte que você precisa. Fale conosco a qualquer momento!</div>
            </div>
            <ul className="list-unstyled contact-details__info">
              <li>
                <div className="icon"><span className="lnr-icon-phone-plus"></span></div>
                <div className="text">
                  <h6>Tem alguma dúvida?</h6>
                  <Link href="+21 083 657"><span></span>+21 083 657</Link>
                </div>
              </li>
              <li>
                <div className="icon"><span className="lnr-icon-envelope1"></span></div>
                <div className="text">
               <h6>Escrever e-mail</h6>
                  <Link href="mailto:needhelp@company.com">geral@srg.co.mz</Link>
                </div>
              </li>
              <li>
                <div className="icon"><span className="lnr-icon-location"></span></div>
                <div className="text">
                  <h6>Visite-nos</h6>
                  <span>Palm Square-Zimpeto, Maputo </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  <section>
    <div className="container-fluid p-0">
      <div className="row">
        {/* Google Map HTML Codes */}
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.843149788316!2d144.9537131159042!3d-37.81714274201087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4c2b349649%3A0xb6899234e561db11!2sEnvato!5e0!3m2!1sbn!2sbd!4v1583760510840!5m2!1sbn!2sbd" data-tm-width="100%" height="500" frameborder="0" allowfullscreen=""></iframe>
      </div>
    </div>
  </section>
      
    </>
  );
};
export default Contact
