import { Link } from "react-router-dom";
import { ReactComponent as Logo} from "../../assets/svgs/logo.svg";
import { NAME_SITE } from "../../api/config";

export function PokeduxLogo() {
    return (
        <Link to={`/`} className="flex items-center">
            <Logo alt="Pokedux" width={50} />
            <h1 className=" font-pixellari text-5xl pl-2
            text-poke-purple-200 title-shadow">Pokedux</h1>
        </Link>
    )
}
