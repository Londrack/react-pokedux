import { Link } from "react-router-dom";
import { ReactComponent as PokeBallIcon} from '../../assets/svgs/pokeball_fill.svg';
import { NAME_SITE } from "../../api/config";

export function NavFavBtn() {
    return (
        <Link to={`${NAME_SITE}/favorites`} className="flex items-center">
            <PokeBallIcon width={35} />
            <h3 className=" pl-1">My Favorites</h3>
        </Link>
    )
}
