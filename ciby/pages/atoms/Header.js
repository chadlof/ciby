import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  margin-bottom:100px;
`

const LargeLetters = styled.div `
    font-size: 48px;
    color: #535DCA;
`

const SmallLetters = styled.div `
    display:flex;
    align-items:flex-end;
    font-size: 38px;
    color: #FBBE4B;
    margin-bottom: 2px;
    margin-right: 10px;
`

const Spacer = styled.div `
    margin-right: 10px;
`

export const Header = () => {
  return (
    <Wrapper>
        <LargeLetters>C</LargeLetters><SmallLetters>an</SmallLetters>
        <LargeLetters>I</LargeLetters><Spacer/>
        <LargeLetters>B</LargeLetters><SmallLetters>arrow</SmallLetters>
        <LargeLetters>Y</LargeLetters><SmallLetters>our...</SmallLetters>
    </Wrapper>
  )
}


