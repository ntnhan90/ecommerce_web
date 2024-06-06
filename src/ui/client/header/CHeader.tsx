import Link from "next/link";

export default function CHeader(){
    return(
        <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top p-0">
            <Link href="/" className="navbar-brand d-flex align-items-center px-4 px-lg-5">
                <h2 className="m-0 text-primary-color">WooDY</h2>
            </Link>
            <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <div className="navbar-nav ms-auto p-4 p-lg-0">
                    <Link href="#" className="nav-item nav-link">Home</Link>
                    <Link href="#" className="nav-item nav-link">About</Link>
                    <Link href="#" className="nav-item nav-link">Service</Link>
                    <Link href="#" className="nav-item nav-link">Project</Link>
                    <div className="nav-item dropdown">
                        <Link href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</Link>
                        <div className="dropdown-menu fade-up m-0">
                            <Link href="#" className="dropdown-item">Feature</Link>
                            <Link href="#" className="dropdown-item">Free Quote</Link>
                            <Link href="#" className="dropdown-item">Our Team</Link>
                            <Link href="#" className="dropdown-item">Testimonial</Link>
                            <Link href="#" className="dropdown-item">404 Page</Link>
                        </div>
                    </div>
                    <Link href="/contact" className="nav-item nav-link">Contact</Link>
                </div>
            </div>
        </nav>
    )
}