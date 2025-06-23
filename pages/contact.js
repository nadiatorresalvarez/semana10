import Head from 'next/head';
import NavbarPages from '../components/NavbarPages';

export default function Contact() {
  return (
    <div>
      <Head>
        <title>Contacto | Mi Sitio Web</title>
        <meta name="description" content="Contáctanos para más información sobre nuestros servicios y productos." />
        <meta property="og:title" content="Contacto | Mi Sitio Web" />
        <meta property="og:description" content="Contáctanos para más información sobre nuestros servicios y productos." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nadiator.vercel.app/" />
        <meta name="google-site-verification" content="tlzs_LfJf14gbOSa1vhGjBV6sqUOrxBLf08V7zUEouw" />
      </Head>
      <NavbarPages />
      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <h1 className="display-4 text-center mb-5 text-primary">Contáctanos</h1>
            <div className="row g-4">
              <div className="col-md-12">
                <div className="card h-100 shadow-sm">
                  <div className="card-body">
                    <h2 className="card-title h4 mb-4 text-primary">
                      <i className="bi bi-info-circle me-2"></i>
                      Información de Contacto
                    </h2>
                    <div className="d-flex align-items-center mb-3">
                      <div className="bg-primary text-white rounded-circle p-2 me-3">
                        <i className="bi bi-envelope-fill"></i>
                      </div>
                      <div>
                        <strong>Email:</strong><br />
                        <a href="mailto:contacto@ejemplo.com" className="text-decoration-none">
                          contacto@ejemplo.com
                        </a>
                      </div>
                    </div>
                    
                    <div className="d-flex align-items-center mb-3">
                      <div className="bg-primary text-white rounded-circle p-2 me-3">
                        <i className="bi bi-telephone-fill"></i>
                      </div>
                      <div>
                        <strong>Teléfono:</strong><br />
                        <a href="tel:+51986963254" className="text-decoration-none">
                          +51 986963254
                        </a>
                      </div>
                    </div>
                    
                    <div className="d-flex align-items-center">
                      <div className="bg-primary text-white rounded-circle p-2 me-3">
                        <i className="bi bi-geo-alt-fill"></i>
                      </div>
                      <div>
                        <strong>Dirección:</strong><br />
                        123 Calle Principal, Ciudad
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}