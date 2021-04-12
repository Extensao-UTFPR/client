import styled from 'styled-components'

import { border, effects } from '@/styles/constants'
import device from '@/styles/constants/breakPoints'

interface styleProps {
  asideOpen: boolean
}

export const CloseButton = styled.button`
  position: absolute;
  height: 6.4rem;
  width: 6.4rem;

  border: 0;
  border-bottom-left-radius: 16px;

  right: 0rem;
  top: 0rem;

  background: ${({ theme }) => theme.colors.orangePrimary};

  svg {
    color: ${({ theme }) => theme.colors.white};
    font-size: 2.4rem;
    font-weight: bold;
    transform: rotate(45deg);
  }
  &:hover {
    background: '#CB7903';
  }
`

export const BodyButton = styled.div<styleProps>`
  border: 0;
  background: transparent;
  position: relative;

  cursor: default;
  > span {
    background: red;
    border: 0;
    width: 100%;
    cursor: pointer;
  }
  ${props => props.asideOpen && ModalContent} {
    opacity: 1;
    visibility: visible;
  }
`
export const ModalContent = styled.div`
  opacity: 0;
  visibility: hidden;
  overflow-y: auto;
  position: fixed;
  background-color: ${({ theme }) => theme.colors.white};
  width: 100%;
  height: 100vh;

  /* bottom: 0; */
  top: 0;
  right: 0;
  z-index: 100;
  box-shadow: ${effects.dropShadow};
  display: flex;
  flex-direction: column;

  hr {
    border: 0;
  }

  @media ${device.tablet} {
    width: 50vw;
    overflow-x: hidden;
  }
`

export const ContentUp = styled.aside`
  display: flex;
  flex-direction: column;
  width: 100vw;

  border-bottom: 1px solid ${({ theme }) => theme.colors.division};

  img {
    width: 100%;

    height: 21.2rem;
    object-fit: cover;
  }

  > aside {
    padding: 1.6rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  @media ${device.tablet} {
    flex-direction: row;
    width: 100%;

    padding: 3.2rem;

    img {
      width: 40%;
      border-radius: 1.6rem;
    }

    > aside {
      margin-left: 1.6rem;
      padding: 0 1.6rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
  }
`

export const Data = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: 100%;

  aside {
    h3 {
      color: ${({ theme }) => theme.colors.orangePrimary};
      font-size: 1.6rem;
      font-weight: 400;
    }
    h1 {
      color: ${({ theme }) => theme.colors.black};
      font-size: 3.2rem;
      font-weight: 400;
    }
  }
  h2 {
    color: ${({ theme }) => theme.colors.gray};
    font-size: 2.4rem;
    margin-bottom: 0.8rem;
    font-weight: 400;
  }
`

export const InfoContent = styled.section`
  display: flex;
  flex-direction: column;

  padding: 0 1.6rem;

  overflow: auto;

  @media ${device.tablet} {
    padding: 1.6rem 3.2rem 0 3.2rem;
  }
`

export const Info = styled.div`
  h2 {
    font-size: 2.4rem;
    font-weight: 400;
    margin-top: 1.6rem;
    margin-bottom: 0.8rem;
    color: ${({ theme }) => theme.colors.orangePrimary};
  }

  p {
    font-size: 1.6rem;
    font-weight: 100;
    color: ${({ theme }) => theme.colors.black};
  }
`

export const ButtonsContainer = styled.div`
  padding: 1.6rem;

  display: flex;
  flex-direction: column;
  width: 100%;

  position: fixed;
  bottom: 0;
  right: 0;

  border-top: 1px solid ${({ theme }) => theme.colors.division};
  background-color: ${({ theme }) => theme.colors.white};

  button {
    & + button {
      margin-top: 1.6rem;
    }
  }

  @media ${device.tablet} {
    padding: 3.2rem;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    width: 50vw;

    button {
      & + button {
        margin-top: 0;
        margin-left: 2.4rem;
      }
    }
  }
`
