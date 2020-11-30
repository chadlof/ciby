import React from 'react'
import styled from 'styled-components'
import { Header } from './atoms/Header'
import Image from 'next/image'


const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  background-color: #EDEBE9;
  height:1000px;
`

const Index = () => {
  return (
    <Wrapper>
      <Header/>
      <Image
        src="/static/Costumes-Garage-Clydes-House-location.png"
        alt="Cartoon picture of a garage"
        width={1000}
        height={500}
      />
    </Wrapper>
  )
}


export default Index