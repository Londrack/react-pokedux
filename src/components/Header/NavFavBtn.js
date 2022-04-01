import { Link } from "react-router-dom";
import { ReactComponent as PokeBallIcon} from '../../assets/svgs/pokeball_fill.svg';

export function NavFavBtn() {
    return (
        <Link to="/favorites" className="flex items-center">
            <PokeBallIcon width={35} />
            <h3 className=" pl-1">My Favorites</h3>
        </Link>
    )
}
