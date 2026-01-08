import { LuSearch } from "react-icons/lu";

const Search = () => {
    return (
        <div>
            <div className="bg-[rgba(0,0,0,0.5)] w-fit  top-[5%] left-[35%]">
                <div className="flex items-center gap-2 border border-white p-2 rounded-md">
                    <input type="text" className="w-[300px] h-8 outline-none text-white" placeholder="Search Person ..." />
                    <LuSearch className="text-xl text-white cursor-pointer" />
                </div>
            </div>

            <div className="absolute bg-white w-full h-5">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla mollitia itaque velit, tempore quidem eaque rem distinctio commodi quaerat id.
            </div>
        </div>
    )
}

export default Search