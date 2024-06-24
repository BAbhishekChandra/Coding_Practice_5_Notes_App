// Style your elements here

import styled from 'styled-components'

export const NoteListItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  border: 1px solid #cbd5e1;
  border-radius: 10px;
  margin: 15px 10px;
  padding: 10px 20px 10px 20px;
  @media screen and (min-width: 576px) and (max-width: 768px) {
    width: 200px;
    min-height: 180px;
    padding: 15px 20px;
    margin: 20px 10px;
  }
  @media screen and (min-width: 767px) {
    width: 30%;
    min-height: 170px;
    height: 100%;
    margin: 20px 10px;
    padding: 15px 15px 10px 20px;
  }
`

export const NoteItemTitle = styled.h1`
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 500;
  color: #334155;
  margin: 10px 0 0 0;
  @media screen and (min-width: 576px) {
    font-size: 24px;
  }
`

export const NoteItemDescription = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 900;
  color: #d8d8d8;
  @media screen and (min-width: 576px) {
    font-size: 16px;
  }
`
