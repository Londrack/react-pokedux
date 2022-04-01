export function ImgBox({children, type = 'default'}) {
    return (
        <div className={`rounded-2xl p-2 bg-slate-200 border-2 relative
        ${type === 'default' ? ' border-slate-200'
        : type === 'femaleundefined' ? ' border-pink-300'
        : type === 'defaultundefined' ? ' border-blue-300'
        : type === 'shinyundefined' ? ' border-yellow-300'
                                    : ' border-orange-300'}`}>
            {children}
        </div>
    )
}
