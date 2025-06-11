import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const swiperOptions = {
	modules: [Autoplay, Pagination, Navigation],
	slidesPerView: 4,
	spaceBetween: 30,
	autoplay: {
		delay: 2500,
		disableOnInteraction: false,
	},
	navigation: true,
	loop: true,
	breakpoints:{
		320: {
			slidesPerView: 1,
			// spaceBetween: 30,
		},
		575: {
			slidesPerView: 1,
			// spaceBetween: 30,
		},
		767: {
			slidesPerView: 2,
			// spaceBetween: 30,
		},
		991: {
			slidesPerView: 2,
			// spaceBetween: 30,
		},
		1199: {
			slidesPerView: 4,
			// spaceBetween: 30,
		},
		1350: {
			slidesPerView: 4,
			// spaceBetween: 30,
		},
	}
};
const Project1 = () => {
	return (
	<>
		<section className="project-section">
			<div className="icon-plane-2 bounce-y"></div>
			<div className="auto-container">
			<div className="sec-title mb-0">
				<span className="sub-title">Vitrine de trabalho</span>
				<h2 className="scrub-each-word text-split">Em Destaque</h2>
			</div>
			<div className="carousel-outer">
					<Swiper {...swiperOptions} className="project-carousel owl-carousel owl-theme default-navs">
						<SwiperSlide>
							<div className="project-block">
								<div className="inner-box overlay-anim-two">
								<figure className="image"><img src="images/resource/project1-1.jpg" alt="Image"/></figure>
								<div className="content">
									<span className="cat">Transporte</span>
									<h5 className="title">Obtenha Os Melhores <br />Transportes</h5>
									<Link href="page-project-details" className="read-more"><i className="fa fa-long-arrow-right"></i></Link>
								</div>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="project-block">
								<div className="inner-box overlay-anim-two">
								<figure className="image"><img src="images/resource/project1-2.jpg" alt="Image"/></figure>
								<div className="content">
									<span className="cat">Logística </span>
									<h5 className="title">Logística <br />De Qualidade</h5>
									<Link href="page-project-details" className="read-more"><i className="fa fa-long-arrow-right"></i></Link>
								</div>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="project-block">
								<div className="inner-box overlay-anim-two">
								<figure className="image"><img src="images/resource/project1-3.jpg" alt="Image"/></figure>
								<div className="content">
									<span className="cat">Procurement</span>
									<h5 className="title">Oferecemos um  <br />Procurement Inteligente</h5>
									<Link href="page-project-details" className="read-more"><i className="fa fa-long-arrow-right"></i></Link>
								</div>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="project-block">
								<div className="inner-box overlay-anim-two">
								<figure className="image"><img src="images/resource/project1-4.jpg" alt="Image"/></figure>
								<div className="content">
									<span className="cat">Suporte</span>
									<h5 className="title">Acompanhamos durante <br />Todo Processo</h5>
									<Link href="page-project-details" className="read-more"><i className="fa fa-long-arrow-right"></i></Link>
								</div>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="project-block">
								<div className="inner-box overlay-anim-two">
								<figure className="image"><img src="images/resource/project1-1.jpg" alt="Image"/></figure>
								<div className="content">
									<span className="cat">Entrega</span>
									<h5 className="title">Entregamos na <br />Sua Residencia</h5>
									<Link href="page-project-details" className="read-more"><i className="fa fa-long-arrow-right"></i></Link>
								</div>
								</div>
							</div>
						</SwiperSlide>
					</Swiper>
			</div>
			</div>
		</section>
	</>
	);
};
export default Project1