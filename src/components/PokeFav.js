import { ReactComponent as EmptySvg} from '../assets/svgs/pokeball_empty.svg';
import { ReactComponent as FillSvg} from '../assets/svgs/pokeball_fill.svg';
import { useDispatch } from 'react-redux';
import { setFavoriteStorage } from '../actions';

export const PokeFav = ({fav, pokemonId, position = 'top'}) =>{
    const dispatch = useDispatch();

    const handleFavorite = () => {
        dispatch(setFavoriteStorage({pokemonId}))
    }

    return <button onClick={handleFavorite}
            className={`absolute ${position === 'top' ? 'top-2' : 'bottom-2'} right-2 z-10 w-6 h-6 block hover:rotate-45
             transition-all`}
            title="Add to favorites" >
                {!fav
                    ? <EmptySvg />
                    : <FillSvg />
                }
            </button>
}

