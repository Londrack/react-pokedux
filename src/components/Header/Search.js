import pokedex from "../../assets/svgs/pokedex.svg";

export function Search() {
    return (
        <section className="flex justify-center items-center mt-2 mb-4 sm:-mt-4 sm:mb-0">
            <div className="w-10/12">
                <img src={pokedex} alt="Pokedex" width={35} className="absolute" />
                <input type="text" placeholder="Search a pokemon"
                    className="border-[1px] border-poke-grey
                    rounded-2xl w-full pl-10 py-1 ml-2 mt-3
                    outline-poke-blue-200" />
            </div>
        </section>
    )
}
