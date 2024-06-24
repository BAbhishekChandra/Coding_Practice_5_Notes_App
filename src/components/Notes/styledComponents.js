// Style your elements here
import styled from 'styled-components'

export const NotesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  min-width: 100vh;
  padding: 40px 100px 40px 100px;
`

export const NotesHeading = styled.h1`
  font-family: 'Bree Serif';
  font-size: 38px;
  font-weight: 500;
  color: #4c63b6;
  margin-bottom: 50px;
  @media screen and (min-width: 576px) {
    font-size: 42px;
  }
`

export const InputFormContainer = styled.form`
  width: 100%;
  height: 300px;
  box-shadow: 1px 2px 3px 2px #aab8c8;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
`

export const NameInputElement = styled.input`
  width: 100%;
  border: none;
  padding: 10px;
  margin-bottom: 15px;
`

export const NoteTextAreaElement = styled.textarea`
  width: 100%;
  border: none;
  padding: 10px;
`

export const AddButton = styled.button`
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 400;
  color: #ffffff;
  background-color: #4c63b6;
  padding: 15px 35px 15px 35px;
  border: none;
  border-radius: 5px;
  align-self: flex-end;
  margin: 10px 30px 10px 20px;
`

export const NoteItemContainer = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 40px 0 50px 0;
  flex-wrap: wrap;
  @media screen and (min-width: 576px) {
    justify-content: space-between;
    align-items: flex-start;
  }
`
