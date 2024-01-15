
import { IoMdMenu, IoIosClose } from "react-icons/io";
import logo from '../../public/marvel.svg'


const Navbar = () => {
  return (
    <nav>
        <div>
            <img src={logo} alt="logo" />
            <IoMdMenu/>
            <ul className="hidden md:flex">
                <li>Comics</li>
                <li>Characters</li>
                <li>Movies</li>
                <li>Tv Shows</li>
            </ul>
            <div className="">
                <IoIosClose/>
                <ul>
                    <li>Comics</li>
                    <li>Characters</li>
                    <li>Movies</li>
                    <li>Tv Shows</li>
                </ul>
            </div>
        </div>


    </nav>
  )
}

export default Navbar