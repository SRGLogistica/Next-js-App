import Link from 'next/link';
import dynamic from 'next/dynamic'
const CounterUp = dynamic(() => import('@/components/elements/CounterUp'), {
    ssr: false,
})
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const swiperOptions = {
	modules: [Autoplay, Pagination, Navigation],
	slidesPerView: 1,
	spaceBetween: 30,
	autoplay: {
		delay: 2500,
		disableOnInteraction: false,
	},
	loop: true,
  pagination: true
	
};
const Testimonial1 = () => {
	return (
	<>
  <section className="testimonial-section p-0">
    <div className="row g-0">

      <div className="slider-column col-xl-5 col-lg-12 col-md-12 col-sm-12">
        <div className="inner-column">
			<Swiper {...swiperOptions} className="testimonial-carousel owl-carousel owl-theme default-dots">
				<SwiperSlide>
					<div className="testimonial-block">
						<div className="inner-box">
							<div className="icon-quote"></div>
							<div className="text">Isso se deve ao excelente serviço, preços competitivos e suporte ao cliente. É extremamente revigorante receber um toque tão pessoal.</div>
							<h5 className="name">Custodia Machel <span className="designation">- Co Founder</span></h5>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="testimonial-block">
						<div className="inner-box">
							<div className="icon-quote"></div>
							<div className="text">Nossa maior realização é a felicidade dos nossos clientes, pois cada sorriso satisfeito reforça o propósito do nosso trabalho e nos motiva a buscar sempre a excelência.</div>
							<h5 className="name">Sergio Machel <span className="designation">- CEO</span></h5>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="testimonial-block">
						<div className="inner-box">
							<div className="icon-quote"></div>
							<div className="text">Isso se deve ao excelente serviço, preços competitivos e suporte ao cliente. É extremamente revigorante receber um toque tão pessoal.</div>
							<h5 className="name">Custodia Machel <span className="designation">- Co Founder</span></h5>
						</div>
					</div>
				</SwiperSlide>
			</Swiper>
        </div>
      </div>

      <div className="contact-column col-xl-3 col-lg-6 col-md-12 col-sm-12">
        <div className="inner-column">
          <div className="icon-globe"></div>
          <a href="+21 083 657" className="phone">+21 083 657 </a>
          <div className="text">Somos otimistas e amamos trabalhar em equipe</div>
          <Link href="page-contact" className="theme-btn btn-style-one hover-light"><span className="btn-title">Contacte-nos</span></Link>
        </div>
      </div>

      <div className="funfact-column col-xl-4 col-lg-6 col-md-12 col-sm-12">
        <div className="inner-column">
          <div className="fact-counter">
            <div className="row">

              <div className="counter-block col-lg-6 col-md-6 col-sm-12 wow fadeInUp">
                <div className="inner-box">
                  <i className="icon flaticon-truck"></i>
                  <div className="content">
                    <div className="counter-one"><CounterUp count={37} time={3} /></div>
                    <div className="counter-text">Filiais em todo <br />o mundo</div>
                  </div>
                </div>
              </div>

              <div className="counter-block col-lg-6 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="300ms">
                <div className="inner-box">
                  <i className="icon flaticon-order"></i>
                  <div className="content">
                    <div className="counter-one"><CounterUp count={324} time={3} /></div>
                    <div className="counter-text">Encomendas entregues<br />por entregadores</div>
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
export default Testimonial1
