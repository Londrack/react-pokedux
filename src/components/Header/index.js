
import { NavFavBtn } from "./NavFavBtn";
import { PokeduxLogo } from "./PokeduxLogo";
import { Search } from "./Search";

export function Header() {
    return (
        <header className="w-full flex justify-between items-center flex-col
        sm:flex-row sm:justify-between mt-4 pb-8">
              <PokeduxLogo />
              {/* <Search /> */}
              <NavFavBtn />
        </header>
    )
}
