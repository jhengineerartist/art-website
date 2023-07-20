import Link from "next/link"
import { FaTwitter, FaGithub } from 'react-icons/fa'

export default function Navbar() {
    return (
        <nav className='bg-enchilada-600 p-4 sticky top-0 drop-shadow-xl z-10'>
            <div className="mx-auto flex justify-between flex-col">
                <div className="flex flex-row justify-center sm:justify-evenly align-middle gap-4 text-enchilada-100 text-4xl transition-all duration-500">
                    <Link href='/'
                        className='text-enchilada-100 no-underline hover:text-white'>
                        Jose Hirshman
                    </Link>
                    <div className="flex gap-2">
                        <Link className="text-enchilada-100 hover:text-white" href="https://github.com/jhengineerartist">
                            <FaGithub />
                        </Link>
                        <Link className="text-enchilada-100 hover:text-white" href="https://twitter.com/JH_EngArt">
                            <FaTwitter />
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}
