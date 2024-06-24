import styled from 'styled-components'

export const EmptyNotesViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 50px;
`

export const EmptyNotesViewImage = styled.img`
  width: 150px;
`

export const EmptyNotesViewHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 28px;
  font-weight: 600;
  color: #475569;
  margin: 40px 0 10px 0;
  @media screen and (min-width: 576px) {
    font-size: 36px;
  }
`

export const EmptyNotesViewParagraph = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 900;
  color: #aab8c8;
  @media screen and (min-width: 576px) {
    font-size: 24px;
  }
`
