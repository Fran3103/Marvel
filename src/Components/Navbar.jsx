
import { IoMdMenu, IoIosClose } from "react-icons/io";
import logo from '../../public/marvel.svg'
import { useState } from "react";
import { Link } from "react-router-dom";


const Navbar = () => {

    const [activo, setActivo] = useState(false)


    const handleClick = () => {
        setActivo(!activo)
    }
  return (
    <nav className="p-2 h-20 w-screen fixed    z-50 ">
        <div className="m-auto max-w-[1240px] ">
           <Link to='/'> <img src={logo} alt="logo" className="hidden w-20 md:w-40 md:block"/></Link>
            <div className="flex justify-between items-center w-full md:justify-center md:items-center z-50">
                <Link to='/'><img src={logo} alt="logo" className="w-20 md:w-40 md:hidden"/></Link>
                <IoMdMenu onClick={handleClick} className="md:hidden size-10"/>
                <ul className="hidden md:flex gap-12  text-2xl">
                    <Link to='/'><li className="hover:text-gray cursor-pointer">Home</li></Link>
                    <Link to='/comics'><li className="hover:text-gray cursor-pointer">Comics</li></Link>
                    <Link to='characters'><li className="hover:text-gray cursor-pointer">Characters</li></Link>
                    <Link to='movies'><li className="hover:text-gray cursor-pointer">Movies</li></Link>
                    <Link to='tvshows'><li className="hover:text-gray cursor-pointer">Tv Shows</li></Link>
                </ul>
            </div> 
            <div className={activo ? "bg-transparent w-full  p-5 absolute md:hidden top-28 right-0 transition-all ease-in-out duration-[800ms] z-[-20]" : "bg-transparent w-full top-[-400px] p-5 right-0 absolute md:hidden   transition-all ease-in-out duration-[800ms] z-0"}>
                    <IoIosClose className="size-8 absolute top-2 right-3 cursor-pointer" onClick={handleClick}/>
                    <ul className="flex flex-col justify-center items-center gap-8 pt-5 mb-2">
                    <Link onClick={handleClick} to='/'><li className="hover:text-gray cursor-pointer">Home</li></Link>
                    <Link onClick={handleClick} to='/comics'><li className="hover:text-gray cursor-pointer">Comics</li></Link>
                    <Link onClick={handleClick} to='characters'><li className="hover:text-gray cursor-pointer">Characters</li></Link>
                    <Link onClick={handleClick} to='movies'><li className="hover:text-gray cursor-pointer">Movies</li></Link>
                    <Link onClick={handleClick} to='tvshows'><li className="hover:text-gray cursor-pointer">Tv Shows</li></Link>
                    </ul>
            </div>
           
        </div>
        


    </nav>
  )
}

export default Navbar