import type { Metadata } from 'next';
import './globals.css';
import { Geist, Geist_Mono } from 'next/font/google';
import NavBar from '../components/NavBar';

const geitSans = Geist({
    subsets: ["latin"],
    variable: "--font-geist-sans",
});

const geitMono = Geist_Mono({
    subsets: ["latin"],
    variable: "--font-geist-mono",
});

export const metadata: Metadata = {
    title: 'Create Next.js App',
    description: 'Aplicación de ejemplo con Next.js y Tailwind CSS',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="es">
            <body className={`${geitSans.variable} ${geitMono.variable} antialiased`}>
                <NavBar />
                {children}
            </body>
        </html>
    );
}