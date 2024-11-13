import { FaBolt } from 'react-icons/fa';

const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 w-full bg-gray-900 text-white shadow-md">
            <div className="container mx-auto px-4 py-2 flex justify-between items-center">
                <div className="text-xl font-bold">
                    <span className="inline-flex items-center"> <FaBolt className='mr-2'/> 3E-ai</span>
                </div>
                <div className="space-x-4">
                    <a href="#" className="hover:text-gray-400">Home</a>
                    <a href="#" className="hover:text-gray-400">About</a>
                    <a href="#" className="hover:text-gray-400">Services</a>
                    <a href="#" className="hover:text-gray-400">Contact</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;