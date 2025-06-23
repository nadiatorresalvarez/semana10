import Head from 'next/head';
import NavbarPages from '../components/NavbarPages';

export default function About() {
  return (
    <div>
      <Head>
        <title>Acerca de Nosotros | Mi Sitio Web</title>
        <meta name="description" content="Conoce más sobre nuestro equipo y cómo desarrollamos aplicaciones web modernas con Next.js, React y Bootstrap." />
        <meta property="og:title" content="Acerca de Nosotros | Mi Sitio Web" />
        <meta property="og:description" content="Conoce más sobre nuestro equipo y cómo desarrollamos aplicaciones web modernas con Next.js, React y Bootstrap." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nadiator.vercel.app/" />
        <meta name="google-site-verification" content="tlzs_LfJf14gbOSa1vhGjBV6sqUOrxBLf08V7zUEouw" />
      </Head>
      <NavbarPages />
      
      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <h1 className="display-4 text-center mb-5 text-primary">Acerca de Nosotros</h1>
            
            <div className="card shadow-sm mb-4">
              <div className="card-body p-4">
                <p className="lead text-center mb-4">
                  Somos una empresa dedicada al desarrollo de aplicaciones web modernas.
                </p>
                <p className="text-muted mb-0">
                  Utilizamos las últimas tecnologías como Next.js, React y Bootstrap
                  para crear experiencias web increíbles que satisfagan las necesidades
                  de nuestros clientes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}