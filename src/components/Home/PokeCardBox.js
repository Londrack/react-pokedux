export function PokeCardBox({children, animation = false}) {
    return (
        <div className={`py-4 px-5 rounded-lg relative min-h-[100px]
            ${ animation ? 'bg-slate-300 animate-pulse' : 'bg-slate-100'}`}>
            {children}
        </div>
    )
}
