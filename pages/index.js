import Head from 'next/head';
import NavbarPages from '../components/NavbarPages';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Inicio | Mi Sitio Web</title>
        <meta name="description" content="Bienvenido a la página de inicio de Mi Sitio Web. Descubre nuestros servicios y productos." />
        <meta property="og:title" content="Inicio | Mi Sitio Web" />
        <meta property="og:description" content="Bienvenido a la página de inicio de Mi Sitio Web. Descubre nuestros servicios y productos." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nadiator.vercel.app/" />
        <meta name="google-site-verification" content="tlzs_LfJf14gbOSa1vhGjBV6sqUOrxBLf08V7zUEouw" />
      </Head>
      <NavbarPages />
      <div className="container py-5">
        <div className="row">
          <div className="col-12 text-center mb-5">
            <h2 className="display-5 fw-bold">Página de Inicio</h2>
          </div>
        </div>
        
        <div className="row g-4">
          <div className="col-md-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body text-center">
                <i className="bi bi-lightning-charge display-4 text-primary mb-3"></i>
                <h5 className="card-title">Rápido y Eficiente</h5>
                <p className="card-text">
                  Construido con Next.js para máximo rendimiento y experiencia de usuario optimizada.
                </p>
              </div>
            </div>
          </div>
          
          <div className="col-md-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body text-center">
                <i className="bi bi-phone display-4 text-success mb-3"></i>
                <h5 className="card-title">Responsive</h5>
                <p className="card-text">
                  Diseño completamente responsive que se adapta a cualquier dispositivo y pantalla.
                </p>
              </div>
            </div>
          </div>
          
          <div className="col-md-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body text-center">
                <i className="bi bi-shield-check display-4 text-warning mb-3"></i>
                <h5 className="card-title">Seguro</h5>
                <p className="card-text">
                  Implementamos las mejores prácticas de seguridad para proteger tu información.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}