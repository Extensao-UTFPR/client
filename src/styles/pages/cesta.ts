import styled from 'styled-components'
import { border, breakPoints, transitions } from '../constants'
import { Form } from '@unform/web'
import device from '../constants/breakPoints'

export const Container = styled.div`
  padding: 3.6rem 1.6rem;

  overflow-x: hidden;

  @media ${breakPoints.tablet} {
    padding: 5.6rem 12rem;
  }
`

export const TopTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  margin-bottom: 2.4rem;
  margin-left: 1.6rem;

  width: 100%;

  @media ${device.tablet} {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    margin-left: 0;
  }
`

export const SummaryOrder = styled(Form)`
  width: 100%;
  max-width: 120rem;
  margin: 5.6rem auto;

  display: flex;
  flex-direction: column;
`

export const SummaryTitle = styled.div`
  width: 100%;
  text-align: center;
  height: 3.2rem;
  background: ${({ theme }) => theme.colors.orangePrimary};

  h2 {
    color: ${({ theme }) => theme.colors.white};
    font-size: 1.6rem;
  }
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ClearBasket = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  cursor: pointer;

  button {
    padding: 0.8rem;
    background: transparent;
    border: none;

    transition: ${transitions.hover} background;
    &:hover {
      background-color: ${({ theme }) => theme.colors.division};
    }

    h2 {
      color: ${({ theme }) => theme.colors.orangePrimary};
      font-size: 1.6rem;
      font-family: Roboto Slab;
      font-style: normal;
      font-weight: 300;
      font-size: 1.6rem;
      line-height: 21px;
    }
  }
`

export const SummaryContent = styled.div`
  display: flex;
  flex-direction: column;

  @media ${device.tablet} {
    flex-direction: row;
    justify-content: space-between;
  }
`

export const SummaryDelivery = styled.div`
  margin-top: 3.2rem;
  display: flex;
  flex-direction: column;

  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    strong {
      color: ${({ theme }) => theme.colors.black};
      font-size: 2.4rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-right: 1.6rem;
      margin-bottom: 3.2rem;
      width: 100%;

      span {
        font-size: 2.4rem;
        font-weight: 100;
        color: ${({ theme }) => theme.colors.black};

        display: flex;
        flex-direction: column;
      }
    }
  }

  aside {
    display: flex;
    flex-direction: column;
    gap: 1.6rem;

    margin-top: 3.2rem;
  }

  @media ${device.tablet} {
    width: 50%;
    padding: 0 1.6rem;
    border-left: 0.1rem solid ${({ theme }) => theme.colors.division};
  }

  @media ${device.laptopL} {
    section {
      flex-direction: row;
    }

    aside {
      flex-direction: row;
    }
  }
`
export const SummaryButtons = styled.div`
  margin-top: 3.2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  button + button {
    margin-top: 1.6rem;
  }

  @media ${device.tablet} {
    width: 50%;
    padding: 0 1.6rem;
    border-left: 0.1rem solid ${({ theme }) => theme.colors.division};
    border-right: 0.1rem solid ${({ theme }) => theme.colors.division};
  }
`

export const SummaryInfo = styled.div`
  margin-top: 3.2rem;
  display: flex;
  flex-direction: column;
  /* align-items: center; */

  section {
    display: flex;
    justify-content: space-between;

    strong {
      color: ${({ theme }) => theme.colors.black};
      font-size: 2.4rem;
      display: flex;
      align-items: center;
    }

    span {
      color: ${({ theme }) => theme.colors.black};
      font-size: 2.4rem;
      display: flex;
      align-items: center;
    }

    & + section {
      margin-top: 3.2rem;
    }
  }
  @media ${device.tablet} {
    width: 28%;
  }
`
