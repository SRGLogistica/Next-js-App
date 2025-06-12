import Link from "next/link"

export default function Footer1() {
    return (
        <>
			<footer className="main-footer footer-style-one">
				<div className="bg bg-image" style={{ backgroundImage: 'url(/images/background/4.jpg)' }}></div>
				
				<div className="footer-top">
				<div className="auto-container">
					<div className="outer-box">
					<ul className="contact-list-two light">
						<li>
						<i className="icon flaticon-global-shipping-1"></i>
						<div className="text">Endereço <br />  <span>Av. de Moçambique, Zimpeto <br />Palm Square - Shoprite </span></div>
						</li>
						<li>
						<i className="icon flaticon-stock-1"></i> 
						<div className="text">Contacto <br /> <Link href="mailto:geral@srg.co.mz">geral@srg.co.mz</Link> <Link href="tel:+258847965281">+258 (84) 796 5281</Link></div>
						</li>
						<li>
						<i className="icon flaticon-24-hours-2"></i><div className="text">Horario <br /> <span>Seg - Sex: 8h30-17h00 <br />Sab -Dom: FECHADO</span></div>
						</li>
					</ul>
					</div>
				</div>
				</div>

				<div className="widgets-section">
				<div className="auto-container">
					<div className="row">

					<div className="footer-column col-lg-3 col-md-6 col-sm-12">
						<div className="footer-widget about-widget">
						<div className="logo"><Link href="#"><img src="images/logo.png" alt="Logo"/></Link></div>
						<div className="text">Conectando Você ao Melhor em Tecnologia de Qualidade!</div>
						<Link href="page-about" className="theme-btn btn-style-one"><span className="btn-title">Sobre nós</span></Link>
						</div>
					</div>

					<div className="footer-column col-lg-3 col-md-6 col-sm-12">
						<div className="footer-widget links-widget">
						<h4 className="widget-title">Serviços</h4>
						<div className="widget-content">
							<ul className="user-links">
							<li><i className="icon fa fa-angle-double-right"></i> <Link href="#">Confiabilidade e Pontualidade</Link></li>
							<li><i className="icon fa fa-angle-double-right"></i> <Link href="#">Franquia de Confiança</Link></li>
							<li><i className="icon fa fa-angle-double-right"></i> <Link href="#">Armazéns Armazenamento</Link></li>
							<li><i className="icon fa fa-angle-double-right"></i> <Link href="#">Rastreamento em tempo real</Link></li>
							<li><i className="icon fa fa-angle-double-right"></i> <Link href="#">Preços Transparentes</Link></li>
							</ul>
						</div>
						</div>
					</div>

					<div className="footer-column col-lg-3 col-md-6 col-sm-12">
						<div className="footer-widget gallery-widget">
						<h4 className="widget-title">Projectos</h4>
						<div className="widget-content">
							<div className="insta-gallery">
							<figure className="image"><Link href="#"><img src="images/resource/gallery-thumb-1.jpg" alt="Image"/></Link></figure>
							<figure className="image"><Link href="#"><img src="images/resource/gallery-thumb-2.jpg" alt="Image"/></Link></figure>
							<figure className="image"><Link href="#"><img src="images/resource/gallery-thumb-3.jpg" alt="Image"/></Link></figure>
							<figure className="image"><Link href="#"><img src="images/resource/gallery-thumb-4.jpg" alt="Image"/></Link></figure>
							<figure className="image"><Link href="#"><img src="images/resource/gallery-thumb-5.jpg" alt="Image"/></Link></figure>
							<figure className="image"><Link href="#"><img src="images/resource/gallery-thumb-6.jpg" alt="Image"/></Link></figure>
							</div>
						</div>
						</div>
					</div>

					<div className="footer-column col-lg-3 col-md-6 col-sm-12">
						<div className="footer-widget newsletter-widget">
						<h4 className="widget-title">Newsletter</h4>
						<div className="text">Assine nossa newsletter para receber nossas últimas atualizações e notícias</div>
						<div className="newsletter-form">
							<div className="form-group">
							<input type="email" name="Email" placeholder="Email....." required/>
							<button type="submit" className="form-btn"><i className="fa fa-paper-plane"></i></button>
							</div>
						</div>
						</div>
					</div>
					</div>
				</div>
				</div>
				
				<div className="footer-bottom">
				<div className="auto-container">
					<div className="inner-container">
					<div className="copyright-text">Copyright © 2025 SRG. Todos os Direitos Reservados</div>
					<ul className="social-icon-one light">
  <li>
    <a href="https://www.facebook.com/profile.php?viewas=100000686899395&id=61558514338082&locale=pt_BR" target="_blank" rel="noopener noreferrer">
      <i className="fab fa-facebook"></i>
    </a>
  </li>
 
  <li>
  <a href="https://www.linkedin.com/in/srg-log%C3%ADstica-e-servi%C3%A7os-a71307364/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
    <i className="fab fa-linkedin-in"></i>
  </a>
</li>

  <li>
    <a href="https://www.instagram.com/srglogistica/" target="_blank" rel="noopener noreferrer">
      <i className="fab fa-instagram"></i>
    </a>
  </li>
  <li>
    <a href="https://wa.me/258847965281" target="_blank" rel="noopener noreferrer">
      <i className="fab fa-whatsapp"></i>
    </a>
  </li>
</ul>

					</div>
				</div>




				</div>
			</footer>

        </>
    )
}
