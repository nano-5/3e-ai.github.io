'use client';

import { FaBolt } from 'react-icons/fa';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

type ActivePage = 'home' | 'about' | 'services' | 'contact';

const Navbar = () => {
    const pathname = usePathname();
    const activePage: ActivePage = (() => {
        switch (pathname) {
            case '/': return 'home';
            case '/about': return 'about';
            case '/services': return 'services';
            case '/contact': return 'contact';
            default: return 'home';
        }
    })();

    return (
        <nav className="fixed top-0 left-0 w-full bg-gray-900 text-white shadow-md">
            <div className="container mx-auto px-4 py-2 flex justify-between items-center">
                <div className="text-xl font-bold">
                    <span className="inline-flex items-center"> <FaBolt className='mr-2'/> 3E-ai</span>
                </div>
                <div className="space-x-4">
                    <Link 
                        href="/" 
                        className={`hover:text-gray-400 ${activePage === 'home' ? 'text-blue-400' : ''}`}
                    >
                        Home
                    </Link>
                    <Link 
                        href="/about" 
                        className={`hover:text-gray-400 ${activePage === 'about' ? 'text-blue-400' : ''}`}
                    >
                        About
                    </Link>
                    <Link 
                        href="/services" 
                        className={`hover:text-gray-400 ${activePage === 'services' ? 'text-blue-400' : ''}`}
                    >
                        Services
                    </Link>
                    <Link 
                        href="/contact" 
                        className={`hover:text-gray-400 ${activePage === 'contact' ? 'text-blue-400' : ''}`}
                    >
                        Contact
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;