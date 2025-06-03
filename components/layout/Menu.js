import Link from "next/link"

export default function Menu() {

    return (
        <>
            <ul className="navigation">
                {/*removi o dropdown da pagina inicio 01 e 02 */}
                <li className=""><Link href="/">Início</Link>
                    <ul>
                        <li><Link href="/">Início 01</Link></li>
                        <li><Link href="/index-2">Início 02</Link></li>
                    </ul>
                </li>
                 <li className="dropdown"><Link href="/page-about">páginas</Link>
                    <ul>
                        <li><Link href="/page-about">Sobre</Link></li>
                        <li className="dropdown"><Link href="/page-team">Equipe</Link>
                            <ul>
                                <li><Link href="/page-team">Grelha de Equipe</Link></li>
                                <li><Link href="/page-team-details">Detalhes da Equipe</Link></li>
                            </ul>
                        </li>
                        
                        <li><Link href="/page-faq">FAQ</Link></li>
                        <li className=""><Link href=""></Link>
                            <ul>
                                <li><Link href=""></Link></li>
                                <li><Link href=""></Link></li>
                                <li><Link href=""></Link></li>
                                <li><Link href=""></Link></li>
                                <li><Link href=""></Link></li>
                            </ul>
                        </li>
                      
                          </ul>
                </li>
                
                <li className="dropdown"><Link href="/page-services">Serviços</Link>
                    <ul>
                        <li><Link href="/page-services">Grade de Serviços</Link></li>
                        <li><Link href="/page-service-details">Detalhes do serviço</Link></li>
                    </ul>
                </li>
                
               
                <li><Link href="/page-contact">Contactos</Link></li>
            </ul>
        </>
    )
}
