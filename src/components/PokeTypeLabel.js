import styled, { ThemeProvider } from 'styled-components'

export function PokeTypeLabel({type, e}) {

    const typeColors = {
        fighting: {top:'#EE7F2A', center:'#C13028', bottom:'#46413B'},
        ghost: {top:'#9F8DC2', center:'#6F5A9A', bottom:'#493654'},
        normal: {top:'#D9D9BA', center:'#A8A778', bottom:'#6F5C4E'},
        bug: {top:'#D6DB40', center:'#A9B920', bottom:'#788D29'},
        electric: {top:'#F0EA76', center:'#FBCF36', bottom:'#B9A33E'},
        rock: {top:'#E6C570', center:'#B89F39', bottom:'#89692C'},
        flying: {top:'#C6BCDE', center:'#9E8EC3', bottom:'#7058A2'},
        steel: {top:'#DDDCC7', center:'#B7B8D0', bottom:'#82786F'},
        psychic: {top:'#F5C1B3', center:'#EB5686', bottom:'#966065'},
        fairy: {top:'#DFB5D5', center:'#CA91C0', bottom:'#5A365A'},
        poison: {top:'#D77FB2', center:'#974493', bottom:'#4C3D54'},
        grass: {top:'#BBD25B', center:'#7BBB54', bottom:'#5C7F45'},
        fire: {top:'#F9CD2C', center:'#F07F30', bottom:'#B92E1C'},
        ice: {top:'#D0E8DF', center:'#9AD3D4', bottom:'#9193A5'},
        ground: {top:'#F6ED7D', center:'#E2BF67', bottom:'#816B2C'},
        water: {top:'#A0D5D5', center:'#6A8AC6', bottom:'#7E7B6F'},
        dragon: {top:'#AE9CCB', center:'#534B9A', bottom:'#483D91'},
        dark: {top:'#AAA67C', center:'#6F5949', bottom:'#4A4037'},
        unknown: {top:'#AAA67C', center:'#6F5949', bottom:'#4A4037'},
        shadow: {top:'#AAA67C', center:'#6F5949', bottom:'#4A4037'},
    }

    return (
        <ThemeProvider theme={typeColors[type]} >
            <TypeLabel className="uppercase text-xl label-shadow
            text-white px-2 py-0 rounded-lg cursor-default">
                {type}
            </TypeLabel>
        </ThemeProvider>
    )
}

const TypeLabel = styled.span`
    text-shadow: 2px 2px 0px #80776E;
    background: ${props => props.theme.center};
    border-top: 2px solid ${props => props.theme.top};
    border-bottom: 2px solid ${props => props.theme.bottom};
`
