import Link from 'next/link';
import { useRouter } from 'next/router';

export default function NavbarPages() {
  const router = useRouter();

  const isActive = (path) => {
    if (path === '/') {
      return router.pathname === path;
    }
    return router.pathname.startsWith(path);
  };

  return (
    <>
      {/* Bootstrap CSS CDN */}
      <link 
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" 
        rel="stylesheet" 
      />
      
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow">
        <div className="container">
          <Link href="/" className="navbar-brand fw-bold">
            Mi Sitio Web
          </Link>
          
          <button 
            className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link href="/" className={`nav-link ${isActive('/') ? 'active fw-bold' : ''}`}>
                  <i className="bi bi-house-door me-1"></i>
                  Inicio
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/about" className={`nav-link ${isActive('/about') ? 'active fw-bold' : ''}`}>
                  <i className="bi bi-info-circle me-1"></i>
                  Acerca de
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/contact" className={`nav-link ${isActive('/contact') ? 'active fw-bold' : ''}`}>
                  <i className="bi bi-envelope me-1"></i>
                  Contacto
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/blog/ejemplo-post" className={`nav-link ${isActive('/blog') ? 'active fw-bold' : ''}`}>
                  <i className="bi bi-journal-text me-1"></i>
                  Blog
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      
      {/* Bootstrap Icons CDN */}
      <link 
        rel="stylesheet" 
        href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.0/font/bootstrap-icons.css"
      />
      
      {/* Bootstrap JS CDN */}
      <script 
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"
      ></script>
    </>
  );
}