import { useRouter } from 'next/router';
import NavbarPages from '../../components/NavbarPages';
import Link from 'next/link';
import Head from 'next/head';

export default function BlogPost() {
  const router = useRouter();
  const { id } = router.query;

  // Post simulados
  const posts = {
    '1': {
      title: 'Introducción a Next.js',
      content: 'Next.js es un framework de React que permite crear aplicaciones web modernas con renderizado del lado del servidor, generación de sitios estáticos y muchas otras características avanzadas que facilitan el desarrollo web.',
      date: '2024-01-15',
      author: 'Equipo de Desarrollo'
    },
    '2': {
      title: 'Rutas Dinámicas en Next.js',
      content: 'Las rutas dinámicas nos permiten crear páginas con parámetros variables, lo que es especialmente útil para blogs, tiendas en línea y cualquier aplicación que necesite generar contenido dinámico basado en la URL.',
      date: '2024-01-20',
      author: 'Equipo de Desarrollo'
    },
    'ejemplo-post': {
      title: 'Post de Ejemplo',
      content: 'Este es un post de ejemplo para demostrar las rutas dinámicas y cómo Bootstrap puede mejorar significativamente la presentación de nuestro contenido.',
      date: '2024-01-25',
      author: 'Equipo de Desarrollo'
    }
  };

  const post = posts[id];

  return (
    <div>
      <Head>
        <title>{post ? `${post.title} | Blog` : 'Post no encontrado | Blog'}</title>
        <meta name="description" content={post ? post.content.substring(0, 150) : 'Post no encontrado.'} />
        <meta property="og:title" content={post ? post.title : 'Post no encontrado'} />
        <meta property="og:description" content={post ? post.content.substring(0, 150) : 'Post no encontrado.'} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://naditor.com/blog/${id}`} />
      </Head>
      
      <NavbarPages />
      
      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            {/* Información de la ruta */}
            <div className="alert alert-info shadow-sm mb-4" role="alert">
              <h5 className="alert-heading">
                <i className="bi bi-info-circle me-2"></i>
                Información de la ruta
              </h5>
              <p className="mb-0">
                Mostrando post con ID: <span className="badge bg-primary">{id}</span>
              </p>
            </div>

            {post ? (
              <article className="card shadow-sm">
                <div className="card-header bg-primary text-white">
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="badge bg-light text-primary">
                      <i className="bi bi-calendar3 me-1"></i>
                      {post.date}
                    </span>
                    <span className="badge bg-light text-primary">
                      <i className="bi bi-person me-1"></i>
                      {post.author}
                    </span>
                  </div>
                </div>
                <div className="card-body p-4">
                  <h1 className="card-title display-5 mb-4 text-primary">{post.title}</h1>
                  <div className="lead">
                    <p className="lh-lg">{post.content}</p>
                  </div>
                </div>
              </article>
            ) : (
              <div className="alert alert-warning shadow-sm" role="alert">
                <h4 className="alert-heading">
                  <i className="bi bi-exclamation-triangle me-2"></i>
                  Post no encontrado
                </h4>
                <p>
                  No se encontró ningún post con el ID: <span className="badge bg-warning text-dark">{id}</span>
                </p>
              </div>
            )}

            <div className="card mt-4 shadow-sm">
              <div className="card-header">
                <h5 className="card-title mb-0">
                  <i className="bi bi-link-45deg me-2"></i>
                  Ejemplos de rutas
                </h5>
              </div>
              <div className="card-body">
                <div className="list-group list-group-flush">
                  <Link href="/blog/1" className="list-group-item list-group-item-action">
                    <div className="d-flex w-100 justify-content-between">
                      <h6 className="mb-1">/blog/1</h6>
                      <small className="text-muted">Post válido</small>
                    </div>
                    <p className="mb-1">Post sobre Next.js</p>
                  </Link>
                  <Link href="/blog/2" className="list-group-item list-group-item-action">
                    <div className="d-flex w-100 justify-content-between">
                      <h6 className="mb-1">/blog/2</h6>
                      <small className="text-muted">Post válido</small>
                    </div>
                    <p className="mb-1">Post sobre rutas dinámicas</p>
                  </Link>
                  <Link href="/blog/123" className="list-group-item list-group-item-action">
                    <div className="d-flex w-100 justify-content-between">
                      <h6 className="mb-1">/blog/123</h6>
                      <small className="text-muted">Post inexistente</small>
                    </div>
                    <p className="mb-1">Ejemplo de post que no existe</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}