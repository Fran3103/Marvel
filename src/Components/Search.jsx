import { CiSearch } from "react-icons/ci";

const Search = () => {

  return (
    <div className="flex items-center pt-16 pl-2">
        <CiSearch className="size-5"/>
        <form action="#">
            <input type="search" name="buscador" id="" className="bg-gray rounded ml-2 p-1 hidden  " />
        </form>
    </div>
  )
}

export default Search