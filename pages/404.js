import Link from 'next/link';
import NavbarPages from '../components/NavbarPages';

export default function Custom404() {
  return (
    <div>
      <NavbarPages />
      <div className="container mx-auto px-4 py-16 text-center my-5">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-9xl font-bold text-gray-300 mb-4">404</h1>
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Página no encontrada
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Lo sentimos, la página que estás buscando no existe o ha sido movida.
          </p>
          <div className="mt-12 text-gray-500">
            <p>Si crees que esto es un error, por favor contáctanos.</p>
          </div>
        </div>
      </div>
    </div>
  );
}