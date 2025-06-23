import Link from "next/link";
export default function NavBar() {
    return (
        <nav className="bg-gray-100 p-4 space-x-4">
            <Link href="/">Inicio</Link>
            <Link href="/about">Acerca de</Link>
            <Link href="/products">Productos</Link>
        </nav>
    );
}