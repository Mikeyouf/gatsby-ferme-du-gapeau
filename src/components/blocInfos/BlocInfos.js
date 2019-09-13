import React from 'react'
import styled, {keyframes} from 'styled-components'

const Wrapper = styled.section`
    width: 100%;
    height: 200px;
    position: absolute;
    bottom: 0;
    right: 0;
    background: ${props => props.theme.colors.primary}
    display: flex;
    align-items: left;
`

const Bloc = styled.div`
    width: 250px;
    min-width: 250px;
    max-width: 250px;
    height: inherit;
    border: 1px solid black;
`

const BlocInfo = styled(Bloc)`
    width: 100%;
    max-width: 100%;
`

const BlocInfos = () => (
    <Wrapper>
        <Bloc>bloc 1</Bloc>
        <Bloc>bloc 2</Bloc>
        <Bloc>bloc 3</Bloc>
        <BlocInfo>bloc 4</BlocInfo>
    </Wrapper>
)

export default BlocInfos