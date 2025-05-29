import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';
import ReactSlider from 'react-slider';

const Contact2 = () => {
    return (
        <>
          <section className="contact-section-two">
            <figure className="float-image"><img src="images/resource/contact2-1.png" alt="Image"/></figure>
            <div className="icon-container-2 bounce-x"></div>
            <div className="bg bg-pattern-6"></div>
            <div className="auto-container">
              <div className="outer-box">
                <div className="row">

                  <div className="content-column col-xl-6 col-lg-12 col-md-12 col-sm-12 wow fadeInLeft">
                    <div className="inner-column">
                      <div className="sec-title">
                        <span className="sub-title">Entre em contato conosco agora</span>
                        <h2 className="scrub-each-word text-split">Assuma o controle total do envio</h2>
                      </div>
                    </div>
                  </div>

                  <div className="form-column col-xl-6 col-lg-12 col-md-12 col-sm-12 wow fadeInRight" data-wow-delay="300ms">
                    <div className="inner-column">
                      <div className="contact-form">
                        <form method="post" action="get" id="contact-form">
                          <div className="row">

                            <div className="form-group col-lg-12 col-md-12">
                              <label>Seu nome:</label>
                              <input type="text" name="name" required/>
                            </div>
                            
                            <div className="form-group col-lg-6 col-md-6">
                              <label>Seu Email:</label>
                              <input type="email" name="email" required/>
                            </div>
                            
                            <div className="form-group col-lg-6 col-md-6">
                              <label>Phone No:</label>
                              <input type="tel" name="phone" required/>
                            </div>

                            <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                              <div className="range-slider-one">
                                <label className="mb-30">Dist (Miles):</label>
                                <ReactSlider
                                  className="horizontal-slider form-group mb-4"
                                  thumbClassName="example-thumb"
                                  trackClassName="example-track"
                                  defaultValue={[0, 35, 100]}
                                  ariaLabel={['Leftmost thumb', 'Middle thumb', 'Rightmost thumb']}
                                  ariaValuetext={state => `Thumb value ${state.valueNow}`}
                                  renderThumb={(props, state) => <span {...props}>{state.valueNow}</span>}
                                  pearling
                                  minDistance={1}
                                />
                              </div>
                            </div>
                            
                            <div className="form-group col-lg-6 col-md-6 col-sm-6">
                              <label>Tipo de frete:</label>
                              <select className="custom-select">
                                <option value="">Selecione</option>
                                <option value="">Via Aérea</option>
                                <option value="">Via Marítima</option>
                                <option value="">Via Terrestre</option>
                              </select>
                            </div>
                            
                            <div className="form-group col-lg-6 col-md-6 col-sm-6">
                              <label>Carregar:</label>
                              <select className="custom-select">
                                <option value="">Selecione</option>
                                <option value="">Via Aérea</option>
                                <option value="">Via Marítima</option>
                                <option value="">Via Terrestre</option>
                              </select>
                            </div>

                            <div className="form-group col-lg-12">
                              <button type="submit" className="theme-btn btn-style-one" name="submit-form"><span className="btn-title">Enviar solicitação</span></button>
                            </div>
                          </div>
                        </form>
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
export default Contact2