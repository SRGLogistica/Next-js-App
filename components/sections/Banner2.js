import Link from "next/link"
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
const swiperOptions = {
        modules: [Autoplay, Pagination, Navigation],
        slidesPerView: 1,
        autoplay: {
            delay:8500,
            disableOnInteraction: false,
        },
        loop: true,
        navigation: true
    };
const Banner2 = () => {
    return (
        <>
        <section className="banner-section">
            <div className="icon-car"></div>
                <Swiper {...swiperOptions} className="banner-carousel owl-carousel owl-theme">
                    <SwiperSlide className="slide-item">
                        <div className="bg bg-image" style={{ backgroundImage: 'url(/images/banner/1.jpg)' }}></div>
                        <div className="bg-shape"></div>
                        <div className="auto-container">
                            <div className="content-box">
                                <h1 className="title">Somos provedores  <br />globais de logística</h1>
                                <div className="text">Sistema é um termo usado para se referir a uma coleção organizada de símbolos e processos <br />que podem ser usados ​​para operar em tais símbolos.</div>
                                <div className="btn-box">
                                <Link href="page-about" className="theme-btn btn-style-one"><span className="btn-title">Descubra mais
                                </span></Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className="slide-item">
                        <div className="bg bg-image" style={{ backgroundImage: 'url(/images/banner/1.jpg)' }}></div>
                        <div className="bg-shape"></div>
                        <div className="auto-container">
                            <div className="content-box">
                                <h1 className="title">Somos provedores  <br />globais de logística</h1>
                                <div className="text">Sistema é um termo usado para se referir a uma coleção organizada de símbolos e processos  <br />que podem ser usados ​​para operar em tais símbolos.</div>
                                <div className="btn-box">
                                <Link href="page-about" className="theme-btn btn-style-one"><span className="btn-title">Descubra mais</span></Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
        </section>
        </>
    );
};
export default Banner2