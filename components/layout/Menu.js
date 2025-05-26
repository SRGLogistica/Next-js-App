import Link from "next/link"

export default function Menu() {

    return (
        <>
            <ul className="navigation">
                <li className="current dropdown"><Link href="/">Home</Link>
                    <ul>
                        <li><Link href="/">Home page 01</Link></li>
                        
                    </ul>
                </li>
                
                <li className="dropdown"><Link href="/page-services">Services</Link>
                    <ul>
                        <li><Link href="/page-services">Services Grid</Link></li>
                        <li><Link href="/page-service-details">Service Details</Link></li>
                    </ul>
                </li>
                
               
                <li><Link href="/page-contact">Contactos</Link></li>
            </ul>
        </>
    )
}
