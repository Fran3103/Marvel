import { CiSearch } from "react-icons/ci";

const Search = () => {

  return (
    <div className="w-screen pt-16 md:pt-24" >
        <div className="flex items-center m-auto max-w-[1240px]">
            <CiSearch className="size-5"/>
            <form action="#">
                <input type="search" name="buscador" id="" className="bg-gray rounded ml-2 p-1  " />
            </form>
        </div>
    </div>
  )
}

export default Search