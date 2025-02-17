import {Link} from 'react-router-dom';
import Logo from '../assets/cryptoforte_logo.png';

const Navbar = () => {
  return (
    <header className="py-4 shadow-md bg-white">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
            <div className="flex-1 md:flex md:items-center md:gap-12">
                <Link>
                    <img src={Logo} className='h-32 mt-4' alt="" />
                </Link>
            </div>

            <div className="md:flex md:items-center md:gap-12">
                <nav aria-label="Global" className="hidden md:block">
                <ul className="flex items-center gap-6 text-sm">
                    <li>
                        <Link to='/' className="text-secondary hover:text-red-500" > Home </Link>
                    </li>

                    <li>
                        <Link to='/events' className="text-secondary hover:text-red-500"> Events </Link>
                    </li>

                    <li>
                        <Link to='/about-us' className="text-secondary hover:text-red-500" > About Us </Link>
                    </li>

                    <li>
                        <Link to='/contents' className="text-secondary hover:text-red-500" > Contents </Link>
                    </li>
                </ul>
                </nav>

                <div className="flex items-center gap-4">
                <div className="sm:flex sm:gap-4">
                    <a
                    className="rounded-md bg-secondary px-5 py-2.5 text-sm font-medium text-white shadow"
                    href="#"
                    >
                    Join Community
                    </a>
                </div>

                <div className="block md:hidden">
                    <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        
                    >
                        <path  d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                    </button>
                </div>
                </div>
            </div>
            </div>
        </div>
    </header>
  )
}

export default Navbar
