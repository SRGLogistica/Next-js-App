import { useState } from 'react';
  const Faq = () => {
    const [isActive, setIsActive] = useState({
        status: false,
        key: 1,
    })

    const handleClick = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }
  return (
    <>

    <section className="">
      <div className="container">
        <div className="row">
          <div className="col">
            <ul className="accordion-box wow fadeInRight">
              {/* Block */}
              <li className="accordion block active-block">
                <div className={isActive.key == 1 ? "acc-btn active" : "acc-btn"} onClick={() => handleClick(1)}>
                 <h3> Perguntas Frequentes </h3>
                    <div className="icon fa fa-plus"></div>
                                     
                </div>
                <div className={isActive.key == 1 ? "acc-content current" : "acc-content"}>
                  <div className="content">

                  </div>
                </div>
              </li>
              {/* Block */}
              <li className="accordion block">
                <div className={isActive.key == 2 ? "acc-btn active" : "acc-btn"} onClick={() => handleClick(2)}>
               Quais são os tipos de frete disponíveis?

 <div className="icon fa fa-plus"></div>
                </div>
                <div className={isActive.key == 2 ? "acc-content current" : "acc-content"}>
                  <div className="content">
                    <div className="text">Oferecemos frete via aérea, terrestre e marítima. Cada modalidade atende a diferentes necessidades de prazo, custo e tipo de carga.</div>
                  </div>
                </div>
              </li>
              {/* Block */}
              <li className="accordion block">
                <div className={isActive.key == 3 ? "acc-btn active" : "acc-btn"} onClick={() => handleClick(3)}>
                  Como funciona o cálculo do frete?
                  <div className="icon fa fa-plus"></div>
                </div>
                <div className={isActive.key == 3 ? "acc-content current" : "acc-content"}>
                  <div className="content">
                    <div className="text">O valor do frete é calculado com base no peso, dimensões, origem, destino e modalidade de envio escolhida.</div>
                  </div>
                </div>
              </li>
              {/* Block */}
              <li className="accordion block">
                <div className={isActive.key == 4 ? "acc-btn active" : "acc-btn"} onClick={() => handleClick(4)}>
                  Como entro em contato com o suporte?
                  <div className="icon fa fa-plus"></div>
                </div>
                <div className={isActive.key == 4 ? "acc-content current" : "acc-content"}>
                  <div className="content">
                    <div className="text">Você pode nos contatar pelo formulário no site, telefone, WhatsApp ou e-mail disponíveis na seção "Entre em Contacto Conosco"</div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    
    </>
  );
};
export default Faq