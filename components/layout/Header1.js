import Link from "next/link"
import Menu from "./Menu"
import MobileMenu from "./MobileMenu"

export default function Header1({ scroll, isMobileMenu, handleMobileMenu, isSearch, handleSearch }) {
    return (
        <>
            <header className={`main-header header-style-two ${isSearch ? "mobile-search-active" : ""}`}>
                {/* Topo do Cabeçalho */}
                <div className="header-top">
                    <div className="inner-container">
                        <div className="top-left">
                            <ul className="list-style-one light">
                                <li><i className="fa fa-map-marker-alt"></i> Zimpeto, Maputo, Moçambique</li>
                                <li><i className="fa fa-clock"></i> Seg - Sáb: 8h - 17h</li>
                                <li><i className="fa fa-phone"></i> <Link href="tel:+258841234567">+258 (84) 123 4567</Link></li>
                            </ul>
                        </div>
                        
                    </div>
                </div>

                {/* Logo e Navegação Principal */}
                <div className="header-lower">
                    <div className="main-box">
                        <div className="logo-box">
                            <div className="logo">
                                <Link href="/">
                                    <img src="/images/logo.png" width="200" height="auto" alt="Lozics" title="Lozics" />
                                </Link>
                            </div>
                        </div>
                        <div className="nav-outer">
                            <nav className="nav main-menu">
                                <Menu />
                            </nav>
                        </div>

                        <div className="outer-box">
                            <button className="ui-btn search-btn" onClick={handleSearch}>
                                <span className="icon lnr lnr-icon-search"></span>
                            </button>

                            <button className="ui-btn cart-btn">
                                <span className="icon lnr lnr-icon-shopping-cart"></span>
                            </button>

                            <div className="btn-box">
                                <Link href="/page-contact" className="theme-btn btn-style-one orange-bg">
                                    <span className="btn-title">Solicitar Orçamento</span>
                                </Link>
                            </div>

                            <div className="mobile-nav-toggler" onClick={handleMobileMenu}>
                                <span className="icon lnr-icon-bars"></span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu  */}
                <div className="mobile-menu">
                    <div className="menu-backdrop" onClick={handleMobileMenu} />
                    <nav className="menu-box">
                        <div className="upper-box">
                            <div className="nav-logo">
                                <Link href="/">
                                    <img src="/images/logo.png" height="1000px" alt="Lozics" />
                                </Link>
                            </div>
                            <div className="close-btn" onClick={handleMobileMenu}>
                                <i className="icon fa fa-times" />
                            </div>
                        </div>
                        <MobileMenu />
                        <ul className="contact-list-one">
                            <li>
                                <div className="contact-info-box">
                                    <i className="icon lnr-icon-phone-handset" />
                                    <span className="title">Ligar Agora</span>
                                    <Link href="tel:+258841234567">+258 (84) 123 4567</Link>
                                </div>
                            </li>
                            <li>
                                <div className="contact-info-box">
                                    <span className="icon lnr-icon-envelope1" />
                                    <span className="title">Enviar Email</span>
                                    <Link href="mailto:suporte@empresa.co.mz">suporte@empresa.co.mz</Link>
                                </div>
                            </li>
                            <li>
                                <div className="contact-info-box">
                                    <span className="icon lnr-icon-clock" />
                                    <span className="title">Horário</span>
                                    Seg - Sáb: 8h - 17h, Domingo - FECHADO
                                </div>
                            </li>
                        </ul>
                        <ul className="social-links">
                            <li><Link href="/#"><i className="fab fa-twitter" /></Link></li>
                            <li><Link href="/#"><i className="fab fa-facebook-f" /></Link></li>
                            <li><Link href="/#"><i className="fab fa-pinterest" /></Link></li>
                            <li><Link href="/#"><i className="fab fa-instagram" /></Link></li>
                        </ul>
                    </nav>
                </div>

                {/* Pesquisa no Header */}
                <div className="search-popup">
                    <span className="search-back-drop" onClick={handleSearch} />
                    <button className="close-search" onClick={handleSearch}>
                        <span className="fa fa-times" />
                    </button>
                    <div className="search-inner">
                        <form method="post" action="">
                            <div className="form-group">
                                <input type="search" name="search-field" placeholder="Pesquisar..." required />
                                <button type="submit"><i className="fa fa-search" /></button>
                            </div>
                        </form>
                    </div>
                </div>

                {/* Sticky Header  */}
                <div className={`sticky-header ${scroll ? "fixed-header animated slideInDown" : ""}`}>
                    <div className="auto-container">
                        <div className="inner-container">
                            {/* Logo Sticky */}
                            <div className="logo">
                                <Link href="/">
                                    <img src="/images/logo.png" alt="Lozics" />
                                </Link>
                            </div>
                            {/* Menu Sticky */}
                            <div className="nav-outer">
                                <nav className="main-menu">
                                    <div className="navbar-collapse show collapse clearfix">
                                        <Menu />
                                    </div>
                                </nav>
                                <div className="mobile-nav-toggler" onClick={handleMobileMenu}>
                                    <span className="icon lnr-icon-bars" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}
