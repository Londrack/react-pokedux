import { PokeCardBox } from "../Home/PokeCardBox";

export function LoaderList() {
    const loaderFill = Array(4).fill('')
    return (
        <>
            {loaderFill.map((i, e) => <PokeCardBox  key={e} animation={true} />)}
        </>
        // <div className='w-full h-48 mx-auto flex justify-center items-center'>
        //     <img src={loader} alt="loader" className='animate-spin' width='100' />
        // </div>
    )
}
